"use client";

import { useCallback, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { homeContent } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { EXIT, useScrollProgress } from "@/lib/useScrollProgress";

/**
 * Full-bleed hero: a slow-zooming photograph with a giant one-word headline
 * rising from the bottom edge, and the real H1 + calls to action above it.
 */
export function Hero() {
  const { hero } = homeContent;
  const ref = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLParagraphElement>(null);
  // Scroll-linked values use the independent `scale` / `translate` properties so they
  // compose with the CSS entrance animations (which animate `transform`).
  const onProgress = useCallback((p: number) => {
    if (bg.current) bg.current.style.scale = p > 0.05 ? String(1 + (0.1 * (p - 0.05)) / 0.95) : "";
    if (word.current) word.current.style.translate = p ? `0 ${p * 35}%` : "";
    if (copy.current) copy.current.style.opacity = p ? String(Math.max(0, 1 - p * 2)) : "";
  }, []);
  useScrollProgress(ref, EXIT, onProgress);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-charcoal text-white">
      <div ref={bg} className="absolute inset-0 -z-10">
        <div className="hero-zoom absolute inset-0">
          {hero.video ? (
            <video className="size-full object-cover" autoPlay muted loop playsInline poster={hero.image.src} aria-hidden>
              <source src={hero.video} type="video/mp4" />
            </video>
          ) : (
            <SmartImage image={hero.image} fill priority sizes="100vw" className="object-cover" />
          )}
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/5 to-black/55" />

      <div ref={copy} className="container-x grid gap-6 pt-24 pb-4 md:grid-cols-12 md:items-end md:gap-8 md:pb-6">
        <div className="md:col-span-7 lg:col-span-6">
          <p className="eyebrow mb-4 animate-fade-up text-white/85 [animation-delay:0.3s]">{hero.eyebrow}</p>
          <h1 className="animate-fade-up text-[clamp(1.85rem,min(4.4vw,6.8svh),4.25rem)] leading-[1.04] [animation-delay:0.4s]">
            Tailor-made safaris, Kilimanjaro climbs and Zanzibar escapes
          </h1>
        </div>
        <div className="animate-fade-up md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9 [animation-delay:0.55s]">
          <p className="text-[clamp(1rem,min(1.35vw,2.6svh),1.2rem)] leading-relaxed text-white/85">{hero.intro}</p>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-6">
            <OpenPlannerButton size="lg" arrow />
            <ButtonLink href="/safaris" variant="outline-light" size="lg">
              Explore safaris
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="relative">
        <p
          ref={word}
          aria-hidden
          className="hero-word container-x pb-[0.06em] font-display text-[min(17vw,23svh)] leading-[0.78] font-normal tracking-[-0.06em] whitespace-nowrap text-white/95 select-none"
        >
          {hero.titleAccent}
        </p>
        <a
          href="#pillars"
          className="absolute right-24 bottom-[45%] hidden items-center gap-2.5 text-sm text-white md:flex xl:right-28"
        >
          <span className="border-b-2 border-dotted border-white pb-0.5">Discover</span>
          <ArrowDown aria-hidden className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
