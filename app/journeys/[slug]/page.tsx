import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getJourney, journeys } from "@/data/journeys";
import { getBiome } from "@/data/biomes";
import { stays } from "@/data/stays";
import { experiences } from "@/data/experiences";
import { destinations } from "@/data/destinations";
import { PageHero } from "@/components/ui/PageHero";
import { SpecTable } from "@/components/ui/SpecTable";
import { Price, CurrencySwitcher } from "@/components/ui/Currency";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationCard, ExperienceCard, JourneyCard, StayCard } from "@/components/ui/Cards";
import { JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/config/site";

export function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journeys/[slug]">): Promise<Metadata> {
  const j = getJourney((await params).slug);
  if (!j) return {};
  return pageMeta({ title: j.title, description: j.summary, path: `/journeys/${j.slug}` });
}

export default async function JourneyPage({ params }: PageProps<"/journeys/[slug]">) {
  const j = getJourney((await params).slug);
  if (!j) notFound();
  const jStays = stays.filter((s) => j.stays.includes(s.slug));
  const jExperiences = experiences.filter((e) => j.experiences.includes(e.slug));
  const jDestinations = destinations.filter((d) => j.destinations.includes(d.slug));
  const others = journeys.filter((x) => x.slug !== j.slug && x.biomes.some((b) => j.biomes.includes(b))).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: j.title,
          description: j.summary,
          url: `${site.url}/journeys/${j.slug}`,
          touristType: j.goodFor,
          itinerary: {
            "@type": "ItemList",
            itemListElement: j.days.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.day}: ${d.title}` })),
          },
          offers: { "@type": "Offer", price: j.priceFromUSD, priceCurrency: "USD", description: "From, per person sharing" },
        }}
      />
      <PageHero label={`Journey · ${j.nights} nights`} title={j.title} lead={j.tagline} image={j.image}>
        <ButtonLink href={`/plan?journey=${j.slug}`}>Plan with us</ButtonLink>
      </PageHero>

      <section aria-label="Overview" className="px-gutter py-section grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="t-lead text-ink/90">{j.summary}</p>
          <div className="mt-10 rounded-[2rem] bg-atlantic p-6 text-off md:p-8">
            <p className="t-label text-gold">How you travel</p>
            <p className="mt-3 leading-relaxed text-off/90">{j.howYouTravel}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] bg-sand/70 p-6 md:p-8">
          <SpecTable
            rows={[
              { label: "Length", value: `${j.nights} nights` },
              { label: "Price", value: <Price usd={j.priceFromUSD} /> },
              { label: "Biomes", value: j.biomes.map((b) => getBiome(b)?.name).join(", ") },
              { label: "Internal flights", value: j.internalFlights },
              { label: "Best time", value: j.season },
              { label: "Good for", value: j.goodFor.join(", ") },
            ]}
          />
          <CurrencySwitcher className="mt-6" />
          <p className="mt-3 text-xs text-ink/70">Per person sharing, excluding international flights. Indicative exchange rates.</p>
        </Reveal>
      </section>

      <section aria-labelledby="days-title" className="px-gutter pb-section">
        <h2 id="days-title" className="t-h2 mb-12 text-forest">
          Day by day
        </h2>
        <ol className="relative grid gap-10 border-l-2 border-dashed border-coral/50 pl-8 md:ml-6 md:pl-12">
          {j.days.map((d) => (
            <Reveal as="li" key={d.day + d.title} className="relative">
              <svg viewBox="0 0 20 11" className="absolute -left-[2.85rem] top-1 h-4 w-8 bg-off md:-left-[3.85rem]" aria-hidden>
                <path d="M2 10a8 8 0 0 1 16 0Z" fill="var(--color-coral)" />
              </svg>
              <p className="t-label text-coral-deep">{d.day}</p>
              <h3 className="t-h3 mt-1 text-forest">{d.title}</h3>
              <p className="mt-3 max-w-3xl text-ink/85">{d.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {jStays.length > 0 && (
        <section aria-labelledby="stays-title" className="px-gutter pb-section">
          <h2 id="stays-title" className="t-h3 mb-8 text-forest">Where you&apos;ll stay</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {jStays.map((s) => (
              <li key={s.slug}>
                <StayCard s={s} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {jExperiences.length > 0 && (
        <section aria-labelledby="exp-title" className="px-gutter pb-section">
          <h2 id="exp-title" className="t-h3 mb-8 text-forest">Experiences</h2>
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {jExperiences.map((e) => (
              <li key={e.slug}>
                <ExperienceCard e={e} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="dest-title" className="px-gutter pb-section">
        <h2 id="dest-title" className="t-h3 mb-8 text-forest">Places on this journey</h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jDestinations.map((d) => (
            <li key={d.slug}>
              <DestinationCard d={d} />
            </li>
          ))}
        </ul>
      </section>

      <section className="px-gutter pb-section">
        <div className="bg-waves rounded-[2.5rem] bg-forest p-8 text-off md:p-14">
          <h2 className="t-h2 max-w-3xl">Make it yours</h2>
          <p className="t-lead mt-4 max-w-2xl text-off/85">
            Change the pace, swap a stay, add a few nights on a beach. Tell us what you&apos;d love and we&apos;ll shape this journey around you.
          </p>
          <ButtonLink href={`/plan?journey=${j.slug}`} className="mt-8">
            Plan with us
          </ButtonLink>
        </div>
      </section>

      {others.length > 0 && (
        <section aria-labelledby="more-title" className="px-gutter pb-section">
          <h2 id="more-title" className="t-h3 mb-8 text-forest">You might also love</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((x) => (
              <li key={x.slug}>
                <JourneyCard j={x} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
