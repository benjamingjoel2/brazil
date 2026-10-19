import { biomes } from "@/data/biomes";
import { BiomeExplorer } from "@/components/features/BiomeExplorer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { LinkList } from "@/components/ui/Cards";
import { rangeLabel } from "@/lib/seasons";
import { biomeLinks } from "@/lib/biome-links";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "The Six Biomes of Brazil",
  description:
    "Amazon, Cerrado, Atlantic Forest, Caatinga, Pantanal and Pampa: explore Brazil's six biomes, what lives there, the best months and where we go.",
  path: "/biomes",
});

export default function BiomesPage() {
  const links = biomeLinks();
  return (
    <>
      <PageHero
        label="Six biomes, one country"
        title="Brazil is six countries wearing one flag"
        lead="Rainforest, savanna, coastal forest, dry forest, wetland and grassland. Tap a biome to see what it looks like, what lives there and when to go."
        image={img("forest-canopy", "Mist over the rainforest canopy at dawn")}
      />
      <section aria-label="Biome explorer" className="px-gutter py-section">
        <BiomeExplorer links={links} />
      </section>

      <section aria-labelledby="glance-title" className="px-gutter pb-section">
        <h2 id="glance-title" className="t-h3 mb-8 text-forest">
          All six at a glance
        </h2>
        <ol className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {biomes.map((b, i) => (
            <Reveal as="li" key={b.slug} delay={(i % 3) * 0.06} className="border-t-2 border-forest/15 pt-5">
              <p className="t-label flex items-center gap-2 text-forest/75">
                <span aria-hidden className="h-3 w-3 rounded-full" style={{ background: b.color }} />
                {b.area} · Best {b.bestMonths.map(rangeLabel).join(" & ")}
              </p>
              <h3 className="t-h3 mt-2 text-forest">{b.name}</h3>
              <p className="mt-3 text-ink/85">{b.summary}</p>
              <div className="mt-4">
                <LinkList items={links[b.slug].where} />
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14 flex flex-wrap gap-3">
          <ButtonLink href="/wild-seasons">Wild Seasons: high water or low?</ButtonLink>
          <ButtonLink href="/plan" variant="outline">
            Plan with us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
