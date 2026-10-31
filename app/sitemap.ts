import type { MetadataRoute } from "next";
import { site, pageLinks } from "@/config/site";
import { journeys } from "@/data/journeys";
import { destinations } from "@/data/destinations";
import { posts } from "@/content/journal";
import { languageAlternates } from "@/lib/seo";
import { locales, pathIn } from "@/lib/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    ...pageLinks.map((p) => p.href),
    "/plan",
    "/legal/terms",
    "/legal/privacy",
    "/legal/cookies",
    ...journeys.map((j) => `/journeys/${j.slug}`),
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...posts.map((p) => `/journal/${p.slug}`),
  ];
  const abs = (p: string) => `${site.url}${p === "/" ? "" : p}`;
  // Every page in every language (English unprefixed), each listing its hreflang alternates.
  return paths.flatMap((p) => {
    const languages = Object.fromEntries(Object.entries(languageAlternates(p)).map(([l, u]) => [l, abs(u)]));
    return locales.map((l) => ({
      url: abs(pathIn(l, p)),
      lastModified: now,
      changeFrequency: p.startsWith("/journal/") ? ("yearly" as const) : ("monthly" as const),
      priority: p === "/" ? 1 : p.split("/").length > 2 ? 0.6 : 0.8,
      alternates: { languages },
    }));
  });
}
