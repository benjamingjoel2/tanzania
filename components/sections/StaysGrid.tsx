import type { Stay } from "@/data/types";
import { StayCard } from "@/components/cards/StayCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function StaysGrid({
  stays,
  eyebrow = "Where you'll stay",
  title = "Camps, lodges and hideaways we love",
  intro = "From canvas under the acacias to crater-rim lodges and barefoot beach villas, every stay is chosen for its setting, guiding and the way it treats its people.",
}: {
  stays: Stay[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <RevealGroup className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stays.map((s) => (
            <RevealItem key={s.slug}>
              <StayCard stay={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
