"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { locale, localeNames } from "@/lib/locale";
import type { VideoMedia } from "@/lib/types";

/** Poster through the image optimiser, so it arrives as AVIF/WebP at a sensible size. */
function posterUrl(src: string) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=1200&q=60`;
}

/** True when the visitor asked to save data (Chrome/Android "Lite mode"). */
function prefersSaveData() {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !!c?.saveData;
}

/**
 * Ambient background video. Muted, looped and inline; plays only while on screen
 * (and only when `active`), never autoplays under reduced motion or save-data, and
 * always has a visible pause/play control (WCAG 2.2.2).
 *
 * Loading is lazy: the source (and poster) attach only near the viewport, and a
 * `priority` video waits until the page has finished loading so it never competes
 * with the first paint. Phones get the lighter `srcMobile` file.
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
  const [near, setNear] = useState(false);
  const [pageReady, setPageReady] = useState(!priority);
  const [src, setSrc] = useState<string | null>(null);
  const [saveData, setSaveData] = useState(false);
  const paused = userPaused ?? (!!reduce || saveData);
  // Don't download anything the visitor won't see play, unless they press play.
  const load = near && pageReady && (!paused || userPaused === false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setSrc(window.matchMedia("(max-width: 767px)").matches && media.srcMobile ? media.srcMobile : media.src);
    setSaveData(prefersSaveData());
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
        if (e.isIntersecting) setNear(true);
      },
      { rootMargin: "50% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [media.src, media.srcMobile]);

  useEffect(() => {
    if (pageReady) return;
    const go = () => {
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      if (idle) idle(() => setPageReady(true), { timeout: 2500 });
      else setTimeout(() => setPageReady(true), 800);
    };
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
    return () => window.removeEventListener("load", go);
  }, [pageReady]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src || !load) return;
    if (inView && active && !paused) el.play().catch(() => {});
    else el.pause();
  }, [inView, active, paused, src, load]);

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
        style={media.focus ? { objectPosition: media.focus } : undefined}
        poster={near && media.poster && !priority ? posterUrl(media.poster) : undefined}
        muted
        loop
        playsInline
        preload={load ? "auto" : "none"}
        aria-label={media.alt}
        src={load && src ? src : undefined}
      >
        {media.captions && <track kind="captions" src={media.captions} srcLang={locale} label={localeNames[locale].name} />}
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
