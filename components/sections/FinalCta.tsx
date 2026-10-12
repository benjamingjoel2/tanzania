"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { homeContent } from "@/data/home";
import { whatsappLink } from "@/config/site";
import { Reveal, SplitReveal } from "@/components/ui/Motion";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { buttonClasses } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/SectionHeading";

/** Closing call to action: a circle of colour grows behind the text as it scrolls into view. */
export function FinalCta({
  title = homeContent.finalCta.title,
  body = homeContent.finalCta.body,
}: {
  title?: string;
  body?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <section ref={ref} className="relative isolate grid min-h-[80svh] place-items-center overflow-hidden bg-acacia-deep text-white">
      <motion.div
        aria-hidden
        style={{ scale }}
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
            <a
              href={whatsappLink("Hello Uhuru Journeys! I'd like to plan a trip to Tanzania.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("outline-light", "lg")}
            >
              <SocialIcon name="whatsapp" className="size-5" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
