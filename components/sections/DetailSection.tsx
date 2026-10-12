import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/** Titled section used on detail pages; anchors line up below the sticky nav. */
export function DetailSection({
  id,
  eyebrow,
  title,
  intro,
  tone = "plain",
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "plain" | "sand" | "white";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32 py-16 md:py-24",
        tone === "sand" && "bg-sand/60",
        tone === "white" && "bg-white",
        className,
      )}
    >
      <div className="container-x">
        {(eyebrow || title) && (
          <Reveal className="mb-10 max-w-3xl md:mb-12">
            {eyebrow && <p className="eyebrow mb-3 text-savanna-ink">{eyebrow}</p>}
            {title && <h2 className="text-h2">{title}</h2>}
            {intro && <p className="mt-4 text-lg leading-relaxed text-stone">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
