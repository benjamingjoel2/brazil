import Link from "next/link";
import type { Destination, Experience, Journey, Stay } from "@/lib/types";
import { Img } from "./Img";
import { Price } from "./Currency";
import { Placeholder } from "./Badges";
import { getBiome } from "@/data/biomes";

export function JourneyCard({ j }: { j: Journey }) {
  return (
    <Link href={`/journeys/${j.slug}`} className="group flex h-full flex-col overflow-hidden bg-sand/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img media={j.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="t-label text-coral-deep">
          {j.nights} nights · {j.internalFlights} internal flight{j.internalFlights === 1 ? "" : "s"}
        </p>
        <h3 className="t-h4 text-forest">{j.title}</h3>
        <p className="text-sm text-ink/80">{j.tagline}</p>
        <Price usd={j.priceFromUSD} className="mt-auto pt-2 text-sm text-forest" />
      </div>
    </Link>
  );
}

export function DestinationCard({ d }: { d: Destination }) {
  const biome = getBiome(d.biome);
  return (
    <Link href={`/destinations/${d.slug}`} className="group relative block aspect-[3/4] overflow-hidden bg-forest text-off">
      <Img media={d.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="t-label text-gold">
          {d.state} · {biome?.name}
        </p>
        <h3 className="t-h4 mt-1">{d.name}</h3>
        <p className="mt-1 text-sm text-off/85">{d.tagline}</p>
      </div>
    </Link>
  );
}

export function ExperienceCard({ e }: { e: Experience }) {
  return (
    <Link href={`/experiences#${e.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden">
        <Img media={e.image} sizes="(min-width: 1024px) 20vw, 50vw" className="transition-transform duration-700 group-hover:scale-105" />
      </div>
      <h3 className="t-h4 mt-4 text-forest group-hover:text-coral-deep">{e.name}</h3>
      <p className="mt-1 text-sm text-ink/80">{e.summary}</p>
    </Link>
  );
}

export function StayCard({ s }: { s: Stay }) {
  return (
    <Link href={`/stays#${s.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Img media={s.images[0]} sizes="(min-width: 1024px) 25vw, 50vw" className="transition-transform duration-700 group-hover:scale-105" />
      </div>
      <p className="t-label mt-4 text-coral-deep">{s.type}</p>
      <h3 className="t-h4 mt-1 text-forest">
        {s.name} <Placeholder className="ml-1" />
      </h3>
      <p className="mt-1 text-sm text-ink/80">{s.setting}</p>
    </Link>
  );
}

/** Inline list of links (e.g. "Where we go"), separated by soft dots. */
export function LinkList({ items }: { items: { href: string; label: string }[] }) {
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i.href}>
          <Link href={i.href} className="inline-flex rounded-pill border-2 border-forest/20 px-3.5 py-1.5 text-sm font-medium text-forest transition hover:border-forest hover:bg-forest hover:text-off">
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
