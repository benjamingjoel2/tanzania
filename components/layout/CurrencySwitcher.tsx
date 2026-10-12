"use client";

import { ChevronDown } from "lucide-react";
import { currencies } from "@/lib/currency";
import { isCurrencyCode } from "@/lib/currency";
import { useCurrency } from "@/providers/CurrencyProvider";
import { cn } from "@/lib/utils";

export function CurrencySwitcher({ className, id = "currency" }: { className?: string; id?: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <label htmlFor={id} className="sr-only">
        Display prices in
      </label>
      <select
        id={id}
        value={currency}
        onChange={(e) => isCurrencyCode(e.target.value) && setCurrency(e.target.value)}
        className="cursor-pointer appearance-none rounded-full border border-current/25 bg-transparent py-1.5 pr-8 pl-3.5 text-sm font-medium transition-colors hover:border-current/60"
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code} className="text-charcoal">
            {c.code}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute right-2.5 size-3.5" />
    </div>
  );
}
