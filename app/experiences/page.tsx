import { experiences } from "@/data/experiences";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { Reveal } from "@/components/ui/Reveal";
import { LinkList } from "@/components/ui/Cards";
import { destinationLinks, journeyLinks } from "@/lib/links";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Experiences",
  description:
    "Jaguar safaris, Amazon river lodges, snorkelling Bonito's clear rivers, Carnival, capoeira, forró nights, Bahian cooking and more.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        label="Experiences"
        title="The moments people talk about for years"
        lead="Floating above fish in a river clear as glass. A forró night where nobody minds that you can't dance yet. A jaguar on a sandbank at golden hour."
        image={img("snorkel-clear-river", "Snorkelling over fish in a crystal-clear river in Bonito")}
      />
      <nav aria-label="Experiences on this page" className="px-gutter pt-12">
        <ul className="flex flex-wrap gap-2">
          {experiences.map((e) => (
            <li key={e.slug}>
              <a href={`#${e.slug}`} className="inline-flex rounded-pill bg-sand px-3.5 py-1.5 text-sm font-medium text-forest hover:bg-forest hover:text-off">
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-gutter py-section grid gap-24">
        {experiences.map((e, i) => (
          <Reveal as="article" key={e.slug} id={e.slug} className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14">
            <div className={`relative aspect-square overflow-hidden ${i % 2 ? "rounded-[2rem] rounded-tl-[50%] md:order-2" : "rounded-[2rem] rounded-tr-[50%]"}`}>
              <Img media={e.image} sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div>
              <h2 className="t-h2 text-forest">{e.name}</h2>
              <p className="t-lead mt-3 text-ink/90">{e.summary}</p>
              {e.body.split("\n\n").map((p, j) => (
                <p key={j} className="mt-4 text-ink/85">
                  {p}
                </p>
              ))}
              <p className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-coral-deep">
                When: {e.when} {e.verify && <Verify note={e.verifyNote} />}
              </p>
              {e.verify && e.verifyNote && <p className="mt-1 text-xs text-ink/60">{e.verifyNote}</p>}
              <div className="mt-6 space-y-4">
                <LinkList items={destinationLinks(e.destinations)} />
                <LinkList items={journeyLinks(e.journeys)} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
