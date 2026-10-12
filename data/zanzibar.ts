import { images } from "./images";

/** Copy for the /zanzibar page. Add-on prices are base USD per person. */
export const zanzibarContent = {
  hero: {
    eyebrow: "Zanzibar archipelago",
    title: "Spice, salt air and slow days",
    intro:
      "Twenty minutes by light aircraft from the mainland, Zanzibar is where a Tanzania journey exhales: coral-sand beaches, a UNESCO-listed old town and the warm Indian Ocean.",
    image: images.zanzibarBeach,
  },
  overview: [
    "Unguja, the main island most people call Zanzibar, has been a crossroads of the Indian Ocean for a thousand years. Swahili, Omani, Persian, Indian and European influences meet in its architecture, its food and its language.",
    "Most travellers come for a few days at the end of a safari or climb. Stay longer and you can split your time between Stone Town and the coast, add a diving trip, or hop across to the quieter islands of Pemba and Mafia.",
  ],
  beaches: [
    {
      name: "Nungwi & Kendwa",
      area: "North coast",
      body: "Swimmable at all tides, with the island's best sunsets and a lively, sociable feel.",
      image: images.zanzibarDhow,
    },
    {
      name: "Matemwe",
      area: "North-east coast",
      body: "A long, quiet beach facing Mnemba Atoll, with superb snorkelling and village life close by.",
      image: images.beachVilla,
    },
    {
      name: "Paje & Jambiani",
      area: "South-east coast",
      body: "Wide, powder-white beaches and turquoise lagoons; famous for kitesurfing and big tidal flats.",
      image: images.zanzibarBeach,
    },
    {
      name: "Michamvi & Pingwe",
      area: "South-east peninsula",
      body: "A peaceful peninsula with sheltered bays, west-facing sunsets and some of the island's most romantic hideaways.",
      image: images.honeymoon,
    },
  ],
  stoneTown: {
    title: "Stone Town",
    body: [
      "A labyrinth of narrow lanes, carved doors, rooftop cafés and busy markets, Stone Town is the historic heart of Zanzibar and a UNESCO World Heritage Site.",
      "Spend a night or two to walk it with a local guide: the Old Fort and House of Wonders, the old slave market and Anglican cathedral, Darajani market and the evening food stalls at Forodhani Gardens.",
    ],
    image: images.stoneTown,
  },
  addOns: [
    { title: "Stone Town & spice farm", nights: 2, priceFrom: 520, body: "Guided heritage walk, a spice farm visit and a sunset dhow cruise." },
    { title: "Beach escape", nights: 4, priceFrom: 1180, body: "Four nights on the north-east coast with a snorkelling trip to Mnemba Atoll." },
    { title: "Stone Town & beach", nights: 5, priceFrom: 1490, body: "Two nights in the old town, three barefoot nights on the coast." },
    { title: "Pemba island hideaway", nights: 4, priceFrom: 1950, body: "Fly to quiet, green Pemba for walls of coral and complete seclusion." },
  ],
};
