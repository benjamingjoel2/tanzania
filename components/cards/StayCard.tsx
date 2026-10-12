import Link from "next/link";
import type { Stay } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";
import { stayTypeLabels } from "@/lib/content";
import { cn } from "@/lib/utils";

export function StayCard({ stay, className }: { stay: Stay; className?: string }) {
  return (
    <Link href={`/stays/${stay.slug}`} className={cn("group block", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
        <SmartImage
          image={stay.image}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105"
        />
      </div>
      <p className="eyebrow mt-5 text-savanna-ink">{stayTypeLabels[stay.type]}</p>
      <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-ocean-ink">
        {stay.name}
      </h3>
      <p className="mt-1 text-sm text-stone">{stay.location}</p>
      <p className="mt-3 text-sm text-stone">
        From <Price usd={stay.pricePerNight} className="font-semibold text-charcoal" /> per person · night
      </p>
    </Link>
  );
}
