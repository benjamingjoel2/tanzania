"use client";

import { Check, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const inputClass =
  "w-full rounded-none border border-line bg-white px-4 py-3.5 text-base text-charcoal outline-none transition-colors placeholder:text-stone/60 focus:border-charcoal aria-[invalid=true]:border-red-600";

export function FieldLabel({ htmlFor, children, optional }: { htmlFor?: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-charcoal">
      {children}
      {optional && <span className="ml-1 font-normal text-stone">(optional)</span>}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-700">
      {message}
    </p>
  );
}

export function Legend({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <legend className="mb-3 text-sm font-medium text-charcoal">
      {children}
      {hint && <span className="mt-1 block font-normal text-stone">{hint}</span>}
    </legend>
  );
}

/** Large selectable card wrapping a native radio/checkbox for accessibility. */
export function ChoiceCard({
  checked,
  children,
  className,
  input,
}: {
  checked: boolean;
  children: React.ReactNode;
  className?: string;
  input: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "relative flex cursor-pointer rounded-none border bg-white p-4 transition-all duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-savanna",
        checked ? "border-charcoal shadow-[0_0_0_1px_var(--color-charcoal)]" : "border-line hover:border-charcoal/40",
        className,
      )}
    >
      <span className="sr-only">{input}</span>
      <span
        aria-hidden
        className={cn(
          "absolute top-3 right-3 z-10 grid size-6 place-items-center rounded-full border transition-colors",
          checked ? "border-charcoal bg-charcoal text-snow" : "border-line bg-white/90",
        )}
      >
        {checked && <Check className="size-3.5" />}
      </span>
      {children}
    </label>
  );
}

export function Stepper({
  id,
  value,
  onChange,
  min,
  max,
  label,
}: {
  id: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`Fewer ${label}`}
        className="grid size-11 place-items-center rounded-full border border-line bg-white transition-colors hover:border-charcoal disabled:opacity-40"
      >
        <Minus className="size-4" />
      </button>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={Number.isNaN(value) ? "" : value}
        onChange={(e) => onChange(e.target.value === "" ? NaN : Number(e.target.value))}
        className="w-16 rounded-none border border-line bg-white py-2.5 text-center text-lg outline-none focus:border-charcoal"
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(max, (Number.isNaN(value) ? min : value) + 1))}
        disabled={value >= max}
        aria-label={`More ${label}`}
        className="grid size-11 place-items-center rounded-full border border-line bg-white transition-colors hover:border-charcoal disabled:opacity-40"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
