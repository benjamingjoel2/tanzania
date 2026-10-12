import { notFound } from "next/navigation";
import { legalPages } from "@/data/legal";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const p = legalPages.find((x) => x.slug === slug);
  return p ? buildMetadata({ title: p.title, description: `${p.title} for Uhuru Journeys.`, path: `/legal/${p.slug}` }) : {};
}

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const p = legalPages.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Legal"
        title={p.title}
        intro="Placeholder text. Have this page drafted or reviewed by a qualified professional before launch."
        image={images.zebra}
        crumbs={[{ label: p.title, href: `/legal/${p.slug}` }]}
      />
      <div className="container-x grid gap-12 pb-24 lg:grid-cols-12">
        <nav aria-label="Contents" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-3 text-stone">Contents</p>
            <ol className="border-t border-line">
              {p.sections.map((s, i) => (
                <li key={s.heading} className="border-b border-line">
                  <a href={`#${anchor(s.heading)}`} className="flex gap-3 py-3 hover:text-ocean-ink">
                    <span className="text-savanna-ink">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <article className="prose-uhuru lg:col-span-7 lg:col-start-5">
          {p.sections.map((s) => (
            <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28">
              <h2 className="!mt-0">{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
