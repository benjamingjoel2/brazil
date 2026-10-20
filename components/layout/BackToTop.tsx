"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import clsx from "clsx";

/** A small sun that rises into view once you've scrolled; click to go back to first light. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const lenis = useLenis();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0 });
    document.getElementById("main")?.focus({ preventScroll: true });
  };
  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={clsx(
        "group fixed bottom-4 left-4 z-30 grid h-12 w-12 place-items-center overflow-hidden bg-forest text-off transition-all duration-700 ease-(--ease-sun) md:bottom-6 md:left-6 md:h-14 md:w-14",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0",
      )}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 transition-transform duration-500 group-hover:-translate-y-1" aria-hidden>
        <path d="M9 20a7 7 0 0 1 14 0Z" fill="var(--color-coral)" />
        <path d="M16 6v6M11 10l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 23h22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </button>
  );
}
