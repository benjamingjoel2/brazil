"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { locale as current, localeNames, locales, pathIn } from "@/lib/locale";

/**
 * EN · FR · DE · ES. Plain links to the same page in each language (no automatic
 * redirects). The page path comes from the URL, so it works on every route.
 */
export function LanguageSwitcher({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const pathname = usePathname() || "/";
  return (
    <ul aria-label="Language" className={clsx("flex items-center text-[0.8125rem] font-semibold", className)}>
      {locales.map((l, i) => {
        const active = l === current;
        return (
          <li key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden className="px-1 opacity-50">
                ·
              </span>
            )}
            <a
              href={pathIn(l, pathname)}
              hrefLang={l}
              lang={l}
              title={localeNames[l].name}
              aria-current={active ? "true" : undefined}
              onClick={onNavigate}
              className={clsx(
                "rounded-sm px-1 py-1.5 underline-offset-4 transition-opacity",
                active ? "underline decoration-2" : "opacity-75 hover:underline hover:opacity-100",
              )}
            >
              <span aria-hidden>{localeNames[l].short}</span>
              <span className="sr-only">{localeNames[l].name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
