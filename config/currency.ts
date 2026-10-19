/**
 * Indicative exchange rates for the price switcher. Prices are stored in USD.
 * TODO: replace with a live rates source; these are placeholders.
 */
export const currencies = {
  USD: { symbol: "$", rate: 1, locale: "en-US" },
  BRL: { symbol: "R$", rate: 5.4, locale: "pt-BR" },
  EUR: { symbol: "€", rate: 0.92, locale: "de-DE" },
  GBP: { symbol: "£", rate: 0.78, locale: "en-GB" },
} as const;

export type CurrencyCode = keyof typeof currencies;
export const defaultCurrency: CurrencyCode = "USD";
