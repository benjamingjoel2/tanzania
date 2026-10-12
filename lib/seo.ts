import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { ImageAsset } from "@/data/types";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
  type?: "website" | "article";
}

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path, image, type = "website" }: BuildMetadataInput): Metadata {
  const images = image ? [{ url: image.src, alt: image.alt, width: 1600, height: 1000 }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type, images, siteName: siteConfig.name },
    twitter: { card: "summary_large_image", title, description, images: image ? [image.src] : undefined },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    areaServed: { "@type": "Country", name: "Tanzania" },
    address: { "@type": "PostalAddress", addressLocality: "Arusha", addressCountry: "TZ" },
    sameAs: siteConfig.socials.map((s) => s.href),
  };
}
