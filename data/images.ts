import type { ImageAsset } from "./types";

/**
 * Central image library. Every photo on the site is referenced from here, so
 * swapping a photo for your own is a one-file change. Every slot is a real
 * photograph of the place or subject it names; there is no drawn artwork. If a
 * photo ever fails to load, <SmartImage> shows a plain neutral block.
 */
const unsplash = (id: string, alt: string, w = 1800): ImageAsset => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`,
  alt,
});

/** Wikimedia Commons photo downloaded into public/photos (licence and author in public/photos/CREDITS.md). */
const photo = (file: string, alt: string): ImageAsset => ({ src: `/photos/${file}`, alt });

export const images = {
  // Landscapes & hero
  heroSerengeti: unsplash("photo-1516426122078-c23e76319801", "Safari vehicle under acacia trees at sunset", 2400),
  kilimanjaroElephants: unsplash("photo-1489392191049-fc10c97e64b6", "Snow-capped Kilimanjaro rising above the plains", 2400),
  kilimanjaroSummit: unsplash("photo-1611961547440-bde7c756990f", "Climbers on the final ridge below Uhuru Peak at sunrise, Kilimanjaro"),
  kilimanjaroTrail: unsplash("photo-1621414050946-1b936a78491f", "Hikers climbing a rocky mountain trail"),
  kilimanjaroCamp: unsplash("photo-1650668302197-7f556c34cb91", "Tents pitched above the clouds on Kilimanjaro"),
  ngorongoro: unsplash("photo-1745885979468-44a855f8a5fa", "Looking down into the Ngorongoro Crater and its soda lake"),
  tarangire: unsplash("photo-1728238054897-05023133fe90", "Elephants crossing the Tarangire River"),
  manyara: unsplash("photo-1612374300229-5c15f80cbf57", "An elephant in the groundwater forest at Lake Manyara"),
  arusha: photo("arusha-mount-meru.jpg", "Mount Meru rising above the forested foothills near Arusha"),
  ruaha: unsplash("photo-1737363918238-58711a4c8df2", "A young lion resting in the grass in Ruaha National Park"),
  nyerere: photo("rufiji-river.jpg", "The Rufiji River winding through Nyerere National Park, the former Selous"),
  mahale: photo("mahale-chimpanzees.jpg", "Two chimpanzees feeding in a fig tree in the Mahale Mountains"),
  gombe: photo("gombe-lake-tanganyika.jpg", "The shore of Lake Tanganyika at Gombe Stream National Park"),
  eyasi: photo("lake-eyasi-pelicans.jpg", "Pelicans on the salty shore of Lake Eyasi below the rift escarpment"),
  mafia: photo("mafia-island-chole.jpg", "A palm-fringed beach on Chole, off Mafia Island"),
  pemba: photo("pemba-chake-chake.jpg", "Mangroves running down to the sea at Chake-Chake, Pemba Island"),
  zanzibarBeach: photo("zanzibar-beach.jpg", "Palms and white sand on a Zanzibar beach"),
  stoneTown: photo("stone-town-door.jpg", "A carved wooden door in Stone Town, Zanzibar"),
  zanzibarDhow: photo("zanzibar-dhow.jpg", "A dhow under sail off Zanzibar"),

  // Wildlife & experiences
  migration: photo("serengeti-migration.jpg", "Wildebeest herds of the Great Migration spread across the Serengeti"),
  riverCrossing: photo("mara-river-crossing.jpg", "Wildebeest crossing the Mara River"),
  balloon: unsplash("photo-1507608616759-54f48f0af0ee", "Hot air balloon drifting over the savanna at dawn"),
  leopard: unsplash("photo-1456926631375-92c8ce872def", "Leopard draped along an acacia branch"),
  cheetah: unsplash("photo-1551969014-7d2c4cddf0b6", "Cheetah scanning the plains from a termite mound"),
  giraffe: unsplash("photo-1547970810-dc1eac37d174", "Giraffe silhouetted against an orange sunset"),
  zebra: unsplash("photo-1501706362039-c06b2d715385", "Close-up of zebra stripes"),
  walking: photo("katavi-walking-safari.jpg", "A walking safari in Katavi National Park"),
  maasai: photo("ngorongoro-maasai-boma.jpg", "A traditional Maasai boma in the Ngorongoro Conservation Area"),
  spices: unsplash("photo-1596040033229-a9821ebd058d", "Cinnamon, cloves and star anise at a Zanzibar spice farm"),
  snorkel: unsplash("photo-1544551763-77ef2d0cfc6c", "A shoal of fish over the reef"),
  honeymoon: unsplash("photo-1790008230759-754e4776866a", "White sand, palms and thatched shelters on a Zanzibar beach"),
  family: unsplash("photo-1723643750330-c868b56af36f", "Guests in camp chairs watching the sun go down over the Serengeti"),
  photography: unsplash("photo-1519066629447-267fffa62d4b", "Two lions resting together on a rock"),
  meru: photo("mount-meru-caldera.jpg", "The cone and crater wall of Mount Meru, seen on the climb"),
  bigFive: unsplash("photo-1557050543-4d5f4e07ef46", "An elephant on the open plains"),

  // Stays
  tentedCamp: photo("serengeti-tented-camp.jpg", "Thatched camp buildings under acacias on the edge of the Serengeti"),
  campInterior: unsplash("photo-1611892440504-42a792e24d32", "Lantern-lit lodge bedroom with a four-poster bed"),
  craterLodge: unsplash("photo-1566073771259-6a8506099945", "Thatched lodge terrace with a pool and loungers"),
  beachVilla: photo("zanzibar-beach-shelter.jpg", "A thatched shelter on the coral rock above a Zanzibar beach"),
  boutiqueHotel: unsplash("photo-1582719508461-905c673771fd", "Wooden sun deck with loungers and umbrellas"),
  lodgeDeck: photo("serengeti-camp-deck.jpg", "A camp dining deck looking out over the Serengeti plains"),

  // People & brand
  specialist: unsplash("photo-1499591934245-40b55745b905", "Planning a route by hand on a paper map"),
  guide: unsplash("photo-1779388762527-0d4c5d8f4a92", "Two travellers beside their safari vehicle under a Serengeti gateway"),
  sundowner: unsplash("photo-1518709766631-a6a7f45921c3", "Eland antelope in golden grass"),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
