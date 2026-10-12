/**
 * Lightweight dotted map of Tanzania. Outlines are simplified approximations
 * (lon, lat) for decoration only, not for navigation.
 */
type Pt = [number, number];

const mainland: Pt[] = [
  [29.6, -1.05], [30.8, -1.0], [33.9, -1.0], [34.1, -1.05], [37.6, -3.0], [37.75, -3.55], [39.2, -4.65],
  [38.8, -5.9], [39.3, -6.8], [39.5, -7.1], [39.3, -8.0], [39.65, -9.5], [40.45, -10.45], [38.0, -11.3],
  [36.0, -11.65], [34.95, -11.55], [34.6, -10.0], [33.9, -9.6], [32.9, -9.35], [31.0, -8.6], [30.6, -7.5],
  [29.6, -6.0], [29.4, -4.5], [30.1, -4.2], [30.8, -3.3], [30.5, -2.4], [30.8, -1.6],
];
const unguja: Pt[] = [[39.2, -5.72], [39.42, -5.75], [39.58, -6.2], [39.5, -6.45], [39.35, -6.48], [39.2, -6.1]];
const pemba: Pt[] = [[39.65, -4.88], [39.82, -4.95], [39.86, -5.45], [39.7, -5.5], [39.62, -5.2]];
const mafia: Pt[] = [[39.6, -7.65], [39.9, -7.6], [39.95, -7.95], [39.7, -8.05]];

export const MAP = { minLon: 29, maxLon: 41, minLat: -12, maxLat: -0.5, scale: 100 };
export const MAP_W = (MAP.maxLon - MAP.minLon) * MAP.scale;
export const MAP_H = (MAP.maxLat - MAP.minLat) * MAP.scale;

export function project([lon, lat]: Pt): Pt {
  return [(lon - MAP.minLon) * MAP.scale, (MAP.maxLat - lat) * MAP.scale];
}

function inside([x, y]: Pt, poly: Pt[]) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

/** Projected dot grid covering mainland Tanzania and the islands. */
export function mapDots(step = 0.24): Pt[] {
  const dots: Pt[] = [];
  const polys = [mainland, unguja, pemba, mafia];
  for (let lat = MAP.maxLat; lat > MAP.minLat; lat -= step) {
    for (let lon = MAP.minLon; lon < MAP.maxLon; lon += step) {
      if (polys.some((p) => inside([lon, lat], p))) dots.push(project([lon, lat]));
    }
  }
  // Islands are small: add their centres so they always show.
  for (const p of [unguja, pemba, mafia]) {
    const c: Pt = [p.reduce((a, q) => a + q[0], 0) / p.length, p.reduce((a, q) => a + q[1], 0) / p.length];
    dots.push(project(c));
  }
  return dots;
}

/** Approximate coordinates (lon, lat) for each destination slug. */
export const destinationCoords: Record<string, Pt> = {
  serengeti: [34.8, -2.33],
  "ngorongoro-crater": [35.58, -3.2],
  tarangire: [36.0, -4.0],
  "lake-manyara": [35.82, -3.55],
  kilimanjaro: [37.35, -3.07],
  arusha: [36.68, -3.37],
  zanzibar: [39.3, -6.1],
  ruaha: [34.9, -7.7],
  nyerere: [37.9, -8.3],
  "mahale-mountains": [29.95, -6.15],
  "gombe-stream": [29.65, -4.7],
  "lake-eyasi": [35.1, -3.65],
  "mafia-island": [39.75, -7.85],
  "pemba-island": [39.74, -5.2],
};
