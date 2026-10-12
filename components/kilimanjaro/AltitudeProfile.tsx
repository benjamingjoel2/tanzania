import type { ItineraryDay } from "@/data/types";

/** Simple SVG altitude profile: sleeping altitude and day high points. */
export function AltitudeProfile({ days, startAltitude }: { days: ItineraryDay[]; startAltitude: number }) {
  const pts = [
    { label: "Start", alt: startAltitude, high: startAltitude },
    ...days.map((d) => ({ label: `Day ${d.day}`, alt: d.altitudeM ?? startAltitude, high: d.maxAltitudeM ?? d.altitudeM ?? startAltitude })),
  ];
  const W = 800;
  const H = 280;
  const pad = { l: 56, r: 20, t: 24, b: 36 };
  const min = 1000;
  const max = 6000;
  const x = (i: number) => pad.l + (i * (W - pad.l - pad.r)) / (pts.length - 1);
  const y = (a: number) => pad.t + (1 - (a - min) / (max - min)) * (H - pad.t - pad.b);

  // Path through each day's high point then down to the sleeping altitude.
  let d = `M${x(0)} ${y(pts[0].alt)}`;
  pts.slice(1).forEach((p, i) => {
    const xi = x(i + 1);
    const xm = (x(i) + xi) / 2;
    if (p.high > p.alt) d += ` L${xm} ${y(p.high)}`;
    d += ` L${xi} ${y(p.alt)}`;
  });
  const area = `${d} L${x(pts.length - 1)} ${H - pad.b} L${x(0)} ${H - pad.b} Z`;
  const summitIndex = pts.findIndex((p) => p.high >= 5800);

  return (
    <figure className="rounded-2xl bg-white p-4 ring-1 ring-line md:p-6">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-labelledby="alt-title">
        <title id="alt-title">{`Altitude profile: ${pts.map((p) => `${p.label} ${p.high.toLocaleString("en-GB")} m`).join(", ")}`}</title>
        {[2000, 3000, 4000, 5000, 6000].map((a) => (
          <g key={a}>
            <line x1={pad.l} x2={W - pad.r} y1={y(a)} y2={y(a)} stroke="#ddd4c4" strokeDasharray="3 4" />
            <text x={pad.l - 10} y={y(a) + 4} textAnchor="end" fontSize="11" fill="#6b645c">
              {a.toLocaleString("en-GB")} m
            </text>
          </g>
        ))}
        <path d={area} fill="#c69a3d" opacity="0.15" />
        <path d={d} fill="none" stroke="#2e4637" strokeWidth="2.5" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={x(i)} cy={y(p.alt)} r="4" fill="#2e4637" />
            <text x={x(i)} y={H - 12} textAnchor="middle" fontSize="11" fill="#6b645c">
              {i === 0 ? "Start" : `D${days[i - 1].day}`}
            </text>
          </g>
        ))}
        {summitIndex > 0 && (
          <text x={(x(summitIndex - 1) + x(summitIndex)) / 2} y={y(5895) - 10} textAnchor="middle" fontSize="12" fontWeight="600" fill="#85601c">
            Uhuru Peak 5,895 m
          </text>
        )}
      </svg>
      <figcaption className="mt-2 px-2 text-xs text-stone">
        Dots show sleeping altitude; peaks show the day&apos;s high point. Climb high, sleep low.
      </figcaption>
    </figure>
  );
}
