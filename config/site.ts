/** Site-wide settings: URLs, navigation and contact. */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://solnascente.tourground.com",
  defaultLocale: "en",
  locales: ["en"] as const, // add "pt" when Portuguese copy is ready
  contact: {
    email: "solnascente@tourground.com",
    /** Business address: Cubo Itaú, São Paulo (source: cubo.itau). */
    address: ["Cubo Itaú", "Alameda Vicente Pinzon, 54, Vila Olímpia", "São Paulo – SP, 04547-130", "Brazil"],
    postalAddress: {
      streetAddress: "Cubo Itaú, Alameda Vicente Pinzon, 54, Vila Olímpia",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "04547-130",
      addressCountry: "BR",
    },
  },
} as const;

/** Anchor menu for the one-page homepage. Order matches the page. */
export const homeAnchors = [
  { id: "sol-nascente", label: "Sol Nascente" },
  { id: "values", label: "Values" },
  { id: "biomes", label: "Biomes" },
  { id: "stay", label: "Stay" },
  { id: "carnival", label: "Carnival" },
  { id: "a-day", label: "A Day" },
  { id: "like-a-local", label: "Like a Local" },
  { id: "faq", label: "FAQ" },
] as const;

/** Site pages, used in the menu panel, footer and on inner pages. */
export const pageLinks = [
  { href: "/journeys", label: "Journeys" },
  { href: "/destinations", label: "Destinations" },
  { href: "/biomes", label: "Six Biomes" },
  { href: "/carnival", label: "Carnival chooser" },
  { href: "/wild-seasons", label: "Wild Seasons" },
  { href: "/sunrise-coast", label: "Sunrise Coast" },
  { href: "/experiences", label: "Experiences" },
  { href: "/stays", label: "Stays" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/responsible-travel", label: "Responsible travel" },
] as const;

export const legalLinks = [
  { href: "/legal/terms", label: "Booking terms" },
  { href: "/legal/privacy", label: "Privacy policy" },
  { href: "/legal/cookies", label: "Cookie policy" },
] as const;
