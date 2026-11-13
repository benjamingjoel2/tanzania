// i18n-skip-strings
// Photo credits: author, licence and source of every Wikimedia Commons photo in public/photos.
// Mirrors public/photos/CREDITS.md; keep the two in step when a photo is swapped.
// Rendered on /photo-credits (linked from the footer). Credits are never shown on the photos themselves.
import type { images } from "./images";

export interface PhotoCredit {
  file: string;
  /** Key in data/images.ts of the image that uses this file (for the thumbnail and its alt text). */
  imageKey: keyof typeof images;
  /** Title of the file on Wikimedia Commons. */
  title: string;
  /** Empty when Commons gives no author name (the page then points to the source page). */
  author: string;
  licence: string;
  /** Empty for public-domain files. */
  licenceUrl: string;
  sourceUrl: string;
}

export const photoCredits: PhotoCredit[] = [
  { file: "arusha-mount-meru.jpg", imageKey: "arusha", title: "View of Mount Meru Arusha.jpg", author: "Arnold Tibaijuka", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:View_of_Mount_Meru_Arusha.jpg" },
  { file: "gombe-lake-tanganyika.jpg", imageKey: "gombe", title: "Lake Tanganyika at Gombe Stream National Park.jpg", author: "fabulousfabs", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Lake_Tanganyika_at_Gombe_Stream_National_Park.jpg" },
  { file: "katavi-walking-safari.jpg", imageKey: "walking", title: "Walking Safari in Katavi National Park.jpg", author: "Brian Harries", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Walking_Safari_in_Katavi_National_Park.jpg" },
  { file: "lake-eyasi-pelicans.jpg", imageKey: "eyasi", title: "Lake Eyasi-8.jpg", author: "kiwiexplorer", licence: "CC BY-SA 2.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Lake_Eyasi-8.jpg" },
  { file: "mafia-island-chole.jpg", imageKey: "mafia", title: "Mafia Island (51554991378).jpg", author: "Nina R from Africa", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mafia_Island_(51554991378).jpg" },
  { file: "mahale-chimpanzees.jpg", imageKey: "mahale", title: "Adult male chimps in mahale.jpg", author: "Caelio", licence: "CC BY-SA 3.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Adult_male_chimps_in_mahale.jpg" },
  { file: "mara-river-crossing.jpg", imageKey: "riverCrossing", title: "Western white-bearded wildebeest (Connochaetes taurinus mearnsi) Mara River crossing 2c.jpg", author: "Charles J. Sharp", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Western_white-bearded_wildebeest_(Connochaetes_taurinus_mearnsi)_Mara_River_crossing_2c.jpg" },
  { file: "mount-meru-caldera.jpg", imageKey: "meru", title: "Mount Meru Caldera.jpg", author: "Woodlouse", licence: "CC BY-SA 2.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Mount_Meru_Caldera.jpg" },
  { file: "ngorongoro-maasai-boma.jpg", imageKey: "maasai", title: "The Maasai traditional Boma in the Ngorongoro Conservation Area, Tanzania.jpg", author: "Rwebogora", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Maasai_traditional_Boma_in_the_Ngorongoro_Conservation_Area,_Tanzania.jpg" },
  { file: "pemba-chake-chake.jpg", imageKey: "pemba", title: "Pemba island, Tanzania. View from Chake Chake town center over the mangroves towards the sea.JPG", author: "Vincent van Zeijst", licence: "CC BY-SA 3.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pemba_island,_Tanzania._View_from_Chake_Chake_town_center_over_the_mangroves_towards_the_sea.JPG" },
  { file: "rufiji-river.jpg", imageKey: "nyerere", title: "Rufiji River, Selous Game Reserve.jpg", author: "BBM Explorer, Ipswich, United Kingdom", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rufiji_River,_Selous_Game_Reserve.jpg" },
  { file: "serengeti-camp-deck.jpg", imageKey: "lodgeDeck", title: "Singita-Sabora-Tented-Camp-16.jpg", author: "Jessica138", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Singita-Sabora-Tented-Camp-16.jpg" },
  { file: "serengeti-migration.jpg", imageKey: "migration", title: "Wildebeest Migration in Serengeti National Park, Tanzania.jpg", author: "Daniel Rosengren", licence: "CC BY 4.0", licenceUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Wildebeest_Migration_in_Serengeti_National_Park,_Tanzania.jpg" },
  { file: "serengeti-tented-camp.jpg", imageKey: "tentedCamp", title: "Ikoma Tented Camp - panoramio.jpg", author: "Banja-Frans Mulder", licence: "CC BY 3.0", licenceUrl: "https://creativecommons.org/licenses/by/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ikoma_Tented_Camp_-_panoramio.jpg" },
  { file: "stone-town-door.jpg", imageKey: "stoneTown", title: "Rectangular Carved Door Stone Town Oct26 A7CR 14405.jpg", author: "Timothy A. Gonsalves", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rectangular_Carved_Door_Stone_Town_Oct26_A7CR_14405.jpg" },
  { file: "zanzibar-beach-shelter.jpg", imageKey: "beachVilla", title: "Beach, Zanzibar (17196898138).jpg", author: "Rod Waddington", licence: "CC BY-SA 2.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Beach,_Zanzibar_(17196898138).jpg" },
  { file: "zanzibar-beach.jpg", imageKey: "zanzibarBeach", title: "Zanzibar Beach.JPG", author: "Freestylerob", licence: "Public domain", licenceUrl: "", sourceUrl: "https://commons.wikimedia.org/wiki/File:Zanzibar_Beach.JPG" },
  { file: "zanzibar-dhow.jpg", imageKey: "zanzibarDhow", title: "Zanzibar Dhow.jpg", author: "safaritravelplus", licence: "CC0", licenceUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en", sourceUrl: "https://commons.wikimedia.org/wiki/File:Zanzibar_Dhow.jpg" },
];
