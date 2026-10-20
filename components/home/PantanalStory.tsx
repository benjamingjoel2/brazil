"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { pantanalDay } from "@/data/home";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/**
 * Five full-screen stages over a sticky stack of videos. The active stage's video
 * fades in; the frame opens from an arch into full bleed as the story begins.
 */
export function PantanalStory() {
  const root = useRef<HTMLElement>(null);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start end", "start start"] });
  const inset = useTransform(scrollYProgress, [0.2, 1], [reduce ? "0%" : "8%", "0%"]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.stage));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    panels.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  const stages = pantanalDay.stages;

  return (
    <section id="a-day" ref={root} aria-labelledby="a-day-title" className="relative bg-forest-deep text-off">
      {/* Sticky video layer */}
      <div className="sticky top-0 -mb-[100svh] h-svh overflow-hidden" aria-hidden={false}>
        <motion.div style={{ left: inset, right: inset }} className="absolute inset-y-0 overflow-hidden">
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: active === i ? 1 : 0 }}
              aria-hidden={active !== i}
            >
              <VideoPlayer media={s.video} active={active === i} showControl={active === i} controlsClassName="right-[var(--gutter)] bottom-[calc(var(--gutter)+4.5rem)] md:bottom-6" />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-forest-deep/85 via-forest-deep/20 to-forest-deep/40" />
        </motion.div>

        {/* Progress: five suns down the side */}
        <ol className="absolute left-[var(--gutter)] top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex" aria-label="Stages of the day">
          {stages.map((s, i) => (
            <li key={s.title} className="flex items-center gap-3 text-sm">
              <svg viewBox="0 0 20 11" className="h-3 w-6" aria-hidden>
                <path d="M2 10a8 8 0 0 1 16 0Z" fill={i <= active ? "var(--color-gold)" : "none"} stroke="var(--color-gold)" strokeWidth="1.5" />
              </svg>
              <span className={i === active ? "font-semibold text-off" : "text-off/55"}>{s.title}</span>
            </li>
          ))}
        </ol>

        <div className="absolute bottom-[var(--gutter)] right-[var(--gutter)] z-10 flex max-w-xs items-center gap-3 rounded-pill bg-off/12 py-2 pl-4 pr-2 text-sm backdrop-blur-md">
          <span className="text-off/85">Live it on</span>
          <Link href={pantanalDay.cta.href} className="rounded-pill bg-gold px-4 py-2 font-semibold text-ink transition hover:bg-coral">
            {pantanalDay.cta.label} →
          </Link>
        </div>
      </div>

      {/* Scrolling text panels */}
      <div className="relative">
        <div className="px-gutter grid h-svh place-items-center text-center">
          <div className="max-w-3xl">
            <h2 id="a-day-title" className="t-h1">
              {pantanalDay.heading}
            </h2>
            <p className="t-lead mx-auto mt-6 max-w-2xl text-off/90">{pantanalDay.intro}</p>
          </div>
        </div>
        {stages.map((s, i) => (
          <div
            key={s.title}
            ref={(el) => {
              panels.current[i] = el;
            }}
            data-stage={i}
            className="px-gutter flex h-svh items-end pb-[18vh] md:pb-[12vh] md:pl-[16rem]"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6 }}
              transition={{ type: "spring", stiffness: 70, damping: 16 }}
              className="max-w-2xl"
            >
              <p className="t-label text-gold">
                {String(i + 1).padStart(2, "0")} · {s.title}
              </p>
              <h3 className="t-h2 mt-3">{s.line}</h3>
              <p className="mt-4 max-w-xl text-off/90 md:text-lg">{s.body}</p>
            </motion.div>
          </div>
        ))}
        <div className="h-[30svh]" />
      </div>
    </section>
  );
}
