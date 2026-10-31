"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { currencies, defaultCurrency, type CurrencyCode } from "@/config/currency";
import { intlLocale } from "@/lib/locale";

const Ctx = createContext<{ code: CurrencyCode; setCode: (c: CurrencyCode) => void }>({
  code: defaultCurrency,
  setCode: () => {},
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<CurrencyCode>(defaultCurrency);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sn-currency") as CurrencyCode | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate the saved preference after first render
      if (saved && saved in currencies) setCode(saved);
    } catch {}
  }, []);
  const update = (c: CurrencyCode) => {
    setCode(c);
    try {
      localStorage.setItem("sn-currency", c);
    } catch {}
  };
  return <Ctx.Provider value={{ code, setCode: update }}>{children}</Ctx.Provider>;
}

export function useCurrency() {
  return useContext(Ctx);
}

export function formatPrice(usd: number, code: CurrencyCode) {
  const c = currencies[code];
  const value = Math.round((usd * c.rate) / 50) * 50;
  return new Intl.NumberFormat(intlLocale, { style: "currency", currency: code, maximumFractionDigits: 0 }).format(value);
}

/** "From $4,200" in the visitor's chosen currency. Rates are indicative. */
export function Price({ usd, suffix = "per person", className }: { usd: number; suffix?: string; className?: string }) {
  const { code } = useCurrency();
  return (
    <span className={className}>
      From <strong className="font-semibold">{formatPrice(usd, code)}</strong>
      {suffix && <span className="opacity-70"> {suffix}</span>}
    </span>
  );
}

export function CurrencySwitcher({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const { code, setCode } = useCurrency();
  return (
    <div role="group" aria-label="Currency" className={className}>
      <div className={`inline-flex rounded-pill border p-0.5 ${tone === "light" ? "border-off/30" : "border-forest/25"}`}>
        {(Object.keys(currencies) as CurrencyCode[]).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={code === c}
            onClick={() => setCode(c)}
            className={`rounded-pill px-2.5 py-1 text-xs font-semibold transition-colors ${
              code === c
                ? tone === "light"
                  ? "bg-off text-atlantic"
                  : "bg-forest text-off"
                : tone === "light"
                  ? "text-off/80 hover:text-off"
                  : "text-forest/70 hover:text-forest"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
