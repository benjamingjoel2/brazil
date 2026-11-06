"use client";

import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { biomes } from "@/data/biomes";
import { rangeLabel } from "@/lib/seasons";
import type { BiomeSlug } from "@/lib/types";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { LinkList } from "@/components/ui/Cards";

type LinkItem = { href: string; label: string };

/**
 * Biome explorer: a plain list of the six biomes beside the chosen biome's photo and details.
 */
export function BiomeExplorer({ links }: { links: Record<BiomeSlug, { where: LinkItem[]; journeys: LinkItem[] }> }) {
  const [active, setActive] = useState<BiomeSlug>("amazon");
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
  const b = biomes.find((x) => x.slug === active)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
      <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
        <div role="group" aria-label="Biomes">
          <ul className="divide-y divide-forest/15 border-y border-forest/15">
            {biomes.map((x) => (
              <li key={x.slug}>
                <button
                  type="button"
                  aria-pressed={x.slug === active}
                  onClick={() => choose(x.slug)}
                  className={clsx(
                    "flex w-full items-center gap-3 py-3 text-left font-display text-lg font-semibold transition-colors",
                    x.slug === active ? "text-coral-deep" : "text-forest hover:text-coral-deep",
                  )}
                >
                  <span aria-hidden className="h-3 w-3 shrink-0 rounded-full" style={{ background: x.color }} />
                  <span className={clsx(x.slug === active && "underline decoration-2 underline-offset-4")}>{x.name}</span>
                  <span className="ml-auto text-xs font-normal text-ink/70">{x.area}</span>
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
