"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import clsx from "clsx";
import type { VideoMedia } from "@/lib/types";

/**
 * Ambient background video. Muted, looped and inline; plays only while on screen
 * (and only when `active`), never autoplays under reduced motion, and always has a
 * visible pause/play control (WCAG 2.2.2).
 */
export function VideoPlayer({
  media,
  className,
  active = true,
  controlsClassName,
  showControl = true,
  priority = false,
}: {
  media: VideoMedia;
  className?: string;
  active?: boolean;
  controlsClassName?: string;
  showControl?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const paused = userPaused ?? !!reduce;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !media.src) return;
    if (inView && active && !paused) el.play().catch(() => {});
    else el.pause();
  }, [inView, active, paused, media.src]);

  if (!media.src) {
    return (
      <div
        role="img"
        aria-label={media.alt}
        className={clsx("absolute inset-0 bg-linear-to-br from-gold via-coral to-atlantic", className)}
      />
    );
  }

  return (
    <>
      <video
        ref={ref}
        className={clsx("absolute inset-0 h-full w-full object-cover", className)}
        poster={media.poster || undefined}
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={media.alt}
      >
        <source src={media.src} type="video/mp4" />
        {media.captions && <track kind="captions" src={media.captions} srcLang="en" label="English" />}
      </video>
      {showControl && (
        <button
          type="button"
          onClick={() => setUserPaused(!paused)}
          className={clsx(
            "absolute z-20 grid h-10 w-10 place-items-center rounded-full bg-ink/40 text-off backdrop-blur-sm transition hover:bg-ink/60",
            controlsClassName ?? "bottom-4 right-4",
          )}
          aria-label={paused ? "Play background video" : "Pause background video"}
        >
          {paused ? (
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
              <path d="M4 2.5v11l9-5.5Z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
              <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
