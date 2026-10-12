import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ImageAsset } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href: string;
}

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
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: ImageAsset;
  crumbs?: Crumb[];
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}) {
  const trail = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-charcoal text-white",
        size === "lg" ? "min-h-[88svh]" : size === "md" ? "min-h-[68svh]" : "min-h-[50svh]",
      )}
    >
      <SmartImage image={image} fill priority sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/15 to-black/70" />
      <div className="container-x pt-36 pb-14 md:pb-20">
        {crumbs.length > 0 && (
          <>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/75">
                {trail.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight aria-hidden className="size-3.5" />}
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
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: trail.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: c.label,
                  item: absoluteUrl(c.href),
                })),
              }}
            />
          </>
        )}
        {eyebrow && <p className="eyebrow mb-5 text-white/85">{eyebrow}</p>}
        <h1 className="max-w-4xl text-h1">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
