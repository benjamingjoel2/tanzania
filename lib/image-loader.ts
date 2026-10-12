import type { ImageLoaderProps } from "next/image";

/**
 * Serve Unsplash photos straight from Unsplash's image CDN at the width the
 * browser asks for (responsive srcset, auto WebP/AVIF), skipping the Next.js
 * optimizer. Other sources fall back to the default behaviour.
 */
export function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  return url.toString();
}

export const isUnsplash = (src: string) => src.startsWith("https://images.unsplash.com/");
