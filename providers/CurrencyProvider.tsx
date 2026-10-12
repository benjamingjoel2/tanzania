"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { siteConfig, type CurrencyCode } from "@/config/site";
import { formatMoney, isCurrencyCode } from "@/lib/currency";

const STORAGE_KEY = "uhuru:currency";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  format: (usd: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Server and first client render always use the default so hydration matches.
  const [currency, setCurrencyState] = useState<CurrencyCode>(siteConfig.defaultCurrency);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restore persisted preference after hydration
      if (isCurrencyCode(saved)) setCurrencyState(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(
    () => ({ currency, setCurrency, format: (usd: number) => formatMoney(usd, currency) }),
    [currency, setCurrency],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside <CurrencyProvider>");
  return ctx;
}
