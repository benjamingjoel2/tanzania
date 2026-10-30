"use client";

import { CurrencyProvider } from "./CurrencyProvider";
import { PlannerProvider } from "./PlannerProvider";
import { SmoothScroll } from "./SmoothScroll";
import { RevealObserver } from "@/components/layout/RevealObserver";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <RevealObserver />
      <CurrencyProvider>
        <PlannerProvider>{children}</PlannerProvider>
      </CurrencyProvider>
    </>
  );
}
