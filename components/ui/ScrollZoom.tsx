"use client";

import { useCallback, useRef } from "react";
import type { ImageAsset } from "@/data/types";
import { SmartImage } from "./SmartImage";
import { cn } from "@/lib/utils";
import { EXIT, lerp, useScrollProgress, type ScrollOffset } from "@/lib/useScrollProgress";

const ENTER_TO_BOTTOM: ScrollOffset = [[0, 1], [1, 1]];

/** Banner image that slowly zooms as the page scrolls past it. */
export function ZoomOnScroll({
  image,
  className,
  to = 1.15,
  priority,
  sizes = "100vw",
}: {
  image: ImageAsset;
  className?: string;
  to?: number;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const onProgress = useCallback(
    (p: number) => {
      if (layer.current) layer.current.style.transform = p ? `scale(${lerp(1, to, p)})` : "";
    },
    [to],
  );
  useScrollProgress(ref, EXIT, onProgress);
  return (
    <div ref={ref} className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div ref={layer} className="absolute inset-0">
        <SmartImage image={image} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

/** Figure that grows from a framed 80% to full width as it scrolls into view. */
export function ZoomToFill({ image, children, className }: { image: ImageAsset; children?: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const onProgress = useCallback((p: number) => {
    if (layer.current) layer.current.style.transform = `scale(${lerp(0.8, 1, p)})`;
  }, []);
  useScrollProgress(ref, ENTER_TO_BOTTOM, onProgress);
  return (
    <div ref={ref} className={cn("relative h-[85svh] overflow-hidden md:h-[100svh]", className)}>
      <div ref={layer} data-zoomfill="" style={{ transform: "scale(0.8)" }} className="absolute inset-0 origin-center">
        <SmartImage image={image} fill sizes="100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-black/25" />
      </div>
      {children && <div className="relative z-10 grid h-full place-items-center">{children}</div>}
    </div>
  );
}
