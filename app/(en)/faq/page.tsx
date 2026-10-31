import { faqs, faqCategories } from "@/data/faqs";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorNav } from "@/components/sections/AnchorNav";
import { DetailSection } from "@/components/sections/DetailSection";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Tanzania travel FAQ",
  description:
    "Visas and entry, vaccinations and malaria, the best time to visit, the Great Migration, Kilimanjaro altitude and tipping, luggage limits, Zanzibar tips, safety, park fees and packing.",
  path: "/faq",
  image: images.guide,
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function FaqPage() {
  const groups = faqCategories.map((c) => ({ c, items: faqs.filter((f) => f.category === c) })).filter((g) => g.items.length);
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="FAQ"
        title="Questions, answered"
        intro="Everything travellers usually ask before a Tanzania journey. Can't find yours? Ask your specialist."
        image={images.guide}
        crumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      <AnchorNav items={groups.map((g) => ({ id: slug(g.c), label: g.c }))} />
      {groups.map((g, i) => (
        <DetailSection key={g.c} id={slug(g.c)} tone={i % 2 ? "sand" : "plain"} title={g.c}>
          <FaqList faqs={g.items} schema={false} />
        </DetailSection>
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <FinalCta title="Still have questions?" body="Your specialist is a message away: send us a note and we reply within one working day." />
    </>
  );
}
