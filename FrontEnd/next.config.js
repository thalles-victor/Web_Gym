/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api_gateway",
        port: "3000",
        pathname: "/public/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
