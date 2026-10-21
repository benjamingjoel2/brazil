"use client";

import Link from "next/link";
import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import clsx from "clsx";
import { carnivalCities, carnivalQuiz } from "@/data/carnival";
import type { CarnivalCity } from "@/lib/types";
import { Img } from "@/components/ui/Img";
import { buttonClass } from "@/components/ui/Button";

type Slug = CarnivalCity["slug"];

export function CarnivalQuiz({ journeyTitles }: { journeyTitles: Record<string, string> }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const reduce = useReducedMotion();
  const box = useRef<HTMLDivElement>(null);
  const done = step >= carnivalQuiz.length;

  const scores = answers.reduce<Record<Slug, number>>(
    (acc, a, qi) => {
      const opt = carnivalQuiz[qi].options[a];
      for (const k of Object.keys(opt.scores) as Slug[]) acc[k] += opt.scores[k];
      return acc;
    },
    { rio: 0, salvador: 0, "olinda-recife": 0, escape: 0 },
  );
  const ranked = (Object.keys(scores) as Slug[]).sort((a, b) => scores[b] - scores[a]);
  const winner = carnivalCities.find((c) => c.slug === ranked[0])!;
  const runnerUp = carnivalCities.find((c) => c.slug === ranked[1])!;

  const answer = (i: number) => {
    setAnswers((a) => [...a.slice(0, step), i]);
    setStep((s) => s + 1);
    requestAnimationFrame(() => box.current?.focus());
  };
  const restart = () => {
    setAnswers([]);
    setStep(0);
    requestAnimationFrame(() => box.current?.focus());
  };

  const anim = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 } };

  return (
    <div ref={box} tabIndex={-1} className="bg-forest p-6 text-off outline-none md:p-12" aria-live="polite">
      <div className="mb-8 flex items-center justify-between gap-4">
        <ol className="flex gap-2" aria-label="Progress">
          {carnivalQuiz.map((q, i) => (
            <li key={q.id} aria-current={i === step ? "step" : undefined}>
              <span className="sr-only">
                Question {i + 1} {i < step ? "answered" : ""}
              </span>
              <svg viewBox="0 0 20 11" className="h-3.5 w-7" aria-hidden>
                <path d="M2 10a8 8 0 0 1 16 0Z" fill={i < step ? "var(--color-gold)" : "none"} stroke="var(--color-gold)" strokeWidth="1.5" />
              </svg>
            </li>
          ))}
        </ol>
        {step > 0 && (
          <button type="button" onClick={restart} className="text-sm font-semibold text-gold underline-offset-4 hover:underline">
            Start again
          </button>
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!done ? (
          <motion.fieldset key={step} {...anim} transition={{ type: "spring", stiffness: 110, damping: 18 }}>
            <legend className="t-h2 mb-8 max-w-3xl">{carnivalQuiz[step].q}</legend>
            <div className="grid gap-3 md:grid-cols-3">
              {carnivalQuiz[step].options.map((o, i) => (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => answer(i)}
                  className={clsx(
                    "group flex min-h-28 items-end justify-between border-2 border-off/25 p-5 text-left text-lg font-semibold transition",
                    "hover:-translate-y-1 hover:border-gold hover:bg-off hover:text-forest",
                    answers[step] === i && "border-gold",
                  )}
                >
                  {o.label}
                  <span aria-hidden className="text-gold transition-transform group-hover:translate-x-1 group-hover:text-coral-deep">
                    →
                  </span>
                </button>
              ))}
            </div>
            {step > 0 && (
              <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-6 text-sm text-off/75 hover:text-off">
                ← Back
              </button>
            )}
          </motion.fieldset>
        ) : (
          <motion.div key="result" {...anim} transition={{ type: "spring", stiffness: 90, damping: 18 }}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Img media={winner.image} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
              <div>
                <p className="t-label text-gold">Your Carnival</p>
                <h2 className="t-h1 mt-2">{winner.city}</h2>
                <p className="t-lead mt-4 text-off/90">{winner.oneLiner}</p>
                <dl className="mt-8 grid gap-5 text-off/90">
                  <div>
                    <dt className="t-label mb-1 text-gold">What it&apos;s like</dt>
                    <dd>{winner.whatItsLike}</dd>
                  </div>
                  <div>
                    <dt className="t-label mb-1 text-gold">Crowds</dt>
                    <dd>{winner.crowds}</dd>
                  </div>
                  <div>
                    <dt className="t-label mb-1 text-gold">Costs</dt>
                    <dd>{winner.costs}</dd>
                  </div>
                  <div>
                    <dt className="t-label mb-1 text-gold">How to do it well</dt>
                    <dd>
                      <ul className="space-y-1.5">
                        {winner.howToDoItWell.map((t) => (
                          <li key={t} className="flex gap-2">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/journeys/${winner.journey}`} className={buttonClass("sun")}>
                    {journeyTitles[winner.journey] ?? "See the journey"} <span aria-hidden>→</span>
                  </Link>
                  {winner.destination && (
                    <Link href={`/destinations/${winner.destination}`} className={buttonClass("outline-light")}>
                      About {winner.city}
                    </Link>
                  )}
                </div>
                <p className="mt-6 text-sm text-off/75">
                  A close second: <a href={`#${runnerUp.slug}`} className="font-semibold text-gold underline underline-offset-4">{runnerUp.city}</a>.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
