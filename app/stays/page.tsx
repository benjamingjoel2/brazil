import Link from "next/link";
import { stays } from "@/data/stays";
import { getDestination } from "@/data/destinations";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { SpecTable } from "@/components/ui/SpecTable";
import { Placeholder } from "@/components/ui/Badges";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Stays",
  description:
    "Amazon river lodges, Pantanal fazendas, beach pousadas in Bahia, boutique hotels in Rio and colonial pousadas in Paraty and Minas Gerais.",
  path: "/stays",
});

export default function StaysPage() {
  return (
    <>
      <PageHero
        label="Stays"
        title="Places that feel like where you are"
        lead="Small, characterful and run by people who love them. We choose for the setting first: the river, the plain, the beach, the cobbled street."
        image={img("stay-pousada-beach", "A beach pousada with hammocks under palm trees")}
      >
        <p className="text-sm text-off/80">
          <Placeholder label="placeholder names" /> Stay names below are placeholders until partner agreements are confirmed.
        </p>
      </PageHero>
      <div className="px-gutter py-section grid gap-24">
        {stays.map((s) => {
          const dest = getDestination(s.destination);
          return (
            <Reveal as="article" key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-8 lg:grid-cols-[1.5fr_1fr_0.7fr] lg:gap-10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img media={s.images[0]} sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="t-label text-coral-deep">{s.type}</p>
                  <h2 className="t-h2 mt-1 text-forest">
                    {s.name} <Placeholder className="ml-1" />
                  </h2>
                  {dest && (
                    <Link href={`/destinations/${dest.slug}`} className="mt-1 inline-block text-sm font-semibold text-atlantic underline-offset-4 hover:underline">
                      {dest.name} →
                    </Link>
                  )}
                </div>
                <p className="text-ink/85">{s.description}</p>
                <SpecTable
                  rows={[
                    { label: "Type", value: s.type },
                    { label: "Setting", value: s.setting },
                    { label: "Rooms", value: s.rooms },
                    { label: "Guests", value: s.guests },
                    { label: "Best for", value: s.bestFor },
                  ]}
                />
                <ButtonLink href={`/plan?stay=${s.slug}`} variant="forest" className="self-start">
                  Plan a stay here
                </ButtonLink>
              </div>
              <div className="relative hidden aspect-[3/4] self-end overflow-hidden lg:block">
                <Img media={s.images[1]} sizes="18vw" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
