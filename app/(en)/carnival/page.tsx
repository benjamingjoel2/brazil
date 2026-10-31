import { carnivalCities, formatCarnivalDate } from "@/data/carnival";
import { journeys } from "@/data/journeys";
import { carnival, festivals } from "@/config/carnival";
import { CarnivalQuiz } from "@/components/features/CarnivalQuiz";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { ButtonLink } from "@/components/ui/Button";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "Which Carnival is right for you?",
  description:
    "Rio, Salvador, Olinda and Recife, or a quiet escape: take our short Carnival quiz and get an honest guide to crowds, costs and how to do it well. Plus Festa Junina and Parintins.",
  path: "/carnival",
});

export default function CarnivalPage() {
  const journeyTitles = Object.fromEntries(journeys.map((j) => [j.slug, j.title]));
  return (
    <>
      <PageHero
        label={
          <span className="inline-flex flex-wrap items-center gap-2">
            Carnival {carnival.year} · {formatCarnivalDate(carnival.friday, { month: "long" })} –{" "}
            {formatCarnivalDate(carnival.ashWednesday, { month: "long" })} <Verify note={carnival.note} />
          </span>
        }
        title="Watch it, or dance in it?"
        lead="Rio's Carnival is a show. Salvador's is a street party. Olinda's is a whole town in costume. Answer four quick questions and we'll point you to yours."
        image={img("carnival-costume", "Carnival revellers in bright costumes")}
      />

      <section aria-label="Carnival chooser" className="px-gutter py-section">
        <CarnivalQuiz journeyTitles={journeyTitles} />
      </section>

      <section aria-labelledby="cities-title" className="px-gutter pb-section">
        <h2 id="cities-title" className="t-h2 mb-12 text-forest">
          Every Carnival, honestly
        </h2>
        <div className="grid gap-16">
          {carnivalCities.map((c, i) => (
            <Reveal key={c.slug} as="article" className="grid scroll-mt-28 gap-8 md:grid-cols-[1fr_1.4fr] md:items-start" id={c.slug}>
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <Img media={c.image} sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
              <div>
                <h3 className="t-h2 text-forest">{c.city}</h3>
                <p className="t-lead mt-3 text-ink/90">{c.oneLiner}</p>
                <p className="mt-5 text-ink/85">{c.whatItsLike}</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="t-label mb-1 text-coral-deep">Crowds</p>
                    <p className="text-sm text-ink/85">{c.crowds}</p>
                  </div>
                  <div>
                    <p className="t-label mb-1 text-coral-deep">Costs</p>
                    <p className="text-sm text-ink/85">{c.costs}</p>
                  </div>
                </div>
                <ButtonLink href={`/journeys/${c.journey}`} variant="outline" className="mt-6">
                  {journeyTitles[c.journey]}
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="festivals-title" className="bg-waves-dark bg-sand">
        <div className="px-gutter py-section">
          <h2 id="festivals-title" className="t-h2 max-w-4xl text-forest">
            Not the only party in town
          </h2>
          <p className="t-lead mt-5 max-w-3xl text-ink/85">
            Carnival gets the headlines. In June, the Northeast lights bonfires for São João, and deep in the Amazon a whole island splits into red and blue.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                f: festivals.festaJunina,
                image: img("festa-junina", "Festa Junina with bunting, bonfires and forró dancing"),
                body: "Bunting, bonfires, corn in every form imaginable and forró until dawn. Campina Grande and Caruaru host vast, joyful celebrations, with quadrilha dances in costume. Less glitter than Carnival, more heart.",
                href: "/experiences#festa-junina",
              },
              {
                f: festivals.parintins,
                image: img("parintins", "Parintins festival performers in a vast arena"),
                body: "On an island in the Amazon, two rival groups, Garantido (red) and Caprichoso (blue), stage enormous boi-bumbá performances: giant puppets, Amazonian legends and drums you feel in your ribs. Reached by plane or riverboat from Manaus.",
                href: "/destinations/amazon",
              },
            ].map(({ f, image, body, href }) => (
              <Reveal key={f.label} as="article" className="overflow-hidden bg-off">
                <div className="relative aspect-[16/9]">
                  <Img media={image} sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="t-h3 text-forest">{f.label}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-coral-deep">
                    {f.when} · {f.where} <Verify />
                  </p>
                  <p className="mt-4 text-ink/85">{body}</p>
                  <ButtonLink href={href} variant="outline" className="mt-6">
                    Find out more
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
