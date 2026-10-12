import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  action?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-6 md:mb-16",
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", center && "mx-auto")}>
        {eyebrow && (
          <p className={cn("eyebrow mb-4", tone === "dark" ? "text-savanna-light" : "text-savanna-ink")}>{eyebrow}</p>
        )}
        <Tag className="text-h2">{title}</Tag>
        {intro && (
          <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-white/75" : "text-stone")}>
            {intro}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
