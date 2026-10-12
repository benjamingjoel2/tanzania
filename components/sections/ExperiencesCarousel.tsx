"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Experience } from "@/data/types";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function ExperiencesCarousel({
  experiences,
  eyebrow = "Experiences",
  title = "Moments that stay with you",
  intro = "Watch a river crossing, trek to wild chimpanzees, drift over the Serengeti at dawn. Build your journey around what moves you.",
}: {
  experiences: Experience[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="section-y overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          action={
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Previous experiences"
                className="grid size-12 place-items-center rounded-full border border-charcoal/20 transition-colors hover:bg-charcoal hover:text-snow"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Next experiences"
                className="grid size-12 place-items-center rounded-full border border-charcoal/20 transition-colors hover:bg-charcoal hover:text-snow"
              >
                <ArrowRight className="size-5" />
              </button>
              <ButtonLink href="/experiences" variant="outline" className="ml-2 hidden sm:inline-flex" arrow>
                All experiences
              </ButtonLink>
            </div>
          }
        />
        <ul
          ref={track}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 md:-mx-10 md:scroll-px-10 md:px-10"
        >
          {experiences.map((e) => (
            <li key={e.slug} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-15px)]">
              <ExperienceCard experience={e} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
