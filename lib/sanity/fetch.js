import { connection } from "next/server";
import { apiVersion, dataset, projectId } from "./env";

/**
 * Read Sanity over HTTP with Next cache fully disabled.
 * client.fetch() can still be cached by Vercel; native fetch + no-store is not.
 */
export async function sanityQuery(query, fallback = null) {
  await connection();

  const url = new URL(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`
  );
  url.searchParams.set("query", query);
  url.searchParams.set("returnQuery", "false");

  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.warn("[sanity] HTTP", res.status, await res.text());
      return fallback;
    }

    const json = await res.json();
    return json.result;
  } catch (err) {
    console.warn("[sanity] fetch failed, using local data:", err.message);
    return fallback;
  }
}
