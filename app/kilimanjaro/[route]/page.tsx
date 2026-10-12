import { notFound } from "next/navigation";
import { climbs, getClimb } from "@/lib/content";
import { kilimanjaroContent } from "@/data/kilimanjaro";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { ItineraryTimeline } from "@/components/sections/ItineraryTimeline";
import { FinalCta } from "@/components/sections/FinalCta";
import { PricingPanel } from "@/components/safaris/PricingPanel";
import { AltitudeProfile } from "@/components/kilimanjaro/AltitudeProfile";
import { RouteCard, DifficultyDots } from "@/components/cards/RouteCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Check } from "lucide-react";

/** Gate altitudes (m) where each route starts. */
const startAltitude: Record<string, number> = {
  machame: 1800,
  lemosho: 2360,
  marangu: 1860,
  rongai: 1950,
  "northern-circuit": 2360,
};

export function generateStaticParams() {
  return climbs.map((c) => ({ route: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kilimanjaro/[route]">) {
  const { route } = await params;
  const c = getClimb(route);
  if (!c) return {};
  return buildMetadata({
    title: `${c.name}: ${c.days}-day Kilimanjaro climb`,
    description: c.summary,
    path: `/kilimanjaro/${c.slug}`,
    image: c.image,
  });
}

export default async function ClimbPage({ params }: PageProps<"/kilimanjaro/[route]">) {
  const { route } = await params;
  const c = getClimb(route);
  if (!c) notFound();
  const others = climbs.filter((o) => o.slug !== c.slug).slice(0, 4);

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={`Kilimanjaro · ${c.days} days`}
        title={c.name}
        intro={c.tagline}
        image={c.image}
        crumbs={[
          { label: "Kilimanjaro", href: "/kilimanjaro" },
          { label: c.name, href: `/kilimanjaro/${c.slug}` },
        ]}
      />
      <AnchorNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "profile", label: "Altitude profile" },
          { id: "itinerary", label: "Day by day" },
          { id: "included", label: "What's included" },
        ]}
      />

      <DetailSection id="overview">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-3 text-savanna-ink">Overview</p>
            <p className="font-display text-2xl leading-snug md:text-3xl">{c.summary}</p>
            {c.overview.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-stone">
                {p}
              </p>
            ))}
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-stone">Difficulty</dt>
                <dd className="mt-1 flex items-center gap-2">
                  <DifficultyDots level={c.difficulty} /> <span className="text-sm">{c.difficultyLabel}</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-stone">Acclimatisation</dt>
                <dd className="mt-1 font-medium">{c.acclimatisation}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone">Crowds</dt>
                <dd className="mt-1 font-medium">{c.crowds}</dd>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <dt className="text-sm text-stone">Scenery</dt>
                <dd className="mt-1">{c.scenery}</dd>
              </div>
            </dl>
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <PricingPanel
              priceFrom={c.priceFrom}
              meta={[
                { label: "Duration", value: `${c.days} days on the mountain` },
                { label: "Sleeping", value: c.accommodation },
                { label: "Summit success", value: c.successNote.split(";")[0] },
              ]}
              enquireLabel="Enquire about this climb"
              prefill={{ tripTypes: ["kilimanjaro"], notes: `I'm interested in the ${c.name} (${c.days} days).` }}
              note="Guide price per person for a private climb for two, including park fees. Group size, dates and hotel choices affect the final price."
            />
          </div>
        </div>
      </DetailSection>

      <DetailSection id="profile" tone="sand" eyebrow="Altitude" title="Altitude profile">
        <AltitudeProfile days={c.itinerary} startAltitude={startAltitude[c.slug] ?? 1800} />
      </DetailSection>

      <DetailSection id="itinerary" eyebrow="Itinerary" title="Day by day, with altitudes">
        <ItineraryTimeline days={c.itinerary} />
      </DetailSection>

      <DetailSection id="included" tone="sand" eyebrow="Every climb" title="What's included">
        <ul className="grid gap-4 md:grid-cols-2">
          {kilimanjaroContent.included.map((i) => (
            <li key={i} className="flex gap-3 rounded-xl bg-white p-5 ring-1 ring-line">
              <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-acacia" />
              {i}
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection eyebrow="Other routes" title="Compare with">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <RevealItem key={o.slug} className="flex">
              <RouteCard climb={o} tone="light" className="w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>

      <FinalCta title={`Climb the ${c.name} with us`} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: `${c.name}, Kilimanjaro`,
          description: c.summary,
          url: absoluteUrl(`/kilimanjaro/${c.slug}`),
          offers: { "@type": "Offer", price: c.priceFrom, priceCurrency: "USD", seller: { "@type": "TravelAgency", name: siteConfig.name } },
        }}
      />
    </>
  );
}
