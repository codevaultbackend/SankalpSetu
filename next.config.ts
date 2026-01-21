import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sankalp-setu-nd9s.onrender.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
