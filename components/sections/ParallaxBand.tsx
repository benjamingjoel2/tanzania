"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ImageAsset } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ParallaxBand({
  image,
  eyebrow,
  title,
  body,
  cta,
}: {
  image: ImageAsset;
  eyebrow: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[80svh] items-center overflow-hidden text-white">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 -z-10">
        <SmartImage image={image} fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d3d40]/85 via-[#0d3d40]/40 to-transparent" />
      <div className="container-x py-24">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-4 text-ocean-light">{eyebrow}</p>
          <h2 className="text-h2">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{body}</p>
          {cta && (
            <ButtonLink href={cta.href} variant="light" className="mt-10" arrow>
              {cta.label}
            </ButtonLink>
          )}
        </Reveal>
      </div>
    </section>
  );
}
