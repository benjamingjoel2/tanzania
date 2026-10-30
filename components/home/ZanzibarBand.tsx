"use client";

import { useCallback, useRef } from "react";
import { THROUGH, useScrollProgress } from "@/lib/useScrollProgress";
import { homeContent } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Turquoise band with a statement and a panorama that slowly scales as you scroll. */
export function ZanzibarBand() {
  const { zanzibar } = homeContent;
  const ref = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const onProgress = useCallback((p: number) => {
    if (layer.current) layer.current.style.transform = p ? `scale(${1 + 0.12 * p})` : "";
  }, []);
  useScrollProgress(ref, THROUGH, onProgress);
  return (
    <section className="section-y bg-ocean-ink text-white">
      <div className="container-x">
        <Reveal className="max-w-5xl">
          <EyebrowLabel tone="dark" className="text-white/90">
            {zanzibar.eyebrow}
          </EyebrowLabel>
          <h2 className="mt-5 text-h2">{zanzibar.title}</h2>
          <p className="mt-6 text-lead text-white/85">{zanzibar.body}</p>
          <ButtonLink href="/zanzibar" variant="outline-light" className="mt-9" arrow>
            Discover Zanzibar
          </ButtonLink>
        </Reveal>
        <div ref={ref} className="relative mt-14 aspect-[4/3] overflow-hidden md:aspect-[2.4/1]">
          <div ref={layer} className="absolute inset-0">
            <SmartImage image={zanzibar.image} fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
