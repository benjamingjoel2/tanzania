/** Approximate coordinates (lon, lat) for each destination slug, used for JSON-LD geo. */
type Pt = [number, number];

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
