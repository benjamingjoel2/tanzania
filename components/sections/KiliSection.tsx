import Link from "next/link";
import { climbs } from "@/lib/content";
import { images } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DifficultyDots } from "@/components/cards/RouteCard";
import { Price } from "@/components/ui/Price";

/** Dark Kilimanjaro band with routes as numbered columns separated by hairlines. */
export function KiliSection() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <SmartImage image={images.kilimanjaroCamp} fill sizes="100vw" className="-z-10 object-cover opacity-25" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      <div className="container-x section-y">
        <SectionHeading
          tone="dark"
          eyebrow="Kilimanjaro · 5,895 m"
          title="Stand on the roof of Africa, at Uhuru Peak"
          intro="No ropes, no technical climbing: just steady steps, expert crews who follow KPAP porter-welfare guidelines, and the right route for you."
          action={
            <ButtonLink href="/kilimanjaro" variant="outline-light" arrow>
              Compare routes
            </ButtonLink>
          }
        />
        <RevealGroup className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {climbs.map((c, i) => (
            <RevealItem key={c.slug} className="border-b border-white/15 sm:border-r lg:border-b-0 lg:last:border-r-0">
              <Link href={`/kilimanjaro/${c.slug}`} className="group flex h-full flex-col p-6 transition-colors hover:bg-white/[0.05] lg:pl-6 lg:first:pl-0">
                <p className="text-sm text-savanna-light">0{i + 1}</p>
                <h3 className="mt-8 text-2xl tracking-tight">{c.name}</h3>
                <p className="mt-2 text-sm text-white/60">{c.tagline}</p>
                <dl className="mt-6 space-y-2 text-sm text-white/80">
                  <div className="flex justify-between gap-2">
                    <dt className="text-white/50">Days</dt>
                    <dd>{c.days}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-white/50">Difficulty</dt>
                    <dd>
                      <DifficultyDots level={c.difficulty} />
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-white/50">{c.successNote}</p>
                <div className="mt-auto pt-6">
                  <p className="text-sm text-white/60">
                    From <Price usd={c.priceFrom} className="text-xl tracking-tight text-white" /> per person
                  </p>
                  <span className="group/btn mt-3 inline-flex items-center gap-2 text-sm">
                    View route <ArrowIcon />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
