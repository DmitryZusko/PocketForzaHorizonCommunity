/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "steamcdn-a.akamaihd.net",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    SERVER_API_URL: process.env.SERVER_API_URL,
    STEAM_IMAGES_PATH: process.env.STEAM_IMAGES_PATH,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};

module.exports = nextConfig;
