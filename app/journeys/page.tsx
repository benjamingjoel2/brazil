import { journeys } from "@/data/journeys";
import { PageHero } from "@/components/ui/PageHero";
import { JourneyCard } from "@/components/ui/Cards";
import { CurrencySwitcher } from "@/components/ui/Currency";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Journeys",
  description: "Eight private journeys across Brazil, from jaguars in the Pantanal to Carnival done properly. Every one tailored to you.",
  path: "/journeys",
});

export default function JourneysPage() {
  return (
    <>
      <PageHero
        label="Journeys"
        title="Start here, then make it yours"
        lead="Eight journeys we love, each a starting point. We'll change the pace, the places and the stays until it fits you exactly."
        image={img("iguacu", "The falls at Iguaçu in full flow")}
      />
      <section aria-label="All journeys" className="px-gutter py-section">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-ink/80">
            Prices are per person sharing, excluding international flights. Brazil is big, so most journeys include internal flights; we say how many, honestly.
          </p>
          <CurrencySwitcher />
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeys.map((j, i) => (
            <Reveal as="li" key={j.slug} delay={(i % 3) * 0.06}>
              <JourneyCard j={j} />
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
