import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

export function DestinationCard({
  destination,
  className,
  size = "md",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  destination: Destination;
  className?: string;
  size?: "md" | "lg";
  sizes?: string;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={cn(
        "group relative isolate flex overflow-hidden rounded-none bg-charcoal text-white",
        size === "lg" ? "min-h-[28rem] lg:min-h-full" : "aspect-[4/5]",
        className,
      )}
    >
      <SmartImage
        image={destination.image}
        fill
        sizes={sizes}
        className="-z-10 object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      <span
        aria-hidden
        className="absolute top-5 right-5 grid size-11 translate-y-1 place-items-center rounded-full bg-white/15 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:bg-savanna group-hover:text-charcoal group-hover:opacity-100"
      >
        <ArrowUpRight className="size-5" />
      </span>
      <div className="mt-auto p-6 md:p-7">
        <p className="eyebrow mb-2 text-white/75">{destination.kind}</p>
        <h3 className={cn("font-display", size === "lg" ? "text-4xl md:text-5xl" : "text-3xl")}>{destination.name}</h3>
        <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-white/80">{destination.tagline}</p>
      </div>
    </Link>
  );
}
