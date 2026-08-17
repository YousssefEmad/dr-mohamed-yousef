import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "private, no-store, no-cache, must-revalidate, max-age=0");
  res.headers.set("CDN-Cache-Control", "no-store");
  res.headers.set("Vercel-CDN-Cache-Control", "no-store");
  return res;
}

export const config = {
  matcher: ["/((?!assets|_next/static|_next/image|favicon.ico).*)"],
};
