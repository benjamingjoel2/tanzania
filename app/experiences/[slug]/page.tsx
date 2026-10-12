import { notFound } from "next/navigation";
import { CalendarDays, Users } from "lucide-react";
import {
  destinations,
  experiences,
  getExperience,
  pickBySlugs,
  safaris,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SafariCard } from "@/components/cards/SafariCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ExperiencesCarousel } from "@/components/sections/ExperiencesCarousel";
import { Price } from "@/components/ui/Price";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) return {};
  return buildMetadata({
    title: e.title,
    description: e.summary,
    path: `/experiences/${e.slug}`,
    image: e.image,
  });
}

export default async function ExperiencePage({
  params,
}: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) notFound();
  const where = pickBySlugs(destinations, e.destinations).slice(0, 3);
  const related = pickBySlugs(safaris, e.relatedSafaris);
  const more = experiences
    .filter((o) => o.slug !== e.slug && o.category === e.category)
    .concat(
      experiences.filter((o) => o.slug !== e.slug && o.category !== e.category),
    )
    .slice(0, 8);

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={`Experience · ${e.category}`}
        title={e.title}
        intro={e.summary}
        image={e.image}
        crumbs={[
          { label: "Experiences", href: "/experiences" },
          { label: e.title, href: `/experiences/${e.slug}` },
        ]}
      />
      <DetailSection>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-6 text-lg leading-relaxed text-stone lg:col-span-7">
            {e.body.map((p, i) => (
              <p
                key={p}
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug text-charcoal md:text-3xl"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <aside className="rounded-none bg-white p-7 ring-1 ring-line lg:sticky lg:top-28">
              <dl className="space-y-5">
                <div>
                  <dt className="flex items-center gap-2 text-sm text-stone">
                    <CalendarDays
                      aria-hidden
                      className="size-4 text-savanna-ink"
                    />{" "}
                    Best time
                  </dt>
                  <dd className="mt-1 font-medium">{e.bestTime}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-sm text-stone">
                    <Users aria-hidden className="size-4 text-savanna-ink" />{" "}
                    Ideal for
                  </dt>
                  <dd className="mt-1 font-medium">{e.idealFor.join(", ")}</dd>
                </div>
                {e.priceFrom && (
                  <div className="border-t border-line pt-5">
                    <dt className="text-sm text-stone">From</dt>
                    <dd className="font-display text-3xl">
                      <Price usd={e.priceFrom} />{" "}
                      <span className="font-sans text-sm text-stone">
                        per person
                      </span>
                    </dd>
                  </div>
                )}
              </dl>
              <OpenPlannerButton
                className="mt-7 w-full"
                variant="dark"
                arrow
                prefill={{ notes: `I'd love to include: ${e.title}.` }}
              >
                Add to my journey
              </OpenPlannerButton>
            </aside>
          </Reveal>
        </div>
      </DetailSection>

      {where.length > 0 && (
        <DetailSection
          tone="sand"
          eyebrow="Where"
          title="Where to experience it"
        >
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {where.map((d) => (
              <RevealItem key={d.slug}>
                <DestinationCard destination={d} />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      {related.length > 0 && (
        <DetailSection eyebrow="Journeys" title="Safaris that include it">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <RevealItem key={s.slug} className="flex">
                <SafariCard safari={s} className="w-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}

      <ExperiencesCarousel
        experiences={more}
        eyebrow="Keep exploring"
        title="More experiences"
        intro=""
      />
      <FinalCta />
    </>
  );
}
