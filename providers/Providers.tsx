"use client";

import { MotionConfig } from "framer-motion";
import { CurrencyProvider } from "./CurrencyProvider";
import { PlannerProvider } from "./PlannerProvider";
import { SmoothScroll } from "./SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <CurrencyProvider>
        <PlannerProvider>{children}</PlannerProvider>
      </CurrencyProvider>
    </MotionConfig>
  );
}
