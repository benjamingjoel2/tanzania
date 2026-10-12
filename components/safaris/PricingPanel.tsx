"use client";

import { Price } from "@/components/ui/Price";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { whatsappLink } from "@/config/site";
import type { PlannerPrefill } from "@/lib/planner-schema";

export function PricingPanel({
  priceFrom,
  unit = "per person",
  meta,
  enquireLabel,
  prefill,
  note,
}: {
  priceFrom: number;
  unit?: string;
  meta: { label: string; value: string }[];
  enquireLabel: string;
  prefill?: PlannerPrefill;
  note?: string;
}) {
  return (
    <aside className="rounded-2xl bg-white p-7 shadow-[0_20px_60px_-30px_rgba(36,33,30,0.35)] ring-1 ring-line lg:sticky lg:top-36">
      <p className="text-sm text-stone">From</p>
      <p className="font-display text-5xl">
        <Price usd={priceFrom} />
      </p>
      <p className="mt-1 text-sm text-stone">{unit}</p>
      <p className="mt-2 text-sm text-stone">
        ≈ <Price usd={priceFrom * 2} /> for two · international flights excluded
      </p>
      <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
        {meta.map((m) => (
          <div key={m.label} className="flex justify-between gap-4 py-3">
            <dt className="text-stone">{m.label}</dt>
            <dd className="text-right font-medium">{m.value}</dd>
          </div>
        ))}
      </dl>
      <OpenPlannerButton className="mt-6 w-full" size="lg" arrow prefill={prefill}>
        {enquireLabel}
      </OpenPlannerButton>
      <a
        href={whatsappLink(prefill?.notes)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center text-sm font-medium underline underline-offset-4"
      >
        Or ask a quick question on WhatsApp
      </a>
      {note && <p className="mt-5 text-xs leading-relaxed text-stone">{note}</p>}
    </aside>
  );
}
