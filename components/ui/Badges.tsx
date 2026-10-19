import clsx from "clsx";

/** Marks a fact that must be checked against an official source before relying on it. */
export function Verify({ note, className }: { note?: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-pill border border-current px-2 py-0.5 align-middle text-[0.65rem] font-semibold uppercase tracking-wider opacity-80",
        className,
      )}
      title={note ?? "Verify before relying on this"}
    >
      <span aria-hidden>●</span> verify
      {note && <span className="sr-only">: {note}</span>}
    </span>
  );
}

/** Marks placeholder content (names, reviews, quotes) that is not real yet. */
export function Placeholder({ label = "placeholder", className }: { label?: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-pill bg-gold/90 px-2 py-0.5 align-middle text-[0.65rem] font-bold uppercase tracking-wider text-ink",
        className,
      )}
    >
      {label}
    </span>
  );
}
