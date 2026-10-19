import type { CarnivalCity, CarnivalDay } from "@/lib/types";
import { carnival } from "@/config/carnival";
import { img } from "@/lib/media";

/** Honest city profiles used by the Carnival chooser. */
export const carnivalCities: CarnivalCity[] = [
  {
    slug: "rio",
    city: "Rio de Janeiro",
    oneLiner: "The greatest show on Earth, with a street party on every corner.",
    whatItsLike:
      "Two worlds at once. In the Sambódromo, the top samba schools parade for over an hour each: thousands of dancers, drummers and floats the size of buildings, judged like an Olympic event. Outside, hundreds of street blocos take over the neighbourhoods from morning, each with its own music, costume theme and crowd.",
    crowds:
      "Huge. The biggest blocos draw hundreds of thousands of people, and the city is full for the week. The smaller neighbourhood blocos in Santa Teresa or Laranjeiras feel friendlier.",
    costs:
      "The most expensive Carnival. Hotels charge premium week-long packages, and Sambódromo seats range from bleachers to private boxes. Book many months ahead.",
    howToDoItWell: [
      "Watch one night of the Special Group parade from a good seat. Stay until dawn.",
      "Choose two or three smaller blocos, not the giant ones.",
      "Stay in a neighbourhood you can walk home in; traffic stops for the parties.",
      "Wear a simple costume. Everybody does, and nobody takes it seriously.",
    ],
    journey: "carnival-done-properly",
    destination: "rio-de-janeiro",
    image: img("carnival-rio-sambadrome", "Samba school dancers and floats in Rio's Sambódromo"),
  },
  {
    slug: "salvador",
    city: "Salvador",
    oneLiner: "The biggest street party on the planet, powered by Afro-Brazilian rhythm.",
    whatItsLike:
      "No stadium here: the party moves. Trios elétricos, trucks stacked with speakers and a band on top, roll slowly along the seafront and through the old centre, and the crowd moves with them. The Afro blocos, drum groups like Olodum and Ilê Aiyê, are the soul of it.",
    crowds:
      "Intense, joyful and very dense along the circuits. You can follow a trio inside the roped-off area with an abadá (a group T-shirt), or watch from a camarote, an elevated lounge with food, drink and a breather.",
    costs:
      "Mid to high. Abadás and camarote passes vary a lot by artist and night. Old-town pousadas fill up early.",
    howToDoItWell: [
      "Spend one night in a camarote and one following a trio with an abadá.",
      "Hear an Afro bloco rehearse in the Pelourinho before the big days.",
      "Leave valuables in the hotel and carry a little cash in a front pocket.",
      "Escape to an island beach for a day of rest.",
    ],
    journey: "carnival-done-properly",
    destination: "salvador-bahia-coast",
    image: img("carnival-salvador", "Crowds following a music truck through Salvador during Carnival"),
  },
  {
    slug: "olinda-recife",
    city: "Olinda & Recife",
    oneLiner: "A whole colonial town in costume, dancing frevo up and down the hills.",
    whatItsLike:
      "Olinda's Carnival is free, on foot and gloriously homemade. Giant puppets, the bonecos gigantes, sway through cobbled lanes, brass bands play frevo at a sprint, and maracatu drums shake the churches. Down the hill, Recife hosts Galo da Madrugada, one of the largest single carnival parades in the world, on Saturday morning.",
    crowds:
      "Packed lanes and steep hills, but the mood is neighbourly. Mornings are calmer; afternoons are joyful chaos.",
    costs:
      "Lower than Rio or Salvador for the party itself, which is free. Rooms in Olinda's old town are few, so book early or stay in Recife.",
    howToDoItWell: [
      "Stay in or near Olinda's historic centre so you can walk.",
      "Wear good shoes. The hills are steep and the cobbles are older than your country, probably.",
      "Catch Galo da Madrugada on Saturday, then retreat to Olinda for the rest.",
      "Learn three frevo steps. Your calves will forgive you eventually.",
    ],
    journey: "carnival-done-properly",
    destination: "recife-olinda",
    image: img("carnival-olinda", "Giant puppets dancing through the colonial streets of Olinda"),
  },
  {
    slug: "escape",
    city: "A quieter escape",
    oneLiner: "All the sunshine, none of the speakers.",
    whatItsLike:
      "Carnival week is a national holiday, and not everybody wants to dance through it. Head for the Pantanal, the Amazon, or a beach far from the circuits, where the only parade is a line of capybaras.",
    crowds:
      "Some Brazilian beach towns fill up with holidaymakers, so we choose carefully: wild places, small lodges and islands without party scenes.",
    costs:
      "Holiday-week prices apply in popular beach towns; wildlife lodges are steadier. Flights still book up, so plan early.",
    howToDoItWell: [
      "Pick a place where Carnival isn't the point: the Amazon or a remote pousada.",
      "Fly before Friday and back after Ash Wednesday to avoid peak travel days.",
      "If curiosity wins, add one day of a small-town Carnival as a taster.",
    ],
    journey: "amazon-by-water",
    image: img("stay-pousada-beach", "A quiet beach pousada with hammocks and palm trees"),
  },
];

const dayPlans: Omit<CarnivalDay, "date" | "weekday">[] = [
  {
    title: "Opening night",
    happening: "The keys of the city are handed to King Momo, and the first street parties start as soon as offices close.",
    ourWay: "Arrive early, settle in, and ease in with a neighbourhood bloco and a long dinner. The marathon starts tomorrow.",
    image: img("carnival-bloco-street", "A neighbourhood street bloco at dusk"),
  },
  {
    title: "Saturday of the giants",
    happening: "Recife's Galo da Madrugada fills the old centre from morning. In Rio, blocos everywhere; in Salvador, the trios start rolling.",
    ourWay: "In Pernambuco, we place you on a balcony above the Galo, then up the hill to Olinda for frevo till sunset.",
    image: img("carnival-olinda", "Frevo dancers with colourful umbrellas"),
  },
  {
    title: "Sunday parade",
    happening: "Rio's Special Group samba schools parade through the night in the Sambódromo. Salvador's circuits run from afternoon to dawn.",
    ourWay: "A late, lazy lunch, a nap you'll thank us for, then good seats for the parade with a guide who explains what the judges see.",
    image: img("carnival-rio-sambadrome", "A samba school float lit up at night"),
  },
  {
    title: "Monday, second night",
    happening: "The second night of Rio's Special Group parade, and Salvador's Afro blocos at full strength.",
    ourWay: "Morning on the beach, afternoon with a percussion workshop, evening in a camarote above the Salvador circuit.",
    image: img("carnival-salvador", "Drummers of an Afro bloco in Salvador"),
  },
  {
    title: "Fat Tuesday",
    happening: "The last full day of Carnival. Olinda's lanes are at their liveliest; everyone is in costume, including the dog.",
    ourWay: "Costumes on. We join a small bloco with a brass band, then end the night with a rooftop view of the town.",
    image: img("carnival-costume", "Revellers in bright costumes and glitter"),
  },
  {
    title: "Ash Wednesday",
    happening: "Officially, Carnival ends at midday. Unofficially, a few blocos refuse to go home. Then the country sleeps.",
    ourWay: "A slow breakfast, a swim and a transfer to somewhere quiet: an island, a fazenda or a forest lodge to recover in.",
    image: img("stay-hammock-veranda", "A hammock on a quiet veranda"),
  },
];

/** One card per day, Friday → Ash Wednesday, dated from config. */
export function carnivalWeek(): CarnivalDay[] {
  const start = new Date(`${carnival.friday}T12:00:00Z`);
  const offsets = [0, 1, 2, 3, 4, 5]; // Fri, Sat, Sun, Mon, Tue, Wed
  return offsets.map((o, i) => {
    const d = new Date(start.getTime() + o * 86_400_000);
    return {
      ...dayPlans[i],
      date: d.toISOString().slice(0, 10),
      weekday: WEEKDAYS[d.getUTCDay()],
    };
  });
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * Deterministic date labels (no Intl), so server and browser render identically.
 * Defaults to "5 Feb"; long months, weekday and year are opt-in.
 */
export function formatCarnivalDate(
  iso: string,
  opts: { weekday?: "short" | "long"; month?: "short" | "long"; year?: boolean } = {},
) {
  const d = new Date(`${iso}T12:00:00Z`);
  const month = MONTHS[d.getUTCMonth()];
  const parts = [
    opts.weekday ? (opts.weekday === "short" ? WEEKDAYS[d.getUTCDay()].slice(0, 3) : WEEKDAYS[d.getUTCDay()]) : "",
    String(d.getUTCDate()),
    opts.month === "long" ? month : month.slice(0, 3),
    opts.year ? String(d.getUTCFullYear()) : "",
  ];
  return parts.filter(Boolean).join(" ");
}

/** Carnival quiz: simple, weighted, honest. */
export const carnivalQuiz = [
  {
    id: "mode",
    q: "Do you want to watch, or dance in the street?",
    options: [
      { label: "Watch the spectacle", scores: { rio: 3, salvador: 1, "olinda-recife": 0, escape: 0 } },
      { label: "Dance in the street", scores: { rio: 1, salvador: 3, "olinda-recife": 3, escape: 0 } },
      { label: "Honestly? Neither", scores: { rio: 0, salvador: 0, "olinda-recife": 0, escape: 5 } },
    ],
  },
  {
    id: "place",
    q: "Big city or historic town?",
    options: [
      { label: "Big city energy", scores: { rio: 3, salvador: 2, "olinda-recife": 1, escape: 0 } },
      { label: "Cobbles and churches", scores: { rio: 0, salvador: 1, "olinda-recife": 3, escape: 1 } },
      { label: "Somewhere wild", scores: { rio: 0, salvador: 0, "olinda-recife": 0, escape: 3 } },
    ],
  },
  {
    id: "time",
    q: "Days or nights?",
    options: [
      { label: "Days, in the sunshine", scores: { rio: 1, salvador: 1, "olinda-recife": 3, escape: 1 } },
      { label: "Nights, until sunrise", scores: { rio: 3, salvador: 3, "olinda-recife": 1, escape: 0 } },
      { label: "Early nights, early mornings", scores: { rio: 0, salvador: 0, "olinda-recife": 1, escape: 3 } },
    ],
  },
  {
    id: "crowds",
    q: "How do you feel about crowds?",
    options: [
      { label: "The more the merrier", scores: { rio: 2, salvador: 3, "olinda-recife": 2, escape: 0 } },
      { label: "Fine, with a quiet place to retreat to", scores: { rio: 2, salvador: 2, "olinda-recife": 1, escape: 1 } },
      { label: "Rather not", scores: { rio: 0, salvador: 0, "olinda-recife": 0, escape: 4 } },
    ],
  },
] as const;
