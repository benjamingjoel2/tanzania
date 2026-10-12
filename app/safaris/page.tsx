import { safaris } from "@/lib/content";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { SafariExplorer } from "@/components/safaris/SafariExplorer";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Tanzania safaris",
  description:
    "Sample tailor-made Tanzania safaris: the northern circuit, Great Migration, southern wilderness, chimpanzees and bush-and-beach trips. Filter by region, length and budget.",
  path: "/safaris",
  image: images.heroSerengeti,
});

export default function SafarisPage() {
  return (
    <>
      <PageHero
        eyebrow="Safaris"
        title="Sample journeys, made to be changed"
        intro="Use these itineraries as inspiration. Your specialist will adjust the pace, the camps and the route until it fits you perfectly."
        image={images.heroSerengeti}
        crumbs={[{ label: "Safaris", href: "/safaris" }]}
      />
      <DetailSection tone="sand">
        <SafariExplorer safaris={safaris} />
      </DetailSection>
      <FinalCta title="Prefer a blank page?" body="Tell us what you're dreaming of and we'll design a safari from scratch, around your dates, budget and pace." />
    </>
  );
}
