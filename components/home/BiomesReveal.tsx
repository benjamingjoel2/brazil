"use client";

import Link from "next/link";
import { m as motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { biomesSection } from "@/data/home";
import { biomes } from "@/data/biomes";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

function BiomeCard({ b }: { b: (typeof biomes)[number] }) {
  return (
    <Link href={`/biomes#${b.slug}`} className="group block border-t-2 border-forest/15 pt-4">
      <p className="flex items-center gap-2">
        <span aria-hidden className="h-3 w-3 rounded-full" style={{ background: b.color }} />
        <span className="t-label text-forest/75">{b.area}</span>
      </p>
      <h3 className="t-h3 mt-2 text-forest transition-colors group-hover:text-coral-deep">{b.name}</h3>
      <p className="mt-2 text-sm text-ink/80">{b.short}.</p>
    </Link>
  );
}

export function BiomesReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const w = useTransform(scrollYProgress, [0, 0.75], ["34%", "100%"]);
  const h = useTransform(scrollYProgress, [0, 0.75], ["46%", "100%"]);
  const subOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const left = biomes.slice(0, 3);
  const right = biomes.slice(3);

  return (
    <section id="biomes" aria-labelledby="biomes-title" className="relative">
      {reduce ? (
        <div className="px-gutter pt-section">
          <h2 id="biomes-title" className="t-mega text-forest">{biomesSection.heading}</h2>
          <p className="t-lead mt-6 max-w-2xl">{biomesSection.subtitle}</p>
        </div>
      ) : (
        <div ref={ref} className="relative h-[280vh]">
          <div className="sticky top-0 grid h-svh place-items-center overflow-hidden">
            <h2 id="biomes-title" className="t-mega pointer-events-none absolute text-forest">
              {biomesSection.heading}
            </h2>
            <motion.div style={{ width: w, height: h }} className="relative z-10 overflow-hidden bg-forest">
              <VideoPlayer media={biomesSection.video} />
              <div className="absolute inset-0 bg-linear-to-t from-forest/70 via-transparent to-transparent" />
              <motion.p
                style={{ opacity: subOpacity }}
                className="t-lead absolute bottom-[8vh] left-1/2 w-[min(42rem,85vw)] -translate-x-1/2 text-center text-off"
              >
                {biomesSection.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </div>
      )}

      <div className="px-gutter py-section">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-12">
          <div className="grid content-between gap-8">
            {left.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <BiomeCard b={b} />
              </Reveal>
            ))}
          </div>
          <Reveal className="relative order-first aspect-[3/4] overflow-hidden lg:order-none">
            <Img media={biomesSection.image} sizes="(min-width: 1024px) 35vw, 100vw" />
          </Reveal>
          <div className="grid content-between gap-8">
            {right.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <BiomeCard b={b} />
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-14 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/biomes">Explore the six biomes</ButtonLink>
          <ButtonLink href="/wild-seasons" variant="outline">
            High water or low?
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
