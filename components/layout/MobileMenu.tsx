"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, whatsappLink } from "@/config/site";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

/** Full-screen dark menu that drops down with a slight overshoot; links rise in turn. */
export function MobileMenu({ open }: { open: boolean }) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.25, 1.05, 0.5, 1] }}
          className="fixed inset-0 z-40 overflow-y-auto bg-charcoal pt-[76px] text-white xl:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex min-h-full flex-col pt-6 pb-10">
            <ul>
              {siteConfig.mainNav.map((item, i) => (
                <li key={item.href} className="overflow-hidden border-b border-white/10">
                  <motion.span
                    className="block"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35 + 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={item.href} className="flex items-baseline gap-3 py-3.5 text-3xl tracking-tight">
                      <span className="text-base text-savanna-light">+</span>
                      {item.label}
                    </Link>
                  </motion.span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OpenPlannerButton variant="primary" size="lg" arrow className="w-full sm:w-auto" />
              <CurrencySwitcher id="currency-mobile" />
            </div>
            <div className="mt-auto pt-10 text-sm text-white/60">
              <p>{siteConfig.contact.email}</p>
              <a href={whatsappLink()} className="mt-1 block underline underline-offset-4">
                WhatsApp {siteConfig.contact.whatsappDisplay}
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
