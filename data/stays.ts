import type { Stay } from "./types";
import { images } from "./images";

/**
 * Placeholder partner properties. Every name below is invented for layout and
 * copy purposes only, and must be replaced with real partner lodges before launch.
 * Prices are base USD per person per night.
 */
export const stays: Stay[] = [
  {
    slug: "kopje-ridge-camp",
    name: "Kopje Ridge Tented Camp",
    type: "tented-camp",
    destination: "serengeti",
    location: "Central Serengeti (Seronera)",
    pricePerNight: 780,
    summary:
      "A small canvas camp tucked against a granite kopje in the central Serengeti, where resident lions and leopards are seen all year.",
    description: [
      "Ten tents sit along the base of a weathered granite outcrop, each looking out across open grassland towards the Seronera River valley. The central Serengeti holds game in every season, so this is a camp that works whether the migration is close by or far to the north.",
      "Days are shaped around your guide and your pace: early starts for big cats, long lunches in the shade, and sundowners on the rocks above camp. Evenings end around the fire before a quiet dinner under canvas.",
    ],
    features: [
      "Ten spacious tents with en-suite bathrooms",
      "Private vehicle and guide on request",
      "Solar power throughout",
      "Sundowners on the kopje above camp",
      "Year-round resident predators nearby",
      "Bush breakfasts and picnic lunches",
    ],
    image: images.tentedCamp,
    placeholder: true,
  },
  {
    slug: "mara-river-camp",
    name: "Mara River Mobile Camp",
    type: "tented-camp",
    destination: "serengeti",
    location: "Northern Serengeti (Kogatende)",
    pricePerNight: 920,
    summary:
      "A seasonal camp in the far north of the Serengeti, set within reach of the Mara River crossing points during the dry months.",
    description: [
      "This light-footprint camp follows the rhythm of the migration and is pitched in the Kogatende area for the crossing season. Its position keeps you close to the river, so you can be waiting at the right bank when the herds begin to gather.",
      "Tents are generous and thoughtfully furnished, with proper beds, hot bucket showers and a shaded veranda. The guiding team knows the crossing points well and is patient enough to wait for the moment rather than chase it.",
    ],
    features: [
      "Seasonal camp positioned for the river crossings",
      "Eight tents with hot bucket showers",
      "Experienced migration guides",
      "Full-day game drives with picnic lunches",
      "Short drive to the nearest airstrip",
      "Low-impact, fully mobile set-up",
    ],
    image: images.campInterior,
    placeholder: true,
  },
  {
    slug: "crater-rim-lodge",
    name: "Crater Rim Lodge",
    type: "crater-lodge",
    destination: "ngorongoro-crater",
    location: "Ngorongoro Crater rim",
    pricePerNight: 1150,
    summary:
      "A stone-and-timber lodge on the crater rim, with suites that look straight down onto the caldera floor.",
    description: [
      "Perched on the forested rim at well over two thousand metres, the lodge is built for the view: the crater floor laid out below, often veiled in early mist that burns off as the morning warms. Being on the rim means an early descent, so you can reach the floor as the gates open.",
      "Nights up here are cool, and the suites are made for it, with fireplaces, heavy throws and deep baths. Meals draw on produce from the surrounding highlands, and the lounge is a comfortable place to watch the light change over the caldera.",
    ],
    features: [
      "Suites with uninterrupted crater views",
      "Fireplaces in every room",
      "Early access to the crater descent road",
      "Highland produce on the menu",
      "Guided walks along the rim",
      "Library lounge and terrace",
    ],
    image: images.craterLodge,
    placeholder: true,
  },
  {
    slug: "highlands-coffee-lodge",
    name: "Highlands Coffee Lodge",
    type: "crater-lodge",
    destination: "ngorongoro-crater",
    location: "Karatu highlands, near the crater",
    pricePerNight: 540,
    summary:
      "A relaxed farm lodge among coffee plantations near Karatu, well placed for the crater, Lake Manyara and Lake Eyasi.",
    description: [
      "Set on a working coffee estate in the green hills around Karatu, this lodge offers a gentle change of pace between game drives. Cottages are spread through gardens and shade trees, and the main house opens onto a wide lawn with views towards the forested crater highlands.",
      "It makes an easy base for a day in Ngorongoro Crater and works equally well for Lake Manyara or a cultural visit to Lake Eyasi. Guests can walk the estate, learn how the beans are grown and roasted, or simply rest by the pool.",
    ],
    features: [
      "Garden cottages on a working coffee estate",
      "Coffee tours and tastings",
      "Swimming pool and spa treatments",
      "Farm-to-table dining",
      "Estate walks and cycling",
      "Convenient for the crater, Manyara and Eyasi",
    ],
    image: images.lodgeDeck,
    placeholder: true,
  },
  {
    slug: "baobab-valley-camp",
    name: "Baobab Valley Camp",
    type: "tented-camp",
    destination: "tarangire",
    location: "Tarangire River, Tarangire National Park",
    pricePerNight: 590,
    summary:
      "An intimate tented camp above the Tarangire River, where elephants come down to drink through the dry season.",
    description: [
      "The camp overlooks a broad bend in the Tarangire River, framed by ancient baobabs. In the dry months the river is the park's lifeline, and elephant herds, buffalo and giraffe pass below the tents throughout the day.",
      "With only a handful of tents, the atmosphere is personal and unhurried. Guided walks in the surrounding area and night drives, where permitted, add depth to time spent in the vehicle.",
    ],
    features: [
      "Eight tents overlooking the river",
      "Elephants regularly seen from camp",
      "Guided walks with an armed ranger",
      "Night drives where permitted",
      "Star beds for clear nights",
      "Shaded pool deck",
    ],
    image: images.tentedCamp,
    placeholder: true,
  },
  {
    slug: "riverbend-camp",
    name: "Riverbend Camp",
    type: "tented-camp",
    destination: "nyerere",
    location: "Rufiji River, Nyerere National Park",
    pricePerNight: 660,
    summary:
      "A riverside camp on the Rufiji, combining game drives with boat safaris and guided walks in Tanzania's wild south.",
    description: [
      "Tents stretch along a quiet bend of the Rufiji River, raised on wooden decks to catch the breeze. Hippos grunt from the water at night, and the morning chorus of fish eagles and hornbills is hard to sleep through.",
      "The great appeal of Nyerere is variety, and the camp makes the most of it. In a single stay you might drift past crocodiles by boat, follow tracks on foot with an armed ranger and search the lakes for wild dog by vehicle.",
    ],
    features: [
      "Riverside tents on raised decks",
      "Boat safaris on the Rufiji",
      "Walking safaris with an armed ranger",
      "Game drives in open vehicles",
      "Fly-in access from Dar es Salaam or Zanzibar",
      "Sundowner deck over the river",
    ],
    image: images.lodgeDeck,
    placeholder: true,
  },
  {
    slug: "matemwe-reef-villas",
    name: "Matemwe Reef Villas",
    type: "beach-villa",
    destination: "zanzibar",
    location: "Matemwe, north-east Zanzibar",
    pricePerNight: 480,
    summary:
      "Private villas on a quiet stretch of the north-east coast, facing the reef and within easy reach of Mnemba Atoll.",
    description: [
      "Each villa has its own plunge pool and shaded terrace, set among palms on the sand. Matemwe is a fishing village, and the view at low tide is of women tending seaweed farms on the reef flats and dhows heading out at dawn.",
      "Snorkelling and diving around Mnemba Atoll are a short boat ride away, and the team can arrange anything from a sunset dhow cruise to a quiet day of doing very little. After time on safari, it is an easy place to slow down.",
    ],
    features: [
      "Private villas with plunge pools",
      "Direct beach access",
      "Boat trips to Mnemba Atoll",
      "Sunset dhow cruises",
      "Spa treatments in the villa",
      "Seafood-led menus",
      "Around an hour by road from the airport",
    ],
    image: images.beachVilla,
    placeholder: true,
  },
  {
    slug: "spice-merchants-house",
    name: "The Spice Merchant's House",
    type: "boutique-hotel",
    destination: "zanzibar",
    location: "Stone Town, Zanzibar",
    pricePerNight: 260,
    summary:
      "A restored merchant's townhouse in the heart of Stone Town, with carved doors, a central courtyard and a rooftop overlooking the harbour.",
    description: [
      "Behind a heavy carved door, the house opens onto a cool inner courtyard in the traditional Swahili style. Rooms are furnished with antique four-poster beds, coloured glass and old Zanzibari chests, while the rooftop terrace looks out across tin roofs and minarets to the sea.",
      "Stone Town is best explored on foot, and from here the market, the old fort and the waterfront gardens are a short walk through the lanes. A night or two here before the beach adds history and texture to a trip.",
    ],
    features: [
      "Restored nineteenth-century townhouse",
      "Rooftop terrace with harbour views",
      "Central courtyard with plunge pool",
      "Guided Stone Town walks",
      "Breakfast on the roof",
      "Walking distance to Forodhani Gardens",
    ],
    image: images.boutiqueHotel,
    placeholder: true,
  },
];
