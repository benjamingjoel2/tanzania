import type { Region, Safari } from "@/data/types";

/** Map a safari to the planner's trip-type ids so enquiries arrive pre-filled. */
export function tripTypesForSafari(s: Safari): string[] {
  const types = new Set<string>();
  const has = (r: Region) => s.regions.includes(r);
  if (s.slug.includes("migration") || s.slug.includes("calving")) types.add("great-migration");
  if (has("zanzibar")) types.add("safari-zanzibar");
  else if (has("northern")) types.add("northern-circuit");
  if (has("southern")) types.add("southern-wilderness");
  if (has("western")) types.add("chimpanzees");
  return [...types];
}
