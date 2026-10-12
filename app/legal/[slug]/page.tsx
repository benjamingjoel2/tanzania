import { notFound } from "next/navigation";
import { legalPages } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const p = legalPages.find((x) => x.slug === slug);
  return p ? buildMetadata({ title: p.title, description: `${p.title} for Uhuru Journeys.`, path: `/legal/${p.slug}` }) : {};
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const p = legalPages.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <div className="bg-sand/50 pt-36 pb-24">
      <article className="container-x">
        <div className="mx-auto max-w-[42rem]">
          <p className="eyebrow text-savanna-ink">Legal</p>
          <h1 className="mt-3 text-h1">{p.title}</h1>
          <p className="mt-6 rounded-lg border border-dashed border-savanna-ink/50 bg-savanna/10 px-4 py-3 text-sm text-savanna-ink">
            Placeholder text. Have this page drafted or reviewed by a qualified professional before launch.
          </p>
          <div className="prose-uhuru mt-10">
            {p.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
