"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import { reviews } from "@/data/reviews";
import { wordsSection } from "@/data/home";
import { Placeholder } from "@/components/ui/Badges";
import { RiseWords } from "@/components/ui/Reveal";

/** Endless, slow marquee of reviews. Pauses on hover/focus or via the button; static under reduced motion. */
export function Words() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const run = !reduce && !paused;

  const Card = ({ r, hidden }: { r: (typeof reviews)[number]; hidden?: boolean }) => (
    <li aria-hidden={hidden} className="flex w-[82vw] shrink-0 flex-col justify-between gap-8 border-l-4 border-gold bg-off py-2 pl-6 pr-4 sm:w-[30rem] lg:w-[36vw]">
      <p className="text-lg leading-relaxed text-ink md:text-xl">“{r.quote}”</p>
      <div className="text-sm">
        <p className="font-semibold text-forest">
          {r.name} <span className="font-normal text-ink/70">· {r.from}</span>
        </p>
        <p className="text-ink/70">{r.trip}</p>
      </div>
    </li>
  );

  return (
    <section id="words" aria-labelledby="words-title" className="py-section overflow-hidden">
      <div className="px-gutter mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="words-title" className="t-h2 text-forest">
            <RiseWords text={wordsSection.heading} />
          </h2>
          <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink/70">
            <Placeholder label="placeholder reviews" /> {wordsSection.note}
          </p>
        </div>
        {!reduce && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="rounded-pill border-2 border-forest px-4 py-2 text-sm font-semibold text-forest hover:bg-forest hover:text-off"
          >
            {paused ? "Play" : "Pause"} reviews
          </button>
        )}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
      >
        {reduce ? (
          <ul className="px-gutter grid gap-10 md:grid-cols-2">
            {reviews.map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </ul>
        ) : (
          <ul
            className="flex w-max gap-10 pl-(--gutter)"
            style={{ animation: "words-marquee 70s linear infinite", animationPlayState: run ? "running" : "paused" }}
          >
            {reviews.map((r, i) => (
              <Card key={`a${i}`} r={r} />
            ))}
            {reviews.map((r, i) => (
              <Card key={`b${i}`} r={r} hidden />
            ))}
          </ul>
        )}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-off to-transparent" />
      </div>
      <style>{`@keyframes words-marquee { from { transform: translateX(0) } to { transform: translateX(calc(-50% - 1.25rem)) } }`}</style>
    </section>
  );
}
