import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    // Optional: Configure remote patterns if you're using remote images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Optionally specify base path if not deploying to root
  // basePath: '/your-base-path',

  // Optionally specify trailing slash behavior
  trailingSlash: true,
};

export default nextConfig;
