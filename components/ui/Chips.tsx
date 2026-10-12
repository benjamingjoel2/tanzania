import { cn } from "@/lib/utils";

export function Chips({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((i) => (
        <li key={i} className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-line">
          {i}
        </li>
      ))}
    </ul>
  );
}
