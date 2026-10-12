import { siteConfig, type Currency, type CurrencyCode } from "@/config/site";

export const currencies: readonly Currency[] = siteConfig.currencies;

export function getCurrency(code: CurrencyCode): Currency {
  return currencies.find((c) => c.code === code) ?? currencies[0];
}

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && currencies.some((c) => c.code === value);
}

/** Convert a base-USD amount and round it to the currency's display step. */
export function convert(usd: number, code: CurrencyCode) {
  const c = getCurrency(code);
  return Math.round((usd * c.rate) / c.roundTo) * c.roundTo;
}

export function formatMoney(usd: number, code: CurrencyCode) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    currencyDisplay: code === "USD" ? "symbol" : "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(convert(usd, code));
}
