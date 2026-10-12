"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const KEY = "uhuru:cookie-consent";

/**
 * Minimal consent notice. The site itself only uses local storage for
 * preferences; wire the stored choice into analytics before enabling any.
 */
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- read stored choice after hydration
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage unavailable: don't nag */
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="region"
          aria-label="Cookie notice"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="fixed inset-x-3 bottom-3 z-40 border border-line bg-snow p-5 pr-12 text-sm shadow-xl sm:inset-x-auto sm:left-4 sm:max-w-sm md:bottom-6 md:left-6"
        >
          <button type="button" onClick={() => choose("declined")} aria-label="Close cookie notice" className="absolute top-3 right-3 grid size-8 place-items-center">
            <X className="size-4" />
          </button>
          <p className="text-stone">
            We use essential storage to remember your preferences, and would like to use analytics to improve the site. See
            our{" "}
            <Link href="/legal/cookies" className="text-charcoal underline underline-offset-2">
              cookie policy
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-2">
            <Button size="sm" variant="outline" onClick={() => choose("declined")}>
              Decline
            </Button>
            <Button size="sm" variant="dark" onClick={() => choose("accepted")}>
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
