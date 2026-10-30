"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const KEY = "uhuru:cookie-consent";

/**
 * Minimal consent notice. The site itself only uses local storage for
 * preferences; wire the stored choice into analytics before enabling any.
 */
export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

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
    // Slide out, then unmount.
    setLeaving(true);
    window.setTimeout(() => setShow(false), window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 500);
  };

  return (
    <>
      {show && (
        <div
          role="region"
          aria-label="Cookie notice"
          style={{ animationDelay: "1.5s" }}
          className={`rise-in transition-[opacity,translate] duration-500 ${leaving ? "translate-y-6 opacity-0" : ""} fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-charcoal/95 text-white backdrop-blur`}
        >
          {/* Slim bar along the bottom edge so it never covers the hero copy. */}
          <div className="container-x flex flex-col gap-3 py-3 pr-20 text-sm sm:flex-row sm:items-center sm:justify-between md:pr-24">
            <p className="text-white/85">
              We only use essential storage for your preferences. Analytics, if we ever add them, only run with your consent.{" "}
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
        </div>
      )}
    </>
  );
}
