import { cn } from "@/lib/utils";

/**
 * A thin repeating border inspired by the carved lotus-and-chain bands on
 * Zanzibar doors. Decorative only; use sparingly.
 */
export function DoorMotif({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("h-3 w-full text-savanna", className)} preserveAspectRatio="none">
      <defs>
        <pattern id="door-band" width="28" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 6 H28" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
          <path d="M14 1 C17 3.5 17 8.5 14 11 C11 8.5 11 3.5 14 1 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="6" r="1.4" fill="currentColor" />
          <circle cx="28" cy="6" r="1.4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill="url(#door-band)" />
    </svg>
  );
}
