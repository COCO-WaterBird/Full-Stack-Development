import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optional: use React strict mode
  reactStrictMode: true,
  // Allow images from external domains if needed
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
