"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import type { Month, WaterRegion } from "@/lib/types";
import { inRange, monthShort, waterStatus } from "@/lib/seasons";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { LinkList } from "@/components/ui/Cards";

type LinkItem = { href: string; label: string };

/** High water / Low water toggle for one region, with a 12-month strip. */
export function WaterToggle({
  region,
  links,
}: {
  region: WaterRegion;
  links: Record<"high" | "low", { stays: LinkItem[]; journeys: LinkItem[] }>;
}) {
  const [phase, setPhase] = useState<"high" | "low">("high");
  const [month, setMonth] = useState<Month | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const m = (new Date().getMonth() + 1) as Month;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- today's month is only known in the browser
    setMonth(m);
    const now = waterStatus(region, m).phase;
    if (now) setPhase(now);
  }, [region]);

  const p = region.phases.find((x) => x.id === phase)!;
  const current = month ? waterStatus(region, month) : null;

  return (
    <article id={region.id} className="scroll-mt-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="t-h2 text-forest">{region.name}</h2>
          <p className="t-lead mt-3 text-ink/85">{region.intro}</p>
          {current && (
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink/75">
              Right now, typically: <strong className="text-forest">{current.label}</strong> <Verify />
            </p>
          )}
        </div>
        <div role="radiogroup" aria-label={`${region.name}: choose a season`} className="inline-flex rounded-pill bg-sand p-1.5">
          {region.phases.map((x) => (
            <button
              key={x.id}
              type="button"
              role="radio"
              aria-checked={phase === x.id}
              onClick={() => setPhase(x.id)}
              onKeyDown={(e) => {
                if (["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key)) {
                  e.preventDefault();
                  setPhase(phase === "high" ? "low" : "high");
                }
              }}
              tabIndex={phase === x.id ? 0 : -1}
              className={clsx(
                "rounded-pill px-5 py-2.5 text-sm font-semibold transition",
                phase === x.id ? (x.id === "high" ? "bg-atlantic text-off" : "bg-coral text-ink") : "text-forest hover:bg-off",
              )}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      {/* Month strip */}
      <ol className="mb-8 grid grid-cols-12 gap-1" aria-label={`${p.label}: ${p.monthsLabel}`}>
        {monthShort.map((m, i) => {
          const on = inRange((i + 1) as Month, p.months);
          return (
            <li key={m} className="text-center">
              <span
                aria-hidden
                className={clsx(
                  "block h-3 rounded-full transition-colors duration-500",
                  on ? (phase === "high" ? "bg-atlantic" : "bg-coral") : "bg-sand",
                  month === i + 1 && "ring-2 ring-gold ring-offset-2 ring-offset-off",
                )}
              />
              <span className={clsx("mt-1 block text-[0.65rem] font-semibold", on ? "text-forest" : "text-ink/65")}>{m.slice(0, 1)}<span className="hidden sm:inline">{m.slice(1)}</span></span>
            </li>
          );
        })}
      </ol>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden bg-forest">
          <AnimatePresence initial={false}>
            <motion.div
              key={p.id}
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0.01 : 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Img media={p.image} sizes="(min-width: 1024px) 55vw, 100vw" />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={p.id}
            aria-live="polite"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
          >
            <p className="t-label flex flex-wrap items-center gap-2 text-coral-deep">
              {p.monthsLabel} <Verify />
            </p>
            <h3 className="t-h3 mt-3 text-forest">{p.headline}</h3>
            <p className="mt-4 text-ink/85">{p.body}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <span aria-hidden className={clsx("mt-1.5 h-2 w-2 shrink-0 rounded-full", phase === "high" ? "bg-atlantic" : "bg-coral")} />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4">
              <div>
                <p className="t-label mb-2 text-forest/75">Where to stay</p>
                <LinkList items={links[p.id].stays} />
              </div>
              <div>
                <p className="t-label mb-2 text-forest/75">Journeys</p>
                <LinkList items={links[p.id].journeys} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
}
