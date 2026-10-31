import { experiences } from "@/lib/content";
import { images } from "@/data/images";
import type { Experience } from "@/data/types";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Tanzania experiences",
  description:
    "The Great Migration, Kilimanjaro, balloon safaris, chimpanzee trekking, walking and boat safaris, Zanzibar spice tours, diving and more: build your Tanzania journey around what moves you.",
  path: "/experiences",
  image: images.balloon,
});

const categories: Experience["category"][] = ["Wildlife", "Adventure", "Journeys", "Culture", "Coast"];
const intros: Record<Experience["category"], string> = {
  Wildlife: "The great herds, big cats, chimpanzees and the quiet thrill of being on foot or on the water.",
  Adventure: "Mountains to climb and wild country to cross under your own steam.",
  Journeys: "Trips shaped around who you travel with and how you like to travel.",
  Culture: "Meet the people, flavours and histories that make Tanzania what it is.",
  Coast: "Reefs, islands and the warm Indian Ocean.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Build your journey around a moment"
        intro="Fifteen ways to feel the freedom of Tanzania. Combine as many as you like; your specialist will make them flow."
        image={images.balloon}
        crumbs={[{ label: "Experiences", href: "/experiences" }]}
      />
      {categories.map((cat, i) => {
        const list = experiences.filter((e) => e.category === cat);
        if (!list.length) return null;
        return (
          <DetailSection key={cat} id={cat.toLowerCase()} tone={i % 2 ? "sand" : "plain"} eyebrow={cat} title={cat === "Journeys" ? "Journeys for every traveller" : cat} intro={intros[cat]}>
            <RevealGroup className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((e) => (
                <RevealItem key={e.slug}>
                  <ExperienceCard experience={e} />
                </RevealItem>
              ))}
            </RevealGroup>
          </DetailSection>
        );
      })}
      <FinalCta />
    </>
  );
}
