import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/leap_ai', // Temporarily disabled for local development
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
