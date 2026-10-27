"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-charcoal/95 text-white backdrop-blur"
        >
          {/* Slim bar along the bottom edge so it never covers the hero copy. */}
          <div className="container-x flex flex-col gap-3 py-3 pr-20 text-sm sm:flex-row sm:items-center sm:justify-between md:pr-24">
            <p className="text-white/85">
              We use essential storage for your preferences and would like to use analytics.{" "}
              <Link href="/legal/cookies" className="text-white underline underline-offset-2">
                Cookie policy
              </Link>
            </p>
            <div className="flex shrink-0 gap-2">
              <Button size="sm" variant="outline-light" onClick={() => choose("declined")}>
                Decline
              </Button>
              <Button size="sm" variant="primary" onClick={() => choose("accepted")}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
