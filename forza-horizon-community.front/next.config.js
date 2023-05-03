/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "steamcdn-a.akamaihd.net",
      },
    ],
  },
};

module.exports = nextConfig;
