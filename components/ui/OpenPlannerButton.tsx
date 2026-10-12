"use client";

import { usePlanner } from "@/providers/PlannerProvider";
import type { PlannerPrefill } from "@/lib/planner-schema";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";

interface OpenPlannerButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  prefill?: PlannerPrefill;
}

/** Opens the trip planner as a modal from anywhere on the site. */
export function OpenPlannerButton({ children = "Start planning", prefill, ...props }: OpenPlannerButtonProps) {
  const { openPlanner } = usePlanner();
  return (
    <Button aria-haspopup="dialog" onClick={() => openPlanner(prefill)} {...props}>
      {children}
    </Button>
  );
}
