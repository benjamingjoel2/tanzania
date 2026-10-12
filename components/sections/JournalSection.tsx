import { posts } from "@/lib/content";
import { PostCard } from "@/components/cards/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function JournalSection({ title = "Notes from the field" }: { title?: string }) {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Journal"
          title={title}
          action={
            <ButtonLink href="/blog" variant="outline" arrow>
              Read the journal
            </ButtonLink>
          }
        />
        <RevealGroup className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <RevealItem key={p.slug}>
              <PostCard post={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
