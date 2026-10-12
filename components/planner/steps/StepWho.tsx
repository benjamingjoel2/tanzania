"use client";

import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { addOns } from "@/data/planner";
import type { PlannerValues } from "@/lib/planner-schema";
import { ChoiceCard, FieldError, FieldLabel, Legend, Stepper, inputClass } from "../fields";

export function StepWho() {
  const {
    register,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<PlannerValues>();
  const children = watch("children");
  const selectedAddOns = watch("addOns") ?? [];

  // Keep one age field per child.
  useEffect(() => {
    const count = Number.isFinite(children) ? Math.max(0, children) : 0;
    const ages = getValues("childAges") ?? [];
    if (ages.length !== count) {
      setValue(
        "childAges",
        Array.from({ length: count }, (_, i) => ages[i] ?? ""),
        { shouldValidate: false },
      );
    }
  }, [children, getValues, setValue]);

  const ages = watch("childAges") ?? [];

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="adults">Adults</FieldLabel>
          <Controller
            control={control}
            name="adults"
            render={({ field }) => (
              <Stepper id="adults" label="adults" min={1} max={30} value={field.value} onChange={field.onChange} />
            )}
          />
          <FieldError id="adults-error" message={errors.adults?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="children">Children (under 18)</FieldLabel>
          <Controller
            control={control}
            name="children"
            render={({ field }) => (
              <Stepper id="children" label="children" min={0} max={15} value={field.value} onChange={field.onChange} />
            )}
          />
          <FieldError id="children-error" message={errors.children?.message} />
        </div>
      </div>

      {ages.length > 0 && (
        <fieldset>
          <Legend hint="Some camps and activities have minimum ages, so this helps us choose well.">
            Children&apos;s ages on arrival
          </Legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ages.map((_, i) => (
              <div key={i}>
                <label htmlFor={`childAge-${i}`} className="mb-1 block text-xs text-stone">
                  Child {i + 1}
                </label>
                <select
                  id={`childAge-${i}`}
                  className={inputClass}
                  aria-invalid={Boolean(errors.childAges?.[i])}
                  {...register(`childAges.${i}` as const)}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 18 }, (_, a) => (
                    <option key={a} value={String(a)}>
                      {a === 0 ? "Under 1" : a}
                    </option>
                  ))}
                </select>
                <FieldError id={`childAge-${i}-error`} message={errors.childAges?.[i]?.message} />
              </div>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset>
        <Legend hint="Optional. Tick anything you'd like us to include or advise on.">Add-ons</Legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {addOns.map((a) => (
            <ChoiceCard
              key={a.id}
              checked={selectedAddOns.includes(a.id)}
              input={<input type="checkbox" value={a.id} {...register("addOns")} />}
            >
              <span className="pr-8">
                <span className="block font-medium">{a.label}</span>
                <span className="mt-1 block text-sm text-stone">{a.description}</span>
              </span>
            </ChoiceCard>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
