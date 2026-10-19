/**
 * Brand settings for Sol Nascente. Colour tokens mirror the CSS variables in
 * app/globals.css — change both together.
 */
export const brand = {
  name: "Sol Nascente",
  promise: "Brazil, from first light.",
  tagline: "Private journeys across Brazil",
  description:
    "Sol Nascente plans private journeys across Brazil: the Amazon and the Pantanal, the beaches of Bahia and the dunes of Maranhão, Rio, Iguaçu, and the music and food that tie it all together.",
  colors: {
    offWhite: "#FFF8EF",
    sand: "#F3E0C3",
    coral: "#FF6A4D",
    coralDeep: "#A63516",
    gold: "#F7B32B",
    atlantic: "#0A4F8C",
    forest: "#0E3B2C",
    ink: "#13241C",
  },
  fonts: {
    display: "Unbounded",
    body: "Figtree",
  },
} as const;
