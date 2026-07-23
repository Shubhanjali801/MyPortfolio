import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Produce a self-contained server bundle in .next/standalone for Docker.
  output: "standalone",
  // Pin the workspace root so file tracing + turbopack don't pick up a stray
  // lockfile elsewhere on the machine (e.g. C:\Users\shubhi\package-lock.json).
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
