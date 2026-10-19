import { brazilMap, project } from "@/lib/map";
import { PONTA_DO_SEIXAS } from "@/lib/solar";

/** Small Brazil map with the first-light point and a sunrise glow. */
export function BrazilMiniMap({ className }: { className?: string }) {
  const [x, y] = project(PONTA_DO_SEIXAS.lat, PONTA_DO_SEIXAS.lng);
  const [rx, ry] = project(-22.9, -43.2);
  return (
    <svg viewBox={`0 0 ${brazilMap.width} ${brazilMap.height}`} className={className} role="img" aria-label="Map of Brazil marking Ponta do Seixas, the easternmost point, and Rio de Janeiro">
      <defs>
        <radialGradient id="dawn" cx={x / brazilMap.width} cy={y / brazilMap.height} r="0.6">
          <stop offset="0" stopColor="var(--color-gold)" stopOpacity="0.95" />
          <stop offset="0.35" stopColor="var(--color-coral)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--color-sand)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={brazilMap.outline} fill="var(--color-sand)" />
      <path d={brazilMap.outline} fill="url(#dawn)" />
      <path d={brazilMap.outline} fill="none" stroke="var(--color-forest)" strokeOpacity="0.35" strokeWidth="2.5" />
      <g transform={`translate(${rx} ${ry})`}>
        <circle r="9" fill="var(--color-atlantic)" />
        <text x="-16" y="6" textAnchor="end" fontSize="34" fontWeight="600" fill="var(--color-forest)">Rio</text>
      </g>
      <g transform={`translate(${x} ${y})`}>
        <circle r="34" fill="none" stroke="var(--color-coral)" strokeWidth="3" opacity="0.6" />
        <circle r="13" fill="var(--color-coral)" />
        <text x="-24" y="-30" textAnchor="end" fontSize="34" fontWeight="600" fill="var(--color-forest)">Ponta do Seixas</text>
      </g>
    </svg>
  );
}
