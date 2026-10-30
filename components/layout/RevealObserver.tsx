"use client";

import { useEffect } from "react";

/**
 * Reveals every scroll-triggered element ([data-rv], [data-rv-group], [data-wipe],
 * [data-split], [data-line]) once it enters the viewport, with one shared observer.
 */
const KINDS = ["data-rv", "data-rv-group", "data-wipe", "data-split", "data-line"];
const SELECTOR = KINDS.map((k) => `[${k}]`).join(",");
const PENDING = KINDS.map((k) => `[${k}]:not([data-in])`).join(",");

export function RevealObserver() {
  useEffect(() => {
    const show = (el: Element) => {
      if (el.hasAttribute("data-rv-group")) {
        const stagger = Number(el.getAttribute("data-rv-group")) || 0.08;
        let i = 0;
        el.querySelectorAll<HTMLElement>("[data-rv-item]").forEach((item) => {
          if (item.parentElement?.closest("[data-rv-group]") !== el) return;
          item.style.setProperty("--rv-d", `${i++ * stagger}s`);
        });
      }
      el.setAttribute("data-in", "");
    };
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(SELECTOR).forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    const scan = () => document.querySelectorAll(PENDING).forEach((el) => io.observe(el));
    scan();
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
