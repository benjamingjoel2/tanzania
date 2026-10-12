import type { MonthInfo, SeasonTag } from "@/data/types";
import { seasonLegend } from "@/data/seasons";
import { MONTHS, cn } from "@/lib/utils";

const ratingStyles: Record<MonthInfo["rating"], { label: string; className: string }> = {
  peak: { label: "Excellent", className: "bg-acacia text-white" },
  good: { label: "Good", className: "bg-acacia/45 text-charcoal" },
  fair: { label: "Variable", className: "bg-sand-deep text-charcoal" },
};

/** 12-month best-time-to-visit grid with season markers. */
export function MonthGrid({ months, caption }: { months: MonthInfo[]; caption?: string }) {
  const usedTags = [...new Set(months.flatMap((m) => m.tags))].filter((t) => t !== "dry") as SeasonTag[];
  return (
    <div>
      <ol className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12" aria-label={caption ?? "Month by month"}>
        {months.map((m) => {
          const r = ratingStyles[m.rating];
          return (
            <li key={m.month} className="group relative flex flex-col overflow-hidden rounded-xl ring-1 ring-line">
              <div className={cn("flex flex-col px-3 py-2.5", r.className)}>
                <span className="font-display text-lg">{MONTHS[m.month - 1]}</span>
                <span className="text-[0.6rem] font-semibold tracking-wider uppercase opacity-80">{r.label}</span>
              </div>
              <div className="flex min-h-7 flex-wrap gap-1 bg-white px-3 py-2">
                {m.tags
                  .filter((t) => t !== "dry")
                  .map((t) => (
                    <span key={t} title={seasonLegend[t].label} className={cn("h-1.5 w-6 rounded-full", seasonLegend[t].className)}>
                      <span className="sr-only">{seasonLegend[t].label}</span>
                    </span>
                  ))}
              </div>
              {m.note && <p className="sr-only">{m.note}</p>}
              {m.note && (
                <p
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-full z-10 mb-2 hidden rounded-lg bg-charcoal p-3 text-xs leading-snug text-white shadow-lg group-hover:block xl:w-56"
                >
                  {m.note}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
        {Object.entries(ratingStyles).map(([k, r]) => (
          <li key={k} className="flex items-center gap-2">
            <span className={cn("size-3 rounded-sm", r.className)} /> {r.label}
          </li>
        ))}
        {usedTags.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className={cn("h-1.5 w-6 rounded-full", seasonLegend[t].className)} /> {seasonLegend[t].label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Month-by-month notes as a readable list (complements the grid). */
export function MonthNotes({ months }: { months: MonthInfo[] }) {
  return (
    <dl className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
      {months
        .filter((m) => m.note)
        .map((m) => (
          <div key={m.month} className="border-t border-line pt-3">
            <dt className="font-medium">{MONTHS[m.month - 1]}</dt>
            <dd className="mt-1 text-sm text-stone">{m.note}</dd>
          </div>
        ))}
    </dl>
  );
}
