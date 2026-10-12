import { stays, stayTypeLabels } from "@/lib/content";
import { images } from "@/data/images";
import type { StayType } from "@/data/types";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { StayCard } from "@/components/cards/StayCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Where to stay in Tanzania",
  description: "Tented camps, crater-rim lodges, Zanzibar beach villas and Stone Town boutique hotels, hand-picked by our specialists.",
  path: "/stays",
  image: images.tentedCamp,
});

const order: StayType[] = ["tented-camp", "crater-lodge", "beach-villa", "boutique-hotel"];

export default function StaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Stays"
        title="Places to rest between adventures"
        intro="We choose every camp and lodge for its setting, its guiding and the way it treats its staff and community."
        image={images.tentedCamp}
        crumbs={[{ label: "Stays", href: "/stays" }]}
      />
      {order.map((t, i) => {
        const list = stays.filter((s) => s.type === t);
        if (!list.length) return null;
        return (
          <DetailSection key={t} tone={i % 2 ? "sand" : "plain"} eyebrow={`${list.length} ${list.length === 1 ? "stay" : "stays"}`} title={`${stayTypeLabels[t]}s`}>
            <RevealGroup className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((s) => (
                <RevealItem key={s.slug}>
                  <StayCard stay={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </DetailSection>
        );
      })}
      <FinalCta />
    </>
  );
}
