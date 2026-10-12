"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, whatsappLink } from "@/config/site";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto bg-snow text-charcoal xl:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex min-h-full flex-col py-8">
            <ul className="divide-y divide-line border-y border-line">
              {siteConfig.mainNav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4 }}
                >
                  <Link href={item.href} className="block py-4 font-display text-3xl">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <OpenPlannerButton variant="dark" size="lg" arrow />
              <CurrencySwitcher id="currency-mobile" />
            </div>
            <div className="mt-auto pt-10 text-sm text-stone">
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
