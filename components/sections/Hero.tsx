"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { homeContent } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { hero } = homeContent;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-white">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          {hero.video ? (
            <video
              className="size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={hero.image.src}
              aria-hidden
            >
              <source src={hero.video} type="video/mp4" />
            </video>
          ) : (
            <SmartImage image={hero.image} fill priority sizes="100vw" className="object-cover" />
          )}
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/10 to-black/70" />

      <motion.div style={{ opacity: fade }} className="container-x pt-40 pb-24 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="eyebrow mb-6 text-white/85"
        >
          {hero.eyebrow}
        </motion.p>
        <h1 className="max-w-5xl text-display">
          {[hero.titleLead, hero.titleAccent].map((word, i) => (
            <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className={i === 1 ? "inline-block italic text-savanna-light" : "inline-block"}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.45 + i * 0.12 }}
              >
                {word}
                {i === 0 ? " " : "."}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.8 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          {hero.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.95 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <OpenPlannerButton size="lg" arrow />
          <ButtonLink href="/safaris" variant="outline-light" size="lg">
            Explore safaris
          </ButtonLink>
        </motion.div>
      </motion.div>

      <a
        href="#trust"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
