import { destinations } from "@/data/destinations";
import { SunriseCoastStory } from "@/components/features/SunriseCoastStory";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "The Sunrise Coast",
  description:
    "Follow the sunrise down Brazil's Atlantic coast, from Ponta do Seixas in Paraíba through Pernambuco, Bahia and Rio to Santa Catarina.",
  path: "/sunrise-coast",
});

export default function SunriseCoastPage() {
  const names = Object.fromEntries(destinations.map((d) => [d.slug, d.name]));
  return (
    <>
      <PageHero
        label="The Sunrise Coast"
        title="Follow the first light south"
        lead="Every morning, the sun lands on Ponta do Seixas first, then runs down more than 7,000 kilometres of Brazilian coast. Here's where we'd stand to watch it."
        image={img("sunrise-atlantic", "Sunrise over the Atlantic")}
      />
      <section aria-label="Sunrise stops" className="px-gutter py-section">
        <SunriseCoastStory destinationNames={names} />
        <div className="mt-24 text-center">
          <p className="t-lead mx-auto max-w-2xl text-forest">Want to wake up for one of these? We know which balcony to put you on.</p>
          <ButtonLink href="/plan" className="mt-6">
            Plan with us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
