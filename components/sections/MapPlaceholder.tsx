import { MapPin } from "lucide-react";

/**
 * Stylised route map placeholder. Replace with an embedded map (Mapbox,
 * Google Maps static image or a custom illustrated map) before launch.
 */
export function MapPlaceholder({ stops, title = "Route map" }: { stops: string[]; title?: string }) {
  const n = stops.length;
  const points = stops.map((_, i) => {
    const x = 12 + (76 * i) / Math.max(1, n - 1);
    const y = 50 + Math.sin(i * 1.4) * 22;
    return { x, y };
  });
  const d = points.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  return (
    <figure className="overflow-hidden rounded-2xl bg-[#e9e0cc] ring-1 ring-line">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="aspect-[16/10] w-full" role="img" aria-label={`${title}: ${stops.join(" to ")}`}>
        <defs>
          <pattern id="topo" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 4 Q2 2 4 4 T8 4" fill="none" stroke="#d6c9ab" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#topo)" />
        <path d={d} fill="none" stroke="#24211e" strokeWidth="0.5" strokeDasharray="1.5 1.2" vectorEffect="non-scaling-stroke" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="1.6" fill={i === 0 || i === n - 1 ? "#c69a3d" : "#2e4637"} />
        ))}
      </svg>
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line bg-snow px-5 py-4 text-sm">
        <span className="font-medium">{title}</span>
        {stops.map((s, i) => (
          <span key={`${s}-${i}`} className="flex items-center gap-1.5 text-stone">
            <MapPin aria-hidden className="size-3.5 text-savanna-ink" /> {s}
          </span>
        ))}
        <span className="ml-auto text-xs text-stone/80">Map placeholder</span>
      </figcaption>
    </figure>
  );
}
