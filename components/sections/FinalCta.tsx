"use client";

import { useCallback, useRef } from "react";
import { useScrollProgress, type ScrollOffset } from "@/lib/useScrollProgress";
import { homeContent } from "@/data/home";
import { Reveal, SplitReveal } from "@/components/ui/Motion";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { ButtonLink } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/SectionHeading";

const GROW: ScrollOffset = [[0, 1], [0.5, 0.5]];

/** Closing call to action: a circle of colour grows behind the text as it scrolls into view. */
export function FinalCta({
  title = homeContent.finalCta.title,
  body = homeContent.finalCta.body,
}: {
  title?: string;
  body?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const onProgress = useCallback((p: number) => {
    if (circle.current) circle.current.style.scale = String(0.05 + 0.95 * p);
  }, []);
  useScrollProgress(ref, GROW, onProgress);

  return (
    <section ref={ref} className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden bg-acacia-deep text-white">
      <div
        ref={circle}
        aria-hidden
        data-grow=""
        style={{ scale: "0.05" }}
        className="absolute top-1/2 left-1/2 -z-10 aspect-square w-[160vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acacia md:w-[120vw]"
      />
      <div className="container-x py-24 text-center">
        <EyebrowLabel tone="dark" className="mb-6 justify-center">
          Your journey starts here
        </EyebrowLabel>
        <SplitReveal text={title} className="mx-auto max-w-4xl text-h1" />
        <Reveal>
          <p className="mx-auto mt-7 max-w-2xl text-lead text-white/80">{body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <OpenPlannerButton size="lg" arrow>
              Plan your journey
            </OpenPlannerButton>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
