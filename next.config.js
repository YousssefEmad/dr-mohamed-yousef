/** @type {import('next').NextConfig} */
const nextConfig = {
  // Node hosting (Hostinger Deploy Web App) — live reads from Sanity
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/((?!assets|_next|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-store, no-cache, must-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
