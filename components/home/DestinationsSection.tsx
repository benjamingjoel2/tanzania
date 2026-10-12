import { destinations, destinationMenuGroups } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DestinationMap } from "./DestinationMap";

export function DestinationsSection() {
  const groups = destinationMenuGroups();
  const mapItems = groups.flatMap((g) =>
    g.links.map((l) => ({ slug: l.href.split("/").pop()!, name: l.label, group: g.label })),
  );
  const featured = destinations.filter((d) => d.featured).slice(0, 4);
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title="From the plains to the peak to the reef"
          intro={`${destinations.length} parks, mountains and islands, each with its own rhythm and season. Hover the map to explore.`}
          action={
            <ButtonLink href="/destinations" variant="outline" arrow>
              All destinations
            </ButtonLink>
          }
        />
        <DestinationMap destinations={mapItems} />
        <RevealGroup className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((d) => (
            <RevealItem key={d.slug}>
              <DestinationCard destination={d} sizes="(min-width: 1024px) 25vw, 50vw" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
