import type { WaterRegion } from "@/lib/types";
import { img } from "@/lib/media";

/**
 * Typical water seasons. These vary year to year (and with El Niño / La Niña).
 * VERIFY before each season with lodge partners.
 */
export const waterSeasons: WaterRegion[] = [
  {
    id: "amazon",
    name: "The Amazon",
    intro:
      "Around Manaus, the Rio Negro rises and falls by around ten metres a year. Same forest, two completely different trips.",
    statusLabel: { high: "High water", low: "Low water" },
    transitions: [
      { months: { from: 1, to: 2 }, label: "Rising water" },
      { months: { from: 8, to: 8 }, label: "Falling water" },
    ],
    verify: true,
    phases: [
      {
        id: "high",
        label: "High water",
        months: { from: 3, to: 7 },
        monthsLabel: "Roughly March to July, peaking around June",
        headline: "Canoe through the treetops",
        body: "The rivers spill into the forest and the igapó becomes a maze of flooded trees. You paddle silently between trunks at canopy height, where monkeys, sloths and birds are suddenly at eye level.",
        highlights: ["Canoeing the flooded forest", "Canopy-level wildlife", "Pink river dolphins in the igapó", "Cooler, quieter boat days"],
        image: img("amazon-flooded-forest", "Canoe gliding between flooded trees in the Amazon"),
        stays: ["casa-rio-negro", "flutuante-mamiraua"],
        journeys: ["amazon-by-water"],
      },
      {
        id: "low",
        label: "Low water",
        months: { from: 9, to: 12 },
        monthsLabel: "Roughly September to December, lowest around October–November",
        headline: "Walk beneath the trees, swim from the beach",
        body: "The water drops and the forest floor returns. Jungle trails open up, white-sand river beaches appear along the Rio Negro, and fishing is at its best.",
        highlights: ["Forest trails on foot", "River beaches and swimming", "Best fishing", "Easier birding along the banks"],
        image: img("amazon-river-beach", "White-sand river beach on the Rio Negro at low water"),
        stays: ["casa-rio-negro"],
        journeys: ["amazon-by-water", "coast-to-rainforest"],
      },
    ],
  },
  {
    id: "pantanal",
    name: "The Pantanal",
    intro:
      "The Pantanal floods every wet season and drains every dry season. The wildlife follows the water, and so do we.",
    statusLabel: { high: "Wet season", low: "Dry season" },
    transitions: [
      { months: { from: 4, to: 6 }, label: "Waters receding" },
      { months: { from: 11, to: 11 }, label: "First rains" },
    ],
    verify: true,
    phases: [
      {
        id: "high",
        label: "Wet season",
        months: { from: 12, to: 3 },
        monthsLabel: "Roughly December to March",
        headline: "Floods, birds and a world of green",
        body: "Summer rains flood the plains into a shining mirror. Wading birds arrive in their thousands, the landscape turns a hundred shades of green, and you explore by boat, on horseback and on foot where the ground allows.",
        highlights: ["Huge bird gatherings", "Lush, green landscapes", "Horse riding through shallow water", "Fewer visitors"],
        image: img("pantanal-wet", "Flooded green plains of the Pantanal with wading birds"),
        stays: ["fazenda-ipe-amarelo"],
        journeys: ["jaguars-pantanal"],
      },
      {
        id: "low",
        label: "Dry season",
        months: { from: 7, to: 10 },
        monthsLabel: "Roughly July to October",
        headline: "The classic time for jaguars",
        body: "As the water retreats, animals gather along the rivers. Jaguars patrol the banks of the Cuiabá and its side channels, giant otters fish in the shallows, and the Transpantaneira is at its easiest.",
        highlights: ["Peak jaguar sightings", "Giant otter families", "Wildlife concentrated on rivers", "Dry roads, easy access"],
        image: img("pantanal-dry", "Dry riverbank in the Pantanal at golden hour"),
        stays: ["fazenda-tuiuiu"],
        journeys: ["jaguars-pantanal", "brazil-with-kids"],
      },
    ],
  },
];

export const getWaterRegion = (id: WaterRegion["id"]) => waterSeasons.find((w) => w.id === id)!;
