import Link from "next/link";
import type { Experience } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

export function ExperienceCard({ experience, className }: { experience: Experience; className?: string }) {
  return (
    <Link href={`/experiences/${experience.slug}`} className={cn("group block", className)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand">
        <SmartImage
          image={experience.image}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 80vw"
          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-snow/90 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur">
          {experience.category}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl leading-tight transition-colors group-hover:text-ocean-ink">
        {experience.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-stone">{experience.summary}</p>
    </Link>
  );
}
