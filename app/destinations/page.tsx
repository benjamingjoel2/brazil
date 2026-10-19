import { destinations } from "@/data/destinations";
import type { Destination } from "@/lib/types";
import { PageHero } from "@/components/ui/PageHero";
import { DestinationCard } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Destinations",
  description:
    "Rio, Bahia, the Amazon, the Pantanal, Lençóis Maranhenses, Iguaçu and more: sixteen places we know and love across Brazil.",
  path: "/destinations",
});

const regions: Destination["region"][] = ["Northeast", "North", "Central-West", "Southeast", "South"];
const regionNotes: Record<Destination["region"], string> = {
  Northeast: "Where the sun rises first: warm seas, Afro-Brazilian culture, dunes and the country's most joyful music.",
  North: "The Amazon: rivers the size of seas and a forest that makes its own weather.",
  "Central-West": "Wetlands and clear rivers: the Pantanal and Bonito.",
  Southeast: "Rio's mountains, colonial towns, gold-rush churches and São Paulo's appetite.",
  South: "Waterfalls, surf, island lagoons and the wide skies of the Pampa.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        label="Where we go"
        title="Sixteen Brazils we know by heart"
        lead="From the easternmost point of the Americas to the waterfalls on the Argentine border. Each one with its own food, its own music and its own best months."
        image={img("lencois-maranhenses", "Freshwater lagoons between white dunes in Lençóis Maranhenses")}
      />
      <div className="px-gutter py-section grid gap-20">
        {regions.map((r) => {
          const list = destinations.filter((d) => d.region === r);
          if (!list.length) return null;
          return (
            <section key={r} aria-labelledby={`region-${r}`}>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b-2 border-forest/15 pb-4">
                <h2 id={`region-${r}`} className="t-h2 text-forest">
                  {r}
                </h2>
                <p className="max-w-md text-ink/80">{regionNotes[r]}</p>
              </div>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((d, i) => (
                  <Reveal as="li" key={d.slug} delay={(i % 4) * 0.05}>
                    <DestinationCard d={d} />
                  </Reveal>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
