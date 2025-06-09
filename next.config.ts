import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/leap_ai',
  assetPrefix: '/leap_ai',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
