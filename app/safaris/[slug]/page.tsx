import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { budgetLabels, getDestination, getSafari, regionLabels, safaris } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { tripTypesForSafari } from "@/lib/planner-map";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { ItineraryTimeline } from "@/components/sections/ItineraryTimeline";
import { Inclusions } from "@/components/sections/Inclusions";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { FinalCta } from "@/components/sections/FinalCta";
import { PricingPanel } from "@/components/safaris/PricingPanel";
import { SafariCard } from "@/components/cards/SafariCard";
import { Chips } from "@/components/ui/Chips";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return safaris.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/safaris/[slug]">) {
  const { slug } = await params;
  const s = getSafari(slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.title} · ${s.days}-day Tanzania safari`,
    description: s.summary,
    path: `/safaris/${s.slug}`,
    image: s.image,
  });
}

export default async function SafariPage({ params }: PageProps<"/safaris/[slug]">) {
  const { slug } = await params;
  const s = getSafari(slug);
  if (!s) notFound();

  const places = s.destinations.map((d) => getDestination(d)?.name ?? d);
  const related = safaris.filter((o) => o.slug !== s.slug && o.regions.some((r) => s.regions.includes(r))).slice(0, 3);
  const prefill = { tripTypes: tripTypesForSafari(s), notes: `I'm interested in "${s.title}" (${s.days} days).` };

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={`${s.days} days · ${s.regions.map((r) => regionLabels[r]).join(" & ")}`}
        title={s.title}
        intro={s.inclusionLine}
        image={s.image}
        crumbs={[
          { label: "Safaris", href: "/safaris" },
          { label: s.title, href: `/safaris/${s.slug}` },
        ]}
      />
      <AnchorNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "itinerary", label: "Day by day" },
          { id: "map", label: "Route map" },
          { id: "included", label: "What's included" },
        ]}
      />

      <DetailSection id="overview">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-3 text-savanna-ink">Overview</p>
              <p className="font-display text-2xl leading-snug md:text-3xl">{s.summary}</p>
              <h2 className="mt-12 text-h3">Highlights</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-line">
                    <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-savanna-ink" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <h2 className="mt-12 text-h3">Ideal for</h2>
              <Chips className="mt-5" items={s.bestFor} />
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <PricingPanel
              priceFrom={s.priceFrom}
              meta={[
                { label: "Duration", value: `${s.days} days / ${s.nights} nights` },
                { label: "Places", value: places.join(", ") },
                { label: "Style", value: budgetLabels[s.budget] },
              ]}
              enquireLabel="Enquire about this safari"
              prefill={prefill}
              note="Guide price per person sharing, based on two travellers in shoulder season. Prices vary by dates, camps and group size; your specialist will confirm a full quote."
            />
          </div>
        </div>
      </DetailSection>

      <DetailSection id="itinerary" tone="sand" eyebrow="Itinerary" title="Day by day">
        <ItineraryTimeline days={s.itinerary} />
      </DetailSection>

      <DetailSection id="map" eyebrow="The route" title="Where you'll go">
        <MapPlaceholder stops={["Arrive", ...places]} />
      </DetailSection>

      <DetailSection id="included" tone="sand" eyebrow="Pricing" title="What's included">
        <Inclusions included={s.inclusions} excluded={s.exclusions} />
      </DetailSection>

      {related.length > 0 && (
        <DetailSection eyebrow="You might also like" title="Similar journeys">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <RevealItem key={r.slug} className="flex">
                <SafariCard safari={r} className="w-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      <FinalCta title="Make this journey yours" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: s.title,
          description: s.summary,
          url: absoluteUrl(`/safaris/${s.slug}`),
          touristType: s.bestFor,
          itinerary: {
            "@type": "ItemList",
            itemListElement: s.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.title })),
          },
          offers: {
            "@type": "Offer",
            price: s.priceFrom,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: { "@type": "TravelAgency", name: siteConfig.name },
          },
        }}
      />
    </>
  );
}
