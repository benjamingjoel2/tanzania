import { testimonials } from "@/data/testimonials";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { TestimonialFeature } from "@/components/sections/TestimonialFeature";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Traveller stories",
  description: "What travellers say about planning Tanzania with one dedicated Uhuru Journeys specialist.",
  path: "/testimonials",
  image: images.sundowner,
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="In their words"
        intro="Stories from travellers who planned their journeys with us."
        image={images.sundowner}
        crumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />
      <DetailSection>
        <p className="mb-12 rounded-xl border border-dashed border-savanna-ink/50 bg-savanna/10 px-5 py-4 text-sm text-savanna-ink">
          These testimonials are placeholders that show the layout. Replace them with real, permissioned reviews (or embed a
          verified review platform) before launch.
        </p>
        <RevealGroup className="grid gap-x-16 gap-y-20 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <TestimonialFeature testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>
      <FinalCta />
    </>
  );
}
