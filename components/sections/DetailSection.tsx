import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Titled section used on inner pages; anchors line up below the fixed header. */
export function DetailSection({
  id,
  eyebrow,
  title,
  intro,
  tone = "plain",
  children,
  className,
  action,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: React.ReactNode;
  tone?: "plain" | "sand" | "white";
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 section-y", tone === "sand" && "bg-sand/60", tone === "white" && "bg-white", className)}
    >
      <div className="container-x">
        {title && <SectionHeading eyebrow={eyebrow} title={title} intro={intro} action={action} />}
        {children}
      </div>
    </section>
  );
}

/** Content block inside a two-column detail layout. */
export function DetailBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-8 pb-16 md:pb-20">
      <h2 className="mb-8 text-[clamp(1.75rem,2.6vw,2.5rem)] leading-tight">{title}</h2>
      {children}
    </section>
  );
}
