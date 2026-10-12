import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/** Text wordmark placeholder: a summit glyph over "UHURU / JOURNEYS". */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("group flex items-center gap-2.5", tone === "light" ? "text-white" : "text-charcoal", className)}
    >
      <svg viewBox="0 0 32 32" aria-hidden className="size-8 shrink-0">
        <circle cx="22" cy="10" r="3.2" className="fill-savanna" />
        <path d="M2 26 L12.5 9.5 L16.5 15.5 L19 12 L30 26 Z" fill="currentColor" />
        <path d="M10.4 12.8 L12.5 9.5 L14.6 12.7 L13.4 13.6 L12.5 12.6 L11.5 13.7 Z" className="fill-snow" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-[0.08em]">UHURU</span>
        <span className="mt-0.5 text-[0.58rem] font-semibold tracking-[0.42em] opacity-80">JOURNEYS</span>
      </span>
    </Link>
  );
}
