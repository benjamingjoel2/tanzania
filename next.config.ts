import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // One root layout per language (app/(en), app/fr, app/de, app/es), so unmatched URLs need a global 404.
  experimental: { globalNotFound: true },
  partialPrefetching: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    // Placeholder photography is served from Unsplash. Swap for your own CDN/host later.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    // Set NEXT_PUBLIC_IMAGE_UNOPTIMIZED=1 where the server cannot reach the image host.
    unoptimized: process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "1",
  },
  async redirects() {
    return [{ source: "/testimonials", destination: "/about", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
