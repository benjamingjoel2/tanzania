/**
 * Data access layer. Pages only talk to these helpers, so moving content to a
 * CMS later means re-implementing this file, not the pages.
 */
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { safaris } from "@/data/safaris";
import { climbs } from "@/data/climbs";
import { stays } from "@/data/stays";
import { posts } from "@/data/posts";
import type { BudgetTier, Region, StayType } from "@/data/types";

export { destinations, experiences, safaris, climbs, stays, posts };

const bySlug =
  <T extends { slug: string }>(list: T[]) =>
  (slug: string) =>
    list.find((item) => item.slug === slug);

export const getDestination = bySlug(destinations);
export const getExperience = bySlug(experiences);
export const getSafari = bySlug(safaris);
export const getClimb = bySlug(climbs);
export const getStay = bySlug(stays);
export const getPost = bySlug(posts);

export function pickBySlugs<T extends { slug: string }>(list: T[], slugs: string[]) {
  return slugs.map((s) => list.find((i) => i.slug === s)).filter((i): i is T => Boolean(i));
}

export const regionLabels: Record<Region, string> = {
  northern: "Northern circuit",
  southern: "Southern wilderness",
  western: "Western chimpanzee parks",
  kilimanjaro: "Kilimanjaro",
  zanzibar: "Zanzibar archipelago",
  coast: "Indian Ocean coast",
};

export const budgetLabels: Record<BudgetTier, string> = {
  value: "Value luxury",
  premium: "Premium",
  ultra: "Ultra luxury",
};

export const stayTypeLabels: Record<StayType, string> = {
  "tented-camp": "Tented camp",
  "crater-lodge": "Crater-rim lodge",
  "beach-villa": "Zanzibar beach villa",
  "boutique-hotel": "Stone Town boutique hotel",
};

export function safarisForDestination(slug: string) {
  return safaris.filter((s) => s.destinations.includes(slug));
}

export function staysForDestination(slug: string) {
  return stays.filter((s) => s.destination === slug);
}

export function experiencesForDestination(slug: string) {
  return experiences.filter((e) => e.destinations.includes(slug));
}

/** Grouped links for the desktop Destinations mega menu. */
export function destinationMenuGroups() {
  const groups: { label: string; regions: Region[] }[] = [
    { label: "Northern circuit", regions: ["northern"] },
    { label: "Mountains", regions: ["kilimanjaro"] },
    { label: "Southern wilderness", regions: ["southern"] },
    { label: "Chimpanzee parks", regions: ["western"] },
    { label: "Islands & coast", regions: ["zanzibar", "coast"] },
  ];
  return groups.map((g) => ({
    label: g.label,
    links: destinations
      .filter((d) => g.regions.includes(d.region) || (g.label === "Mountains" && d.slug === "arusha"))
      .filter((d) => !(g.label === "Northern circuit" && d.slug === "arusha"))
      .map((d) => ({ label: d.name, href: `/destinations/${d.slug}` })),
  }));
}
