"use client";

import { MotionConfig } from "framer-motion";
import { CurrencyProvider } from "./CurrencyProvider";
import { PlannerProvider } from "./PlannerProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CurrencyProvider>
        <PlannerProvider>{children}</PlannerProvider>
      </CurrencyProvider>
    </MotionConfig>
  );
}
