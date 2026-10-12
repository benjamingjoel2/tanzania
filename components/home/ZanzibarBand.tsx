"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { homeContent } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Turquoise band with a statement and a panorama that slowly scales as you scroll. */
export function ZanzibarBand() {
  const { zanzibar } = homeContent;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  return (
    <section className="section-y bg-ocean-ink text-white">
      <div className="container-x">
        <Reveal className="max-w-5xl">
          <EyebrowLabel tone="dark" className="text-ocean-light">
            {zanzibar.eyebrow}
          </EyebrowLabel>
          <h2 className="mt-5 text-h2">{zanzibar.title}</h2>
          <p className="mt-6 text-lead text-white/85">{zanzibar.body}</p>
          <ButtonLink href="/zanzibar" variant="outline-light" className="mt-9" arrow>
            Discover Zanzibar
          </ButtonLink>
        </Reveal>
        <div ref={ref} className="relative mt-14 aspect-[4/3] overflow-hidden md:aspect-[2.4/1]">
          <motion.div style={{ scale }} className="absolute inset-0">
            <SmartImage image={zanzibar.image} fill sizes="100vw" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
