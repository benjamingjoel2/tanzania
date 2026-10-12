import { images } from "./images";

/** Copy for the About and Conservation pages (CMS-ready singletons). */
export const aboutContent = {
  hero: {
    eyebrow: "Our story",
    title: "Freedom is the journey",
    intro: "Uhuru Journeys was founded on a simple idea: the best trips are planned by one person who knows you and knows Tanzania.",
    image: images.giraffe,
  },
  story: [
    "Uhuru is the Swahili word for freedom. In 1961 it was the word on every Tanzanian's lips as the country won its independence. A torch was carried to the summit of Kilimanjaro, and the highest point in Africa was renamed Uhuru Peak.",
    "We chose the name because it captures what travel in Tanzania feels like at its best: the open horizon of the Serengeti, the hush of the summit at sunrise, the unhurried rhythm of a Zanzibar tide. It is also how we want planning to feel for you: free of stress, of guesswork and of hand-offs between strangers.",
    "Every journey we create is designed and looked after by one dedicated specialist, from your first message to the day you fly home. Our specialists have lived and travelled across Tanzania for years, and they work hand in hand with a small network of guides, camps and mountain crews we know personally.",
  ],
  values: [
    { title: "One specialist, start to finish", body: "No call centres and no hand-offs. The person who plans your trip is the one you can message while you are on it." },
    { title: "Honest advice", body: "We will tell you when a cheaper camp is just as good, when a route is too rushed, or when another month would suit you better." },
    { title: "Fair to everyone", body: "Transparent prices for you, fair wages for guides and porters, and partners who invest in their communities." },
    { title: "Expert on the ground", body: "Local guides, trusted camps and 24/7 WhatsApp support from a team who know the country intimately." },
  ],
  team: [
    { name: "[Founder name]", role: "Founder & head specialist", image: images.guide },
    { name: "[Specialist name]", role: "Safari & Zanzibar specialist", image: images.specialist },
    { name: "[Specialist name]", role: "Kilimanjaro specialist", image: images.kilimanjaroTrail },
  ],
};

export const conservationContent = {
  hero: {
    eyebrow: "Conservation & community",
    title: "Travel that leaves Tanzania wilder",
    intro: "Tourism pays for much of Tanzania's protected land. We want every journey to strengthen that, not wear it down.",
    image: images.tarangire,
  },
  pillars: [
    {
      title: "Protecting wild places",
      body: "Park and conservation fees fund rangers, anti-poaching and habitat protection. We favour camps on community conservancies and concessions where tourism directly secures land for wildlife.",
      image: images.bigFive,
    },
    {
      title: "Fair work on the mountain",
      body: "Our Kilimanjaro crews follow KPAP porter-welfare guidelines: fair wages paid on time, 20 kg load limits, proper food, tents and clothing, and transparent tipping.",
      image: images.kilimanjaroCamp,
    },
    {
      title: "Communities first",
      body: "Cultural visits are arranged with the communities themselves and paid for fairly. We support local schools, clinics and enterprises through our partner camps.",
      image: images.maasai,
    },
    {
      title: "Lighter footprints",
      body: "We plan routes that avoid unnecessary flights and long drives, choose solar-powered, plastic-conscious camps, and encourage longer stays in fewer places.",
      image: images.lodgeDeck,
    },
  ],
  commitments: [
    "A contribution from every journey to a conservation or community project (placeholder: confirm partner and amount)",
    "No elephant rides, captive big-cat encounters or other exploitative wildlife activities",
    "Partner camps assessed for staff welfare, community benefit and environmental practice",
    "Refillable water bottles provided on every safari",
  ],
};
