import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

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

export async function POST(request) {
  const secret =
    request.nextUrl.searchParams.get("secret") ||
    request.headers.get("x-revalidate-secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body = {};
  try {
    body = await request.json();
  } catch (_) {
    body = {};
  }

  const type = body._type || body.type || "";
  const slug = body.slug?.current || body.slug || "";
  const paths = new Set(PATHS);

  if (type === "service" && slug) paths.add(withSlash(`/services/${slug}`));
  if (type === "post" && slug) paths.add(withSlash(`/blog/${slug}`));

  revalidatePath("/", "layout");
  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    paths: [...paths],
  });
}

export async function GET(request) {
  return POST(request);
}
