import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProgressBar({
  current,
  labels,
  onSelect,
}: {
  current: number;
  labels: readonly string[];
  onSelect: (i: number) => void;
}) {
  const pct = (current / (labels.length - 1)) * 100;
  return (
    <nav aria-label="Trip planner progress">
      <div className="relative">
        <div aria-hidden className="absolute top-4 right-4 left-4 h-px bg-line">
          <div className="h-full bg-charcoal transition-[width] duration-500 ease-out-soft" style={{ width: `${pct}%` }} />
        </div>
        <ol className="relative flex justify-between">
          {labels.map((label, i) => {
            const done = i < current;
            const active = i === current;
            return (
              <li key={label} className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  disabled={!done}
                  aria-current={active ? "step" : undefined}
                  aria-label={`Step ${i + 1}: ${label}${done ? " (completed, go back)" : active ? " (current)" : ""}`}
                  className={cn(
                    "grid size-8 place-items-center rounded-full border text-sm font-medium transition-colors duration-300",
                    done && "cursor-pointer border-charcoal bg-charcoal text-snow hover:bg-acacia",
                    active && "border-charcoal bg-savanna text-charcoal",
                    !done && !active && "border-line bg-snow text-stone",
                  )}
                >
                  {done ? <Check aria-hidden className="size-4" /> : i + 1}
                </button>
                <span className={cn("hidden text-xs sm:block", active ? "font-semibold text-charcoal" : "text-stone")}>
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
