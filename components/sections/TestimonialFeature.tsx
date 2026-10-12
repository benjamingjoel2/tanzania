import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/types";
import { DoorMotif } from "@/components/ui/DoorMotif";

export function PlaceholderBadge({ children = "Placeholder testimonial" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-current/40 px-3 py-1 text-xs font-medium tracking-wide uppercase opacity-80">
      {children}
    </span>
  );
}

export function TestimonialFeature({ testimonial, tone = "light" }: { testimonial: Testimonial; tone?: "light" | "dark" }) {
  return (
    <figure className={tone === "dark" ? "text-white" : "text-charcoal"}>
      <DoorMotif className="mb-8 max-w-48" />
      <div className="flex flex-wrap items-center gap-4">
        <span className="flex gap-0.5 text-savanna" aria-label={`${testimonial.rating} out of 5 stars`} role="img">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <Star key={i} aria-hidden className="size-4 fill-current" />
          ))}
        </span>
        {testimonial.placeholder && <PlaceholderBadge />}
      </div>
      <blockquote className="mt-6">
        <Quote aria-hidden className="mb-3 size-8 text-savanna" />
        <p className="font-display text-2xl leading-snug md:text-3xl">{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold">{testimonial.name}</span>
        <span className={tone === "dark" ? "text-white/65" : "text-stone"}>
          {" "}
          · {testimonial.from} · {testimonial.trip}
        </span>
      </figcaption>
    </figure>
  );
}
