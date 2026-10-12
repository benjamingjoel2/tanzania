"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  plannerDefaults,
  plannerSchema,
  stepFields,
  stepLabels,
  type PlannerPrefill,
  type PlannerValues,
} from "@/lib/planner-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ProgressBar } from "./ProgressBar";
import { Confirmation } from "./Confirmation";
import { StepWhen } from "./steps/StepWhen";
import { StepWhat } from "./steps/StepWhat";
import { StepBudget } from "./steps/StepBudget";
import { StepWho } from "./steps/StepWho";
import { StepContact } from "./steps/StepContact";

const STORAGE_KEY = "uhuru:trip-planner:v1";

const steps = [
  { Component: StepWhen, title: "When are you thinking of travelling?" },
  { Component: StepWhat, title: "What would you love to do?" },
  { Component: StepBudget, title: "What's your budget style?" },
  { Component: StepWho, title: "Who's travelling?" },
  { Component: StepContact, title: "How can we reach you?" },
];

interface Saved {
  step: number;
  values: Partial<PlannerValues>;
}

function loadSaved(): Saved | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

export function TripPlanner({
  prefill,
  variant = "page",
  onDone,
}: {
  prefill?: PlannerPrefill;
  variant?: "page" | "modal";
  onDone?: () => void;
}) {
  const methods = useForm<PlannerValues>({
    resolver: zodResolver(plannerSchema),
    defaultValues: plannerDefaults,
    mode: "onTouched",
  });
  const { trigger, handleSubmit, reset, watch, getValues, setFocus } = methods;

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [restored, setRestored] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [reference, setReference] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Restore saved progress, then apply any prefill from the page that opened us.
  useEffect(() => {
    const saved = loadSaved();
    const values: Partial<PlannerValues> = { ...plannerDefaults, ...saved?.values };
    if (prefill?.tripTypes?.length) values.tripTypes = prefill.tripTypes as PlannerValues["tripTypes"];
    if (prefill?.notes && !values.tripNotes?.includes(prefill.notes)) {
      values.tripNotes = [prefill.notes, values.tripNotes].filter(Boolean).join("\n");
    }
    // consent is never persisted
    delete values.consent;
    reset(values as PlannerValues);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-off restore from localStorage after hydration
    if (saved && !prefill) setStep(Math.min(Math.max(saved.step, 0), steps.length - 1));
    setRestored(true);
  }, [prefill, reset]);

  // Persist progress (debounced).
  useEffect(() => {
    if (!restored || reference) return;
    let t: ReturnType<typeof setTimeout>;
    const save = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        try {
          const { consent: _consent, ...values } = getValues();
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, values } satisfies Saved));
        } catch {
          /* storage unavailable */
        }
      }, 300);
    };
    save();
    const sub = watch(save);
    return () => {
      clearTimeout(t);
      sub.unsubscribe();
    };
  }, [restored, reference, step, watch, getValues]);

  const focusHeading = useCallback(() => {
    requestAnimationFrame(() => headingRef.current?.focus({ preventScroll: false }));
  }, []);

  const focusFirstError = useCallback(
    (errors: FieldErrors<PlannerValues>) => {
      const first = stepFields[step].find((f) => errors[f]);
      if (!first) return;
      try {
        setFocus(first);
      } catch {
        /* field without a focusable ref (e.g. checkbox groups) */
      }
    },
    [setFocus, step],
  );

  async function next() {
    const ok = await trigger(stepFields[step], { shouldFocus: true });
    if (!ok) {
      focusFirstError(methods.formState.errors);
      return;
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, steps.length - 1));
    focusHeading();
  }

  function back() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
    focusHeading();
  }

  function goTo(i: number) {
    if (i >= step) return;
    setDirection(-1);
    setStep(i);
    focusHeading();
  }

  async function onSubmit(values: PlannerValues) {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; reference?: string; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Submission failed");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setReference(data.reference ?? "");
    } catch {
      setSubmitError("We couldn't send your request just now. Please try again, or message us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  if (reference !== null) {
    return <Confirmation reference={reference} name={getValues("name")} onDone={onDone} variant={variant} />;
  }

  const { Component, title } = steps[step];
  const last = step === steps.length - 1;

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (last) void handleSubmit(onSubmit, focusFirstError)(e);
          else void next();
        }}
        className={cn(variant === "page" && "rounded-3xl bg-snow p-6 ring-1 ring-line sm:p-10")}
      >
        <ProgressBar current={step} labels={stepLabels} onSelect={goTo} />

        <div className="mt-10 min-h-[22rem]">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -32 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow text-savanna-ink">
                Step {step + 1} of {steps.length}
              </p>
              <h2 ref={headingRef} tabIndex={-1} className="mt-2 mb-8 text-3xl outline-none md:text-4xl">
                {title}
              </h2>
              <Component />
            </motion.div>
          </AnimatePresence>
        </div>

        {submitError && (
          <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
            {submitError}
          </p>
        )}

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium text-stone transition-colors hover:text-charcoal"
            >
              <ArrowLeft aria-hidden className="size-4" /> Back
            </button>
          ) : (
            <p className="text-xs text-stone">Your answers are saved on this device as you go.</p>
          )}
          <Button type="submit" variant={last ? "primary" : "dark"} size="lg" arrow disabled={submitting}>
            {last ? (submitting ? "Sending…" : "Send my request") : "Continue"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
