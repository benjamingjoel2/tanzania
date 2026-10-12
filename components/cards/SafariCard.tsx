import Link from "next/link";
import { Check, Clock, MapPin } from "lucide-react";
import type { Safari } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";
import { ArrowIcon } from "@/components/ui/Button";
import { getDestination } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SafariCard({ safari, className }: { safari: Safari; className?: string }) {
  const places = safari.destinations.map((d) => getDestination(d)?.name ?? d);
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-none bg-white shadow-[0_1px_0_rgba(36,33,30,0.06)] ring-1 ring-line/70 transition-shadow duration-500 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-sand">
        <SmartImage
          image={safari.image}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-snow/95 px-3 py-1.5 text-xs font-semibold text-charcoal">
          <Clock aria-hidden className="size-3.5" /> {safari.days} days
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="flex items-start gap-1.5 text-sm text-stone">
          <MapPin aria-hidden className="mt-0.5 size-3.5 shrink-0 text-savanna-ink" />
          {places.join(" · ")}
        </p>
        <h3 className="mt-3 font-display text-[1.65rem] leading-tight">
          <Link href={`/safaris/${safari.slug}`} className="after:absolute after:inset-0">
            {safari.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm font-medium text-ocean-ink">{safari.inclusionLine}</p>
        <ul className="mt-5 space-y-2 text-[0.95rem]">
          {safari.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2.5">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-savanna-ink" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <div className="border-t border-line pt-5">
            <p className="text-sm text-stone">
              From <Price usd={safari.priceFrom} className="font-display text-2xl text-charcoal" /> per person
            </p>
            <p className="mt-1 text-xs text-stone">
              ≈ <Price usd={safari.priceFrom * 2} /> for two · international flights excluded
            </p>
          </div>
          <span className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            View safari <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  );
}
