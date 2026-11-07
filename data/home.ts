import { img, video } from "@/lib/media";

/** Homepage copy that isn't a reusable collection elsewhere. */

export const hero = {
  titleTop: "Sol",
  titleBottom: "Nascente",
  tags: [
    ["Private journeys", "Wildlife"],
    ["Culture", "Brazil"],
  ],
  video: video("hero-sunrise"),
  intro:
    "The sun rises in Brazil before anywhere else in the Americas. We like to think it's in a hurry to get here.",
};

export const about = {
  heading: "From first light",
  subtitle:
    "Private journeys across Brazil: rivers and wetlands, dunes and reefs, colonial towns and city nights. We help you see the right parts, at the right time, with the right people.",
  body: "Sol nascente means rising sun. Every morning, the first sunrise in the Americas lands on Ponta do Seixas in Paraíba, the easternmost point of the continent's mainland. From there the light runs west across a country bigger than the contiguous United States: six biomes, a dozen musical traditions, and more ways to cook a fish than anyone has counted. We plan journeys through all of it, one traveller at a time.",
  image: img("ponta-do-seixas", "First light over the reef at Ponta do Seixas, Paraíba"),
};

export const values = [
  {
    name: "Alegria",
    meaning: "Joy, the Brazilian way",
    body: "Not the loud kind. The kind that finds a guitar at a bus stop, a party on a Tuesday, and something to celebrate in the rain. We plan for that feeling, then leave room for it to find you.",
  },
  {
    name: "Encontro",
    meaning: "Real meetings with real people",
    body: "A boatman who reads the river like a newspaper. A cook in Salvador who won't share the recipe but will share the table. Brazil is its people. We introduce you properly.",
  },
  {
    name: "Raiz",
    meaning: "Roots",
    body: "Local guides, local kitchens, local music, local money. We work with people who were born to the places we send you, and we make sure your journey leaves something good behind.",
  },
];
export const valuesImage = img("brazil-joy-people", "Friends dancing in a sunlit street in Brazil");

export const stayIntro = {
  heading: "Stay",
  subtitle:
    "River lodges on black water, fazendas on the floodplain, pousadas a flip-flop from the sea. We choose places that feel like where you are.",
  body: "Every stay we use is small, run by people who love it, and chosen for its setting before its thread count. Some have Wi-Fi. Some have hyacinth macaws on the roof instead.",
  images: [
    img("stay-hammock-veranda", "Hammocks strung across a shaded veranda"),
    img("stay-river-lodge", "A wooden river lodge on stilts above dark water"),
  ] as const,
};

export const included = {
  heading: ["Included in", "every journey"],
  items: [
    {
      title: "Private English-speaking guides",
      body: "Your own guide in every region, chosen for the place: a naturalist in the Pantanal, a historian in Ouro Preto, a musician in Salvador.",
      image: img("guide-walk", "A local guide leading a small group along a forest trail"),
    },
    {
      title: "Internal flights, arranged",
      body: "Brazil is enormous. We book the flights, time the connections and handle the transfers, so the distances stay on the map and off your mind.",
      image: img("small-plane", "A small aircraft over green wetlands"),
    },
    {
      title: "Wildlife experts",
      body: "Jaguar trackers, otter whisperers, birders who can name a call at a hundred metres. The difference between seeing an animal and understanding it.",
      image: img("binoculars-wildlife", "A traveller with binoculars scanning a riverbank"),
    },
    {
      title: "Food and music with locals",
      body: "A moqueca cooked in the kitchen it was invented in. A forró night where nobody minds that you can't dance yet. The best of Brazil happens at the table and on the floor.",
      image: img("cooking-together", "Hands preparing a Bahian dish together"),
    },
    {
      title: "Your specialist, a message away",
      body: "The person who planned your trip stays with you while you travel. A question at midnight? A change of plan at noon? Send a message.",
      image: img("phone-chat", "A phone in hand on a sunny terrace"),
    },
  ],
  footnote: "Choose from river lodges, fazendas, beach pousadas and colonial houses, each with a view worth waking early for.",
};

export const biomesSection = {
  heading: "Biomes",
  subtitle:
    "Brazil isn't one landscape. It's six, from the world's largest rainforest to its largest wetland, and each one changes the way you travel.",
  video: video("biomes-canopy"),
  image: img("forest-canopy", "Morning mist over the rainforest canopy"),
};

export const carnivalSection = {
  heading: "Carnival Week, Day by Day",
  subtitle:
    "Rio's Carnival is a show. Salvador's is a street party. Olinda's is a whole town in costume. Choose wisely, then pace yourself.",
};

export const pantanalDay = {
  heading: "A Day in the Pantanal",
  intro:
    "The largest tropical wetland on Earth runs on a simple timetable: wake early, rest at midday, go out again when the light turns gold. Here's how a day unfolds.",
  stages: [
    {
      title: "Dawn",
      line: "The birds start before you do.",
      body: "Parakeets, chachalacas and a hyacinth macaw with opinions. Coffee on the veranda while the mist lifts off the water and the caimans think about moving.",
      video: video("day-dawn"),
    },
    {
      title: "On the river",
      line: "Boats, caimans, giant otters.",
      body: "A slow boat up a side channel. Caimans line the banks like logs that blink. Then a family of giant otters, loud and curious, swims over to see who you are.",
      video: video("day-river"),
    },
    {
      title: "Midday",
      line: "Hammocks and lunch at the fazenda.",
      body: "Rice, beans, grilled fish and fruit from the garden. The heat says rest, and here everybody listens. Hammocks are not optional.",
      video: video("day-midday"),
    },
    {
      title: "Golden hour",
      line: "Searching the riverbanks for jaguars.",
      body: "Back on the water as the light softens. Your guide cuts the engine near a sandbank. Jaguars don't keep appointments, but in the dry season they're rarely late.",
      video: video("day-golden"),
    },
    {
      title: "Night",
      line: "A sky so full of stars it looks crowded.",
      body: "No towns, no glow, no noise but frogs. Lie back on the jetty and find the Southern Cross. Then find it again, because there are too many stars to be sure.",
      video: video("day-night"),
    },
  ],
  cta: { label: "Jaguars & the Pantanal", href: "/journeys/jaguars-pantanal" },
};

export const likeALocal = {
  label: "Brazil, like a local",
  lead: "Kiss",
  items: [
    {
      word: "Kiss hello",
      body: "One kiss on the cheek in São Paulo, two in Rio, sometimes three in Minas. If in doubt, follow their lead and enjoy the confusion.",
    },
    {
      word: "Say obrigado",
      body: "Brazilians speak Portuguese, not Spanish. Obrigado if you're a man, obrigada if you're a woman. A little effort gets a big smile.",
    },
    {
      word: "Check the bill",
      body: "Restaurants usually add a 10% service charge. It's shown as 'serviço'. Leave a little extra only if you'd like to.",
    },
    {
      word: "Share the sand",
      body: "Rent a chair and umbrella from the barraca, buy your coconut from the person who walks by, and never leave anything behind but footprints.",
    },
    {
      word: "Keep it low-key",
      body: "Leave the flashy watch at home and carry what you need for the day. It's what Brazilians do, and nobody notices a person who looks relaxed.",
    },
    {
      word: "Relax the clock",
      body: "Eight o'clock for dinner might mean nine. A party starting at ten warms up around midnight. You're on holiday. So is time.",
    },
  ],
};

