import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getDestination, getStay, safarisForDestination, stays, stayTypeLabels } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { StayCard } from "@/components/cards/StayCard";
import { SafariCard } from "@/components/cards/SafariCard";
import { Price } from "@/components/ui/Price";
import { ButtonLink } from "@/components/ui/Button";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stays/[slug]">) {
  const { slug } = await params;
  const s = getStay(slug);
  if (!s) return {};
  return buildMetadata({ title: `${s.name}, ${s.location}`, description: s.summary, path: `/stays/${s.slug}`, image: s.image });
}

export default async function StayPage({ params }: PageProps<"/stays/[slug]">) {
  const { slug } = await params;
  const s = getStay(slug);
  if (!s) notFound();
  const dest = getDestination(s.destination);
  const nearby = stays.filter((o) => o.slug !== s.slug && (o.destination === s.destination || o.type === s.type)).slice(0, 4);
  const safaris = safarisForDestination(s.destination).slice(0, 3);

  return (
    <>
      <PageHero
        size="lg"
        eyebrow={stayTypeLabels[s.type]}
        title={s.name}
        intro={s.location}
        image={s.image}
        crumbs={[
          { label: "Stays", href: "/stays" },
          { label: s.name, href: `/stays/${s.slug}` },
        ]}
      />
      <DetailSection>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug md:text-3xl">{s.summary}</p>
            {s.description.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-stone">
                {p}
              </p>
            ))}
            <h2 className="mt-12 text-h3">At a glance</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-acacia" /> {f}
                </li>
              ))}
            </ul>
            <p className="mt-10 inline-block rounded-lg border border-dashed border-line px-3 py-2 text-xs text-stone">
              Placeholder property: replace with a real partner camp or lodge before launch.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <aside className="rounded-2xl bg-white p-7 ring-1 ring-line lg:sticky lg:top-28">
              <p className="text-sm text-stone">From</p>
              <p className="font-display text-5xl">
                <Price usd={s.pricePerNight} />
              </p>
              <p className="mt-1 text-sm text-stone">per person · night, sharing</p>
              <OpenPlannerButton className="mt-7 w-full" size="lg" arrow prefill={{ notes: `I'd like to stay at ${s.name}.` }}>
                Include this stay
              </OpenPlannerButton>
              {dest && (
                <ButtonLink href={`/destinations/${dest.slug}`} variant="outline" className="mt-3 w-full">
                  About {dest.name}
                </ButtonLink>
              )}
            </aside>
          </Reveal>
        </div>
      </DetailSection>
      {safaris.length > 0 && (
        <DetailSection tone="sand" eyebrow="Journeys" title="Safaris that can include this stay">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safaris.map((x) => (
              <RevealItem key={x.slug} className="flex">
                <SafariCard safari={x} className="w-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}
      {nearby.length > 0 && (
        <DetailSection eyebrow="Also consider" title="Similar stays">
          <RevealGroup className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((o) => (
              <RevealItem key={o.slug}>
                <StayCard stay={o} />
              </RevealItem>
            ))}
          </RevealGroup>
        </DetailSection>
      )}
      <FinalCta />
    </>
  );
}
