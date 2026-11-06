import { hero } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Mosaic hero: headline, one line and one link beside three photos of different
 * places in Brazil. Server-rendered; the first photo is preloaded.
 */
export function Hero() {
  const [first, ...rest] = hero.mosaic;
  return (
    <section
      id="sol-nascente"
      aria-labelledby="hero-title"
      className="px-gutter relative bg-forest pb-[clamp(2.5rem,5vw,5rem)] pt-[calc(var(--header-h)+clamp(1.5rem,4vw,4rem))] text-off"
    >
      <div className="grid items-end gap-8 lg:grid-cols-[5fr_7fr] lg:gap-[4vw]">
        <div className="max-w-xl lg:pb-4">
          <p className="t-label text-gold">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-4 font-display text-[clamp(2.25rem,4.6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-balance">
            {hero.title}
          </h1>
          <p className="t-lead mt-5 text-off/85">{hero.intro}</p>
          <div className="mt-8">
            <ButtonLink href="/plan">Plan with us</ButtonLink>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:h-[min(72svh,44rem)] lg:grid-rows-2">
          <li className="relative col-span-2 aspect-[16/10] overflow-hidden lg:col-span-1 lg:row-span-2 lg:aspect-auto">
            <Img media={first.image} priority sizes="(min-width: 1024px) 29vw, 100vw" />
            <span className="absolute bottom-3 left-3 rounded-pill bg-ink/55 px-3 py-1 text-xs font-semibold backdrop-blur-sm">{first.place}</span>
          </li>
          {rest.map((m) => (
            <li key={m.place} className="relative aspect-[4/5] overflow-hidden lg:aspect-auto">
              <Img media={m.image} sizes="(min-width: 1024px) 29vw, 50vw" />
              <span className="absolute bottom-3 left-3 rounded-pill bg-ink/55 px-3 py-1 text-xs font-semibold backdrop-blur-sm">{m.place}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
