import { posts } from "@/lib/content";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { PostCard } from "@/components/cards/PostCard";
import { GuideSignup } from "@/components/sections/GuideSignup";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Journal: Tanzania travel guides",
  description: "Expert guides to planning Tanzania: where to go, Kilimanjaro routes, the Great Migration month by month, and combining safari with Zanzibar.",
  path: "/blog",
  image: images.migration,
});

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Journal"
        title="Field notes & travel guides"
        intro="Honest, practical advice from our specialists to help you plan."
        image={images.migration}
        crumbs={[{ label: "Journal", href: "/blog" }]}
      />
      <DetailSection>
        {lead && (
          <div className="mb-16 grid items-center gap-10 border-b border-line pb-16 lg:grid-cols-2">
            <PostCard post={lead} />
          </div>
        )}
        <RevealGroup className="grid gap-x-6 gap-y-14 md:grid-cols-3">
          {rest.map((p) => (
            <RevealItem key={p.slug}>
              <PostCard post={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </DetailSection>
      <GuideSignup />
    </>
  );
}
