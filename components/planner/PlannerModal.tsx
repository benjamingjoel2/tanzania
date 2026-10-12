"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { PlannerPrefill } from "@/lib/planner-schema";
import { TripPlanner } from "./TripPlanner";

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export default function PlannerModal({ prefill, onClose }: { prefill?: PlannerPrefill; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="planner-modal-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-snow p-6 shadow-2xl sm:rounded-3xl sm:p-10"
      >
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-savanna-ink">Trip planner</p>
            <p id="planner-modal-title" className="mt-1 font-display text-2xl">
              Plan your journey
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close trip planner"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-colors hover:bg-charcoal hover:text-snow"
          >
            <X className="size-5" />
          </button>
        </div>
        <TripPlanner prefill={prefill} variant="modal" onDone={onClose} />
      </motion.div>
    </div>
  );
}
