import { getDestination } from "@/data/destinations";
import { getJourney } from "@/data/journeys";
import { getStay } from "@/data/stays";
import { getExperience } from "@/data/experiences";

const nonNull = <T,>(x: T | undefined | null): x is T => x != null;

export const destinationLinks = (slugs: string[]) =>
  slugs.map(getDestination).filter(nonNull).map((d) => ({ href: `/destinations/${d.slug}`, label: d.name }));
export const journeyLinks = (slugs: string[]) =>
  slugs.map(getJourney).filter(nonNull).map((j) => ({ href: `/journeys/${j.slug}`, label: j.title }));
export const stayLinks = (slugs: string[]) =>
  slugs.map(getStay).filter(nonNull).map((s) => ({ href: `/stays#${s.slug}`, label: s.name }));
export const experienceLinks = (slugs: string[]) =>
  slugs.map(getExperience).filter(nonNull).map((e) => ({ href: `/experiences#${e.slug}`, label: e.name }));
