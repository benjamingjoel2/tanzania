import { cn } from "@/lib/utils";

/** Sticky in-page navigation (used on mobile, or site-wide on long pages). */
export function AnchorNav({ items, className }: { items: { id: string; label: string }[]; className?: string }) {
  return (
    <nav aria-label="On this page" className={cn("sticky top-[68px] z-30 border-y border-line bg-snow/95 backdrop-blur", className)}>
      <ul className="container-x no-scrollbar flex gap-7 overflow-x-auto py-4 text-sm whitespace-nowrap">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="text-stone transition-colors hover:text-charcoal">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
