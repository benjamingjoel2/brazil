/** Shared content types for everything in /data. */

export type Slug = string;
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
/** Inclusive month range; may wrap the year (e.g. Nov–Mar is { from: 11, to: 3 }). */
export type MonthRange = { from: Month; to: Month };

/** Facts that must be checked before launch (and often yearly) carry this flag. */
export type Verifiable = { verify?: boolean; verifyNote?: string };

export type Media = {
  src: string;
  alt: string;
  credit?: string;
  page?: string;
  /** True when the image is a stand-in that only approximates the subject. */
  approx?: boolean;
};

export type VideoMedia = {
  src: string;
  /** Lighter file for phones (optional). */
  srcMobile?: string;
  /** CSS object-position for narrow crops, e.g. "80% 50%" keeps a subject on the right in view. */
  focus?: string;
  poster: string;
  alt: string;
  credit?: string;
  page?: string;
  /** WebVTT captions/description track in /public. */
  captions?: string;
};

export type BiomeSlug = "amazon" | "cerrado" | "atlantic-forest" | "caatinga" | "pantanal" | "pampa";

export type Biome = {
  slug: BiomeSlug;
  name: string;
  short: string;
  summary: string;
  landscape: string;
  wildlife: string[];
  bestMonths: MonthRange[];
  bestMonthsNote: string;
  verify: true;
  whereWeGo: Slug[];
  journeys: Slug[];
  image: Media;
  color: string;
  /** Share of Brazil's territory, approx. */
  area: string;
};

export type Destination = {
  slug: Slug;
  name: string;
  region: "North" | "Northeast" | "Central-West" | "Southeast" | "South";
  state: string;
  tagline: string;
  intro: string;
  biome: BiomeSlug;
  bestMonths: string;
  waterSeason?: "amazon" | "pantanal";
  eat: string[];
  music: string[];
  stays: Slug[];
  journeys: Slug[];
  experiences: Slug[];
  image: Media;
  coords: [lat: number, lng: number];
} & Verifiable;

export type JourneyDay = { day: string; title: string; body: string; place?: Slug };

export type Journey = {
  slug: Slug;
  title: string;
  tagline: string;
  summary: string;
  nights: number;
  priceFromUSD: number;
  biomes: BiomeSlug[];
  season: string;
  howYouTravel: string;
  internalFlights: number;
  days: JourneyDay[];
  stays: Slug[];
  experiences: Slug[];
  destinations: Slug[];
  image: Media;
  goodFor: string[];
} & Verifiable;

export type StayType = "River lodge" | "Fazenda" | "Beach pousada" | "Boutique hotel" | "Colonial pousada" | "Eco-lodge";

export type Stay = {
  slug: Slug;
  /** Placeholder name until partners are confirmed. */
  name: string;
  type: StayType;
  setting: string;
  rooms: string;
  guests: string;
  bestFor: string;
  description: string;
  destination: Slug;
  images: [Media, Media];
  placeholder: true;
};

export type Experience = {
  slug: Slug;
  name: string;
  summary: string;
  body: string;
  destinations: Slug[];
  journeys: Slug[];
  when: string;
  image: Media;
} & Verifiable;

export type CarnivalCity = {
  slug: "rio" | "salvador" | "olinda-recife" | "escape";
  city: string;
  oneLiner: string;
  whatItsLike: string;
  crowds: string;
  costs: string;
  howToDoItWell: string[];
  journey: Slug;
  destination?: Slug;
  image: Media;
};

export type CarnivalDay = {
  date: string; // ISO, computed from config
  weekday: string;
  title: string;
  happening: string;
  ourWay: string;
  image: Media;
};

export type WaterPhase = {
  id: "high" | "low";
  label: string;
  months: MonthRange;
  monthsLabel: string;
  headline: string;
  body: string;
  highlights: string[];
  image: Media;
  stays: Slug[];
  journeys: Slug[];
};

export type WaterRegion = {
  id: "amazon" | "pantanal";
  name: string;
  intro: string;
  /** Short status labels shown on the homepage info panel. */
  statusLabel: Record<WaterPhase["id"], string>;
  /** Months that sit between peaks; shown as "rising" or "falling". */
  transitions: { months: MonthRange; label: string }[];
  phases: [WaterPhase, WaterPhase];
  verify: true;
};

export type SunriseStop = {
  state: string;
  place: string;
  coords: [number, number];
  line: string;
  body: string;
  destination: Slug;
  image: Media;
};

export type TeamMember = {
  name: string;
  role: string;
  base: string;
  photo: Media;
  intro: string;
  bio: string[];
  placeholder: true;
};

export type Review = {
  quote: string;
  name: string;
  from: string;
  trip: string;
  placeholder: true;
};

export type FaqItem = {
  q: string;
  a: string[];
  verify?: string;
  images?: [Media, Media];
};

export type JournalMeta = {
  title: string;
  description: string;
  date: string;
  author: string;
  image: Media;
};
