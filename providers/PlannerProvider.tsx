"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { PlannerPrefill } from "@/lib/planner-schema";

const PlannerModal = dynamic(() => import("@/components/planner/PlannerModal"), { ssr: false });

interface PlannerContextValue {
  openPlanner: (prefill?: PlannerPrefill) => void;
  closePlanner: () => void;
}

const PlannerContext = createContext<PlannerContextValue | null>(null);

export function PlannerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<PlannerPrefill | undefined>();

  const openPlanner = useCallback((p?: PlannerPrefill) => {
    setPrefill(p);
    setOpen(true);
  }, []);
  const closePlanner = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ openPlanner, closePlanner }), [openPlanner, closePlanner]);

  return (
    <PlannerContext.Provider value={value}>
      {children}
      {open && <PlannerModal prefill={prefill} onClose={closePlanner} />}
    </PlannerContext.Provider>
  );
}

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner must be used inside <PlannerProvider>");
  return ctx;
}
