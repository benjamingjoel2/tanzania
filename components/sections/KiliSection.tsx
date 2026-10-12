import { climbs } from "@/lib/content";
import { images } from "@/data/images";
import { RouteCard } from "@/components/cards/RouteCard";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function KiliSection() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <SmartImage
        image={images.kilimanjaroCamp}
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
      <div className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4 text-savanna-light">Kilimanjaro</p>
            <h2 className="text-h2">
              Stand on the roof of Africa, at <span className="italic text-savanna-light">Uhuru Peak</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/75">
              5,895 metres. No ropes, no technical climbing, just steady steps, expert mountain crews and the right
              route for you. We only work with crews who follow KPAP porter-welfare guidelines.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/kilimanjaro" variant="primary" arrow>
                Compare routes
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <RevealGroup className="no-scrollbar -mx-5 mt-14 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-5">
          {climbs.map((c) => (
            <RevealItem key={c.slug} className="flex w-[80%] shrink-0 snap-start sm:w-[55%] md:w-auto">
              <RouteCard climb={c} className="w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
