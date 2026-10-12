import { destinations } from "@/lib/content";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** Asymmetric featured grid: the lead card spans two rows on desktop. */
export function DestinationsGrid() {
  const featured = destinations.filter((d) => d.featured).slice(0, 5);
  return (
    <section className="section-y bg-sand/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title="From the plains to the peak"
          intro="Fourteen parks, mountains and islands, each with its own rhythm. We'll help you choose the ones that suit your season, pace and style."
          action={
            <ButtonLink href="/destinations" variant="outline" arrow>
              All {destinations.length} destinations
            </ButtonLink>
          }
        />
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {featured.map((d, i) => (
            <RevealItem key={d.slug} className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : undefined}>
              <DestinationCard
                destination={d}
                size={i === 0 ? "lg" : "md"}
                className={i === 0 ? "h-full" : undefined}
                sizes={i === 0 ? "(min-width: 1024px) 33vw, 100vw" : undefined}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
