import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { PostCard } from "@/components/cards/PostCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Chips } from "@/components/ui/Chips";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.slug}`,
    image: p.image,
    type: "article",
    publishedTime: p.date,
    authors: [p.author],
    tags: p.tags,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const { default: Body } = await import(`@/content/blog/${p.slug}.mdx`);
  const more = posts.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${formatDate(p.date)} · ${p.readMins} min read`}
        title={p.title}
        intro={p.excerpt}
        image={p.image}
        crumbs={[
          { label: "Journal", href: "/blog" },
          { label: p.title, href: `/blog/${p.slug}` },
        ]}
      />
      <article className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-[42rem]">
          <p className="mb-10 text-sm text-stone">By {p.author}</p>
          <div className="prose-uhuru">
            <Body />
          </div>
          <Chips className="mt-14" items={p.tags} />
        </div>
      </article>
      <DetailSection tone="sand" eyebrow="Keep reading" title="More from the journal">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {more.map((m) => (
            <PostCard key={m.slug} post={m} />
          ))}
        </div>
      </DetailSection>
      <FinalCta />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          image: p.image.src,
          inLanguage: "en-GB",
          keywords: p.tags.join(", "),
          author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          publisher: { "@type": "Organization", name: siteConfig.name },
          mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
        }}
      />
    </>
  );
}
