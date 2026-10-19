import { brazilMap, project } from "@/lib/map";

/** Brazil outline with a single pin, for destination pages. */
export function BrazilPin({ lat, lng, label, className }: { lat: number; lng: number; label: string; className?: string }) {
  const [x, y] = project(lat, lng);
  return (
    <svg viewBox={`0 0 ${brazilMap.width} ${brazilMap.height}`} className={className} role="img" aria-label={`Map of Brazil showing ${label}`}>
      <path d={brazilMap.outline} fill="var(--color-sand)" stroke="var(--color-forest)" strokeOpacity="0.3" strokeWidth="2.5" />
      <circle cx={x} cy={y} r="46" fill="var(--color-gold)" opacity="0.35" />
      <circle cx={x} cy={y} r="16" fill="var(--color-coral)" stroke="var(--color-off)" strokeWidth="5" />
    </svg>
  );
}
