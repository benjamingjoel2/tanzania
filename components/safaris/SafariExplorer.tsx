"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import type { BudgetTier, Safari } from "@/data/types";
import { SafariCard } from "@/components/cards/SafariCard";
import { cn } from "@/lib/utils";

type RegionFilter = "all" | "northern" | "southern" | "western" | "zanzibar";
type DurationFilter = "all" | "short" | "mid" | "long";
type BudgetFilter = "all" | BudgetTier;

const regionOptions: { value: RegionFilter; label: string }[] = [
  { value: "all", label: "All regions" },
  { value: "northern", label: "Northern circuit" },
  { value: "southern", label: "Southern wilderness" },
  { value: "western", label: "Chimpanzee parks" },
  { value: "zanzibar", label: "With Zanzibar" },
];
const durationOptions: { value: DurationFilter; label: string; test: (d: number) => boolean }[] = [
  { value: "all", label: "Any length", test: () => true },
  { value: "short", label: "Up to 7 days", test: (d) => d <= 7 },
  { value: "mid", label: "8–10 days", test: (d) => d >= 8 && d <= 10 },
  { value: "long", label: "11+ days", test: (d) => d >= 11 },
];
const budgetOptions: { value: BudgetFilter; label: string }[] = [
  { value: "all", label: "Any budget" },
  { value: "value", label: "Value luxury" },
  { value: "premium", label: "Premium" },
  { value: "ultra", label: "Ultra luxury" },
];

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="eyebrow mb-3 text-stone">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              value === o.value ? "border-charcoal bg-charcoal text-snow" : "border-line bg-white hover:border-charcoal/50",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function SafariExplorer({ safaris }: { safaris: Safari[] }) {
  const [region, setRegion] = useState<RegionFilter>("all");
  const [duration, setDuration] = useState<DurationFilter>("all");
  const [budget, setBudget] = useState<BudgetFilter>("all");

  // Read filters from the URL once on mount (keeps the page statically rendered).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const r = q.get("region");
    const d = q.get("duration");
    const b = q.get("budget");
    /* eslint-disable react-hooks/set-state-in-effect -- sync from URL after hydration */
    if (regionOptions.some((o) => o.value === r)) setRegion(r as RegionFilter);
    if (durationOptions.some((o) => o.value === d)) setDuration(d as DurationFilter);
    if (budgetOptions.some((o) => o.value === b)) setBudget(b as BudgetFilter);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Reflect filters in the URL so results are shareable.
  useEffect(() => {
    const q = new URLSearchParams();
    if (region !== "all") q.set("region", region);
    if (duration !== "all") q.set("duration", duration);
    if (budget !== "all") q.set("budget", budget);
    const qs = q.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [region, duration, budget]);

  const results = useMemo(() => {
    const dTest = durationOptions.find((o) => o.value === duration)!.test;
    return safaris.filter(
      (s) =>
        (region === "all" || s.regions.includes(region)) &&
        dTest(s.days) &&
        (budget === "all" || s.budget === budget),
    );
  }, [safaris, region, duration, budget]);

  const reset = () => {
    setRegion("all");
    setDuration("all");
    setBudget("all");
  };

  return (
    <div>
      <div className="rounded-none bg-white p-6 ring-1 ring-line md:p-8">
        <div className="mb-6 flex items-center gap-2 font-medium">
          <SlidersHorizontal aria-hidden className="size-4" /> Filter safaris
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <FilterGroup label="Region" options={regionOptions} value={region} onChange={setRegion} />
          <FilterGroup label="Duration" options={durationOptions} value={duration} onChange={setDuration} />
          <FilterGroup label="Budget" options={budgetOptions} value={budget} onChange={setBudget} />
        </div>
      </div>

      <p className="mt-8 text-sm text-stone" aria-live="polite">
        Showing {results.length} of {safaris.length} safaris
      </p>

      {results.length ? (
        <motion.ul layout className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {results.map((s) => (
              <motion.li
                key={s.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="flex"
              >
                <SafariCard safari={s} className="w-full" />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="mt-6 rounded-none border border-dashed border-line p-12 text-center">
          <p className="font-display text-2xl">No sample safaris match those filters</p>
          <p className="mt-2 text-stone">Every trip we plan is tailor-made, so we can still build exactly this for you.</p>
          <button type="button" onClick={reset} className="mt-6 text-sm font-semibold underline underline-offset-4">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
