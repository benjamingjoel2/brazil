"use client";

import { m as motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { values, valuesImage } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { SunArcs } from "@/components/ui/SunArcs";

function ValueSlide({ v, i, progress }: { v: (typeof values)[number]; i: number; progress: MotionValue<number> }) {
  // Each value owns a third of the 0.3 → 1 range.
  const start = 0.3 + i * 0.233;
  const mid = start + 0.11;
  const end = start + 0.233;
  const isLast = i === values.length - 1;
  const opacity = useTransform(progress, isLast ? [start, mid, 1] : [start, mid, end - 0.03, end], isLast ? [0, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid], [80, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      <p className="t-label mb-3 text-gold">{v.meaning}</p>
      <h3 className="t-h1 text-off drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)]">{v.name}</h3>
      <p className="mt-5 max-w-xl text-base text-off/90 md:text-lg">{v.body}</p>
    </motion.div>
  );
}

export function Values() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const inset = useTransform(scrollYProgress, [0, 0.25], ["12%", "0%"]);
  const insetTop = useTransform(scrollYProgress, [0, 0.25], ["22%", "0%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.27], [1, 0]);
  const arcsScale = useTransform(scrollYProgress, [0.2, 1], [0.7, 1.3]);

  if (reduce) {
    return (
      <section id="values" aria-labelledby="values-title" className="relative bg-forest text-off">
        <div className="relative h-[60svh]">
          <Img media={valuesImage} sizes="100vw" />
          <div className="absolute inset-0 bg-forest/50" />
          <h2 id="values-title" className="t-h2 absolute inset-0 grid place-items-center">Values</h2>
        </div>
        <div className="px-gutter py-section grid gap-12 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.name}>
              <p className="t-label mb-2 text-gold">{v.meaning}</p>
              <h3 className="t-h2">{v.name}</h3>
              <p className="mt-4 text-off/85">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="values" aria-labelledby="values-title" className="relative h-[330vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.h2
          id="values-title"
          style={{ opacity: titleOpacity }}
          className="t-h2 absolute inset-x-0 top-[calc(var(--header-h)+3vh)] z-10 text-center text-forest"
        >
          Values
        </motion.h2>
        <motion.div
          style={{ left: inset, right: inset, top: insetTop, bottom: 0 }}
          className="absolute overflow-hidden bg-forest"
        >
          <Img media={valuesImage} sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-b from-forest/30 via-forest/45 to-forest/75" />
          <motion.div style={{ scale: arcsScale }} className="absolute inset-x-0 bottom-0 flex justify-center" aria-hidden>
            <SunArcs className="w-[110vw] max-w-none opacity-40" rings={6} color="var(--color-gold)" />
          </motion.div>
          {values.map((v, i) => (
            <ValueSlide key={v.name} v={v} i={i} progress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
