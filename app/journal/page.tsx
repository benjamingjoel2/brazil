import Link from "next/link";
import { posts } from "@/content/journal";
import { PageHero } from "@/components/ui/PageHero";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";
import { formatDate } from "@/lib/dates";

export const metadata = pageMeta({
  title: "Journal",
  description: "Stories and honest advice for travelling in Brazil, from the Amazon's water seasons to choosing your Carnival.",
  path: "/journal",
});


export default function JournalPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        short
        label="Journal"
        title="Notes from first light"
        lead="Stories, seasons and honest advice from the people who plan our journeys."
        image={img("music-street", "Drummers playing in the street")}
      />
      <section className="px-gutter py-section">
        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {sorted.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={(i % 2) * 0.08}>
              <Link href={`/journal/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Img media={p.image} sizes="(min-width: 768px) 50vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="t-label mt-5 text-coral-deep">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </p>
                <h2 className="t-h3 mt-2 text-forest group-hover:text-coral-deep">{p.title}</h2>
                <p className="mt-2 max-w-xl text-ink/85">{p.description}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
