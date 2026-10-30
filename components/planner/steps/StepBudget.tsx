"use client";

import { useFormContext } from "react-hook-form";
import { budgetTiers } from "@/data/planner";
import type { PlannerValues } from "@/lib/planner-schema";
import { Price } from "@/components/ui/Price";
import { ChoiceCard, FieldError, Legend } from "../fields";

export function StepBudget() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PlannerValues>();
  const budget = watch("budget");

  return (
    <fieldset>
      <Legend hint="Approximate prices per person, per day, including accommodation, guiding, park fees and most meals. International flights are excluded.">
        Which travel style feels right?
      </Legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {budgetTiers.map((tier) => (
          <ChoiceCard
            key={tier.id}
            checked={budget === tier.id}
            className="p-5"
            input={<input type="radio" value={tier.id} {...register("budget")} />}
          >
            <span className="pr-8">
              <span className="block font-display text-2xl">{tier.label}</span>
              {tier.perDayFrom > 0 && (
                <span className="mt-1 block text-sm font-medium text-ocean-ink">
                  From <Price usd={tier.perDayFrom} /> pp / day
                </span>
              )}
              <span className="mt-2 block text-sm leading-relaxed text-stone">{tier.description}</span>
            </span>
          </ChoiceCard>
        ))}
      </div>
      <FieldError id="budget-error" message={errors.budget?.message} />
    </fieldset>
  );
}
