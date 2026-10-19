import clsx from "clsx";
import type { ReactNode } from "react";

/** Two-column key/value list, styled like a ticket stub with rounded rows. */
export function SpecTable({
  rows,
  className,
  tone = "dark",
}: {
  rows: { label: string; value: ReactNode }[];
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <dl className={clsx("grid gap-x-6 gap-y-3 text-sm", className)}>
      {rows.map((r) => (
        <div
          key={r.label}
          className={clsx(
            "grid grid-cols-[minmax(7rem,auto)_1fr] items-baseline gap-4 border-b border-dashed pb-2.5",
            tone === "dark" ? "border-forest/20" : "border-off/25",
          )}
        >
          <dt className={clsx("t-label", tone === "dark" ? "text-forest/60" : "text-off/65")}>{r.label}</dt>
          <dd className={clsx("font-medium", tone === "dark" ? "text-forest" : "text-off")}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
