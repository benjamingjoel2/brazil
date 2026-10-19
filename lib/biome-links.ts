import { biomes } from "@/data/biomes";
import { destinations } from "@/data/destinations";
import { journeys } from "@/data/journeys";
import type { BiomeSlug } from "./types";
import { destinationLinks, journeyLinks } from "./links";

/** Destinations and journeys for each biome, merged from both sides of the data. */
export function biomeLinks() {
  return Object.fromEntries(
    biomes.map((b) => {
      const where = [...new Set([...b.whereWeGo, ...destinations.filter((d) => d.biome === b.slug).map((d) => d.slug)])];
      const js = [...new Set([...b.journeys, ...journeys.filter((j) => j.biomes.includes(b.slug)).map((j) => j.slug)])];
      return [b.slug, { where: destinationLinks(where), journeys: journeyLinks(js) }];
    }),
  ) as Record<BiomeSlug, { where: { href: string; label: string }[]; journeys: { href: string; label: string }[] }>;
}
