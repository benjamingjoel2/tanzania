"use client";

import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { tripTypes } from "@/data/planner";
import type { PlannerValues } from "@/lib/planner-schema";
import { unsplashLoader } from "@/lib/image-loader";
import { ChoiceCard, FieldError, FieldLabel, Legend, inputClass } from "../fields";

export function StepWhat() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PlannerValues>();
  const selected = watch("tripTypes") ?? [];

  return (
    <div className="grid gap-8">
      <fieldset>
        <Legend hint="Choose as many as you like.">What kind of journey are you dreaming of?</Legend>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {tripTypes.map((t) => (
            <ChoiceCard
              key={t.id}
              checked={selected.includes(t.id)}
              className="flex-col overflow-hidden p-0"
              input={<input type="checkbox" value={t.id} {...register("tripTypes")} />}
            >
              <span className="relative block aspect-[4/3] w-full bg-sand">
                <Image
                  src={t.image.src}
                  loader={t.image.placeholder ? undefined : unsplashLoader}
                  unoptimized={t.image.placeholder}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 220px, 45vw"
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.visibility = "hidden";
                  }}
                />
              </span>
              <span className="block p-3.5">
                <span className="block text-[0.95rem] leading-snug font-medium">{t.label}</span>
                <span className="mt-0.5 block text-xs text-stone">{t.description}</span>
              </span>
            </ChoiceCard>
          ))}
        </div>
        <FieldError id="tripTypes-error" message={errors.tripTypes?.message ?? errors.tripTypes?.root?.message} />
      </fieldset>
      <div>
        <FieldLabel htmlFor="tripNotes" optional>
          Anything else on your wish list?
        </FieldLabel>
        <textarea
          id="tripNotes"
          rows={3}
          placeholder="A special celebration, a dream sighting, a place you've always wanted to see…"
          className={inputClass}
          {...register("tripNotes")}
        />
        <FieldError id="tripNotes-error" message={errors.tripNotes?.message} />
      </div>
    </div>
  );
}
