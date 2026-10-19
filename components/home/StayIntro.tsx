import { stayIntro } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Reveal, RiseWords } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function StayIntro() {
  return (
    <div className="px-gutter py-section">
      <header className="mb-14 max-w-4xl">
        <h2 id="stay-title" className="t-h2 text-forest">
          <RiseWords text={stayIntro.heading} />
        </h2>
        <Reveal delay={0.1}>
          <p className="t-lead mt-5 max-w-3xl text-ink/85">{stayIntro.subtitle}</p>
        </Reveal>
      </header>
      <div className="grid items-start gap-5 md:grid-cols-[1fr_2fr_1fr]">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] rounded-br-[5rem] md:aspect-square">
          <Img media={stayIntro.images[0]} sizes="(min-width: 768px) 25vw, 100vw" />
        </Reveal>
        <Reveal delay={0.1} className="arch-top relative aspect-[3/4] overflow-hidden">
          <Img media={stayIntro.images[1]} sizes="(min-width: 768px) 50vw, 100vw" />
        </Reveal>
        <Reveal delay={0.2} className="flex h-full flex-col justify-end gap-6">
          <p className="text-ink/85">{stayIntro.body}</p>
          <ButtonLink href="/stays" variant="outline" className="self-start">
            All our stays
          </ButtonLink>
        </Reveal>
      </div>
    </div>
  );
}
