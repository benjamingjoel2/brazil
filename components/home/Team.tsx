"use client";

import { LayoutGroup, m as motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { team } from "@/data/team";
import { teamSection } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Placeholder } from "@/components/ui/Badges";
import { RiseWords } from "@/components/ui/Reveal";

export function Team() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const transition = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 120, damping: 20 };

  return (
    <section id="team" aria-labelledby="team-title" className="px-gutter py-section">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <header className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <h2 id="team-title" className="t-h2 text-forest">
            <RiseWords text={teamSection.heading} />
          </h2>
          <p className="mt-5 max-w-sm text-ink/85">{teamSection.subtitle}</p>
          <Placeholder className="mt-4" label="placeholder team" />
        </header>

        <LayoutGroup>
          <ul className="grid grid-flow-dense grid-cols-2 gap-4 md:grid-cols-3">
            {team.map((m, i) => {
              const isOpen = open === i;
              const bioId = `bio-${i}`;
              return (
                <motion.li
                  layout
                  transition={transition}
                  key={m.name}
                  className={clsx(
                    "overflow-hidden bg-sand",
                    isOpen && "col-span-2 md:col-span-3",
                  )}
                >
                  <div className={clsx("grid", isOpen && "md:grid-cols-[1fr_1.4fr]")}>
                    <motion.div layout="position" className={clsx("relative overflow-hidden", isOpen ? "aspect-[4/3] md:aspect-auto md:min-h-[26rem]" : "aspect-[3/4]")}>
                      <Img media={m.photo} sizes={isOpen ? "40vw" : "(min-width: 768px) 20vw, 50vw"} />
                    </motion.div>
                    <div className="flex flex-col gap-3 p-4 md:p-5">
                      <div>
                        <h3 className="t-h4 text-forest">{m.name}</h3>
                        <p className="text-sm text-ink/75">{m.role}</p>
                      </div>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={bioId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group mt-auto inline-flex items-center gap-2 self-start text-sm font-semibold text-coral-deep"
                      >
                        <span
                          aria-hidden
                          className={clsx("grid h-6 w-6 place-items-center rounded-full border-2 border-current transition-transform", isOpen && "rotate-45")}
                        >
                          +
                        </span>
                        {isOpen ? "Close" : "Read bio"}
                        <span className="sr-only"> for {m.name}</span>
                      </button>
                      <div id={bioId} hidden={!isOpen} className="space-y-3 text-ink/85">
                        <p className="t-lead text-forest">{m.intro}</p>
                        {m.bio.map((p, j) => (
                          <p key={j}>{p}</p>
                        ))}
                        <p className="t-label text-forest/75">Based in {m.base}</p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </LayoutGroup>
      </div>
    </section>
  );
}
