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

export const images = {
  // Landscapes & hero
  heroSerengeti: unsplash("photo-1516426122078-c23e76319801", "Acacia trees on the Serengeti plains at golden hour", "savanna", 2400),
  kilimanjaroElephants: unsplash("photo-1547471080-7cc2caa01a7e", "Elephants walking beneath snow-capped Kilimanjaro", "mountain", 2400),
  kilimanjaroSummit: unsplash("photo-1589553416260-f586c8f1514f", "Climbers approaching the glaciers near Uhuru Peak at sunrise", "mountain"),
  kilimanjaroTrail: unsplash("photo-1621414050946-1b936a78491f", "Trail through giant groundsels on the slopes of Kilimanjaro", "mountain"),
  kilimanjaroCamp: unsplash("photo-1650668302197-7f556c34cb91", "Tents pitched above the clouds on Kilimanjaro", "mountain"),
  ngorongoro: unsplash("photo-1570789210967-2cac24afeb00", "Looking down into the Ngorongoro Crater from the rim", "forest"),
  tarangire: unsplash("photo-1516026672322-bc52d61a55d5", "Elephant herd among baobab trees in Tarangire", "savanna"),
  manyara: unsplash("photo-1534567153574-2b12153a87f0", "Flamingos on the shores of Lake Manyara", "ocean"),
  arusha: unsplash("photo-1602491453631-e2a5ad90a131", "Coffee farm on the green foothills of Mount Meru near Arusha", "forest"),
  ruaha: unsplash("photo-1549366021-9f761d450615", "A male lion resting in dry grass", "savanna"),
  nyerere: unsplash("photo-1612450622914-1ae2ae4e9a62", "Boat safari on the Rufiji River at sunset", "ocean"),
  mahale: unsplash("photo-1540573133985-87b6da6d54a9", "Chimpanzee in dense green forest", "forest"),
  gombe: unsplash("photo-1598439210625-5067c578f3f6", "Forested hills dropping to the shore of Lake Tanganyika", "forest"),
  eyasi: unsplash("photo-1504173010664-32509aeebb62", "Dry acacia country near Lake Eyasi at dusk", "savanna"),
  mafia: unsplash("photo-1544551763-46a013bb70d5", "Diver swimming alongside a whale shark", "ocean"),
  pemba: unsplash("photo-1559128010-7c1ad6e1b6a5", "Traditional dhow sailing on turquoise water", "ocean"),
  zanzibarBeach: unsplash("photo-1586861203927-800a5acdcc4d", "White sand beach and turquoise lagoon in Zanzibar", "ocean"),
  stoneTown: unsplash("photo-1568625502763-2a5ec6a94c47", "Carved wooden door in a narrow Stone Town alley", "ocean"),
  zanzibarDhow: unsplash("photo-1590523277543-a94d2e4eb00b", "Dhow sailing past Zanzibar at sunset", "ocean"),

  // Wildlife & experiences
  migration: unsplash("photo-1535941339077-2dd1c7963098", "Herds of wildebeest and zebra crossing the plains", "savanna"),
  riverCrossing: unsplash("photo-1534177616072-ef7dc120449d", "Wildebeest plunging into the Mara River", "savanna"),
  balloon: unsplash("photo-1507608616759-54f48f0af0ee", "Hot air balloon drifting over the savanna at dawn", "savanna"),
  leopard: unsplash("photo-1456926631375-92c8ce872def", "Leopard draped along an acacia branch", "savanna"),
  cheetah: unsplash("photo-1551969014-7d2c4cddf0b6", "Cheetah scanning the plains from a termite mound", "savanna"),
  giraffe: unsplash("photo-1547970810-dc1eac37d174", "Giraffe silhouetted against an orange sunset", "savanna"),
  zebra: unsplash("photo-1501706362039-c06b2d715385", "Close-up of zebra stripes", "savanna"),
  walking: unsplash("photo-1523805009345-7448845a9e53", "Guided walking safari through tall grass", "savanna"),
  maasai: unsplash("photo-1489392191049-fc10c97e64b6", "Maasai village on the edge of the plains", "savanna"),
  spices: unsplash("photo-1596040033229-a9821ebd058d", "Cinnamon, cloves and star anise at a Zanzibar spice farm", "forest"),
  snorkel: unsplash("photo-1544551763-77ef2d0cfc6c", "Snorkeller over a coral reef", "ocean"),
  honeymoon: unsplash("photo-1520250497591-112f2f40a3f4", "Private plunge pool overlooking the ocean", "ocean"),
  family: unsplash("photo-1533587851505-d119e13fa0d7", "Family watching elephants from a safari vehicle", "savanna"),
  photography: unsplash("photo-1519066629447-267fffa62d4b", "Photographer with a long lens on a safari vehicle", "savanna"),
  meru: unsplash("photo-1609198092458-38a293c7ac4b", "The jagged crater rim of Mount Meru", "mountain"),
  bigFive: unsplash("photo-1557050543-4d5f4e07ef46", "Buffalo herd at dawn", "savanna"),

  // Stays
  tentedCamp: unsplash("photo-1493246507139-91e8fad9978e", "Canvas safari tent on a wooden deck under acacias", "savanna"),
  campInterior: unsplash("photo-1611892440504-42a792e24d32", "Four-poster bed inside a luxury safari tent", "savanna"),
  craterLodge: unsplash("photo-1566073771259-6a8506099945", "Lodge terrace with a view across a misty crater", "forest"),
  beachVilla: unsplash("photo-1573843981267-be1999ff37cd", "Beach villa with infinity pool and palms", "ocean"),
  boutiqueHotel: unsplash("photo-1582719508461-905c673771fd", "Courtyard of a restored boutique hotel", "ocean"),
  lodgeDeck: unsplash("photo-1540541338287-41700207dee6", "Sundowner deck overlooking a river", "forest"),

  // People & brand
  specialist: unsplash("photo-1529156069898-49953e39b3ac", "Travel specialist and guests planning a route on a map", "savanna"),
  guide: unsplash("photo-1504432842672-1a79f78e4084", "Safari guide scanning the horizon with binoculars", "savanna"),
  sundowner: unsplash("photo-1518709766631-a6a7f45921c3", "Sundowner drinks beside a safari vehicle at dusk", "savanna"),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
