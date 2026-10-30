import type { ImageAsset, PlaceholderTheme } from "./types";

/**
 * Central image library. Every photo on the site is referenced from here, so
 * swapping placeholder Unsplash photography for your own is a one-file change.
 * If a remote image fails to load, <SmartImage> falls back to local branded
 * artwork in /public/placeholders/{theme}.svg.
 */
const unsplash = (id: string, alt: string, theme: PlaceholderTheme = "savanna", w = 1800): ImageAsset => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`,
  alt,
  theme,
});

/**
 * Branded illustration standing in for a photo that still has to be sourced. Used where the
 * previous stock photo showed the wrong place or subject (listed in IMAGES-NEEDED.md).
 */
const illustration = (theme: PlaceholderTheme, subject: string): ImageAsset => ({
  src: `/placeholders/${theme}.svg`,
  alt: `Illustration standing in for a photo of ${subject} (photo to come)`,
  theme,
  placeholder: true,
});

export const images = {
  // Landscapes & hero
  heroSerengeti: unsplash("photo-1516426122078-c23e76319801", "Safari vehicle under acacia trees at sunset", "savanna", 2400),
  kilimanjaroElephants: unsplash("photo-1489392191049-fc10c97e64b6", "Snow-capped Kilimanjaro rising above the plains", "mountain", 2400),
  kilimanjaroSummit: illustration("mountain", "climbers near Uhuru Peak"),
  kilimanjaroTrail: unsplash("photo-1621414050946-1b936a78491f", "Hikers climbing a rocky mountain trail", "mountain"),
  kilimanjaroCamp: unsplash("photo-1650668302197-7f556c34cb91", "Tents pitched above the clouds on Kilimanjaro", "mountain"),
  ngorongoro: illustration("savanna", "the Ngorongoro Crater"),
  tarangire: illustration("savanna", "elephants among baobabs in Tarangire"),
  manyara: illustration("ocean", "flamingos on Lake Manyara"),
  arusha: illustration("forest", "the foothills of Mount Meru near Arusha"),
  ruaha: illustration("savanna", "Ruaha National Park"),
  nyerere: illustration("ocean", "a boat safari on the Rufiji River"),
  mahale: illustration("forest", "chimpanzees in the Mahale Mountains"),
  gombe: illustration("forest", "Gombe Stream on Lake Tanganyika"),
  eyasi: illustration("savanna", "Lake Eyasi"),
  mafia: illustration("ocean", "whale sharks off Mafia Island"),
  pemba: illustration("ocean", "a dhow off Pemba Island"),
  zanzibarBeach: illustration("ocean", "a Zanzibar beach"),
  stoneTown: illustration("ocean", "a carved door in Stone Town"),
  zanzibarDhow: illustration("ocean", "a dhow off Zanzibar"),

  // Wildlife & experiences
  migration: illustration("savanna", "the Great Migration"),
  riverCrossing: illustration("savanna", "wildebeest crossing the Mara River"),
  balloon: unsplash("photo-1507608616759-54f48f0af0ee", "Hot air balloon drifting over the savanna at dawn", "savanna"),
  leopard: unsplash("photo-1456926631375-92c8ce872def", "Leopard draped along an acacia branch", "savanna"),
  cheetah: unsplash("photo-1551969014-7d2c4cddf0b6", "Cheetah scanning the plains from a termite mound", "savanna"),
  giraffe: unsplash("photo-1547970810-dc1eac37d174", "Giraffe silhouetted against an orange sunset", "savanna"),
  zebra: unsplash("photo-1501706362039-c06b2d715385", "Close-up of zebra stripes", "savanna"),
  walking: illustration("savanna", "a walking safari"),
  maasai: illustration("savanna", "a Maasai village"),
  spices: unsplash("photo-1596040033229-a9821ebd058d", "Cinnamon, cloves and star anise at a Zanzibar spice farm", "forest"),
  snorkel: unsplash("photo-1544551763-77ef2d0cfc6c", "A shoal of fish over the reef", "ocean"),
  honeymoon: illustration("ocean", "a Zanzibar honeymoon villa"),
  family: illustration("savanna", "a family on safari"),
  photography: unsplash("photo-1519066629447-267fffa62d4b", "Two lions resting together on a rock", "savanna"),
  meru: illustration("mountain", "Mount Meru"),
  bigFive: unsplash("photo-1557050543-4d5f4e07ef46", "An elephant on the open plains", "savanna"),

  // Stays
  tentedCamp: illustration("savanna", "a tented safari camp"),
  campInterior: unsplash("photo-1611892440504-42a792e24d32", "Lantern-lit lodge bedroom with a four-poster bed", "savanna"),
  craterLodge: unsplash("photo-1566073771259-6a8506099945", "Thatched lodge terrace with a pool and loungers", "forest"),
  beachVilla: illustration("ocean", "a Zanzibar beach villa"),
  boutiqueHotel: unsplash("photo-1582719508461-905c673771fd", "Wooden sun deck with loungers and umbrellas", "ocean"),
  lodgeDeck: illustration("savanna", "a lodge deck overlooking a river"),

  // People & brand
  specialist: illustration("savanna", "a travel specialist planning a route"),
  guide: illustration("savanna", "a safari guide with binoculars"),
  sundowner: unsplash("photo-1518709766631-a6a7f45921c3", "Eland antelope in golden grass", "savanna"),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
