import type { Post } from "./types";
import { images } from "./images";

export const posts: Post[] = [
  {
    slug: "the-best-of-tanzania",
    title: "The Best of Tanzania: Where to Go and Why",
    excerpt:
      "From the Serengeti to the forests of Lake Tanganyika and the reefs of the Indian Ocean, a guide to Tanzania's great regions and how to bring them together in one journey.",
    date: "2026-09-18",
    author: "The Uhuru Journeys team",
    readMins: 7,
    tags: ["Destinations", "Planning"],
    image: images.kilimanjaroElephants,
  },
  {
    slug: "how-to-choose-a-kilimanjaro-route",
    title: "How to Choose Your Kilimanjaro Route",
    excerpt:
      "Machame, Lemosho, Marangu, Rongai or the Northern Circuit? How scenery, crowds and acclimatisation differ, and which route suits which climber.",
    date: "2026-08-27",
    author: "The Uhuru Journeys team",
    readMins: 6,
    tags: ["Kilimanjaro", "Adventure"],
    image: images.kilimanjaroTrail,
  },
  {
    slug: "great-migration-month-by-month",
    title: "Following the Great Migration, Month by Month",
    excerpt:
      "Where the wildebeest herds usually are throughout the year, and how to time your safari for calving season or the Mara River crossings.",
    date: "2026-07-30",
    author: "The Uhuru Journeys team",
    readMins: 7,
    tags: ["Great Migration", "Serengeti", "Wildlife"],
    image: images.migration,
  },
  {
    slug: "planning-a-safari-and-zanzibar-trip",
    title: "Planning a Safari and Zanzibar Trip",
    excerpt:
      "How to balance time in the parks with days on the coast, which order works best, and how to choose the right side of Zanzibar for you.",
    date: "2026-06-24",
    author: "The Uhuru Journeys team",
    readMins: 6,
    tags: ["Zanzibar", "Planning"],
    image: images.zanzibarDhow,
  },
];
