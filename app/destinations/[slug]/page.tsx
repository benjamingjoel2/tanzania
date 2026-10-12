import { notFound } from "next/navigation";
import { CalendarDays, Compass, MapPin } from "lucide-react";
import {
  destinations,
  experiencesForDestination,
  getDestination,
  regionLabels,
  safaris,
  safarisForDestination,
  staysForDestination,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { MonthGrid, MonthNotes } from "@/components/sections/MonthGrid";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { SafariCard } from "@/components/cards/SafariCard";
import { StayCard } from "@/components/cards/StayCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Chips } from "@/components/ui/Chips";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return buildMetadata({
    title: `${d.name} travel guide & safaris`,
    description: d.summary,
    path: `/destinations/${d.slug}`,
    image: d.image,
  });
}

export default async function DestinationPage({
  params,
}: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const stays = staysForDestination(d.slug);
  const direct = safarisForDestination(d.slug);
  const related = (
    direct.length ? direct : safaris.filter((s) => s.regions.includes(d.region))
  ).slice(0, 3);
  const experiences = experiencesForDestination(d.slug).slice(0, 4);

  const nav = [
    { id: "overview", label: "Overview" },
    { id: "when-to-go", label: "When to go" },
    { id: "highlights", label: "Highlights" },
    {
      id: "wildlife",
      label:
        d.region === "zanzibar" || d.region === "coast"
          ? "Wildlife & marine life"
          : "Wildlife",
    },
    ...(stays.length ? [{ id: "stays", label: "Where to stay" }] : []),
    ...(related.length ? [{ id: "safaris", label: "Safaris" }] : []),
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={`${regionLabels[d.region]} · ${d.kind}`}
        title={d.name}
        intro={d.tagline}
        image={d.image}
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: d.name, href: `/destinations/${d.slug}` },
        ]}
      />
      <AnchorNav items={nav} />

      <DetailSection id="overview">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-3 text-savanna-ink">Overview</p>
            <p className="font-display text-2xl leading-snug md:text-3xl">
              {d.summary}
            </p>
            {d.overview.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-stone">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <aside className="rounded-none bg-white p-7 ring-1 ring-line lg:sticky lg:top-36">
              <dl className="space-y-5">
                <div>
                  <dt className="flex items-center gap-2 text-sm text-stone">
                    <MapPin aria-hidden className="size-4 text-savanna-ink" />{" "}
                    Region
                  </dt>
                  <dd className="mt-1 font-medium">{regionLabels[d.region]}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-sm text-stone">
                    <CalendarDays
                      aria-hidden
                      className="size-4 text-savanna-ink"
                    />{" "}
                    Best time to visit
                  </dt>
                  <dd className="mt-1 font-medium">{d.bestTimeSummary}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-sm text-stone">
                    <Compass aria-hidden className="size-4 text-savanna-ink" />{" "}
                    Pairs well with
                  </dt>
                  <dd className="mt-1 font-medium">
                    {destinations
                      .filter((o) => o.region === d.region && o.slug !== d.slug)
                      .slice(0, 3)
                      .map((o) => o.name)
                      .join(", ") || "Zanzibar"}
                  </dd>
                </div>
              </dl>
              <OpenPlannerButton
                className="mt-7 w-full"
                variant="dark"
                arrow
                prefill={{ notes: `I'd love to include ${d.name}.` }}
              >
                Plan a trip to {d.name}
              </OpenPlannerButton>
            </aside>
          </Reveal>
        </div>
      </DetailSection>

      <DetailSection
        id="when-to-go"
        tone="sand"
        eyebrow="Best time to visit"
        title={`When to go to ${d.name}`}
        intro={d.bestTimeSummary}
      >
        <MonthGrid
          months={d.months}
          caption={`Best months to visit ${d.name}`}
        />
        <MonthNotes months={d.months} />
      </DetailSection>

      <DetailSection
        id="highlights"
        eyebrow="Highlights"
        title="Why we love it"
      >
        <RevealGroup className="grid gap-px overflow-hidden rounded-none bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {d.highlights.map((h, i) => (
            <RevealItem key={h} className="bg-snow p-7">
              <p className="font-display text-3xl text-savanna-ink">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-lg leading-snug">{h}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>

      <DetailSection
        id="wildlife"
        tone="sand"
        eyebrow="What you might see"
        title="Wildlife to look out for"
      >
        <Chips items={d.wildlife} />
        <p className="mt-6 text-sm text-stone">
          Sightings are never guaranteed: this is wild nature, which is the
          point.
        </p>
      </DetailSection>

      {stays.length > 0 && (
        <DetailSection
          id="stays"
          eyebrow="Where to stay"
          title={`Stays in ${d.name}`}
        >
          <RevealGroup className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {stays.map((s) => (
              <RevealItem key={s.slug}>
                <StayCard stay={s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      {related.length > 0 && (
        <DetailSection
          id="safaris"
          tone="sand"
          eyebrow="Journeys"
          title={`Safaris featuring ${d.name}`}
        >
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <RevealItem key={s.slug} className="flex">
                <SafariCard safari={s} className="w-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      {experiences.length > 0 && (
        <DetailSection eyebrow="Experiences" title="Things to do here">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((e) => (
              <RevealItem key={e.slug}>
                <ExperienceCard experience={e} />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      <DetailSection id="faq" eyebrow="Good to know" title={`${d.name} FAQ`}>
        <FaqList faqs={d.faqs} />
      </DetailSection>

      <FinalCta title={`Plan your ${d.name} journey`} />
    </>
  );
}
