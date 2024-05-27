/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tazminmashin.ir",
      },
      {
        protocol: "https",
        hostname: "cdn.hamrah-mechanic.com",
      },

      {
        protocol: "https",
        hostname: "cc.tazminyadak.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: ":3000",
      },
    ],
  },
};

module.exports = nextConfig;
