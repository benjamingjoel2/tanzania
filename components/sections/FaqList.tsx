import { Plus } from "lucide-react";
import type { Faq } from "@/data/types";
import { JsonLd } from "@/components/seo/JsonLd";

/** Accessible accordion built on <details>, with optional FAQPage structured data. */
export function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-xl transition-colors hover:text-ocean-ink md:text-2xl [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus aria-hidden className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="max-w-3xl pb-6 leading-relaxed text-stone">
              <p>{f.a}</p>
              {f.verify && (
                <p className="mt-3 inline-block rounded-lg border border-dashed border-savanna-ink/50 bg-savanna/10 px-3 py-2 text-xs text-savanna-ink">
                  Draft content: verify against official government and health sources before launch.
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
    </>
  );
}
