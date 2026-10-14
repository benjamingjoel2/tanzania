import type { MetadataRoute } from "next";
import { climbs, destinations, experiences, posts, safaris, stays } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

// Image URLs without query strings: Next writes them into the XML unescaped.
const img = (src: string) => src.split("?")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/", "/destinations", "/safaris", "/kilimanjaro", "/zanzibar", "/experiences", "/stays",
    "/about", "/conservation", "/testimonials", "/faq", "/contact", "/blog", "/plan-your-journey",
  ];
  const entries = [
    ...staticPaths.map((p) => ({ url: absoluteUrl(p), priority: p === "/" ? 1 : 0.8 })),
    ...destinations.map((d) => ({ url: absoluteUrl(`/destinations/${d.slug}`), priority: 0.7, images: [img(d.image.src)] })),
    ...safaris.map((s) => ({ url: absoluteUrl(`/safaris/${s.slug}`), priority: 0.7, images: [img(s.image.src)] })),
    ...climbs.map((c) => ({ url: absoluteUrl(`/kilimanjaro/${c.slug}`), priority: 0.7, images: [img(c.image.src)] })),
    ...experiences.map((e) => ({ url: absoluteUrl(`/experiences/${e.slug}`), priority: 0.6, images: [img(e.image.src)] })),
    ...stays.map((s) => ({ url: absoluteUrl(`/stays/${s.slug}`), priority: 0.5, images: [img(s.image.src)] })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), priority: 0.6, lastModified: p.date, images: [img(p.image.src)] })),
  ];
  return entries;
}
