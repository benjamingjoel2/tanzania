import { Check } from "lucide-react";
import { conservationContent as c } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Conservation & community",
  description: "How Uhuru Journeys supports wildlife, fair work for porters and guides, and the communities around Tanzania's parks.",
  path: "/conservation",
  image: c.hero.image,
});

export default function ConservationPage() {
  return (
    <>
      <PageHero size="lg" eyebrow={c.hero.eyebrow} title={c.hero.title} intro={c.hero.intro} image={c.hero.image} crumbs={[{ label: "Conservation", href: "/conservation" }]} />
      <DetailSection>
        <div className="space-y-20 md:space-y-28">
          {c.pillars.map((p, i) => (
            <div key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className={cn("relative aspect-[4/3] overflow-hidden rounded-none bg-sand lg:col-span-6", i % 2 && "lg:order-2 lg:col-start-7")}>
                <SmartImage image={p.image} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </Reveal>
              <Reveal delay={0.1} className={cn("lg:col-span-5", i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}>
                <p className="font-display text-4xl text-savanna-ink">0{i + 1}</p>
                <h2 className="mt-3 text-h2">{p.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-stone">{p.body}</p>
                {i === 1 && (
                  <ButtonLink href="/kilimanjaro#porters" variant="outline" className="mt-8" arrow>
                    Porter welfare
                  </ButtonLink>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </DetailSection>
      <DetailSection tone="sand" eyebrow="Our commitments" title="What you can hold us to">
        <ul className="grid gap-4 md:grid-cols-2">
          {c.commitments.map((x) => (
            <li key={x} className="flex gap-3 rounded-none bg-white p-5 ring-1 ring-line">
              <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-acacia" /> {x}
            </li>
          ))}
        </ul>
      </DetailSection>
      <FinalCta />
    </>
  );
}
