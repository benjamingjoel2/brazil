"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { carnivalWeek, formatCarnivalDate } from "@/data/carnival";
import { carnivalSection } from "@/data/home";
import { carnival } from "@/config/carnival";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { Reveal, RiseWords } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Day-by-day carousel. A native horizontal scroller (swipe, trackpad, keyboard),
 * with a slow drift until the visitor interacts. No drift under reduced motion.
 */
export function CarnivalWeek() {
  const days = carnivalWeek();
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [drift, setDrift] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (reduce || !drift || hover) return;
    const el = track.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const step = (t: number) => {
      const dt = t - last;
      last = t;
      if (el.scrollLeft + el.clientWidth < el.scrollWidth - 2) el.scrollLeft += dt * 0.03;
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(([e]) => {
      cancelAnimationFrame(raf);
      if (e.isIntersecting) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduce, drift, hover]);

  const page = (d: number) => {
    setDrift(false);
    const el = track.current;
    if (el) el.scrollBy({ left: d * Math.min(el.clientWidth * 0.8, 440), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="carnival" aria-labelledby="carnival-title" className="py-section overflow-hidden">
      <div className="px-gutter mb-10 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="t-label mb-4 flex flex-wrap items-center gap-2 text-coral-deep">
            Carnival {carnival.year} · {formatCarnivalDate(carnival.friday)} – {formatCarnivalDate(carnival.ashWednesday)}
            <Verify note={carnival.note} />
          </p>
          <h2 id="carnival-title" className="t-h2 max-w-4xl text-forest">
            <RiseWords text={carnivalSection.heading} />
          </h2>
        </div>
        <Reveal delay={0.1}>
          <p className="text-ink/85 md:text-lg">{carnivalSection.subtitle}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <ButtonLink href="/carnival">Find your Carnival</ButtonLink>
            <div className="ml-auto flex gap-2">
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => page(d)}
                  aria-label={d < 0 ? "Previous day" : "Next day"}
                  aria-controls="carnival-track"
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-forest text-forest transition hover:bg-forest hover:text-off"
                >
                  <span aria-hidden>{d < 0 ? "←" : "→"}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <ul
        id="carnival-track"
        ref={track}
        tabIndex={0}
        aria-label="Carnival week, one card per day"
        onPointerDown={() => setDrift(false)}
        onWheel={() => setDrift(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setDrift(false)}
        className="px-gutter no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-(--gutter) pb-4 outline-none"
        data-lenis-prevent-wheel
      >
        {days.map((d, i) => (
          <li key={d.date} className="group relative h-[34rem] w-[82vw] shrink-0 snap-start overflow-hidden bg-forest text-off sm:w-[24rem] md:h-[38rem]">
            <Img media={d.image} sizes="(min-width: 640px) 24rem, 82vw" className="transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-b from-ink/30 via-ink/20 to-ink/85" />
            <div className="absolute inset-x-0 top-[22%] px-6 text-center">
              <p className="t-label text-gold">
                Day {i + 1} · {d.weekday}
              </p>
              <p className="mt-1 text-sm text-off/80">{formatCarnivalDate(d.date, { weekday: "short" })}</p>
              <h3 className="t-h3 mt-3">{d.title}</h3>
            </div>
            <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-sm">
              <p className="text-off/90">{d.happening}</p>
              <p className="bg-off/12 p-3 text-off backdrop-blur-sm">
                <span className="t-label mb-1 block text-gold">How we&apos;d spend it</span>
                {d.ourWay}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
