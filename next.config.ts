import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Several root layouts (app/(en) plus the generated app/fr, app/de, app/es), so unmatched URLs
  // get app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      { source: "/legal", destination: "/legal/terms", permanent: true },
    ];
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-**", search: "" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/videos/**" },
    ],
    qualities: [60, 75, 85],
    formats: ["image/avif", "image/webp"],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
