import { Check, HeartHandshake } from "lucide-react";
import { climbs, getDestination } from "@/lib/content";
import { kilimanjaroContent as k } from "@/data/kilimanjaro";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { MonthGrid } from "@/components/sections/MonthGrid";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { RouteCard } from "@/components/cards/RouteCard";
import { RouteComparisonTable } from "@/components/kilimanjaro/RouteComparisonTable";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

export const metadata = buildMetadata({
  title: "Climb Kilimanjaro: routes, prices & advice",
  description:
    "Compare Kilimanjaro routes (Machame, Lemosho, Marangu, Rongai and the Northern Circuit), the best months to climb, training and altitude advice, and our porter welfare commitment.",
  path: "/kilimanjaro",
  image: k.hero.image,
});

export default function KilimanjaroPage() {
  const kili = getDestination("kilimanjaro");
  const kiliFaqs = faqs.filter((f) => f.category === "Kilimanjaro");
  return (
    <>
      <PageHero
        size="lg"
        eyebrow={k.hero.eyebrow}
        title={k.hero.title}
        intro={k.hero.intro}
        image={k.hero.image}
        crumbs={[{ label: "Kilimanjaro", href: "/kilimanjaro" }]}
      >
        <OpenPlannerButton size="lg" arrow prefill={{ tripTypes: ["kilimanjaro"] }}>
          Plan my climb
        </OpenPlannerButton>
      </PageHero>
      <AnchorNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "routes", label: "Routes" },
          { id: "compare", label: "Compare" },
          { id: "when", label: "Best months" },
          { id: "training", label: "Training & altitude" },
          { id: "included", label: "What's included" },
          { id: "porters", label: "Porter welfare" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <DetailSection id="overview">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-3 text-savanna-ink">Overview</p>
            <h2 className="text-h2">Five climates, one summit</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-stone lg:col-span-6 lg:col-start-7">
            {k.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-none bg-line ring-1 ring-line md:grid-cols-4">
          {[
            ["5,895 m", "Uhuru Peak"],
            ["6–9 days", "On the mountain"],
            ["5", "Routes we climb"],
            ["1 : 2", "Guide-to-climber ratio"],
          ].map(([v, l]) => (
            <div key={l} className="bg-snow p-6">
              <dt className="text-sm text-stone">{l}</dt>
              <dd className="mt-1 font-display text-3xl">{v}</dd>
            </div>
          ))}
        </dl>
      </DetailSection>

      <DetailSection id="routes" tone="sand" eyebrow="Routes" title="Choose your way up">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {climbs.map((c) => (
            <RevealItem key={c.slug} className="flex">
              <RouteCard climb={c} tone="light" className="w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>

      <DetailSection
        id="compare"
        eyebrow="Route comparison"
        title="Side by side"
        intro="Not sure which route suits you? Longer itineraries with good acclimatisation profiles give the best chance of a safe summit."
      >
        <RouteComparisonTable climbs={climbs} />
      </DetailSection>

      {kili && (
        <DetailSection
          id="when"
          tone="sand"
          eyebrow="Best months to climb"
          title="When to climb Kilimanjaro"
          intro="The driest, clearest conditions run from late June to October and from January to early March. You can climb all year, but April, May and November are wetter."
        >
          <MonthGrid months={kili.months} caption="Best months to climb Kilimanjaro" />
        </DetailSection>
      )}

      <DetailSection id="training" eyebrow="Preparation" title="Training and altitude advice">
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {k.training.map((t, i) => (
            <RevealItem key={t.title} className="rounded-none bg-white p-7 ring-1 ring-line">
              <p className="font-display text-3xl text-savanna-ink">0{i + 1}</p>
              <h3 className="mt-3 text-h3">{t.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{t.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-6 text-sm text-stone">
          This is general guidance, not medical advice. Please see your doctor or a travel clinic before climbing.
        </p>
      </DetailSection>

      <DetailSection id="included" tone="sand" eyebrow="Every climb" title="What's included">
        <ul className="grid gap-4 md:grid-cols-2">
          {k.included.map((i) => (
            <li key={i} className="flex gap-3 rounded-none bg-white p-5 ring-1 ring-line">
              <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-acacia" />
              {i}
            </li>
          ))}
        </ul>
      </DetailSection>

      <section id="porters" className="scroll-mt-32 bg-acacia-deep text-white">
        <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <Reveal>
            <HeartHandshake aria-hidden className="size-10 text-savanna-light" strokeWidth={1.5} />
            <h2 className="mt-6 text-h2">{k.porterWelfare.title}</h2>
            {k.porterWelfare.body.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-white/80">
                {p}
              </p>
            ))}
            <p className="mt-6 inline-block rounded-lg border border-dashed border-white/30 px-3 py-2 text-xs text-white/70">
              {k.porterWelfare.note}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-none bg-acacia">
            <SmartImage image={k.porterWelfare.image} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <DetailSection id="faq" eyebrow="Good to know" title="Kilimanjaro FAQ">
        <FaqList faqs={kiliFaqs} />
      </DetailSection>

      <FinalCta title="Ready for the roof of Africa?" />
    </>
  );
}
