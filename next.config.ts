import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allow production builds to successfully complete even if
    // there are ESLint errors (e.g., no-unescaped-entities in content pages)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
