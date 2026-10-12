import Link from "next/link";
import { CalendarDays, Check, MapPin, Utensils } from "lucide-react";
import type { Safari } from "@/data/types";
import { getDestination, regionLabels } from "@/lib/content";
import { Price } from "@/components/ui/Price";
import { ImageReveal } from "@/components/ui/Motion";
import { buttonClasses, ArrowIcon } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Editorial safari row: details on one side, a large image on the other. */
export function SafariRow({ safari, flip }: { safari: Safari; flip?: boolean }) {
  const places = safari.destinations.map((d) => getDestination(d)?.name ?? d);
  return (
    <article className="group grid gap-8 border-t border-line py-10 md:py-14 lg:grid-cols-12 lg:gap-8">
      <div className={cn("flex flex-col lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
        <p className="eyebrow text-savanna-ink">
          {safari.days} days · {safari.regions.map((r) => regionLabels[r]).join(" & ")}
        </p>
        <h3 className="mt-4 text-h3">
          <Link href={`/safaris/${safari.slug}`}>{safari.title}</Link>
        </h3>
        <p className="mt-3 text-stone">
          From <Price usd={safari.priceFrom} className="text-2xl tracking-tight text-charcoal" /> per person
          <span className="block text-sm">
            ≈ <Price usd={safari.priceFrom * 2} /> for two · international flights excluded
          </span>
        </p>
        <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[0.95rem]">
          <li className="flex gap-3">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-savanna-ink" />
            {places.join(" · ")}
          </li>
          <li className="flex gap-3">
            <CalendarDays aria-hidden className="mt-0.5 size-4 shrink-0 text-savanna-ink" />
            {safari.days} days / {safari.nights} nights · {safari.bestFor[0]}
          </li>
          <li className="flex gap-3">
            <Utensils aria-hidden className="mt-0.5 size-4 shrink-0 text-savanna-ink" />
            {safari.inclusionLine}
          </li>
        </ul>
        <ul className="mt-5 space-y-2 text-[0.95rem] text-stone">
          {safari.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-3">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-acacia" />
              {h}
            </li>
          ))}
        </ul>
        <Link href={`/safaris/${safari.slug}`} className={buttonClasses("outline", "md", "mt-8 w-full lg:mt-auto")} tabIndex={-1} aria-hidden>
          View safari <ArrowIcon />
        </Link>
      </div>
      <Link
        href={`/safaris/${safari.slug}`}
        aria-label={`View ${safari.title}`}
        className={cn("block overflow-hidden lg:col-span-7", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6")}
      >
        <ImageReveal
          image={safari.image}
          className="aspect-[16/11] h-full"
          sizes="(min-width: 1024px) 55vw, 100vw"
          imgClassName="transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105"
        />
      </Link>
    </article>
  );
}
