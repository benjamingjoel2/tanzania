"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import type { ImageAsset } from "@/data/types";
import { isUnsplash, unsplashLoader } from "@/lib/image-loader";

type SmartImageProps = Omit<ImageProps, "src" | "alt"> & { image: ImageAsset };

/**
 * next/image with a branded local fallback. Remote placeholder photos can be
 * swapped freely; if one fails to load the page still looks intentional.
 */
export function SmartImage({ image, ...props }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const fallback = `/placeholders/${image.theme ?? "savanna"}.svg`;
  const remote = !failed && isUnsplash(image.src);
  return (
    <Image
      {...props}
      src={failed ? fallback : image.src}
      alt={image.alt}
      loader={remote ? unsplashLoader : undefined}
      unoptimized={failed || props.unoptimized}
      onError={() => setFailed(true)}
    />
  );
}
