"use client";

import { useCurrency } from "@/providers/CurrencyProvider";

/** Renders a base-USD amount in the visitor's selected currency. */
export function Price({ usd, className }: { usd: number; className?: string }) {
  const { format } = useCurrency();
  return <span className={className}>{format(usd)}</span>;
}
