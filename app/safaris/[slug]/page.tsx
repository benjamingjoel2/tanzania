import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { budgetLabels, getDestination, getSafari, regionLabels, safaris } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { tripTypesForSafari } from "@/lib/planner-map";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailBlock, DetailSection } from "@/components/sections/DetailSection";
import { ItineraryTimeline } from "@/components/sections/ItineraryTimeline";
import { Inclusions } from "@/components/sections/Inclusions";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { FinalCta } from "@/components/sections/FinalCta";
import { PricingPanel } from "@/components/safaris/PricingPanel";
import { SafariRow } from "@/components/cards/SafariRow";
import { Chips } from "@/components/ui/Chips";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return safaris.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/safaris/[slug]">) {
  const { slug } = await params;
  const s = getSafari(slug);
  if (!s) return {};
  return buildMetadata({ title: `${s.title} · ${s.days}-day Tanzania safari`, description: s.summary, path: `/safaris/${s.slug}`, image: s.image });
}

const links = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Day by day" },
  { id: "map", label: "Route map" },
  { id: "included", label: "What's included" },
  { id: "not-included", label: "Not included" },
];

export default async function SafariPage({ params }: PageProps<"/safaris/[slug]">) {
  const { slug } = await params;
  const s = getSafari(slug);
  if (!s) notFound();

  const dests = s.destinations.map((d) => getDestination(d)).filter((d) => d !== undefined);
  const places = dests.map((d) => d.name);
  const related = safaris.filter((o) => o.slug !== s.slug && o.regions.some((r) => s.regions.includes(r))).slice(0, 2);
  const prefill = { tripTypes: tripTypesForSafari(s), notes: `I'm interested in "${s.title}" (${s.days} days).` };

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={`${s.days} days · ${s.regions.map((r) => regionLabels[r]).join(" & ")}`}
        title={s.title}
        intro={s.summary}
        image={s.image}
        crumbs={[
          { label: "Safaris", href: "/safaris" },
          { label: s.title, href: `/safaris/${s.slug}` },
        ]}
      />
      <PhotoStrip images={[s.image, ...dests.map((d) => d.image)]} />
      <AnchorNav items={links} className="lg:hidden" />

      <div className="container-x grid gap-12 pt-10 pb-10 lg:grid-cols-12 lg:gap-16 lg:pt-0">
        <div className="lg:col-span-8">
          <DetailBlock id="overview" title="Overview">
            <p className="text-lead">{s.inclusionLine}</p>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {s.highlights.map((h) => (
                <li key={h} className="flex gap-3 border-t border-line pt-4">
                  <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-savanna-ink" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-10 mb-4 text-stone">Ideal for</p>
            <Chips items={s.bestFor} />
          </DetailBlock>
          <DetailBlock id="itinerary" title="Day by day">
            <ItineraryTimeline days={s.itinerary} />
          </DetailBlock>
          <DetailBlock id="map" title="Route map">
            <MapPlaceholder stops={["Arrive", ...places]} />
          </DetailBlock>
          <DetailBlock id="included" title="What's included">
            <Inclusions included={s.inclusions} excluded={[]} />
          </DetailBlock>
          <DetailBlock id="not-included" title="Not included">
            <Inclusions included={[]} excluded={s.exclusions} />
          </DetailBlock>
        </div>
        <div className="lg:col-span-4">
          <PricingPanel
            priceFrom={s.priceFrom}
            meta={[
              { label: "Duration", value: `${s.days} days / ${s.nights} nights` },
              { label: "Places", value: places.join(", ") },
              { label: "Style", value: budgetLabels[s.budget] },
            ]}
            enquireLabel="Enquire about this safari"
            prefill={prefill}
            links={links}
            note="Guide price per person sharing, based on two travellers in shoulder season. Prices vary by dates, camps and group size; your specialist will confirm a full quote."
          />
        </div>
      </div>

      {related.length > 0 && (
        <DetailSection tone="sand" eyebrow="You may also like" title="Similar journeys">
          {related.map((r, i) => (
            <SafariRow key={r.slug} safari={r} flip={i % 2 === 1} />
          ))}
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
          itinerary: { "@type": "ItemList", itemListElement: s.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.title })) },
          offers: { "@type": "Offer", price: s.priceFrom, priceCurrency: "USD", availability: "https://schema.org/InStock", seller: { "@type": "TravelAgency", name: siteConfig.name } },
        }}
      />
    </>
  );
}
