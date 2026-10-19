import { about } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Reveal, RiseWords } from "@/components/ui/Reveal";
import { LiveInfo } from "./LiveInfo";
import { BrazilMiniMap } from "./BrazilMiniMap";

export function About() {
  return (
    <section aria-labelledby="about-title" className="px-gutter py-section">
      <header className="mb-14 max-w-4xl">
        <h2 id="about-title" className="t-h2 text-forest">
          <RiseWords text={about.heading} />
        </h2>
        <Reveal delay={0.1}>
          <p className="t-lead mt-5 max-w-3xl text-ink/85">{about.subtitle}</p>
        </Reveal>
      </header>

      <div className="grid gap-5 lg:grid-cols-[3fr_1fr]">
        <Reveal className="relative min-h-[28rem] overflow-hidden rounded-[2rem] rounded-tl-[12rem] bg-forest lg:min-h-[38rem]">
          <Img media={about.image} sizes="(min-width: 1024px) 75vw, 100vw" />
          <div className="absolute inset-0 bg-linear-to-tr from-forest/85 via-forest/30 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 max-w-xl text-[0.95rem] leading-relaxed text-off md:bottom-10 md:left-10">
            {about.body}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col justify-between gap-8 rounded-[2rem] bg-sand/60 p-6">
          <BrazilMiniMap className="mx-auto w-full max-w-[18rem]" />
          <LiveInfo />
        </Reveal>
      </div>
    </section>
  );
}
