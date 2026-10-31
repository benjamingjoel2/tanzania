"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

/** Full-screen dark menu that drops down with a slight overshoot; links rise in turn. */
export function MobileMenu({ open }: { open: boolean }) {
  // Stay mounted for the closing slide, then unmount (React's "adjust state on prop change" pattern).
  const [mounted, setMounted] = useState(open);
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setMounted(true);
  }
  useEffect(() => {
    if (open || !mounted) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setMounted(false), reduce ? 0 : 900);
    return () => window.clearTimeout(t);
  }, [open, mounted]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {mounted && (
        <div
          id="mobile-menu"
          data-closing={open ? undefined : ""}
          className="menu-panel fixed inset-0 z-40 overflow-y-auto bg-charcoal pt-[76px] text-white xl:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex min-h-full flex-col pt-6 pb-10">
            <ul>
              {siteConfig.mainNav.map((item, i) => (
                <li key={item.href} className="overflow-hidden border-b border-white/10">
                  <span className="menu-item-rise block" style={{ animationDelay: `${0.35 + 0.05 * i}s` }}>
                    <Link href={item.href} className="flex items-baseline gap-3 py-3.5 text-3xl tracking-tight">
                      <span className="text-base text-savanna-light">+</span>
                      {item.label}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OpenPlannerButton variant="primary" size="lg" arrow className="w-full sm:w-auto" />
              <CurrencySwitcher id="currency-mobile" />
              <LanguageSwitcher light className="text-[0.8125rem]" />
            </div>
            <div className="mt-auto pt-10 text-sm text-white/60">
              <a href={`mailto:${siteConfig.contact.email}`} className="underline underline-offset-4">
                {siteConfig.contact.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
