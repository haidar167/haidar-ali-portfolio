import type { NextConfig } from "next";

// GitHub Pages static export: run with BUILD_EXPORT=1 and
// NEXT_PUBLIC_BASE_PATH=/haidar-ali-portfolio (see build:pages script).
const isPagesExport = process.env.BUILD_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isPagesExport ? "export" : "standalone",
  ...(isPagesExport
    ? {
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
        images: { unoptimized: true },
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
