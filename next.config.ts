import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Compress output
  compress: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // Optimize package imports — tree-shake heavy libs
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
