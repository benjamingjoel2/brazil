import clsx from "clsx";

/** Concentric sunrise arcs. Purely decorative. */
export function SunArcs({
  className,
  rings = 5,
  color = "var(--color-gold)",
  fill,
  strokeWidth = 1.5,
}: {
  className?: string;
  rings?: number;
  color?: string;
  fill?: string;
  strokeWidth?: number;
}) {
  const r0 = 18;
  const step = (100 - r0) / rings;
  return (
    <svg viewBox="0 0 200 100" className={clsx("pointer-events-none", className)} aria-hidden preserveAspectRatio="xMidYMax meet">
      {fill && <path d={`M${100 - r0} 100a${r0} ${r0} 0 0 1 ${r0 * 2} 0Z`} fill={fill} />}
      {Array.from({ length: rings }, (_, i) => {
        const r = r0 + step * (i + 1) - 1;
        return (
          <path
            key={i}
            d={`M${100 - r} 100a${r} ${r} 0 0 1 ${r * 2} 0`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeOpacity={1 - i / (rings + 1)}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}
