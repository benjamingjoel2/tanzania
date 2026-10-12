"use client";

import { Price } from "@/components/ui/Price";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { whatsappLink } from "@/config/site";
import type { PlannerPrefill } from "@/lib/planner-schema";

/** Sticky sidebar: guide price, key facts, in-page links and the enquiry call to action. */
export function PricingPanel({
  priceFrom,
  unit = "per person",
  meta,
  enquireLabel,
  prefill,
  note,
  links = [],
}: {
  priceFrom: number;
  unit?: string;
  meta: { label: string; value: string }[];
  enquireLabel: string;
  prefill?: PlannerPrefill;
  note?: string;
  links?: { id: string; label: string }[];
}) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="border border-line bg-white p-7">
        <p className="text-sm text-stone">From</p>
        <p className="text-[2.75rem] leading-none tracking-[-0.04em]">
          <Price usd={priceFrom} />
        </p>
        <p className="mt-2 text-sm text-stone">{unit}</p>
        <p className="mt-1 text-sm text-stone">
          ≈ <Price usd={priceFrom * 2} /> for two · international flights excluded
        </p>
        <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
          {meta.map((m) => (
            <div key={m.label} className="flex justify-between gap-4 py-3">
              <dt className="text-stone">{m.label}</dt>
              <dd className="text-right">{m.value}</dd>
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
          className="mt-3 block text-center text-sm underline underline-offset-4"
        >
          Or ask a quick question on WhatsApp
        </a>
        {note && <p className="mt-5 text-xs leading-relaxed text-stone">{note}</p>}
      </div>
      {links.length > 0 && (
        <nav aria-label="On this page" className="mt-6 hidden lg:block">
          <p className="eyebrow mb-3 text-stone">On this page</p>
          <ul className="border-t border-line">
            {links.map((l) => (
              <li key={l.id} className="border-b border-line">
                <a href={`#${l.id}`} className="group flex items-center justify-between py-3 transition-colors hover:text-ocean-ink">
                  {l.label}
                  <span aria-hidden className="text-savanna-ink transition-transform duration-300 group-hover:rotate-90">
                    +
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}
