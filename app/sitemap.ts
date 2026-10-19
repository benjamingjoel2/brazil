import type { MetadataRoute } from "next";
import { site, pageLinks } from "@/config/site";
import { journeys } from "@/data/journeys";
import { destinations } from "@/data/destinations";
import { posts } from "@/content/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    ...pageLinks.map((p) => p.href),
    "/plan",
    "/legal",
    ...journeys.map((j) => `/journeys/${j.slug}`),
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...posts.map((p) => `/journal/${p.slug}`),
  ];
  return paths.map((p) => ({
    url: `${site.url}${p === "/" ? "" : p}`,
    lastModified: now,
    changeFrequency: p.startsWith("/journal/") ? "yearly" : "monthly",
    priority: p === "/" ? 1 : p.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
