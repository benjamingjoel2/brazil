"use client";

import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { biomes } from "@/data/biomes";
import { brazilMap } from "@/lib/map";
import { rangeLabel } from "@/lib/seasons";
import type { BiomeSlug } from "@/lib/types";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { LinkList } from "@/components/ui/Cards";

type LinkItem = { href: string; label: string };

/**
 * Interactive biome map. Each region is a focusable button (Enter/Space to choose,
 * arrow keys to move); a plain button list sits beside it as a simple fallback.
 */
export function BiomeExplorer({ links }: { links: Record<BiomeSlug, { where: LinkItem[]; journeys: LinkItem[] }> }) {
  const [active, setActive] = useState<BiomeSlug>("amazon");
  const [hover, setHover] = useState<BiomeSlug | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1) as BiomeSlug;
      if (biomes.some((b) => b.slug === h)) setActive(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const choose = (slug: BiomeSlug) => {
    setActive(slug);
    history.replaceState(null, "", `#${slug}`);
  };
  const move = (d: number) => {
    const i = biomes.findIndex((b) => b.slug === active);
    choose(biomes[(i + d + biomes.length) % biomes.length].slug);
  };
  const b = biomes.find((x) => x.slug === active)!;
  const lit = hover ?? active;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
        <svg
          viewBox={`0 0 ${brazilMap.width} ${brazilMap.height}`}
          className="w-full"
          role="group"
          aria-label="Map of Brazil's six biomes. Choose a biome."
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              move(1);
            }
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          <defs>
            <clipPath id="brazil-clip">
              <path d={brazilMap.outline} />
            </clipPath>
          </defs>
          <path d={brazilMap.outline} fill="var(--color-sand)" />
          <g clipPath="url(#brazil-clip)">
            {biomes.map((x) => (
              <path
                key={x.slug}
                d={brazilMap.biomes[x.slug]}
                fill={x.color}
                role="button"
                tabIndex={x.slug === active ? 0 : -1}
                aria-label={`${x.name}: ${x.short}`}
                aria-pressed={x.slug === active}
                onClick={() => choose(x.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    choose(x.slug);
                  }
                }}
                onMouseEnter={() => setHover(x.slug)}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer outline-none transition-[opacity,filter] duration-300 focus-visible:brightness-125"
                style={{ opacity: lit === x.slug ? 1 : 0.35 }}
                stroke="var(--color-off)"
                strokeWidth={3}
              />
            ))}
          </g>
          <path d={brazilMap.outline} fill="none" stroke="var(--color-forest)" strokeOpacity="0.4" strokeWidth="2.5" />
        </svg>
        <p className="mt-2 text-xs text-ink/70">Simplified map; biome boundaries are approximate (after IBGE).</p>

        <div className="mt-6" role="group" aria-label="Biomes">
          <ul className="flex flex-wrap gap-2">
            {biomes.map((x) => (
              <li key={x.slug}>
                <button
                  type="button"
                  aria-pressed={x.slug === active}
                  onClick={() => choose(x.slug)}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-pill border-2 px-3.5 py-1.5 text-sm font-semibold transition",
                    x.slug === active ? "border-forest bg-forest text-off" : "border-forest/20 text-forest hover:border-forest",
                  )}
                >
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: x.color }} />
                  {x.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={b.slug}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Img media={b.image} sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <p className="t-label mt-6 flex items-center gap-2 text-coral-deep">
              <span aria-hidden className="h-3 w-3 rounded-full" style={{ background: b.color }} />
              {b.area}
            </p>
            <h2 className="t-h2 mt-2 text-forest">{b.name}</h2>
            <p className="t-lead mt-4 text-ink/90">{b.summary}</p>

            <dl className="mt-8 grid gap-6">
              <div>
                <dt className="t-label mb-2 text-forest/75">What it looks like</dt>
                <dd>{b.landscape}</dd>
              </div>
              <div>
                <dt className="t-label mb-2 text-forest/75">What lives there</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {b.wildlife.map((w) => (
                      <li key={w} className="rounded-pill bg-sand px-3 py-1 text-sm">
                        {w}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="t-label mb-2 flex items-center gap-2 text-forest/75">
                  Best months <Verify />
                </dt>
                <dd>
                  <span className="font-semibold text-forest">{b.bestMonths.map(rangeLabel).join(" & ")}</span>. {b.bestMonthsNote}
                </dd>
              </div>
              <div>
                <dt className="t-label mb-2 text-forest/75">Where we go</dt>
                <dd>
                  <LinkList items={links[b.slug].where} />
                </dd>
              </div>
              <div>
                <dt className="t-label mb-2 text-forest/75">Journeys</dt>
                <dd>
                  <LinkList items={links[b.slug].journeys} />
                </dd>
              </div>
            </dl>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
