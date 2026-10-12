import { safaris, stays, stayTypeLabels } from "@/lib/content";
import type { StayType } from "@/data/types";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/home/Pillars";
import { AboutSplit } from "@/components/home/AboutSplit";
import { SafariRow } from "@/components/cards/SafariRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { PlanningBento } from "@/components/home/PlanningBento";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { KiliSection } from "@/components/sections/KiliSection";
import { StaysIndex } from "@/components/home/StaysIndex";
import { ZanzibarBand } from "@/components/home/ZanzibarBand";
import { Statement } from "@/components/home/Statement";
import { JournalSection } from "@/components/sections/JournalSection";
import { GuideSignup } from "@/components/sections/GuideSignup";
import { FinalCta } from "@/components/sections/FinalCta";

const stayBlurbs: Record<StayType, string> = {
  "tented-camp": "Canvas, wooden decks and the sounds of the bush at night: the classic way to sleep on safari.",
  "crater-lodge": "Fireside evenings and misty dawns high on the rim of the Ngorongoro highlands.",
  "beach-villa": "Private pools, white sand and the slow rhythm of the tides on Zanzibar's coast.",
  "boutique-hotel": "Restored merchants' houses with rooftop views over the lanes of Stone Town.",
};

export default function HomePage() {
  const featured = safaris.filter((s) => s.featured).slice(0, 4);
  const groups = (Object.keys(stayTypeLabels) as StayType[])
    .map((type) => ({ type, label: stayTypeLabels[type], blurb: stayBlurbs[type], stays: stays.filter((s) => s.type === type) }))
    .filter((g) => g.stays.length);

  return (
    <>
      <Hero />
      <Pillars />
      <AboutSplit />
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            layout="split"
            eyebrow="Signature safaris"
            title="Journeys to start from"
            intro="Every itinerary is a starting point. Your specialist will reshape the route, pace and camps around you."
            action={
              <ButtonLink href="/safaris" variant="outline" arrow>
                Browse all safaris
              </ButtonLink>
            }
          />
          {featured.map((s, i) => (
            <SafariRow key={s.slug} safari={s} flip={i % 2 === 1} />
          ))}
        </div>
      </section>
      <PlanningBento />
      <DestinationsSection />
      <ExperiencesSection />
      <KiliSection />
      <StaysIndex groups={groups} />
      <ZanzibarBand />
      <Statement />
      <JournalSection />
      <GuideSignup />
      <FinalCta />
    </>
  );
}
