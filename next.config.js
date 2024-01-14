/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "edufly-nqds.onrender.com",
      },
    ],
  },
};

module.exports = nextConfig;
