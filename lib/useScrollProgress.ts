"use client";

import { useEffect, type RefObject } from "react";

/** [target edge, viewport edge] as fractions: 0 = start/top, 0.5 = centre, 1 = end/bottom. */
export type ScrollOffset = [[number, number], [number, number]];

/** "start end" → "end start": from entering at the bottom to leaving at the top. */
export const THROUGH: ScrollOffset = [[0, 1], [1, 0]];
/** "start start" → "end start": from pinned at the top until it has scrolled away. */
export const EXIT: ScrollOffset = [[0, 0], [1, 0]];

/**
 * Calls `onProgress(p)` (0–1, clamped) as the page scrolls, once per frame and without
 * React re-renders: a tiny stand-in for framer-motion's useScroll/useTransform.
 * Skipped when the visitor prefers reduced motion.
 */
export function useScrollProgress(target: RefObject<HTMLElement | null>, offset: ScrollOffset, onProgress: (p: number) => void) {
  useEffect(() => {
    const el = target.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [[t0, v0], [t1, v1]] = offset;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const x = -r.top;
      const x0 = t0 * r.height - v0 * vh;
      const x1 = t1 * r.height - v1 * vh;
      const p = x1 === x0 ? 0 : (x - x0) / (x1 - x0);
      onProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target, offset, onProgress]);
}

/** Linear map of p from [0,1] onto [a,b]. */
export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;
