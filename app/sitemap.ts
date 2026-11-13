import type { MetadataRoute } from "next";
import { climbs, destinations, experiences, posts, safaris, stays } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { legalPages } from "@/data/legal";
import { LOCALES, localePath, languageAlternates } from "@/lib/i18n-paths";

// Image URLs for <image:loc>: absolute (local /photos/... become https://<site>/photos/...),
// without query strings (Next writes them into the XML unescaped). Anything that is still not
// an http(s) address is dropped.
const img = (src: string) => {
  const url = absoluteUrl(src.split("?")[0]);
  return /^https?:\/\//.test(url) ? [url] : [];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/", "/destinations", "/safaris", "/kilimanjaro", "/zanzibar", "/experiences", "/stays",
    "/about", "/conservation", "/faq", "/contact", "/blog", "/plan-your-journey", "/photo-credits",
    ...legalPages.map((l) => `/legal/${l.slug}`),
  ];
  const entries = [
    ...staticPaths.map((p) => ({ url: absoluteUrl(p), priority: p === "/" ? 1 : 0.8 })),
    ...destinations.map((d) => ({ url: absoluteUrl(`/destinations/${d.slug}`), priority: 0.7, images: img(d.image.src) })),
    ...safaris.map((s) => ({ url: absoluteUrl(`/safaris/${s.slug}`), priority: 0.7, images: img(s.image.src) })),
    ...climbs.map((c) => ({ url: absoluteUrl(`/kilimanjaro/${c.slug}`), priority: 0.7, images: img(c.image.src) })),
    ...experiences.map((e) => ({ url: absoluteUrl(`/experiences/${e.slug}`), priority: 0.6, images: img(e.image.src) })),
    ...stays.map((s) => ({ url: absoluteUrl(`/stays/${s.slug}`), priority: 0.5, images: img(s.image.src) })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), priority: 0.6, lastModified: p.date, images: img(p.image.src) })),
  ];
  // Every page in every language, each with its hreflang alternates. An image is listed once
  // per language, on the first page that uses it.
  const seen = new Set<string>();
  const firstUse = entries.map((e) => {
    const { images, ...rest } = e as typeof e & { images?: string[] };
    const fresh = (images ?? []).filter((u) => (seen.has(u) ? false : (seen.add(u), true)));
    return fresh.length ? { ...rest, images: fresh } : rest;
  });
  return firstUse.flatMap((e) => {
    const path = new URL(e.url).pathname;
    const languages = Object.fromEntries(Object.entries(languageAlternates(path)).map(([k, v]) => [k, absoluteUrl(v)]));
    return LOCALES.map((l) => ({ ...e, url: absoluteUrl(localePath(path, l)), alternates: { languages } }));
  });
}
