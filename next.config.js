/** @type {import('next').NextConfig} */
const nextConfig = {
  // Node hosting (Hostinger Deploy Web App) — ISR updates content from Sanity
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
};

module.exports = nextConfig;
