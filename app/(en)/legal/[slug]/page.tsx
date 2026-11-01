import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { legalPages, legalUpdated } from "@/data/legal";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const p = legalPages.find((x) => x.slug === slug);
  return p
    ? buildMetadata({ title: p.title, description: `${p.title} for Uhuru Journeys.`, path: `/legal/${p.slug}` })
    : {};
}

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Turns the [[email]] / [[privacy]] / [[cookies]] tokens in the legal text into links. */
function Rich({ text }: { text: string }) {
  return text.split(/(\[\[(?:email|privacy|cookies)\]\])/).map((part, i) => {
    if (part === "[[email]]")
      return (
        <a key={i} href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
      );
    if (part === "[[privacy]]")
      return (
        <Link key={i} href="/legal/privacy">
          Privacy policy
        </Link>
      );
    if (part === "[[cookies]]")
      return (
        <Link key={i} href="/legal/cookies">
          Cookie policy
        </Link>
      );
    return part;
  });
}

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
        intro={`Last updated ${legalUpdated}.`}
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
              {s.body.map((b, i) =>
                typeof b === "object" && !Array.isArray(b) ? (
                  <div key={i} className="legal-table-wrap">
                    <table>
                      <thead>
                        <tr>
                          {b.table[0].map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.table.slice(1).map((r) => (
                          <tr key={r[0]}>
                            {r.map((c, j) => (
                              <td key={j}>{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : Array.isArray(b) ? (
                  <ul key={i}>
                    {b.map((li) => (
                      <li key={li}>
                        <Rich text={li} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>
                    <Rich text={b} />
                  </p>
                ),
              )}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
