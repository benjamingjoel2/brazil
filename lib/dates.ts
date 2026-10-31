import { intlLocale } from "./locale";

/** "2 September 2026" in the page's language. Fixed to UTC noon so server and browser agree. */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat(intlLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T12:00:00Z`));
}
