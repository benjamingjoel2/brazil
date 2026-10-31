/**
 * The locale this copy of the code renders. English source says "en"; scripts/i18n-build.mjs
 * writes the French, German and Spanish copies with their own values (see scripts/i18n.config.mjs).
 */
export const locales = ["en", "fr", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const locale: Locale = "en";
/** BCP 47 tag for Intl number and date formatting. */
export const intlLocale = "en-GB";
/** Open Graph locale. */
export const ogLocale = "en_GB";
/** Path prefix for internal links ("" for English, "/fr" etc.). */
export const localePrefix = "";
/** The homepage in this locale. */
export const homePath = "/";

export const localeNames: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  fr: { short: "FR", name: "Français" },
  de: { short: "DE", name: "Deutsch" },
  es: { short: "ES", name: "Español" },
};

/** Split "/fr/journeys/x" into ["fr", "/journeys/x"]. English has no prefix. */
export function splitPath(pathname: string): [Locale, string] {
  const m = pathname.match(/^\/(fr|de|es)(?=\/|$)(.*)$/);
  return m ? [m[1] as Locale, m[2] || "/"] : ["en", pathname || "/"];
}

/** The same page in another locale. */
export function pathIn(l: Locale, path: string): string {
  const base = splitPath(path)[1];
  if (l === "en") return base;
  return base === "/" ? `/${l}` : `/${l}${base}`;
}
