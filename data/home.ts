import { images } from "./images";

/** Homepage copy blocks. Kept as data so they can move to a CMS singleton later. */
export const homeContent = {
  hero: {
    eyebrow: "Tailor-made journeys in Tanzania",
    titleLead: "Find your",
    titleAccent: "uhuru",
    intro:
      "Private safaris across the Serengeti, sunrise from the roof of Africa and barefoot days on Zanzibar, shaped around you by one dedicated specialist.",
    image: images.heroSerengeti,
    /** Optional background video (MP4). Leave empty to use the image. */
    video: "",
  },
  /** TODO: confirm the figures marked "TODO: verify" before launch. */
  trust: [
    { icon: "user", value: "One", label: "dedicated specialist, start to finish" },
    { icon: "calendar", value: "15+", label: "years guiding in Tanzania" }, // TODO: verify
    { icon: "tent", value: "60+", label: "hand-picked partner camps & lodges" }, // TODO: verify
    { icon: "scale", value: "Fair", label: "transparent pricing, no hidden extras" },
    { icon: "message", value: "24/7", label: "WhatsApp support while you travel" },
    { icon: "map", value: "14", label: "parks & regions covered" },
  ],
  intro: {
    eyebrow: "The Uhuru way",
    title: "One specialist. Your whole journey.",
    body: [
      "Every Uhuru Journeys trip is planned and looked after by a single specialist who knows Tanzania from the inside. The same person answers your first message, refines the route with you, and stays on hand until the day you fly home.",
      "No call centres and no hand-offs. Just honest advice on where to go, when to go and where to stay, with the people, camps and guides we trust.",
    ],
    image: images.specialist,
    secondaryImage: images.guide,
  },
  zanzibar: {
    eyebrow: "Zanzibar",
    title: "After the dust, the ocean",
    body: "Swap the game drive for a dhow at sunset. Spice-scented lanes in Stone Town, reef-sheltered beaches and the kind of quiet that only comes at the end of a safari.",
    image: images.zanzibarDhow,
  },
  story: {
    eyebrow: "Why Uhuru",
    title: "Uhuru means freedom",
    body: [
      "In Swahili, uhuru means freedom. It is the word Tanzanians carried into independence, and the name given to the highest point in Africa, Uhuru Peak on Kilimanjaro.",
      "For us it is also a feeling: the wide horizon of the Serengeti at first light, the hush of the summit as the sun breaks through the clouds, the unhurried calm of a Zanzibar tide. We build every journey so you can feel it too.",
    ],
    image: images.kilimanjaroSummit,
  },
  finalCta: {
    title: "Plan your journey",
    body: "Tell us how you like to travel and one specialist will come back within a day with ideas, honest advice and a first draft itinerary. No obligation.",
    image: images.sundowner,
  },
};
