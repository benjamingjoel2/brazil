import type { Stay, StayType } from "@/lib/types";
import { img } from "@/lib/media";

/** Display names for stay types (the keys are identifiers; only the values are copy). */
export const stayTypeLabel: Record<StayType, string> = {
  "River lodge": "River lodge",
  Fazenda: "Fazenda",
  "Beach pousada": "Beach pousada",
  "Boutique hotel": "Boutique hotel",
  "Colonial pousada": "Colonial pousada",
  "Eco-lodge": "Eco-lodge",
};

/** Example stays: the kind of place we choose in each region. The actual property is named in your proposal. */
export const stays: Stay[] = [
  {
    slug: "casa-rio-negro",
    name: "A river lodge in the Anavilhanas",
    type: "River lodge",
    setting: "Black-water channels of the Anavilhanas archipelago",
    rooms: "12 bungalows",
    guests: "Up to 28",
    bestFor: "Couples, birders, first Amazon trips",
    description:
      "Wooden bungalows on stilts, joined by walkways through the trees and facing a quiet channel of the Rio Negro. Guides from nearby Novo Airão lead dawn paddles and night canoe outings, and dinner is whatever the river and the garden offered that day.",
    destination: "amazon",
    images: [
      img("stay-river-lodge", "Stilted wooden bungalows above a black-water channel"),
      img("anavilhanas", "Forested islands of the Anavilhanas at dawn"),
    ],
    placeholder: true,
  },
  {
    slug: "flutuante-mamiraua",
    name: "A floating lodge in Mamirauá",
    type: "Eco-lodge",
    setting: "Floating in the flooded várzea forest of the Mamirauá reserve",
    rooms: "10 floating cabins",
    guests: "Up to 20",
    bestFor: "Wildlife lovers, curious travellers",
    description:
      "A cluster of floating cabins that rise and fall with the river, run in partnership with the communities who live in the reserve. Local guides lead you by canoe through the treetops at high water, and each stay helps fund the reserve's conservation and research work.",
    destination: "amazon",
    images: [
      img("mamiraua", "Floating cabins among flooded forest in Mamirauá"),
      img("stay-hammock-veranda", "Hammocks on a wooden veranda over the water"),
    ],
    placeholder: true,
  },
  {
    slug: "fazenda-tuiuiu",
    name: "A fazenda in the northern Pantanal",
    type: "Fazenda",
    setting: "Northern Pantanal, just off the Transpantaneira",
    rooms: "14 rooms",
    guests: "Up to 30",
    bestFor: "Wildlife photographers, birders",
    description:
      "A working cattle ranch named for the jabiru stork that nests in the tree by the gate. Mornings start with hyacinth macaws on the fence posts; evenings with a spotlight drive and a long table under the veranda fans.",
    destination: "pantanal",
    images: [
      img("stay-fazenda", "Veranda of a Pantanal fazenda at dusk"),
      img("hyacinth-macaw", "Hyacinth macaws perched near the fazenda"),
    ],
    placeholder: true,
  },
  {
    slug: "fazenda-ipe-amarelo",
    name: "A fazenda in the southern Pantanal",
    type: "Fazenda",
    setting: "Open grasslands and gallery forest of the southern Pantanal",
    rooms: "8 rooms",
    guests: "Up to 18",
    bestFor: "Families, riders, slow wildlife days",
    description:
      "A family-run fazenda where cattle are still moved on horseback and the yellow ipê trees blaze in the dry season. Ride out with the pantaneiro cowboys, canoe the river behind the house, and look for giant anteaters on the evening drive.",
    destination: "pantanal",
    images: [
      img("pantanal-dry", "Dry-season grasslands and palms in the southern Pantanal"),
      img("capybara", "Capybaras grazing beside a Pantanal pond"),
    ],
    placeholder: true,
  },
  {
    slug: "pousada-mare-mansa",
    name: "A clifftop pousada in Trancoso",
    type: "Beach pousada",
    setting: "On the cliffs above the beach, a short walk from Trancoso's Quadrado",
    rooms: "9 casas",
    guests: "Up to 22",
    bestFor: "Couples, honeymooners",
    description:
      "Nine little houses in a garden of frangipani and cashew trees, with a path down to the sand. Breakfast is long and tropical; in the evening it's a stroll up to the Quadrado for dinner under the trees.",
    destination: "salvador-bahia-coast",
    images: [
      img("stay-pousada-beach", "Garden pousada with a path to the beach"),
      img("trancoso", "Painted houses around the grassy Quadrado in Trancoso"),
    ],
    placeholder: true,
  },
  {
    slug: "pousada-coqueiral",
    name: "A beach pousada on Boipeba",
    type: "Beach pousada",
    setting: "Under coconut palms on a quiet beach on Boipeba",
    rooms: "7 bungalows",
    guests: "Up to 16",
    bestFor: "Couples, slow travellers",
    description:
      "Thatched bungalows set back from the sand, each with a hammock and a view through the palms. The owners will arrange a fisherman's boat to the natural pools at low tide and a lobster lunch at Moreré.",
    destination: "salvador-bahia-coast",
    images: [
      img("boipeba", "Coconut palms leaning over the beach on Boipeba"),
      img("stay-hammock-veranda", "Hammock on a bungalow veranda by the sea"),
    ],
    placeholder: true,
  },
  {
    slug: "casa-santa-teresa",
    name: "A hillside house in Santa Teresa",
    type: "Boutique hotel",
    setting: "A hillside mansion in Santa Teresa, above the bay",
    rooms: "11 rooms",
    guests: "Up to 24",
    bestFor: "Couples, art lovers, first-timers",
    description:
      "A restored early-twentieth-century house on the hill, with high ceilings, local art on the walls and a pool looking across to Sugarloaf. The neighbourhood's bars and studios are a stroll away down cobbled lanes.",
    destination: "rio-de-janeiro",
    images: [
      img("stay-boutique-rio", "Boutique hotel terrace with views over Rio's bay"),
      img("rio", "Sugarloaf Mountain at dusk seen from Santa Teresa"),
    ],
    placeholder: true,
  },
  {
    slug: "solar-das-pedras",
    name: "A townhouse pousada in Paraty",
    type: "Colonial pousada",
    setting: "A whitewashed townhouse in Paraty's historic centre",
    rooms: "10 rooms",
    guests: "Up to 20",
    bestFor: "Couples, food and history lovers",
    description:
      "Thick walls, a quiet courtyard garden and a small pool, all a few steps from the cobblestones and the harbour. The hosts know every schooner captain and cachaça maker in town.",
    destination: "paraty-ilha-grande",
    images: [
      img("stay-colonial-pousada", "Courtyard garden of a colonial pousada"),
      img("paraty", "Colonial streets of Paraty at dusk"),
    ],
    placeholder: true,
  },
  {
    slug: "casa-do-ouro",
    name: "A colonial house in Ouro Preto",
    type: "Colonial pousada",
    setting: "An eighteenth-century house in the hills of Ouro Preto",
    rooms: "8 rooms",
    guests: "Up to 16",
    bestFor: "History lovers, food lovers",
    description:
      "Wide floorboards, carved doors and a breakfast table that groans with pão de queijo, cheeses and homemade jams. From the garden you can count church towers across the valley.",
    destination: "minas-gerais",
    images: [
      img("stay-colonial-pousada", "Colonial pousada room with wide floorboards and carved doors"),
      img("ouro-preto", "Church towers across the hills of Ouro Preto"),
    ],
    placeholder: true,
  },
  {
    slug: "pousada-dos-ventos",
    name: "A beach pousada in Jericoacoara",
    type: "Beach pousada",
    setting: "On a sandy lane in Jericoacoara, near the sunset dune",
    rooms: "12 rooms",
    guests: "Up to 26",
    bestFor: "Kitesurfers, couples, friends",
    description:
      "Breezy rooms around a pool and a garden of cashew trees, a few minutes' barefoot walk from the beach. The team arranges kite lessons, 4x4 trips to the lagoons and a hammock for every afternoon.",
    destination: "jericoacoara",
    images: [
      img("stay-pousada-beach", "Breezy pousada with a pool in Jericoacoara"),
      img("jericoacoara", "Sunset over the dunes at Jericoacoara"),
    ],
    placeholder: true,
  },
];

export const getStay = (slug: string) => stays.find((s) => s.slug === slug);
