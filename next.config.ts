import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep domains only if you still need them
    domains: ["images.pexels.com"],

    remotePatterns: [
      // ✅ Your Render backend
      {
        protocol: "https",
        hostname: "sankalp-setu-nd9s.onrender.com",
        pathname: "/**",
      },

      // ✅ Cloudinary (REQUIRED for your error)
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
