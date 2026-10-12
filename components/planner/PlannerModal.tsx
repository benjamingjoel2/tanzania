"use client";

import type { PlannerPrefill } from "@/lib/planner-schema";

export default function PlannerModal({ onClose }: { prefill?: PlannerPrefill; onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/70">
      <button onClick={onClose} className="rounded-full bg-snow px-6 py-3">Close</button>
    </div>
  );
}
