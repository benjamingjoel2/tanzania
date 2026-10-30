/** Shared content types. Shaped so they can map 1:1 onto CMS collections later. */

/** All prices are stored in base USD and converted for display. */
export type Money = number;

export type PlaceholderTheme = "savanna" | "ocean" | "mountain" | "forest";

export interface ImageAsset {
  src: string;
  alt: string;
  /** Local placeholder artwork used if the remote image fails to load. */
  theme?: PlaceholderTheme;
  /** True while this is illustrated artwork standing in for a photo still to be sourced (see IMAGES-NEEDED.md). */
  placeholder?: boolean;
}

export type Region =
  | "northern"
  | "southern"
  | "western"
  | "kilimanjaro"
  | "zanzibar"
  | "coast";

export type SeasonTag = "calving" | "crossings" | "long-rains" | "short-rains" | "dry";

export interface MonthInfo {
  /** 1 = January */
  month: number;
  rating: "peak" | "good" | "fair";
  tags: SeasonTag[];
  note?: string;
}

export interface Faq {
  q: string;
  a: string;
  category?: FaqCategory;
  /** Flag answers that must be checked against official sources before launch. */
  verify?: boolean;
}

export type FaqCategory =
  | "Planning"
  | "Entry & health"
  | "Kilimanjaro"
  | "On safari"
  | "Zanzibar";

export interface Destination {
  slug: string;
  name: string;
  region: Region;
  kind: "Safari" | "Mountain" | "Island" | "City" | "Primates" | "Culture";
  tagline: string;
  summary: string;
  overview: string[];
  image: ImageAsset;
  highlights: string[];
  wildlife: string[];
  months: MonthInfo[];
  bestTimeSummary: string;
  stays: string[];
  faqs: Faq[];
  featured?: boolean;
}

export interface Experience {
  slug: string;
  title: string;
  category: "Wildlife" | "Adventure" | "Culture" | "Coast" | "Journeys";
  summary: string;
  body: string[];
  image: ImageAsset;
  destinations: string[];
  bestTime: string;
  idealFor: string[];
  relatedSafaris: string[];
  priceFrom?: Money;
}

export interface ItineraryDay {
  day: number | string;
  title: string;
  description: string;
  stay?: string;
  meals?: string;
  /** Altitude in metres at camp (climbs). */
  altitudeM?: number;
  /** Highest point reached that day (climbs). */
  maxAltitudeM?: number;
  hiking?: string;
}

export type BudgetTier = "value" | "premium" | "ultra";

export interface Safari {
  slug: string;
  title: string;
  days: number;
  nights: number;
  regions: Region[];
  destinations: string[];
  budget: BudgetTier;
  inclusionLine: string;
  summary: string;
  highlights: string[];
  priceFrom: Money;
  image: ImageAsset;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  bestFor: string[];
  featured?: boolean;
}

export interface Climb {
  slug: string;
  name: string;
  days: number;
  /** 1 (easiest) – 5 (hardest) */
  difficulty: 1 | 2 | 3 | 4 | 5;
  difficultyLabel: string;
  successNote: string;
  priceFrom: Money;
  tagline: string;
  summary: string;
  overview: string[];
  scenery: string;
  crowds: "Low" | "Moderate" | "High";
  accommodation: "Camping" | "Huts";
  acclimatisation: "Fair" | "Good" | "Excellent";
  image: ImageAsset;
  itinerary: ItineraryDay[];
}

export type StayType = "tented-camp" | "crater-lodge" | "beach-villa" | "boutique-hotel";

export interface Stay {
  slug: string;
  name: string;
  type: StayType;
  destination: string;
  location: string;
  pricePerNight: Money;
  summary: string;
  description: string[];
  features: string[];
  image: ImageAsset;
  /** Placeholder partner property: rename to a real partner before launch. */
  placeholder: true;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readMins: number;
  tags: string[];
  image: ImageAsset;
}
