import clsx from "clsx";

/** Half sun rising over the horizon, with two concentric arcs. Decorative unless titled. */
export function SunMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 48 30"
      className={clsx("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path d="M12 26a12 12 0 0 1 24 0Z" fill="var(--color-coral)" />
      <path d="M5 26a19 19 0 0 1 38 0" fill="none" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" />
      <path d="M0.5 26h47" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2.5 font-display font-bold tracking-tight",
        tone === "light" ? "text-off" : "text-forest",
        className,
      )}
    >
      <SunMark className="h-6 w-auto" />
      <span className="text-[1.05rem] leading-none">Sol Nascente</span>
    </span>
  );
}
