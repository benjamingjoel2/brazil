import type { Month, MonthRange, WaterRegion } from "./types";

export const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;
export const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function inRange(month: Month, r: MonthRange) {
  return r.from <= r.to ? month >= r.from && month <= r.to : month >= r.from || month <= r.to;
}

export function rangeLabel(r: MonthRange) {
  if (r.from === 1 && r.to === 12) return "Year-round";
  return r.from === r.to ? monthShort[r.from - 1] : `${monthShort[r.from - 1]}–${monthShort[r.to - 1]}`;
}

/** Water status for a region in a given month (1–12). */
export function waterStatus(region: WaterRegion, month: Month) {
  for (const p of region.phases) if (inRange(month, p.months)) return { label: region.statusLabel[p.id], phase: p.id };
  for (const t of region.transitions) if (inRange(month, t.months)) return { label: t.label, phase: null };
  return { label: "Changing water", phase: null };
}
