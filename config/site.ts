/** Site-wide settings: URLs, navigation, contact and legal placeholders. */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://solnascente.example",
  defaultLocale: "en",
  locales: ["en"] as const, // add "pt" when Portuguese copy is ready
  contact: {
    // TODO: replace every placeholder below before launch.
    companyName: "Sol Nascente Viagens Ltda. (placeholder)",
    address: ["Rua do Sol Nascente, 000 (placeholder)", "João Pessoa – PB", "Brazil"],
    cadastur: "Cadastur nº 00.000000.00-0 (placeholder)",
    email: "hello@solnascente.example",
    phone: "+55 83 0000-0000",
    whatsapp: "+55 83 00000-0000",
    whatsappLink: "https://wa.me/5583000000000",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Spotify playlists", href: "#" },
  ],
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
  { id: "team", label: "Team" },
  { id: "words", label: "Words" },
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
  { href: "/legal#terms", label: "Booking terms" },
  { href: "/legal#privacy", label: "Privacy" },
  { href: "/legal#cookies", label: "Cookies" },
] as const;
