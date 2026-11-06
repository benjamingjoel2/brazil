"use client";

import Link from "next/link";
import { m as motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sunriseCoast } from "@/data/sunrise-coast";
import { formatTime, sunTimes } from "@/lib/solar";
import { Img } from "@/components/ui/Img";

function todayUTC() {
  const local = new Date(Date.now() - 3 * 3_600_000);
  return new Date(Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate()));
}

/** Scrolling story: a sticky map follows the sunrise south, one stop per state. */
export function SunriseCoastStory({ destinationNames }: { destinationNames: Record<string, string> }) {
  const [active, setActive] = useState(0);
  const [times, setTimes] = useState<{ time: string; after: number }[] | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    const day = todayUTC();
    const rises = sunriseCoast.map((s) => sunTimes(day, s.coords[0], s.coords[1]).sunrise);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- times depend on the visitor's "today"
    setTimes(rises.map((r) => ({ time: formatTime(r, "America/Sao_Paulo"), after: Math.round((r.getTime() - rises[0].getTime()) / 60000) })));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="hidden lg:block">
        <ol className="sticky top-[calc(var(--header-h)+1.5rem)] divide-y divide-forest/15 border-y border-forest/15" aria-label="The five sunrise stops">
          {sunriseCoast.map((s, i) => (
            <li key={s.state} className={`flex items-baseline gap-4 py-4 transition-colors duration-500 ${i === active ? "text-coral-deep" : "text-forest/75"}`}>
              <span className="t-label w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className={`font-display text-xl ${i === active ? "font-bold" : "font-semibold"}`}>{s.state}</span>
              {times && <span className="ml-auto text-sm tabular-nums">{times[i].time}</span>}
            </li>
          ))}
        </ol>
      </div>

      <ol className="grid gap-[12vh]">
        {sunriseCoast.map((s, i) => (
          <li
            key={s.state}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
            className="flex min-h-[80svh] flex-col justify-center"
          >
            <motion.article
              initial={reduce ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 70, damping: 16 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img media={s.image} sizes="(min-width: 1024px) 55vw, 100vw" />
                <div className="absolute left-4 top-4 rounded-pill bg-off/90 px-4 py-2 text-sm font-semibold text-forest backdrop-blur">
                  {String(i + 1).padStart(2, "0")} · {s.state}
                </div>
              </div>
              <p className="t-label mt-6 text-coral-deep">
                {s.place}
                {times && (
                  <>
                    {" "}· Sunrise today {times[i].time}
                    {i > 0 && (times[i].after > 1 ? `, ${times[i].after} min after Ponta do Seixas` : ", moments after Ponta do Seixas")}
                  </>
                )}
              </p>
              <h2 className="t-h2 mt-3 text-forest">{s.line}</h2>
              <p className="mt-4 max-w-2xl text-ink/85 md:text-lg">{s.body}</p>
              <Link href={`/destinations/${s.destination}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-atlantic underline-offset-4 hover:underline">
                {destinationNames[s.destination]} <span aria-hidden>→</span>
              </Link>
            </motion.article>
          </li>
        ))}
      </ol>
    </div>
  );
}
