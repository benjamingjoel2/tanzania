import { aboutContent as a } from "@/data/pages";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { TrustRow } from "@/components/sections/TrustRow";
import { FinalCta } from "@/components/sections/FinalCta";
import { DoorMotif } from "@/components/ui/DoorMotif";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "About us: the meaning of Uhuru",
  description:
    "Uhuru means freedom in Swahili. Meet Uhuru Journeys: tailor-made Tanzania travel with one dedicated specialist from your first message to the day you fly home.",
  path: "/about",
  image: a.hero.image,
});

export default function AboutPage() {
  return (
    <>
      <PageHero size="lg" eyebrow={a.hero.eyebrow} title={a.hero.title} intro={a.hero.intro} image={a.hero.image} crumbs={[{ label: "About", href: "/about" }]} />
      <DetailSection>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-3 text-savanna-ink">The meaning of uhuru</p>
            <h2 className="text-h2">
              <span className="italic">Uhuru</span>, n.
            </h2>
            <p className="mt-4 font-display text-xl text-stone">Swahili: freedom, independence.</p>
            <DoorMotif className="mt-8 max-w-48" />
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-stone lg:col-span-7 lg:col-start-6">
            {a.story.map((p, i) => (
              <p key={p} className={i === 0 ? "font-display text-2xl leading-snug text-charcoal md:text-3xl" : undefined}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </DetailSection>
      <TrustRow />
      <DetailSection eyebrow="What we believe" title="How we work">
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <RevealItem key={v.title} className="rounded-none bg-white p-7 ring-1 ring-line">
              <p className="font-display text-3xl text-savanna-ink">0{i + 1}</p>
              <h3 className="mt-4 text-h3">{v.title}</h3>
              <p className="mt-3 text-stone">{v.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>
      <DetailSection>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="outline" arrow>
              Talk to a specialist
            </ButtonLink>
            <ButtonLink href="/conservation" variant="outline">
              Our conservation commitment
            </ButtonLink>
          </div>
        </div>
      </DetailSection>
      <FinalCta />
    </>
  );
}
