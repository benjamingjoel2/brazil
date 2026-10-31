import type { JournalMeta } from "@/lib/types";
import { img } from "@/lib/media";

export type Post = JournalMeta & { slug: string; load: () => Promise<{ default: React.ComponentType }> };

export const posts: Post[] = [
  {
    slug: "brazil-beyond-rio",
    title: "Brazil beyond Rio",
    description: "Rio is a wonderful place to start, and a terrible place to stop. How to plan a first trip that shows you the rest of Brazil.",
    date: "2026-09-02",
    author: "Sol Nascente",
    image: img("salvador", "Colourful colonial buildings in Salvador's Pelourinho"),
    load: () => import("./brazil-beyond-rio.mdx"),
  },
  {
    slug: "which-carnival-is-right-for-you",
    title: "Which Carnival is right for you?",
    description: "Rio's is a show, Salvador's is a street party and Olinda's is a whole town in costume. An honest guide to choosing.",
    date: "2026-09-16",
    author: "Sol Nascente",
    image: img("carnival-olinda", "Giant puppets in Olinda's Carnival"),
    load: () => import("./which-carnival.mdx"),
  },
  {
    slug: "amazon-in-high-water-or-low",
    title: "Amazon in high water or low?",
    description: "The Amazon rises and falls by around ten metres a year. Here's what that means for your trip.",
    date: "2026-09-30",
    author: "Sol Nascente",
    image: img("amazon-flooded-forest", "Canoe in the flooded forest of the Amazon"),
    load: () => import("./amazon-high-or-low-water.mdx"),
  },
  {
    slug: "where-the-sun-rises-first",
    title: "Where the sun rises first",
    description: "A reef, a lighthouse and the first sunrise of the Americas: Ponta do Seixas, and the story behind our name.",
    date: "2026-10-12",
    author: "Sol Nascente",
    image: img("ponta-do-seixas", "First light at Ponta do Seixas"),
    load: () => import("./where-the-sun-rises-first.mdx"),
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
