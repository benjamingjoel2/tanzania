"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MAP_H, MAP_W, destinationCoords, mapDots, project } from "@/lib/map";
import { cn } from "@/lib/utils";

interface MapDestination {
  slug: string;
  name: string;
  group: string;
}

/** Dotted map with glowing pins, paired with a hairline index list. */
export function DestinationMap({ destinations }: { destinations: MapDestination[] }) {
  // All ~1,300 grid dots drawn as one path of zero-length round-capped strokes:
  // identical to individual <circle r=5.5> elements, but one DOM node instead of 1,300.
  const dotPath = useMemo(
    () => mapDots().map(([x, y]) => `M${x.toFixed(1)} ${y.toFixed(1)}h0`).join(""),
    [],
  );
  const [active, setActive] = useState<string | null>(null);
  const groups = [...new Set(destinations.map((d) => d.group))];

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <div className="relative hidden md:block lg:col-span-7">
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="w-full" role="group" aria-label="Map of Tanzania destinations">
          <defs>
            <radialGradient id="pin-glow">
              <stop offset="0" stopColor="#c69a3d" stopOpacity="0.55" />
              <stop offset="1" stopColor="#c69a3d" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.18">
            <path d={dotPath} stroke="#24211e" strokeWidth={11} strokeLinecap="round" fill="none" />
          </g>
          {destinations.map((d) => {
            const c = destinationCoords[d.slug];
            if (!c) return null;
            const [x, y] = project(c);
            const on = active === d.slug;
            return (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                aria-label={d.name}
                onMouseEnter={() => setActive(d.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(d.slug)}
                onBlur={() => setActive(null)}
                className="outline-none"
              >
                <circle cx={x} cy={y} r={on ? 60 : 38} fill="url(#pin-glow)" className="transition-all duration-500">
                  <animate attributeName="opacity" values="1;0.45;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={x} cy={y} r={on ? 13 : 9} fill={on ? "#24211e" : "#c69a3d"} stroke="#faf6ee" strokeWidth="3" className="transition-all duration-300" />
                <g className={cn("pointer-events-none transition-opacity duration-300", on ? "opacity-100" : "opacity-0")}>
                  <rect x={x + 20} y={y - 26} width={d.name.length * 17 + 32} height={52} rx={26} fill="#24211e" />
                  <text x={x + 36} y={y + 9} fontSize="26" fill="#faf6ee">
                    {d.name}
                  </text>
                </g>
              </Link>
            );
          })}
        </svg>
        <p className="mt-3 text-xs text-stone">Map is a stylised illustration and not to scale.</p>
      </div>

      <div className="lg:col-span-5">
        {groups.map((g) => (
          <div key={g} className="mb-8 last:mb-0">
            <p className="eyebrow mb-2 text-stone">{g}</p>
            <ul className="border-t border-line">
              {destinations
                .filter((d) => d.group === g)
                .map((d) => (
                  <li key={d.slug} className="border-b border-line">
                    <Link
                      href={`/destinations/${d.slug}`}
                      onMouseEnter={() => setActive(d.slug)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(d.slug)}
                      onBlur={() => setActive(null)}
                      className={cn(
                        "flex items-center justify-between py-3 text-lg tracking-tight transition-all duration-500",
                        active && active !== d.slug ? "opacity-40" : "opacity-100",
                        active === d.slug && "translate-x-3",
                      )}
                    >
                      {d.name}
                      <span aria-hidden className="text-savanna-ink">+</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
