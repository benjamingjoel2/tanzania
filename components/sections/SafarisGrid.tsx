import type { Safari } from "@/data/types";
import { SafariCard } from "@/components/cards/SafariCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function SafarisGrid({ safaris }: { safaris: Safari[] }) {
  return (
    <section className="section-y bg-sand/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Signature safaris"
          title="Journeys to start from"
          intro="Every itinerary is a starting point. Your specialist will reshape the route, pace and camps around you."
          action={
            <ButtonLink href="/safaris" variant="outline" arrow>
              Browse all safaris
            </ButtonLink>
          }
        />
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {safaris.map((s) => (
            <RevealItem key={s.slug} className="flex">
              <SafariCard safari={s} className="w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
