"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import type { ImageAsset } from "@/data/types";
import { isUnsplash, unsplashLoader } from "@/lib/image-loader";

type SmartImageProps = Omit<ImageProps, "src" | "alt"> & { image: ImageAsset };

/** One neutral sand-coloured pixel: the only thing shown if a photo ever fails to load (never artwork). */
const FALLBACK = "data:image/gif;base64,R0lGODlhAQABAIAAANnSxQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

/**
 * next/image for the photo registry. Unsplash photos are served from Unsplash's CDN, local
 * photos (public/photos) through the Next.js optimizer. If a photo fails to load, the slot
 * becomes a plain neutral block so the layout holds.
 */
export function SmartImage({ image, ...props }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const remote = !failed && isUnsplash(image.src);
  return (
    <Image
      {...props}
      src={failed ? FALLBACK : image.src}
      alt={image.alt}
      loader={remote ? unsplashLoader : undefined}
      unoptimized={failed || props.unoptimized}
      onError={() => setFailed(true)}
    />
  );
}
