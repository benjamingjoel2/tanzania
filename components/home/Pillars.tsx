import Link from "next/link";
import { climbs, safaris } from "@/lib/content";
import { images } from "@/data/images";
import { zanzibarContent } from "@/data/zanzibar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal, LineDraw } from "@/components/ui/Motion";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** Three journey types as tall tiles separated by hairlines. */
export function Pillars() {
  const tiles = [
    { title: "Safaris", count: `${safaris.length} sample itineraries`, href: "/safaris", image: images.heroSerengeti },
    { title: "Kilimanjaro", count: `${climbs.length} routes to the summit`, href: "/kilimanjaro", image: images.kilimanjaroSummit },
    { title: "Zanzibar", count: `${zanzibarContent.beaches.length} coasts & Stone Town`, href: "/zanzibar", image: images.zanzibarBeach },
  ];
  return (
    <section id="pillars" className="section-y scroll-mt-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tailor-made Tanzania"
          title="Three ways to feel free, combined exactly as you like"
          intro="Wildlife on the open plains, the roof of Africa, and the warm Indian Ocean. Most of our travellers combine two or three."
        />
        <RevealGroup className="grid md:grid-cols-3">
          {tiles.map((t, i) => (
            <RevealItem key={t.title} className="relative md:px-6 md:first:pl-0 md:last:pr-0">
              {i > 0 && <span aria-hidden className="absolute inset-y-0 left-0 hidden w-px bg-line md:block" />}
              <Link href={t.href} className="group block py-6 md:py-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h3">{t.title}</h3>
                  <span aria-hidden className="text-2xl text-savanna-ink transition-transform duration-500 group-hover:rotate-90">+</span>
                </div>
                <p className="mt-1 text-stone">/ {t.count}</p>
                <ImageReveal image={t.image} className="mt-6 aspect-[4/5]" sizes="(min-width: 768px) 33vw, 100vw" imgClassName="transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105" />
              </Link>
              {i < tiles.length - 1 && <LineDraw className="md:hidden" />}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
