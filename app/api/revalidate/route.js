import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PATHS = [
  "/",
  "/about/",
  "/services/",
  "/blog/",
  "/gallery/",
  "/videos/",
  "/testimonials/",
  "/contact/",
];

function withSlash(path) {
  if (!path) return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function pickSecret(request) {
  return (
    request.nextUrl.searchParams.get("secret") ||
    request.headers.get("x-revalidate-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "")
  );
}

function collectDocs(body) {
  if (!body || typeof body !== "object") return [];
  if (Array.isArray(body)) return body;
  if (body._type) return [body];
  if (body.ids && Array.isArray(body.ids)) return body.ids.map((id) => ({ _id: id }));
  return [body];
}

export async function POST(request) {
  const secret = pickSecret(request);

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const paths = new Set(PATHS);

  for (const doc of collectDocs(body)) {
    const type = doc._type || doc.type || body._type || "";
    const slug = doc.slug?.current || doc.slug || body.slug?.current || body.slug || "";

    if (type === "service" && slug) paths.add(withSlash(`/services/${slug}`));
    if (type === "post" && slug) paths.add(withSlash(`/blog/${slug}`));
  }

  revalidatePath("/", "layout");
  for (const path of paths) {
    revalidatePath(path, "page");
    revalidatePath(path, "layout");
  }

  return NextResponse.json(
    {
      revalidated: true,
      now: Date.now(),
      paths: [...paths],
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function GET(request) {
  return POST(request);
}
