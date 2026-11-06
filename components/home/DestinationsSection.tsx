import { destinations, destinationMenuGroups } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Link from "next/link";

export function DestinationsSection() {
  const groups = destinationMenuGroups();
  const featured = destinations.filter((d) => d.featured).slice(0, 4);
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title="From the plains to the peak to the reef"
          intro={`${destinations.length} parks, mountains and islands, each with its own rhythm and season.`}
          action={
            <ButtonLink href="/destinations" variant="outline" arrow>
              All destinations
            </ButtonLink>
          }
        />
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="eyebrow mb-2 text-stone">{g.label}</p>
              <ul className="border-t border-line">
                {g.links.map((l) => (
                  <li key={l.href} className="border-b border-line">
                    <Link href={l.href} className="flex items-center justify-between py-3 text-lg tracking-tight transition-colors hover:text-savanna-ink">
                      {l.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
