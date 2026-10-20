"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sunriseCoast } from "@/data/sunrise-coast";
import { brazilMap, project } from "@/lib/map";
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

  const pts = sunriseCoast.map((s) => project(s.coords[0], s.coords[1]));
  // Crop the map to the coast: from just north of Paraíba to Santa Catarina.
  const [x0, y0] = project(-1, -52);
  const [x1, y1] = project(-30, -27);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-[calc(var(--header-h)+1.5rem)] h-[calc(100svh-var(--header-h)-3rem)]">
          <svg viewBox={`${x0} ${y0} ${x1 - x0} ${y1 - y0}`} className="h-full w-full" role="img" aria-label="Map of Brazil's Atlantic coast with the five sunrise stops">
            <defs>
              <radialGradient id="sun-glow">
                <stop offset="0" stopColor="var(--color-gold)" stopOpacity="0.9" />
                <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d={brazilMap.outline} fill="var(--color-sand)" stroke="var(--color-forest)" strokeOpacity="0.3" strokeWidth="2" />
            <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke="var(--color-coral)" strokeWidth="3" strokeDasharray="6 10" strokeLinecap="round" />
            {pts.map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y})`}>
                <circle r={i === active ? 12 : 8} fill={i <= active ? "var(--color-coral)" : "var(--color-off)"} stroke="var(--color-coral)" strokeWidth="3" className="transition-all duration-500" />
                <text x="22" y={i === 1 ? 34 : i === 0 ? -6 : 8} fontSize="26" fontWeight={i === active ? 700 : 500} fill="var(--color-forest)" opacity={i === active ? 1 : 0.6}>
                  {sunriseCoast[i].state}
                </text>
              </g>
            ))}
            <motion.circle
              r="60"
              fill="url(#sun-glow)"
              animate={{ cx: pts[active][0], cy: pts[active][1] }}
              initial={false}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 60, damping: 16 }}
            />
          </svg>
        </div>
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
