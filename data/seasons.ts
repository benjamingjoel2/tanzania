import type { MonthInfo, SeasonTag } from "./types";

type MonthSpec = [rating: MonthInfo["rating"], tags?: SeasonTag[], note?: string];

/** Build a 12-month array from a compact spec (keys are 1–12). */
export function months(spec: Record<number, MonthSpec>): MonthInfo[] {
  return Array.from({ length: 12 }, (_, i) => {
    const [rating, tags = [], note] = spec[i + 1] ?? ["good"];
    return { month: i + 1, rating, tags, note };
  });
}

export const seasonLegend: Record<SeasonTag, { label: string; className: string }> = {
  calving: { label: "Calving season (southern Serengeti)", className: "bg-savanna" },
  crossings: { label: "River crossings (northern Serengeti)", className: "bg-ocean" },
  dry: { label: "Dry season", className: "bg-sand-deep" },
  "long-rains": { label: "Long rains", className: "bg-stone/50" },
  "short-rains": { label: "Short rains", className: "bg-stone/30" },
};

/** Serengeti & northern circuit pattern, reused by several destinations. */
export const northernCircuitMonths = months({
  1: ["peak", ["calving"], "Herds calve on the southern short-grass plains around Ndutu."],
  2: ["peak", ["calving"], "Peak calving: hundreds of thousands of births and busy predators."],
  3: ["good", ["calving", "long-rains"], "Herds linger in the south; rains begin late in the month."],
  4: ["fair", ["long-rains"], "Long rains. Green, quiet, lower rates; some camps close."],
  5: ["fair", ["long-rains"], "Long rains ease; herds begin moving north-west."],
  6: ["good", ["dry"], "Dry season begins; the migration passes through the Western Corridor."],
  7: ["peak", ["crossings", "dry"], "River crossings begin on the Mara River in the far north."],
  8: ["peak", ["crossings", "dry"], "Prime crossing season in the northern Serengeti."],
  9: ["peak", ["crossings", "dry"], "Crossings continue; superb general game viewing."],
  10: ["good", ["crossings", "dry"], "Late crossings; the herds start drifting south."],
  11: ["good", ["short-rains"], "Short rains refresh the plains; herds head south."],
  12: ["good", [], "Herds return to the southern plains ahead of calving."],
});

export const kilimanjaroMonths = months({
  1: ["peak", ["dry"], "Clear, cold and dry: one of the best windows to summit."],
  2: ["peak", ["dry"], "Excellent climbing conditions, warmer than mid-year."],
  3: ["good", [], "Still good early in the month before the rains build."],
  4: ["fair", ["long-rains"], "Long rains: wet, muddy trails. Only for the determined."],
  5: ["fair", ["long-rains"], "Wettest month on the lower slopes; quiet routes."],
  6: ["good", ["dry"], "Dry season starts; cold nights, clear skies."],
  7: ["peak", ["dry"], "Popular, reliable conditions; busier routes."],
  8: ["peak", ["dry"], "Reliable and clear; book well ahead."],
  9: ["peak", ["dry"], "Excellent visibility and fewer families than August."],
  10: ["peak", ["dry"], "Great conditions before the short rains."],
  11: ["fair", ["short-rains"], "Afternoon showers; mornings often clear."],
  12: ["good", [], "Festive-season climbs; occasional showers early in the month."],
});

export const southernParksMonths = months({
  1: ["good", [], "Green season, lush and photogenic; good birding."],
  2: ["good", [], "Warm and green; some camps begin to wind down."],
  3: ["fair", ["long-rains"], "Long rains: many camps close until June."],
  4: ["fair", ["long-rains"], "Most camps closed; roads impassable."],
  5: ["fair", ["long-rains"], "Rains ease late; camps reopen from June."],
  6: ["peak", ["dry"], "Dry season begins; animals gather at water."],
  7: ["peak", ["dry"], "Excellent predator viewing and walking safaris."],
  8: ["peak", ["dry"], "Prime dry-season game viewing."],
  9: ["peak", ["dry"], "Concentrated wildlife along the rivers."],
  10: ["peak", ["dry"], "Hot and dramatic: the best month for big cats."],
  11: ["good", ["short-rains"], "First rains; landscapes turn green again."],
  12: ["good", [], "Green season returns, with newborns and migrant birds."],
});

export const westernParksMonths = months({
  1: ["fair", [], "Chimps range higher in the forest; treks can be long."],
  2: ["fair", [], "Wet, lush and quiet."],
  3: ["fair", ["long-rains"], "Long rains: most Mahale camps close."],
  4: ["fair", ["long-rains"], "Closed season at Mahale."],
  5: ["fair", ["long-rains"], "Closed season at Mahale."],
  6: ["good", ["dry"], "Camps reopen; drier trails."],
  7: ["peak", ["dry"], "Chimps move lower down; easier treks."],
  8: ["peak", ["dry"], "Excellent trekking and lake swimming."],
  9: ["peak", ["dry"], "Prime chimpanzee season."],
  10: ["peak", ["dry"], "Superb sightings before the rains."],
  11: ["good", ["short-rains"], "Short rains begin; still rewarding."],
  12: ["good", [], "Green and peaceful; some camps open over the holidays."],
});

export const coastMonths = months({
  1: ["good", [], "Hot, sunny and calm; great diving visibility."],
  2: ["good", [], "Hot and dry; warm, clear sea."],
  3: ["fair", ["long-rains"], "Humidity builds; rains arrive late in the month."],
  4: ["fair", ["long-rains"], "Long rains: heavy showers, many resorts close."],
  5: ["fair", ["long-rains"], "Rainy, quiet and good value."],
  6: ["peak", ["dry"], "Fresh, breezy and sunny; ideal after a safari."],
  7: ["peak", ["dry"], "Pleasant temperatures and calm evenings."],
  8: ["peak", ["dry"], "Peak beach season."],
  9: ["peak", ["dry"], "Dry, sunny and warm."],
  10: ["peak", ["dry"], "Excellent beach weather and diving."],
  11: ["good", ["short-rains"], "Brief tropical showers, mostly sunny."],
  12: ["good", [], "Warm, sunny and lively over the holidays."],
});
