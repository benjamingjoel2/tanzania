import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { ImageAsset } from "@/data/types";

/** Branded fallback share image (1200×630) for pages without their own photo. */
export const defaultOgImage = { url: "/og-default.jpg", width: 1200, height: 630, alt: `${siteConfig.name}: tailor-made Tanzania journeys` };

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
  type?: "website" | "article";
  /** Article-only fields for blog posts. */
  publishedTime?: string;
  authors?: string[];
  tags?: string[];
  noindex?: boolean;
}

/** Trim to a search-friendly length (~155 characters) on a word boundary. */
export function clampDescription(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–—]+$/, "")}…`;
}

/** Share-friendly 1200×630 crop of an Unsplash photo. */
function shareImage(image: ImageAsset) {
  if (!image.src.startsWith("https://images.unsplash.com/")) return { url: image.src, alt: image.alt };
  const url = new URL(image.src);
  url.searchParams.set("w", "1200");
  url.searchParams.set("h", "630");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("auto", "format");
  url.searchParams.set("fm", "jpg");
  url.searchParams.set("q", "75");
  return { url: url.toString(), width: 1200, height: 630, alt: image.alt };
}

/** Per-page metadata: title, clamped description, canonical, Open Graph and Twitter cards. */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  authors,
  tags,
  noindex,
}: BuildMetadataInput): Metadata {
  const desc = clampDescription(description);
  const og = image ? shareImage(image) : defaultOgImage;
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description: desc,
      url: path,
      type,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [og],
      ...(type === "article" ? { publishedTime, authors, tags } : {}),
    },
    twitter: { card: "summary_large_image", title, description: desc, images: [og.url] },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

/** True for unreplaced placeholders such as "[EMAIL]" or "https://instagram.com/[HANDLE]". */
const isPlaceholder = (v: string) => /\[[A-Z]+\]/.test(v);

export function organizationJsonLd() {
  const { contact } = siteConfig;
  const sameAs = siteConfig.socials.map((s) => s.href).filter((h) => !isPlaceholder(h));
  return [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.svg"),
      image: absoluteUrl(defaultOgImage.url),
      ...(isPlaceholder(contact.email) ? {} : { email: contact.email }),
      ...(isPlaceholder(contact.phone) ? {} : { telephone: contact.phone }),
      areaServed: { "@type": "Country", name: "Tanzania" },
      address: { "@type": "PostalAddress", addressLocality: "Arusha", addressCountry: "TZ" },
      priceRange: "$$$",
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "en-GB",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ];
}
