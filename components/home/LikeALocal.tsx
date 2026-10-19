import { likeALocal } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SunArcs } from "@/components/ui/SunArcs";

export function LikeALocal() {
  return (
    <section id="like-a-local" aria-labelledby="local-title" className="bg-waves-dark relative overflow-hidden bg-sand">
      <SunArcs className="absolute -top-10 left-1/2 w-[140vw] max-w-none -translate-x-1/2 rotate-180 opacity-50" rings={8} color="var(--color-coral)" />
      <div className="px-gutter py-section relative">
        <h2 id="local-title" className="t-label text-center text-forest">
          {likeALocal.label}
        </h2>
        <ol className="mt-[12vh] flex flex-col items-center gap-[6vh] text-center md:mt-[18vh]">
          {likeALocal.items.map((it, i) => (
            <Reveal as="li" key={it.word} className="max-w-4xl" amount={0.6}>
              <p
                className={`t-h1 uppercase ${i % 3 === 0 ? "text-coral-deep" : i % 3 === 1 ? "text-forest" : "text-atlantic"}`}
              >
                {it.word}
              </p>
              <p className="mx-auto mt-3 flex max-w-xl items-start justify-center gap-3 text-ink/85 md:text-lg">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {it.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
