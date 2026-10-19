"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const rise = {
  hidden: { opacity: 0, y: 56, scale: 0.98 },
  shown: { opacity: 1, y: 0, scale: 1 },
};

/** Rises its children into view, like the sun. Static under reduced motion. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  amount = 0.25,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  if (reduce) {
    const Static = as;
    return (
      <Static className={className} id={rest.id}>
        {children}
      </Static>
    );
  }
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
      variants={rise}
      transition={{ type: "spring", stiffness: 70, damping: 16, mass: 0.9, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Splits a line into words that rise one after another. */
export function RiseWords({
  text,
  className,
  stagger = 0.06,
  delay = 0,
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: delay + i * stagger }}
          >
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
