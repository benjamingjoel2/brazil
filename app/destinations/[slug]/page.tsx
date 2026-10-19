import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { destinations, getDestination } from "@/data/destinations";
import { getBiome } from "@/data/biomes";
import { stays } from "@/data/stays";
import { journeys } from "@/data/journeys";
import { experiences } from "@/data/experiences";
import { PageHero } from "@/components/ui/PageHero";
import { SpecTable } from "@/components/ui/SpecTable";
import { Verify } from "@/components/ui/Badges";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrazilPin } from "@/components/ui/BrazilPin";
import { ExperienceCard, JourneyCard, StayCard } from "@/components/ui/Cards";
import { JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/config/site";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const d = getDestination((await params).slug);
  if (!d) return {};
  return pageMeta({ title: d.name, description: `${d.tagline} ${d.intro.split(". ")[0]}.`, path: `/destinations/${d.slug}` });
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const d = getDestination((await params).slug);
  if (!d) notFound();
  const biome = getBiome(d.biome)!;
  const dStays = stays.filter((s) => d.stays.includes(s.slug) || s.destination === d.slug);
  const dJourneys = journeys.filter((j) => d.journeys.includes(j.slug) || j.destinations.includes(d.slug));
  const dExperiences = experiences.filter((e) => d.experiences.includes(e.slug) || e.destinations.includes(d.slug));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: d.name,
          description: d.intro,
          url: `${site.url}/destinations/${d.slug}`,
          geo: { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] },
          containedInPlace: { "@type": "State", name: d.state },
        }}
      />
      <PageHero label={`${d.state} · ${d.region}`} title={d.name} lead={d.tagline} image={d.image} />

      <section aria-label="About this destination" className="px-gutter py-section grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="t-lead text-ink/90 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-coral-deep">
            {d.intro}
          </p>
          {d.verify && d.verifyNote && (
            <p className="mt-6 flex items-start gap-2 text-sm text-coral-deep">
              <Verify className="mt-0.5 shrink-0" /> <span>{d.verifyNote}</span>
            </p>
          )}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="t-label mb-3 text-forest/60">What to eat</h2>
              <ul className="space-y-1.5">
                {d.eat.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="t-label mb-3 text-forest/60">Music of the region</h2>
              <ul className="flex flex-wrap gap-2">
                {d.music.map((x) => (
                  <li key={x} className="rounded-pill bg-sand px-3 py-1 text-sm">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] bg-sand/70 p-6 md:p-8">
          <BrazilPin lat={d.coords[0]} lng={d.coords[1]} label={d.name} className="mx-auto mb-6 w-full max-w-[14rem]" />
          <SpecTable
            rows={[
              { label: "State", value: d.state },
              {
                label: "Biome",
                value: (
                  <Link href={`/biomes#${biome.slug}`} className="underline underline-offset-4 hover:text-coral-deep">
                    {biome.name}
                  </Link>
                ),
              },
              {
                label: "Best months",
                value: (
                  <span>
                    {d.bestMonths} <Verify className="ml-1" />
                  </span>
                ),
              },
              ...(d.waterSeason
                ? [
                    {
                      label: "Water season",
                      value: (
                        <Link href={`/wild-seasons#${d.waterSeason}`} className="underline underline-offset-4 hover:text-coral-deep">
                          High water or low? →
                        </Link>
                      ),
                    },
                  ]
                : []),
            ]}
          />
          <ButtonLink href={`/plan?destination=${d.slug}`} className="mt-8 w-full">
            Plan with us
          </ButtonLink>
        </Reveal>
      </section>

      {dStays.length > 0 && (
        <section aria-labelledby="stays-title" className="px-gutter pb-section">
          <h2 id="stays-title" className="t-h3 mb-8 text-forest">Where to stay</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dStays.map((s) => (
              <li key={s.slug}>
                <StayCard s={s} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {dExperiences.length > 0 && (
        <section aria-labelledby="exp-title" className="px-gutter pb-section">
          <h2 id="exp-title" className="t-h3 mb-8 text-forest">Things we love here</h2>
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {dExperiences.map((e) => (
              <li key={e.slug}>
                <ExperienceCard e={e} />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section aria-labelledby="journeys-title" className="px-gutter pb-section">
        <h2 id="journeys-title" className="t-h3 mb-8 text-forest">Journeys</h2>
        {dJourneys.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dJourneys.map((j) => (
              <li key={j.slug}>
                <JourneyCard j={j} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-xl text-ink/85">
            We build {d.name} into tailor-made journeys. Tell us how long you have and we&apos;ll suggest the best way to fit it in.
          </p>
        )}
      </section>
    </>
  );
}
