"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import type { FaqItem } from "@/lib/types";
import { Img } from "@/components/ui/Img";
import { Verify } from "@/components/ui/Badges";
import { RiseWords } from "@/components/ui/Reveal";

export function FaqList({ items, idPrefix = "faq" }: { items: FaqItem[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <ul className="border-b-2 border-forest/15">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;
        return (
          <li key={f.q} className="border-t-2 border-forest/15">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="flex items-center gap-3">
                  <span aria-hidden className={clsx("h-2.5 w-2.5 shrink-0 rounded-full transition-colors", isOpen ? "bg-coral" : "bg-forest/20")} />
                  <span className="t-h4 text-forest">{f.q}</span>
                </span>
                <span
                  aria-hidden
                  className={clsx(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-forest text-lg text-forest transition-transform duration-500",
                    isOpen && "rotate-45 bg-forest text-off",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:pl-6">
                    {f.images && (
                      <div className="relative mx-auto w-full max-w-sm pb-6" aria-hidden>
                        <motion.div
                          initial={reduce ? false : { rotate: 0, y: 30 }}
                          animate={{ rotate: -5, y: 0 }}
                          transition={{ type: "spring", stiffness: 80, damping: 14 }}
                          className="arch-top relative z-10 aspect-[4/5] w-[65%] overflow-hidden shadow-xl shadow-forest/15"
                        >
                          <Img media={f.images[0]} sizes="25vw" />
                        </motion.div>
                        <motion.div
                          initial={reduce ? false : { rotate: 0, y: 60 }}
                          animate={{ rotate: 5, y: 0 }}
                          transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.08 }}
                          className="relative -mt-[30%] ml-auto aspect-square w-[48%] overflow-hidden rounded-full shadow-xl shadow-forest/15"
                        >
                          <Img media={f.images[1]} sizes="20vw" />
                        </motion.div>
                      </div>
                    )}
                    <div className="space-y-4 text-ink/85 md:pt-2">
                      {f.a.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                      {f.verify && (
                        <p className="flex items-start gap-2 text-sm text-coral-deep">
                          <Verify className="mt-0.5 shrink-0" />
                          <span>{f.verify}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-gutter py-section">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <header className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <h2 id="faq-title" className="t-h2 text-forest">
            <RiseWords text="FAQ" />
          </h2>
          <p className="mt-5 max-w-sm text-ink/85">
            Good questions, honest answers. Anything marked <Verify /> changes over time, so check it against official sources before you travel.
          </p>
        </header>
        <FaqList items={items} />
      </div>
    </section>
  );
}
