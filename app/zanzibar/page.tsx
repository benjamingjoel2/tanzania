import { getDestination, stays } from "@/lib/content";
import { zanzibarContent as z } from "@/data/zanzibar";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { MonthGrid } from "@/components/sections/MonthGrid";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { StayCard } from "@/components/cards/StayCard";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";
import { DoorMotif } from "@/components/ui/DoorMotif";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Zanzibar holidays: beaches, Stone Town & safari extensions",
  description:
    "Plan Zanzibar the right way: which beach suits you, how long to spend in Stone Town, where to stay and how to add the island to a Tanzania safari or Kilimanjaro climb.",
  path: "/zanzibar",
  image: z.hero.image,
});

export default function ZanzibarPage() {
  const zanzibar = getDestination("zanzibar");
  const zStays = stays.filter((s) => s.destination === "zanzibar");
  const zFaqs = faqs.filter((f) => f.category === "Zanzibar");
  return (
    <>
      <PageHero
        size="lg"
        eyebrow={z.hero.eyebrow}
        title={z.hero.title}
        intro={z.hero.intro}
        image={z.hero.image}
        crumbs={[{ label: "Zanzibar", href: "/zanzibar" }]}
      >
        <OpenPlannerButton size="lg" arrow prefill={{ tripTypes: ["safari-zanzibar"] }}>
          Plan bush & beach
        </OpenPlannerButton>
      </PageHero>
      <AnchorNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "beaches", label: "Beaches" },
          { id: "stone-town", label: "Stone Town" },
          { id: "stays", label: "Where to stay" },
          { id: "add-ons", label: "Add-on itineraries" },
          { id: "when", label: "When to go" },
          { id: "faq", label: "Tips" },
        ]}
      />

      <DetailSection id="overview">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-3 text-ocean-ink">Overview</p>
            <h2 className="text-h2">The perfect last chapter</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-stone lg:col-span-6 lg:col-start-7">
            {z.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ButtonLink href="/destinations/zanzibar" variant="outline" arrow>
              Zanzibar destination guide
            </ButtonLink>
          </Reveal>
        </div>
      </DetailSection>

      <DetailSection id="beaches" tone="sand" eyebrow="Beaches" title="Which coast is yours?">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {z.beaches.map((b) => (
            <RevealItem key={b.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ocean/20">
                <SmartImage image={b.image} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <p className="eyebrow mt-5 text-ocean-ink">{b.area}</p>
              <h3 className="mt-2 font-display text-2xl">{b.name}</h3>
              <p className="mt-2 text-stone">{b.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>

      <section id="stone-town" className="scroll-mt-32 bg-[#0f4d51] text-white">
        <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ocean lg:aspect-[4/4.5]">
            <SmartImage image={z.stoneTown.image} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <DoorMotif className="mb-8 max-w-48 text-ocean-light" />
            <p className="eyebrow mb-3 text-ocean-light">UNESCO World Heritage Site</p>
            <h2 className="text-h2">{z.stoneTown.title}</h2>
            {z.stoneTown.body.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-white/80">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {zStays.length > 0 && (
        <DetailSection id="stays" eyebrow="Where to stay" title="Island stays we love">
          <RevealGroup className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {zStays.map((s) => (
              <RevealItem key={s.slug}>
                <StayCard stay={s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      <DetailSection
        id="add-ons"
        tone="sand"
        eyebrow="Add-on itineraries"
        title="Add Zanzibar to your safari"
        intro="Short extensions that slot onto the end of any safari or climb. Prices include accommodation, transfers and the activities listed; flights from the mainland are quoted separately."
      >
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {z.addOns.map((a) => (
            <RevealItem key={a.title} className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-line">
              <p className="eyebrow text-ocean-ink">{a.nights} nights</p>
              <h3 className="mt-3 font-display text-2xl">{a.title}</h3>
              <p className="mt-3 flex-1 text-stone">{a.body}</p>
              <p className="mt-6 border-t border-line pt-5 text-sm text-stone">
                From <Price usd={a.priceFrom} className="font-display text-2xl text-charcoal" /> per person
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>

      {zanzibar && (
        <DetailSection id="when" eyebrow="When to go" title="Zanzibar through the year" intro={zanzibar.bestTimeSummary}>
          <MonthGrid months={zanzibar.months} caption="Best months to visit Zanzibar" />
        </DetailSection>
      )}

      <DetailSection id="faq" tone="sand" eyebrow="Travel tips" title="Good to know">
        <FaqList faqs={[...zFaqs, ...(zanzibar?.faqs ?? [])]} />
      </DetailSection>

      <FinalCta title="Bush, then beach" body="Tell us your safari dates and we'll find the right island, the right beach and the right number of nights to unwind." />
    </>
  );
}
