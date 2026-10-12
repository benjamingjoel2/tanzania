import Link from "next/link";
import type { Climb } from "@/data/types";
import { Price } from "@/components/ui/Price";
import { ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function DifficultyDots({ level, className }: { level: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-1", className)} role="img" aria-label={`Difficulty ${level} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={cn("size-2 rounded-full", i < level ? "bg-savanna" : "bg-current opacity-20")} />
      ))}
    </span>
  );
}

export function RouteCard({ climb, tone = "dark", className }: { climb: Climb; tone?: "dark" | "light"; className?: string }) {
  const dark = tone === "dark";
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl p-6 transition-colors duration-500",
        dark ? "bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.1]" : "bg-white ring-1 ring-line hover:ring-charcoal/30",
        className,
      )}
    >
      <p className={cn("eyebrow", dark ? "text-savanna-light" : "text-savanna-ink")}>{climb.days} days</p>
      <h3 className="mt-3 font-display text-2xl">
        <Link href={`/kilimanjaro/${climb.slug}`} className="after:absolute after:inset-0">
          {climb.name}
        </Link>
      </h3>
      <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-white/70" : "text-stone")}>{climb.tagline}</p>
      <dl className={cn("mt-5 space-y-2 text-sm", dark ? "text-white/80" : "text-charcoal")}>
        <div className="flex items-center justify-between gap-3">
          <dt className={dark ? "text-white/60" : "text-stone"}>Difficulty</dt>
          <dd className="flex items-center gap-2">
            <DifficultyDots level={climb.difficulty} />
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className={dark ? "text-white/60" : "text-stone"}>Acclimatisation</dt>
          <dd>{climb.acclimatisation}</dd>
        </div>
      </dl>
      <p className={cn("mt-4 text-xs leading-relaxed", dark ? "text-white/55" : "text-stone")}>{climb.successNote}</p>
      <div className={cn("mt-auto border-t pt-5", dark ? "border-white/10" : "border-line")}>
        <p className={cn("text-sm", dark ? "text-white/70" : "text-stone")}>
          From <Price usd={climb.priceFrom} className={cn("font-display text-2xl", dark ? "text-white" : "text-charcoal")} />{" "}
          per person
        </p>
        <span className="group/btn mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          View route <ArrowIcon />
        </span>
      </div>
    </article>
  );
}
