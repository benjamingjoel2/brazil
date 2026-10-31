"use client";

import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Stay } from "@/lib/types";
import { Img } from "@/components/ui/Img";
import { SpecTable } from "@/components/ui/SpecTable";
import { Placeholder } from "@/components/ui/Badges";
import { ButtonLink } from "@/components/ui/Button";
import { stayTypeLabel } from "@/data/stays";

export function StaySlider({ stays, label = "Stays" }: { stays: Stay[]; label?: string }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + stays.length) % stays.length);
  };
  const s = stays[index];

  return (
    <div
      className="px-gutter py-section"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="mb-8 flex items-center justify-between">
        <p className="t-label text-forest/70">
          {label} · {String(index + 1).padStart(2, "0")} / {String(stays.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => go(d)}
              aria-label={d < 0 ? "Previous stay" : "Next stay"}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-forest text-forest transition hover:bg-forest hover:text-off"
            >
              <span aria-hidden>{d < 0 ? "←" : "→"}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative" aria-live="polite">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.article
            key={s.slug}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${stays.length}: ${s.name}`}
            custom={dir}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -60 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="grid gap-6 lg:grid-cols-[1.6fr_1.2fr_0.8fr] lg:gap-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Img media={s.images[0]} sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="t-label mb-2 text-coral-deep">{stayTypeLabel[s.type]}</p>
                <h3 className="t-h2 text-forest">
                  {s.name} <Placeholder label="example" className="ml-1 align-middle" />
                </h3>
              </div>
              <p className="text-ink/85">{s.description}</p>
              <ButtonLink href={`/plan?stay=${s.slug}`} variant="forest" className="self-start">
                Plan a stay here
              </ButtonLink>
              <SpecTable
                className="mt-auto"
                rows={[
                  { label: "Type", value: stayTypeLabel[s.type] },
                  { label: "Setting", value: s.setting },
                  { label: "Rooms", value: s.rooms },
                  { label: "Guests", value: s.guests },
                  { label: "Best for", value: s.bestFor },
                ]}
              />
            </div>
            <div className="relative hidden aspect-[3/4] self-end overflow-hidden lg:block">
              <Img media={s.images[1]} sizes="20vw" />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2" role="group" aria-label="Choose a stay">
        {stays.map((x, i) => (
          <button
            key={x.slug}
            type="button"
            onClick={() => {
              setDir(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={`Show ${x.name}`}
            aria-current={i === index}
            className="group grid h-6 min-w-6 place-items-center"
          >
            <span className={`block h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-coral" : "w-2.5 bg-forest/30 group-hover:bg-forest/60"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
