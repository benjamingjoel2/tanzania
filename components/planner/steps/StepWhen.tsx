"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { PlannerValues } from "@/lib/planner-schema";
import { ChoiceCard, FieldError, FieldLabel, Legend, Stepper, inputClass } from "../fields";

export function StepWhen() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<PlannerValues>();
  const flexibility = watch("dateFlexibility");
  const experience = watch("experience");

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="arrivalDate">Arrival date in Tanzania</FieldLabel>
          <input
            id="arrivalDate"
            type="date"
            className={inputClass}
            aria-invalid={Boolean(errors.arrivalDate)}
            aria-describedby={errors.arrivalDate ? "arrivalDate-error" : undefined}
            {...register("arrivalDate")}
          />
          <FieldError id="arrivalDate-error" message={errors.arrivalDate?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="nights">Length of stay (nights)</FieldLabel>
          <Controller
            control={control}
            name="nights"
            render={({ field }) => (
              <Stepper id="nights" label="nights" min={1} max={50} value={field.value} onChange={field.onChange} />
            )}
          />
          <FieldError id="nights-error" message={errors.nights?.message} />
        </div>
      </div>

      <fieldset>
        <Legend>How fixed are your dates?</Legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { value: "exact", title: "Exact dates", body: "Flights booked or dates fixed" },
            { value: "approximate", title: "Approximate", body: "Flexible by a few days or weeks" },
          ].map((o) => (
            <ChoiceCard
              key={o.value}
              checked={flexibility === o.value}
              input={<input type="radio" value={o.value} {...register("dateFlexibility")} />}
            >
              <span className="pr-8">
                <span className="block font-medium">{o.title}</span>
                <span className="mt-1 block text-sm text-stone">{o.body}</span>
              </span>
            </ChoiceCard>
          ))}
        </div>
        <FieldError id="dateFlexibility-error" message={errors.dateFlexibility?.message} />
      </fieldset>

      <fieldset>
        <Legend>Have you been on safari before?</Legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { value: "first", title: "This is my first safari", body: "Help me get the essentials right" },
            { value: "experienced", title: "I'm an experienced traveller", body: "Show me something different" },
          ].map((o) => (
            <ChoiceCard
              key={o.value}
              checked={experience === o.value}
              input={<input type="radio" value={o.value} {...register("experience")} />}
            >
              <span className="pr-8">
                <span className="block font-medium">{o.title}</span>
                <span className="mt-1 block text-sm text-stone">{o.body}</span>
              </span>
            </ChoiceCard>
          ))}
        </div>
        <FieldError id="experience-error" message={errors.experience?.message} />
      </fieldset>
    </div>
  );
}
