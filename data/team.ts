import type { TeamMember } from "@/lib/types";
import { img } from "@/lib/media";

/** PLACEHOLDER team. Names, photos and bios are invented for layout only. */
export const team: TeamMember[] = [
  {
    name: "Marina Albuquerque",
    role: "Founder & Brazil specialist",
    base: "João Pessoa",
    photo: img("team-3"),
    intro: "Grew up watching the first sunrise of the Americas from her grandmother's balcony.",
    bio: [
      "Marina spent ten years guiding across the Northeast before she started planning journeys for other people. She knows which beach is calm on a windy afternoon and which aunt in Olinda makes the best tapioca.",
      "She started Sol Nascente to share the Brazil she loves: generous, musical, wild and much bigger than one postcard.",
    ],
    placeholder: true,
  },
  {
    name: "Tom Hadley",
    role: "Travel designer, UK & Europe",
    base: "Lisbon",
    photo: img("team-1"),
    intro: "Came to Brazil for a month in 2009. Is still, technically, on that trip.",
    bio: [
      "Tom has crossed the country by boat, bus and very small plane, and now uses that knowledge to make sure you don't have to. He looks after travellers from the UK and Europe.",
      "Ask him about forró. Then clear your evening.",
    ],
    placeholder: true,
  },
  {
    name: "Luana Ribeiro",
    role: "Amazon partner & naturalist",
    base: "Manaus",
    photo: img("team-2"),
    intro: "Can hear a toucan before you can see the tree it's in.",
    bio: [
      "Luana works with river communities around the Rio Negro and plans every Amazon itinerary we run. She chooses lodges that employ and benefit local families.",
      "Her rule for the forest: walk slower than you think you need to.",
    ],
    placeholder: true,
  },
  {
    name: "Rafael Costa",
    role: "Pantanal & wildlife lead",
    base: "Cuiabá",
    photo: img("team-5"),
    intro: "Has spent more mornings with jaguars than most people spend with their cousins.",
    bio: [
      "Rafael grew up on a fazenda in the northern Pantanal and has guided wildlife trips for fifteen years. He trains our guides in ethical viewing: distance, patience and no baiting, ever.",
      "He keeps a notebook of every jaguar he has met, and he's on volume six.",
    ],
    placeholder: true,
  },
  {
    name: "Célia Moreno",
    role: "Travel designer, US & Australia",
    base: "Rio de Janeiro",
    photo: img("team-4"),
    intro: "Will find you the best seat at the Sambódromo and the best pastel at the market.",
    bio: [
      "Célia plans journeys for travellers from the US and Australia, and specialises in Carnival, families and first trips to Brazil.",
      "She has danced in a samba school parade once. She describes it as the most tiring and wonderful hour of her life.",
    ],
    placeholder: true,
  },
];
