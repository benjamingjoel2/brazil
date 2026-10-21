"use client";

import { m as motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { portraitQuote } from "@/data/home";
import { carnival } from "@/config/carnival";
import { formatCarnivalDate } from "@/data/carnival";
import { Img } from "@/components/ui/Img";
import { Placeholder, Verify } from "@/components/ui/Badges";
import { ButtonLink } from "@/components/ui/Button";

function Word({ w, i, total, progress }: { w: string; i: number; total: number; progress: MotionValue<number> }) {
  const start = 0.1 + (i / total) * 0.6;
  const opacity = useTransform(progress, [start, start + 0.04], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {w}{" "}
    </motion.span>
  );
}

export function PortraitQuote() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const words = portraitQuote.quote.split(" ");

  return (
    <section ref={ref} aria-label="A word from a local guide" className={reduce ? "relative" : "relative h-[260vh]"}>
      <div className={reduce ? "relative min-h-svh overflow-hidden" : "sticky top-0 h-svh overflow-hidden"}>
        <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0">
          <Img media={portraitQuote.image} sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-r from-forest-deep/90 via-forest-deep/55 to-transparent" />

        <div className="px-gutter relative flex h-full min-h-svh flex-col justify-between pb-8 pt-[calc(var(--header-h)+2rem)] text-off">
          <figure className="max-w-2xl">
            <span aria-hidden className="block font-display text-7xl leading-none text-gold">
              “
            </span>
            <blockquote className="t-h3 font-medium leading-snug">
              {reduce ? (
                portraitQuote.quote
              ) : (
                <>
                  <span className="sr-only">{portraitQuote.quote}</span>
                  <span aria-hidden>
                    {words.map((w, i) => (
                      <Word key={i} w={w} i={i} total={words.length} progress={scrollYProgress} />
                    ))}
                  </span>
                </>
              )}
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold">{portraitQuote.name}</span>
              <span className="text-off/75">{portraitQuote.role}</span>
              <Placeholder label="placeholder quote" />
            </figcaption>
          </figure>

          <div className="flex flex-col gap-4 border-t border-off/25 pt-5 md:flex-row md:items-center md:justify-between">
            <p className="flex flex-wrap items-center gap-2 text-off/90">
              Next Carnival: {formatCarnivalDate(carnival.friday, { month: "long" })} –{" "}
              {formatCarnivalDate(carnival.ashWednesday, { month: "long", year: true })}
              <Verify note={carnival.note} />
            </p>
            <ButtonLink href="/plan" variant="sun" className="self-start">
              Plan with us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
