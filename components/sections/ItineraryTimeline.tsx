import { BedDouble, Footprints, Mountain, Utensils } from "lucide-react";
import type { ItineraryDay } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { locale } from "@/lib/locale";

const fmt = (m: number) => `${m.toLocaleString((locale === "en" ? "en-GB" : locale))} m`;

export function ItineraryTimeline({ days }: { days: ItineraryDay[] }) {
  return (
    <ol className="relative">
      {days.map((d, i) => (
        <li key={`${d.day}-${i}`} className="relative grid grid-cols-[3.5rem_1fr] gap-x-5 pb-10 last:pb-0 md:grid-cols-[5rem_1fr]">
          {i < days.length - 1 && <span aria-hidden className="absolute top-12 bottom-0 left-7 w-px bg-line md:left-10" />}
          <span className="relative z-10 grid size-14 place-items-center rounded-full bg-snow font-display text-lg ring-1 ring-line md:size-20 md:text-2xl">
            <span className="sr-only">Day </span>
            {d.day}
          </span>
          <Reveal y={16} className="pt-2 md:pt-5">
            <p className="eyebrow text-savanna-ink">Day {d.day}</p>
            <h3 className="mt-1 text-h3">{d.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-stone">{d.description}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {d.stay && (
                <li className="flex items-center gap-2">
                  <BedDouble aria-hidden className="size-4 text-savanna-ink" /> {d.stay}
                </li>
              )}
              {d.meals && (
                <li className="flex items-center gap-2">
                  <Utensils aria-hidden className="size-4 text-savanna-ink" /> Meals: {d.meals}
                </li>
              )}
              {d.altitudeM !== undefined && (
                <li className="flex items-center gap-2">
                  <Mountain aria-hidden className="size-4 text-savanna-ink" /> Sleep at {fmt(d.altitudeM)}
                  {d.maxAltitudeM && d.maxAltitudeM !== d.altitudeM ? ` · high point ${fmt(d.maxAltitudeM)}` : ""}
                </li>
              )}
              {d.hiking && (
                <li className="flex items-center gap-2">
                  <Footprints aria-hidden className="size-4 text-savanna-ink" /> {d.hiking}
                </li>
              )}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
