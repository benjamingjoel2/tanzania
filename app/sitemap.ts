import type { MetadataRoute } from "next";
import { climbs, destinations, experiences, posts, safaris, stays } from "@/lib/content";
import { legalPages } from "@/data/legal";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/", "/destinations", "/safaris", "/kilimanjaro", "/zanzibar", "/experiences", "/stays",
    "/about", "/conservation", "/testimonials", "/faq", "/contact", "/blog", "/plan-your-journey",
  ];
  const entries = [
    ...staticPaths.map((p) => ({ url: absoluteUrl(p), priority: p === "/" ? 1 : 0.8 })),
    ...destinations.map((d) => ({ url: absoluteUrl(`/destinations/${d.slug}`), priority: 0.7 })),
    ...safaris.map((s) => ({ url: absoluteUrl(`/safaris/${s.slug}`), priority: 0.7 })),
    ...climbs.map((c) => ({ url: absoluteUrl(`/kilimanjaro/${c.slug}`), priority: 0.7 })),
    ...experiences.map((e) => ({ url: absoluteUrl(`/experiences/${e.slug}`), priority: 0.6 })),
    ...stays.map((s) => ({ url: absoluteUrl(`/stays/${s.slug}`), priority: 0.5 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), priority: 0.6, lastModified: p.date })),
    ...legalPages.map((l) => ({ url: absoluteUrl(`/legal/${l.slug}`), priority: 0.2 })),
  ];
  return entries;
}
