"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { Stay, StayType } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";
import { ButtonLink } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tones: Record<StayType, string> = {
  "tented-camp": "#7d6332",
  "crater-lodge": "#2e4637",
  "beach-villa": "#176a70",
  "boutique-hotel": "#6b4636",
};

interface Group {
  type: StayType;
  label: string;
  blurb: string;
  stays: Stay[];
}

function StayGroup({ group, onActive }: { group: Group; onActive: (t: StayType) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  useEffect(() => {
    if (inView) onActive(group.type);
  }, [inView, group.type, onActive]);
  return (
    <div ref={ref} id={`stay-${group.type}`} className="scroll-mt-28 space-y-2.5">
      <p className="eyebrow pb-2 text-white/70 lg:hidden">{group.label}</p>
      {group.stays.map((s) => (
        <Link key={s.slug} href={`/stays/${s.slug}`} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden">
            <SmartImage image={s.image} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105" />
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
            <h3 className="text-xl tracking-tight">{s.name}</h3>
            <p className="text-sm text-white/75">
              From <Price usd={s.pricePerNight} className="text-white" /> per person · night
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
 * Pinned index of stay styles. The list stays put while photos scroll past,
 * and the section colour shifts to match each style.
 */
export function StaysIndex({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState<StayType>(groups[0]?.type);
  return (
    <section
      className="section-y text-white transition-colors duration-[1500ms] ease-out-soft"
      style={{ backgroundColor: tones[active] }}
      aria-labelledby="stays-heading"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <EyebrowLabel tone="dark">Where you&apos;ll stay</EyebrowLabel>
            <h2 id="stays-heading" className="mt-5 text-h2">
              Camps, lodges and hideaways
            </h2>
            <p className="mt-6 max-w-md text-lead text-white/80">
              Chosen for their setting, their guiding and the way they treat their people.
            </p>
            <ul className="mt-10 hidden border-t border-white/25 lg:block">
              {groups.map((g) => (
                <li key={g.type} className="-mt-px border-b border-white/25">
                  <a
                    href={`#stay-${g.type}`}
                    className={cn(
                      "flex h-16 items-center justify-between gap-4 uppercase tracking-[0.08em] transition-all duration-500",
                      active === g.type ? "translate-x-0 opacity-100" : "opacity-40 hover:opacity-70",
                    )}
                  >
                    <span className={cn("transition-transform duration-500", active === g.type && "translate-x-7")}>{g.label}</span>
                    <span className="text-sm normal-case tracking-normal">{g.stays.length}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 hidden max-w-sm text-sm text-white/70 lg:block">{groups.find((g) => g.type === active)?.blurb}</p>
            <ButtonLink href="/stays" variant="outline-light" className="mt-10" arrow>
              All stays
            </ButtonLink>
          </div>
        </div>
        <div className="space-y-20 lg:col-span-7">
          {groups.map((g) => (
            <StayGroup key={g.type} group={g} onActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
