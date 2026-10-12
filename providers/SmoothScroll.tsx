"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Inertial smooth scrolling on desktop pointers, like the reference sites.
 * Disabled for touch devices and when the visitor prefers reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse || window.innerWidth < 800) return;

    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -96 } });
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    // Respect scroll locks (modal, mobile menu) that set overflow:hidden on <html>.
    const observer = new MutationObserver(() => {
      if (document.documentElement.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
