/**
 * Sunrise and sunset from the NOAA General Solar Position equations
 * (https://gml.noaa.gov/grad/solcalc/solareqns.PDF). Accurate to about a minute,
 * which is plenty for "today's sunrise". Uses the standard 90.833° zenith
 * (refraction + solar disc).
 */

export const PONTA_DO_SEIXAS = {
  name: "Ponta do Seixas",
  lat: -7.155,
  lng: -34.7928,
  timeZone: "America/Fortaleza", // Paraíba keeps UTC−3 year-round
} as const;

const rad = Math.PI / 180;

function dayOfYearUTC(d: Date) {
  const start = Date.UTC(d.getUTCFullYear(), 0, 0);
  return Math.floor((Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - start) / 86_400_000);
}

/** Returns sunrise/sunset as Date objects (UTC instants) for the UTC calendar day of `date`. */
export function sunTimes(date: Date, lat: number, lng: number) {
  const doy = dayOfYearUTC(date);
  const year = date.getUTCFullYear();
  const daysInYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365;
  // Fractional year at local solar noon is close enough for rise/set.
  const g = ((2 * Math.PI) / daysInYear) * (doy - 1);
  const eqTime =
    229.18 *
    (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const decl =
    0.006918 -
    0.399912 * Math.cos(g) +
    0.070257 * Math.sin(g) -
    0.006758 * Math.cos(2 * g) +
    0.000907 * Math.sin(2 * g) -
    0.002697 * Math.cos(3 * g) +
    0.00148 * Math.sin(3 * g);
  const cosHa = Math.cos(90.833 * rad) / (Math.cos(lat * rad) * Math.cos(decl)) - Math.tan(lat * rad) * Math.tan(decl);
  const ha = Math.acos(Math.min(1, Math.max(-1, cosHa))) / rad;
  const midnight = Date.UTC(year, date.getUTCMonth(), date.getUTCDate());
  const rise = 720 - 4 * (lng + ha) - eqTime; // minutes from UTC midnight
  const set = 720 - 4 * (lng - ha) - eqTime;
  return { sunrise: new Date(midnight + rise * 60_000), sunset: new Date(midnight + set * 60_000) };
}

/** Today's sunrise at Ponta do Seixas, for the local calendar day there. */
export function seixasSunrise(now = new Date()) {
  // Local date in Paraíba (UTC−3) → use that calendar day.
  const local = new Date(now.getTime() - 3 * 3_600_000);
  const day = new Date(Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate()));
  return sunTimes(day, PONTA_DO_SEIXAS.lat, PONTA_DO_SEIXAS.lng).sunrise;
}

export function formatTime(d: Date, timeZone: string, opts: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone, ...opts }).format(d);
}
