import { team } from "@/data/team";
import { values } from "@/data/home";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Img } from "@/components/ui/Img";
import { Placeholder } from "@/components/ui/Badges";
import { ButtonLink } from "@/components/ui/Button";
import { SunArcs } from "@/components/ui/SunArcs";
import { pageMeta } from "@/lib/seo";
import { img } from "@/lib/media";

export const metadata = pageMeta({
  title: "About us",
  description: "Sol Nascente plans private journeys across Brazil, from first light at Ponta do Seixas to the waterfalls of Iguaçu.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Brazil, from first light"
        lead="The sun rises in Brazil before anywhere else in the Americas. We like to think it's in a hurry to get here. So are we, every time."
        image={img("ponta-do-seixas", "Sunrise at Ponta do Seixas, the easternmost point of the Americas")}
      />
      <section className="px-gutter py-section grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="arch-top relative aspect-[4/5] overflow-hidden">
          <Img media={img("brazil-joy-people", "Friends laughing together in a Brazilian street")} sizes="(min-width: 1024px) 40vw, 100vw" />
        </Reveal>
        <Reveal delay={0.1} className="prose-sol self-center">
          <h2>Why sol nascente?</h2>
          <p>
            Sol nascente means rising sun. Every morning, the first sunrise in the Americas lands on Ponta do Seixas in Paraíba, the
            easternmost point of the continent&apos;s mainland. It felt like the right name for a company that wants you to see Brazil
            fresh, as if for the first time.
          </p>
          <p>
            Brazil is enormous and wildly varied. It&apos;s easy to spend a fortnight on planes and in queues and still miss the
            things that make it extraordinary. We help you see the right parts, at the right time, with the right people.
          </p>
          <h2>How we work</h2>
          <p>
            Every journey is private and planned from scratch with a specialist who has been there, usually many times. We arrange
            the internal flights, the transfers and the boats, and choose small stays with big settings. On the ground, you&apos;re
            with local English-speaking guides. And your specialist stays on WhatsApp while you travel.
          </p>
        </Reveal>
      </section>

      <section className="bg-waves relative overflow-hidden bg-forest text-off">
        <SunArcs className="absolute -bottom-10 left-1/2 w-[120vw] max-w-none -translate-x-1/2 opacity-30" rings={7} />
        <div className="px-gutter py-section relative grid gap-12 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <p className="t-label text-gold">{v.meaning}</p>
              <h2 className="t-h2 mt-2">{v.name}</h2>
              <p className="mt-4 text-off/85">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-gutter py-section">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <h2 className="t-h2 text-forest">The team</h2>
          <Placeholder label="placeholder team" />
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <li key={m.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[1.25rem]">
                <Img media={m.photo} sizes="(min-width: 1024px) 20vw, 50vw" />
              </div>
              <h3 className="t-h4 mt-4 text-forest">{m.name}</h3>
              <p className="text-sm text-ink/75">
                {m.role} · {m.base}
              </p>
              <p className="mt-2 text-sm text-ink/85">{m.intro}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16 flex flex-wrap gap-3">
          <ButtonLink href="/plan">Plan with us</ButtonLink>
          <ButtonLink href="/responsible-travel" variant="outline">
            How we travel
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
