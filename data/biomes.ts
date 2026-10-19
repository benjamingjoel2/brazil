import type { Biome } from "@/lib/types";
import { img } from "@/lib/media";

/** Brazil's six biomes (IBGE classification). Best months are typical; verify per trip. */
export const biomes: Biome[] = [
  {
    slug: "amazon",
    name: "Amazon",
    short: "The rainforest that makes its own weather",
    area: "About 49% of Brazil",
    summary:
      "The largest tropical rainforest on Earth, laced with rivers that rise and fall by ten metres a year. In the wet season, you canoe through the treetops. In the dry season, you walk beneath them.",
    landscape:
      "Black-water and white-water rivers, flooded várzea and igapó forest, river beaches that appear only when the water drops, and a canopy so thick that noon looks like dusk.",
    wildlife: ["Pink river dolphins", "Giant otters", "Howler monkeys", "Toucans and macaws", "Sloths", "Caimans"],
    bestMonths: [{ from: 1, to: 12 }],
    bestMonthsNote: "Year-round. High water roughly Mar–Jul for canoeing the flooded forest; low water roughly Sep–Dec for trails and river beaches.",
    verify: true,
    whereWeGo: ["amazon"],
    journeys: ["amazon-by-water", "coast-to-rainforest"],
    image: img("biome-amazon", "Rainforest river winding through the Amazon"),
    color: "#1f6b45",
  },
  {
    slug: "cerrado",
    name: "Cerrado",
    short: "The savanna that waters a continent",
    area: "About 24% of Brazil",
    summary:
      "The world's most biodiverse savanna: twisted trees, red earth, table mountains and springs so clear they look like glass. Several of South America's great rivers begin here.",
    landscape:
      "Grassland and gnarled woodland, sandstone plateaus, canyons, waterfalls and the crystal rivers of Bonito, where you float above fish as if they were in an aquarium.",
    wildlife: ["Maned wolves", "Giant anteaters", "Rheas", "Red-and-green macaws", "Armadillos"],
    bestMonths: [{ from: 4, to: 10 }],
    bestMonthsNote: "Dry season, roughly Apr–Oct, brings the clearest water in Bonito and easier trails in the Chapadas.",
    verify: true,
    whereWeGo: ["bonito", "chapada-diamantina", "minas-gerais", "lencois-maranhenses"],
    journeys: ["brazil-with-kids", "dunes-lagoons-north"],
    image: img("biome-cerrado", "Cerrado savanna with table mountains at sunset"),
    color: "#c9862b",
  },
  {
    slug: "atlantic-forest",
    name: "Atlantic Forest",
    short: "The coast's green mountains",
    area: "About 13% of Brazil",
    summary:
      "The forest that drapes Brazil's coastal mountains, from the Northeast to the South. Most Brazilians live within it, and it still hides waterfalls, monkeys and beaches you reach by boat.",
    landscape:
      "Steep green mountains falling into the sea, bays dotted with islands, colonial towns, and the thundering curtain of Iguaçu Falls on the border with Argentina.",
    wildlife: ["Golden lion tamarins", "Toucans", "Coatis", "Hummingbirds", "Sea turtles on nearby coasts"],
    bestMonths: [{ from: 3, to: 6 }, { from: 9, to: 11 }],
    bestMonthsNote: "Lovely year-round. Shoulder months avoid the summer rains and crowds of Dec–Feb.",
    verify: true,
    whereWeGo: ["rio-de-janeiro", "paraty-ilha-grande", "iguacu", "salvador-bahia-coast", "florianopolis-south"],
    journeys: ["first-brazil", "bahia-slowly", "coast-to-rainforest"],
    image: img("biome-atlantic-forest", "Green mountains of the Atlantic Forest above the sea"),
    color: "#2f8f5b",
  },
  {
    slug: "caatinga",
    name: "Caatinga",
    short: "The dry forest that blooms overnight",
    area: "About 10% of Brazil",
    summary:
      "Found only in Brazil, the Caatinga is a white-barked dry forest across the Northeast's interior. It looks asleep for months, then turns green within days of the first rain.",
    landscape:
      "Thorny scrub and cacti, rock formations, sertão villages and the windswept coast where dunes meet the sea at Jericoacoara.",
    wildlife: ["Lear's macaws (in the far interior)", "Rock cavies", "Seriemas", "Tegus", "Hummingbirds"],
    bestMonths: [{ from: 7, to: 1 }],
    bestMonthsNote: "Jericoacoara's windy season runs roughly Jul–Jan; the interior greens up after rains around Feb–May.",
    verify: true,
    whereWeGo: ["jericoacoara"],
    journeys: ["dunes-lagoons-north"],
    image: img("biome-caatinga", "Dry Caatinga scrub under a wide blue sky"),
    color: "#b5654a",
  },
  {
    slug: "pantanal",
    name: "Pantanal",
    short: "The wetland where wildlife shows up",
    area: "About 2% of Brazil",
    summary:
      "The largest tropical wetland on Earth and the best place on the planet to see a wild jaguar. The plains flood each wet season and drain each dry season, and the animals follow the water.",
    landscape:
      "Open floodplains, gallery forest, palm islands and slow rivers, crossed by the dirt-and-bridges Transpantaneira road and dotted with cattle fazendas.",
    wildlife: ["Jaguars", "Giant otters", "Hyacinth macaws", "Capybaras", "Jabiru storks", "Caimans"],
    bestMonths: [{ from: 7, to: 10 }],
    bestMonthsNote: "Dry season, roughly Jul–Oct, is classic jaguar time. The wet season, roughly Dec–Mar, floods the plains with birds and green.",
    verify: true,
    whereWeGo: ["pantanal", "bonito"],
    journeys: ["jaguars-pantanal", "brazil-with-kids"],
    image: img("biome-pantanal", "Flooded plains of the Pantanal with palm trees"),
    color: "#4f8a3a",
  },
  {
    slug: "pampa",
    name: "Pampa",
    short: "Big skies and gaúcho country",
    area: "About 2% of Brazil",
    summary:
      "Rolling grasslands in Brazil's far south, shared with Uruguay and Argentina. Cowboy culture, chimarrão tea passed from hand to hand, and a horizon that goes on for days.",
    landscape:
      "Open grassland, low hills, wetlands and estâncias (ranches), with vineyards in the nearby Serra Gaúcha.",
    wildlife: ["Rheas", "Pampas deer", "Southern screamers", "Burrowing owls"],
    bestMonths: [{ from: 10, to: 4 }],
    bestMonthsNote: "Spring to autumn, roughly Oct–Apr. Winters are cool and can be cold.",
    verify: true,
    whereWeGo: ["florianopolis-south"],
    journeys: ["coast-to-rainforest"],
    image: img("biome-pampa", "Rolling green grasslands of the Pampa under big skies"),
    color: "#8fa848",
  },
];

export const getBiome = (slug: string) => biomes.find((b) => b.slug === slug);
