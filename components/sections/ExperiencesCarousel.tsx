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
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  // Mouse drag-to-scroll (touch already scrolls natively).
  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
    track.current.style.scrollSnapType = "none";
  };
  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!drag.current || !track.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    track.current.scrollLeft = drag.current.left - dx;
  };
  const endDrag = () => {
    if (!track.current) return;
    track.current.style.scrollSnapType = "";
    setTimeout(() => (drag.current = null), 0);
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
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
                className="grid size-12 place-items-center rounded-full border border-dashed border-charcoal transition-colors hover:border-solid hover:bg-charcoal hover:text-snow"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Next experiences"
                className="grid size-12 place-items-center rounded-full border border-dashed border-charcoal transition-colors hover:border-solid hover:bg-charcoal hover:text-snow"
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
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className="no-scrollbar -mx-5 flex cursor-grab snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-px-5 px-5 pb-2 select-none active:cursor-grabbing md:-mx-8 md:scroll-px-8 md:px-8 xl:-mx-12 xl:scroll-px-12 xl:px-12"
        >
          {experiences.map((e) => (
            <li key={e.slug} className="w-[78%] shrink-0 snap-start sm:w-[42%] lg:w-[27%] xl:w-[22%] 2xl:w-[18%]">
              <ExperienceCard experience={e} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
