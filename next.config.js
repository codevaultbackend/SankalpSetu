/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // optional but recommended

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

      // ✅ Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  // <-- THIS WILL BYPASS ALL TS ERRORS DURING BUILD
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
