import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { LineDraw, SplitReveal } from "./Motion";

/** Small summit glyph used to mark section eyebrows. */
export function Glyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 12" aria-hidden className={cn("h-2.5 w-3.5 shrink-0", className)}>
      <path d="M0 12 L6.2 2 L8.6 5.6 L10.2 3.4 L16 12 Z" fill="currentColor" />
    </svg>
  );
}

export function EyebrowLabel({ children, tone = "light", className }: { children: React.ReactNode; tone?: "light" | "dark"; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-2.5", tone === "dark" ? "text-savanna-light" : "text-savanna-ink", className)}>
      <Glyph />
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  /** "index": eyebrow in 3 columns, title in 9. "split": title left, intro right. "center": centred. */
  layout?: "index" | "split" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
  rule?: boolean;
}

/** Editorial section head: hairline rule, glyph eyebrow and a word-by-word title reveal. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  layout = "index",
  tone = "light",
  className,
  as = "h2",
  rule = true,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const muted = dark ? "text-white/70" : "text-stone";

  if (layout === "center") {
    return (
      <div className={cn("mx-auto mb-14 max-w-3xl text-center md:mb-20", className)}>
        {eyebrow && <EyebrowLabel tone={tone} className="mb-5 justify-center">{eyebrow}</EyebrowLabel>}
        <SplitReveal as={as} text={title} className="text-h2" />
        {intro && <Reveal><p className={cn("mt-6 text-lead", muted)}>{intro}</p></Reveal>}
        {action && <Reveal className="mt-8">{action}</Reveal>}
      </div>
    );
  }

  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      {rule && <LineDraw dark={dark} className="mb-6 md:mb-8" />}
      {layout === "index" ? (
        <div className="grid gap-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">{eyebrow && <EyebrowLabel tone={tone} className="md:pt-3">{eyebrow}</EyebrowLabel>}</div>
          <div className="md:col-span-9">
            <SplitReveal as={as} text={title} className="max-w-4xl text-h2" />
            {(intro || action) && (
              <Reveal className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                {intro && <p className={cn("max-w-2xl text-lead", muted)}>{intro}</p>}
                {action && <div className="shrink-0">{action}</div>}
              </Reveal>
            )}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-8">
          <div>
            {eyebrow && <EyebrowLabel tone={tone} className="mb-5">{eyebrow}</EyebrowLabel>}
            <SplitReveal as={as} text={title} className="text-h2" />
          </div>
          <Reveal className="flex flex-col items-start gap-6 md:pl-[8%]">
            {intro && <p className={cn("text-lead", muted)}>{intro}</p>}
            {action}
          </Reveal>
        </div>
      )}
    </div>
  );
}
