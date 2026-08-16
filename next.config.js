/** @type {import('next').NextConfig} */
const nextConfig = {
  // Node hosting (Hostinger Deploy Web App) — later swap data/* for Sanity
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
