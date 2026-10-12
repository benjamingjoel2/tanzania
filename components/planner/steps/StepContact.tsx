"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { contactMethods, countryCodes } from "@/data/planner";
import type { PlannerValues } from "@/lib/planner-schema";
import { cn } from "@/lib/utils";
import { FieldError, FieldLabel, Legend, inputClass } from "../fields";

export function StepContact() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PlannerValues>();
  const methods = watch("contactMethods") ?? [];

  return (
    <div className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <input
            id="name"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="phone">Phone (with country code)</FieldLabel>
        <div className="flex gap-3">
          <label htmlFor="phoneCode" className="sr-only">
            Country code
          </label>
          <select id="phoneCode" autoComplete="tel-country-code" className={cn(inputClass, "w-32 shrink-0")} {...register("phoneCode")}>
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            id="phone"
            type="tel"
            autoComplete="tel-national"
            className={inputClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </div>
        <FieldError id="phone-error" message={errors.phone?.message} />
      </div>

      <fieldset>
        <Legend>How should we get in touch?</Legend>
        <div className="flex flex-wrap gap-2.5">
          {contactMethods.map((m) => {
            const checked = methods.includes(m);
            return (
              <label
                key={m}
                className={cn(
                  "cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-savanna",
                  checked ? "border-charcoal bg-charcoal text-snow" : "border-line bg-white hover:border-charcoal/40",
                )}
              >
                <input type="checkbox" value={m} className="sr-only" {...register("contactMethods")} />
                {m}
              </label>
            );
          })}
        </div>
        <FieldError id="contactMethods-error" message={errors.contactMethods?.message} />
      </fieldset>

      <div>
        <FieldLabel htmlFor="notes" optional>
          Anything else we should know?
        </FieldLabel>
        <textarea
          id="notes"
          rows={4}
          placeholder="Dietary needs, mobility, celebrations, the best time to call…"
          className={inputClass}
          {...register("notes")}
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-stone">
          <input
            type="checkbox"
            className="mt-0.5 size-5 shrink-0 accent-charcoal"
            aria-invalid={Boolean(errors.consent)}
            {...register("consent")}
          />
          <span>
            I&apos;m happy for Uhuru Journeys to contact me about this trip. See our{" "}
            <Link href="/legal/privacy" className="underline underline-offset-2" target="_blank">
              privacy policy
            </Link>
            .
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>
    </div>
  );
}
