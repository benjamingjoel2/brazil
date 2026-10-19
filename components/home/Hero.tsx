"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/data/home";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { SunArcs } from "@/components/ui/SunArcs";
import { Img } from "@/components/ui/Img";

/** Letters rise like the sun. Pure CSS (compositor-only), so it costs no main-thread time. */
function RiseLetters({ word, delay = 0 }: { word: string; delay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]" aria-hidden>
      {word.split("").map((ch, i) => (
        <span key={i} className="rise-letter inline-block" style={{ animationDelay: `${delay + i * 0.03}s` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "35%"]);

  return (
    <section ref={ref} id="sol-nascente" aria-labelledby="hero-title" className="relative h-svh min-h-[34rem] overflow-hidden bg-forest text-off">
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        {/* Poster as a priority image: paints fast (good LCP) and sits under the video. */}
        {hero.video.poster && <Img media={{ src: hero.video.poster, alt: "" }} priority sizes="100vw" quality={60} />}
        <VideoPlayer media={hero.video} priority controlsClassName="right-[var(--gutter)] top-[calc(var(--header-h)+0.5rem)]" />
      </motion.div>
      {/* Warm dawn wash + legibility gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-ink/45 via-transparent to-ink/70" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-coral/25 to-transparent mix-blend-soft-light" aria-hidden />
      <SunArcs className="absolute -bottom-[2vw] left-1/2 w-[120vw] max-w-none -translate-x-1/2 opacity-30" rings={7} color="var(--color-gold)" />

      <motion.div style={{ y: titleY }} className="px-gutter relative flex h-full flex-col justify-end pb-[max(1.25rem,2vw)]">
        <div className="mb-3 flex items-end justify-between gap-6 text-sm font-medium md:text-base">
          {hero.tags.map((group, gi) => (
            <ul key={gi} className={gi === 1 ? "flex gap-x-5 text-right" : "flex gap-x-5"}>
              {group.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  {gi === 0 && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />}
                  {t}
                  {gi === 1 && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <h1 id="hero-title" className="t-mega flex flex-wrap justify-between gap-x-[3vw]">
          <span className="sr-only">Sol Nascente: private journeys across Brazil</span>
          <RiseLetters word={hero.titleTop} delay={0.05} />
          <RiseLetters word={hero.titleBottom} delay={0.15} />
        </h1>
      </motion.div>
    </section>
  );
}
