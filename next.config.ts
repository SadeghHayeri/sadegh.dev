import type { NextConfig } from "next";

/** The site is exported as plain static files: `npm run build` writes `out/`. */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
