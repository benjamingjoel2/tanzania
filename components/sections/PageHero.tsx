import Link from "next/link";
import type { ImageAsset } from "@/data/types";
import { JsonLd } from "@/components/seo/JsonLd";
import { ZoomOnScroll, SplitReveal } from "@/components/ui/Motion";
import { Reveal } from "@/components/ui/Reveal";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { absoluteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * Inner-page header: a full-bleed banner photograph that slowly zooms, then an
 * intro on the page background with a large title and a lead paragraph.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumbs = [],
  size = "md",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  image: ImageAsset;
  crumbs?: Crumb[];
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <>
      <section
        className={cn(
          "relative isolate flex items-end overflow-hidden bg-charcoal text-white",
          size === "lg" ? "h-[78svh]" : size === "md" ? "h-[65svh]" : "h-[48svh]",
          "min-h-[22rem]",
        )}
      >
        <ZoomOnScroll image={image} priority to={1.2} />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-transparent to-black/45" />
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="container-x pb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
              {trail.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {i === trail.length - 1 ? (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </section>
      {crumbs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: absoluteUrl(c.href) })),
          }}
        />
      )}
      <section className="container-x pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            {eyebrow && <EyebrowLabel className="mb-6">{eyebrow}</EyebrowLabel>}
            <SplitReveal as="h1" text={title} animateOnMount delay={0.15} className="text-h1" />
          </div>
          {(intro || children) && (
            <Reveal delay={0.3} className="lg:col-span-5 lg:pb-2">
              {intro && <p className="text-lead text-stone">{intro}</p>}
              {children && <div className="mt-7">{children}</div>}
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
