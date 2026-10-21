"use client";

import { ReactLenis } from "lenis/react";
import { LazyMotion, MotionConfig, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

/**
 * Smooth scrolling (off under reduced motion) and global motion settings.
 * Animation features load lazily: components use the lightweight `m` element.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        {reduce ? (
          children
        ) : (
          <ReactLenis root options={{ lerp: 0.11, anchors: { offset: 0 }, stopInertiaOnNavigate: true }}>
            {children}
          </ReactLenis>
        )}
      </MotionConfig>
    </LazyMotion>
  );
}
