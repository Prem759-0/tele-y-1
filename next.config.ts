import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'img.clerk.com'
      }
    ]
  },
  // Configure for Replit proxy environment
  experimental: {
    allowedOrigins: true,
  },
  // Configure for production deployment compatibility
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
