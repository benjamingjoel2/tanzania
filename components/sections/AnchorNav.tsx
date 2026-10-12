/** Sticky in-page navigation for long detail pages. */
export function AnchorNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="sticky top-[68px] z-30 border-b border-line bg-snow/95 backdrop-blur">
      <ul className="container-x no-scrollbar flex gap-7 overflow-x-auto py-4 text-sm font-medium whitespace-nowrap">
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
