"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Smooth scrolling (off under reduced motion) and global motion settings. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      {reduce ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.11, anchors: { offset: 0 }, stopInertiaOnNavigate: true }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
