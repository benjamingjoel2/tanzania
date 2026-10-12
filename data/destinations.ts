import type { Destination } from "./types";
import { images } from "./images";
import {
  months,
  northernCircuitMonths,
  kilimanjaroMonths,
  southernParksMonths,
  westernParksMonths,
  coastMonths,
} from "./seasons";

/** Ngorongoro rewards a visit in every month; the calendar reflects that. */
const ngorongoroMonths = months({
  1: ["peak", [], "Green crater floor; combine with calving on the nearby Ndutu plains."],
  2: ["peak", [], "Lush and photogenic; calving is under way just to the west."],
  3: ["good", ["long-rains"], "Rains begin late in the month; the crater stays rewarding."],
  4: ["good", ["long-rains"], "Long rains: fewer vehicles on the floor and lower rates."],
  5: ["good", ["long-rains"], "Rains ease; fresh grass and quiet roads."],
  6: ["peak", ["dry"], "Dry season begins; cool, clear mornings on the rim."],
  7: ["peak", ["dry"], "Excellent visibility; the busiest period, so descend early."],
  8: ["peak", ["dry"], "Reliable game viewing; cold nights on the rim."],
  9: ["peak", ["dry"], "Dry and clear, with animals near the springs and swamps."],
  10: ["peak", ["dry"], "Dry and dusty; superb light late in the day."],
  11: ["good", ["short-rains"], "Short rains bring brief showers and new growth."],
  12: ["good", [], "Green and pleasant over the festive season."],
});

/** Tarangire peaks in the dry season, when wildlife crowds the river. */
const tarangireMonths = months({
  1: ["good", [], "Green season; superb birding and newborn animals."],
  2: ["good", [], "Warm and green; many animals disperse beyond the park."],
  3: ["fair", ["long-rains"], "Rains arrive; wildlife spreads out across the wider ecosystem."],
  4: ["fair", ["long-rains"], "Long rains: quiet, with some tracks hard going."],
  5: ["fair", ["long-rains"], "Rains ease; grass is long and game harder to see."],
  6: ["peak", ["dry"], "Dry season begins; herds return to the Tarangire River."],
  7: ["peak", ["dry"], "Large elephant herds gather along the river."],
  8: ["peak", ["dry"], "Excellent concentrations of wildlife at water."],
  9: ["peak", ["dry"], "Some of the highest elephant numbers of the year."],
  10: ["peak", ["dry"], "Hot and dry; the river is a magnet for game."],
  11: ["good", ["short-rains"], "Short rains begin and the park starts to green."],
  12: ["good", [], "Green and lively, with migrant birds arriving."],
});

/** General northern highlands pattern without migration-specific notes. */
const northernHighlandsMonths = months({
  1: ["good", [], "Warm and mostly dry between the rains."],
  2: ["good", [], "Warm and green; a good fit with calving season in the Serengeti."],
  3: ["good", ["long-rains"], "Rains usually arrive late in the month."],
  4: ["fair", ["long-rains"], "Long rains: wet roads, lush scenery, fewer visitors."],
  5: ["fair", ["long-rains"], "Rains ease towards the end of the month."],
  6: ["peak", ["dry"], "Dry season begins; cool mornings and clear skies."],
  7: ["peak", ["dry"], "Dry, cool and reliable."],
  8: ["peak", ["dry"], "Dry and clear; a popular month across the north."],
  9: ["peak", ["dry"], "Dry and warm, with excellent visibility."],
  10: ["peak", ["dry"], "Warm and dry before the short rains."],
  11: ["good", ["short-rains"], "Short rains: brief showers, mostly in the afternoon."],
  12: ["good", [], "Green and pleasant over the festive season."],
});

/** Gombe is open all year; trekking is easiest in the drier months. */
const gombeMonths = months({
  1: ["good", [], "Wet season; chimps often feed higher up and treks can be steep."],
  2: ["good", [], "Warm and green; trails can be slippery."],
  3: ["fair", ["long-rains"], "Heavy rain is likely; the park stays open."],
  4: ["fair", ["long-rains"], "Wettest period; trekking is muddy but possible."],
  5: ["fair", ["long-rains"], "Rains ease late in the month."],
  6: ["good", ["dry"], "Drier trails and clearer views over the lake."],
  7: ["peak", ["dry"], "Chimps often lower down; shorter, easier treks."],
  8: ["peak", ["dry"], "Excellent trekking conditions."],
  9: ["peak", ["dry"], "Dry and reliable; good for photography."],
  10: ["peak", ["dry"], "Fine conditions before the rains return."],
  11: ["good", ["short-rains"], "Rains return; the forest turns green again."],
  12: ["good", [], "Quiet and lush; trekking remains rewarding."],
});

/** Mafia: whale sharks gather off Kilindoni roughly from October to March. */
const mafiaMonths = months({
  1: ["peak", [], "Whale shark season; hot and calm with good visibility."],
  2: ["peak", [], "Whale sharks still present; warm, clear water."],
  3: ["good", ["long-rains"], "Whale sharks tail off; rains build late in the month."],
  4: ["fair", ["long-rains"], "Long rains: several lodges close for the season."],
  5: ["fair", ["long-rains"], "Rainy and quiet; many lodges remain closed."],
  6: ["good", ["dry"], "Lodges reopen; breezy, with choppier seas outside the bay."],
  7: ["good", ["dry"], "Cool and windy; diving inside Chole Bay is still good."],
  8: ["good", ["dry"], "Turtle nesting continues on the outer islands."],
  9: ["good", ["dry"], "Winds ease; sea conditions improve."],
  10: ["peak", ["dry"], "Whale sharks begin to arrive; excellent diving."],
  11: ["peak", ["short-rains"], "Whale shark season, with brief tropical showers."],
  12: ["peak", [], "Warm, calm and clear; a fine time for whale sharks."],
});

export const destinations: Destination[] = [
  {
    slug: "serengeti",
    name: "Serengeti",
    region: "northern",
    kind: "Safari",
    tagline: "Endless plains and the greatest wildlife movement on earth",
    summary:
      "Tanzania's most celebrated park, home to the Great Migration and some of Africa's finest predator viewing in every season.",
    overview: [
      "The Serengeti covers almost 15,000 square kilometres of grassland, acacia woodland and granite kopjes in Tanzania's far north. It is a UNESCO World Heritage Site and, together with Kenya's Maasai Mara, forms one of the most intact large-mammal ecosystems left anywhere.",
      "Its fame rests on the Great Migration: well over a million wildebeest, with zebra and gazelle, moving in a broad loop through the year in search of grazing and water. Calving takes place on the southern short-grass plains early in the year, and the dramatic river crossings happen on the Mara River in the far north during the dry months.",
      "The migration is only part of the story. The central Serengeti around Seronera holds lions, leopards and cheetahs year-round, and each area of the park has its own character. We match your camps to the month you travel, so you are in the right place rather than simply in the park.",
    ],
    image: images.heroSerengeti,
    highlights: [
      "Calving season on the southern plains around Ndutu",
      "Mara River crossings in the northern Serengeti",
      "Big cats around the Seronera Valley year-round",
      "Hot-air balloon flights at dawn",
      "Granite kopjes and wide, open horizons",
      "Remote camps far from other vehicles",
    ],
    wildlife: [
      "Wildebeest",
      "Plains zebra",
      "Lion",
      "Leopard",
      "Cheetah",
      "Spotted hyena",
      "Nile crocodile",
      "Thomson's gazelle",
    ],
    months: northernCircuitMonths,
    bestTimeSummary:
      "The Serengeti is rewarding all year. Come in January and February for calving in the south, or from July to October for river crossings in the north.",
    stays: ["kopje-ridge-camp", "mara-river-camp"],
    faqs: [
      {
        q: "Will I definitely see a river crossing?",
        a: "Crossings depend on rainfall and the herds' own timing, so no one can promise one on a given day. Staying several nights in the northern Serengeti between July and October, with a patient guide, gives you a very good chance.",
        category: "On safari",
      },
      {
        q: "How do we get to the Serengeti?",
        a: "Most guests fly in on light aircraft from Arusha to one of several airstrips inside the park, which takes roughly one to two hours. Driving is also possible via the Ngorongoro highlands, usually as part of a longer road safari.",
        category: "Planning",
      },
    ],
    featured: true,
  },
  {
    slug: "ngorongoro-crater",
    name: "Ngorongoro Crater",
    region: "northern",
    kind: "Safari",
    tagline: "A lost world inside an ancient volcano",
    summary:
      "The world's largest intact volcanic caldera, its floor home to a dense and remarkably varied population of wildlife, including black rhino.",
    overview: [
      "Around two and a half million years ago, a great volcano collapsed in on itself and left a caldera roughly 260 square kilometres across, with walls about 600 metres high. Today the crater floor is a self-contained world of grassland, soda lake, swamp and fever-tree forest.",
      "The density of wildlife is extraordinary. Lion, buffalo, elephant, hyena and huge herds of zebra and wildebeest live here, and the crater is one of the most reliable places in Tanzania to see the endangered black rhino.",
      "The crater sits within the wider Ngorongoro Conservation Area, where Maasai communities still graze their cattle alongside wildlife. The area also takes in Olduvai Gorge, one of the most important sites for the study of early humans, and the Ndutu plains where the migration calves.",
    ],
    image: images.ngorongoro,
    highlights: [
      "A full day on the crater floor",
      "One of Tanzania's best chances of seeing black rhino",
      "Misty mornings on the forested rim",
      "Olduvai Gorge and its museum",
      "Maasai communities in the conservation area",
      "Flamingos on Lake Magadi, seasonally",
    ],
    wildlife: [
      "Black rhino",
      "Lion",
      "African buffalo",
      "Elephant",
      "Spotted hyena",
      "Golden jackal",
      "Hippo",
      "Lesser flamingo",
    ],
    months: ngorongoroMonths,
    bestTimeSummary:
      "The crater is excellent in every month because its wildlife is largely resident. The dry season from June to October is busiest, so an early descent helps.",
    stays: ["crater-rim-lodge", "highlands-coffee-lodge"],
    faqs: [
      {
        q: "How long can we spend on the crater floor?",
        a: "Time on the floor is regulated, and the limit on a single descent is usually around six hours. Rules and fees change from time to time, so we confirm the current arrangements when we plan your trip.",
        category: "On safari",
        verify: true,
      },
      {
        q: "Is it cold on the crater rim?",
        a: "Yes, it can be. The rim is well over 2,000 metres above sea level, so evenings and early mornings are cool all year and can be close to freezing in June and July. A warm fleece and jacket are worth packing.",
        category: "Planning",
      },
    ],
    featured: true,
  },
  {
    slug: "tarangire",
    name: "Tarangire",
    region: "northern",
    kind: "Safari",
    tagline: "Baobabs, a lifeline river and great gatherings of elephants",
    summary:
      "A park of ancient baobabs and seasonal swamps, known for some of the largest elephant herds in northern Tanzania during the dry season.",
    overview: [
      "Tarangire takes its name from the river that runs through it, and in the dry months that river becomes the only reliable water for a wide area. From June onwards, wildlife moves in from the surrounding plains, and the park fills with elephants, buffalo, zebra and wildebeest.",
      "The landscape is quite unlike the open Serengeti. Huge baobabs, some many centuries old, stand over rolling bush and the swamps of Silale, and the light in the late afternoon is beautiful for photography.",
      "It sits within easy reach of Arusha, so it fits naturally at the start or end of a northern safari. It also rewards a longer stay, especially in camps away from the main circuit where walking and night drives may be possible.",
    ],
    image: images.tarangire,
    highlights: [
      "Large elephant herds along the Tarangire River",
      "Ancient baobab trees",
      "The Silale swamp and its birdlife",
      "Walking safaris and night drives in some areas",
      "An easy drive from Arusha",
    ],
    wildlife: [
      "Elephant",
      "Lion",
      "Leopard",
      "Fringe-eared oryx",
      "Lesser kudu",
      "Giraffe",
      "African rock python",
    ],
    months: tarangireMonths,
    bestTimeSummary:
      "The dry season from June to October is the peak, when wildlife crowds the river. The green months bring excellent birding and newborn animals.",
    stays: ["baobab-valley-camp"],
    faqs: [
      {
        q: "How many days should we spend in Tarangire?",
        a: "One full day gives a good impression, but two or three nights let you explore the quieter southern areas and enjoy the park at an unhurried pace, particularly in the dry season.",
        category: "Planning",
      },
      {
        q: "Are there tsetse flies in Tarangire?",
        a: "Tsetse flies are present in parts of the park, particularly in wooded areas. Their bite is irritating rather than dangerous for most visitors. Light, neutral-coloured clothing and insect repellent help, and dark blue or black clothing is best avoided.",
        category: "On safari",
      },
    ],
    featured: true,
  },
  {
    slug: "lake-manyara",
    name: "Lake Manyara",
    region: "northern",
    kind: "Safari",
    tagline: "Groundwater forest beneath the Rift Valley wall",
    summary:
      "A compact, scenic park between the Rift Valley escarpment and a shallow soda lake, rich in birdlife and well suited to a half-day or full-day visit.",
    overview: [
      "Lake Manyara National Park stretches along the foot of the Great Rift Valley escarpment. Much of the park is taken up by the lake itself, and the land between the water and the cliffs holds a surprising range of habitats, from lush groundwater forest to open grassland and hot springs.",
      "The forest is home to troops of olive baboons and blue monkeys, while elephants browse beneath the trees. Manyara's lions have a reputation for climbing trees, though sightings are never guaranteed, and the lake can draw flamingos and pelicans in large numbers when water levels suit them.",
      "Its position on the road between Arusha and the Ngorongoro highlands makes it an easy addition to a northern safari, and the park's treetop walkway offers a different perspective on the forest.",
    ],
    image: images.manyara,
    highlights: [
      "Groundwater forest at the foot of the escarpment",
      "Seasonal flamingos and pelicans on the lake",
      "The treetop canopy walkway",
      "Over 400 recorded bird species",
      "An easy stop between Arusha and the crater",
    ],
    wildlife: [
      "Elephant",
      "Olive baboon",
      "Blue monkey",
      "Lion",
      "Hippo",
      "Giraffe",
      "Lesser flamingo",
    ],
    months: northernHighlandsMonths,
    bestTimeSummary:
      "Manyara is pleasant all year. The dry season from June to October suits general game viewing, while the wetter months are best for birds.",
    stays: ["highlands-coffee-lodge"],
    faqs: [
      {
        q: "Will we see the tree-climbing lions?",
        a: "Lions in Manyara are known for resting in trees, but they are elusive and sightings vary a great deal from year to year. It is best enjoyed as a bonus rather than the reason to visit.",
        category: "On safari",
      },
      {
        q: "Is Lake Manyara worth including?",
        a: "It is a good choice for a gentle first game drive, for keen birders or for breaking the journey to the crater. On a short trip, we may suggest more time in Tarangire or the Serengeti instead.",
        category: "Planning",
      },
    ],
  },
  {
    slug: "kilimanjaro",
    name: "Kilimanjaro",
    region: "kilimanjaro",
    kind: "Mountain",
    tagline: "Walk to the roof of Africa at Uhuru Peak",
    summary:
      "Africa's highest mountain and the world's tallest free-standing peak, climbable without technical mountaineering experience.",
    overview: [
      "Kilimanjaro rises to 5,895 metres at Uhuru Peak, the summit that gives our company its name. It stands alone above the plains near the Kenyan border, and on a clear morning its snowfields and glaciers can be seen from far across the savanna.",
      "A climb passes through a striking sequence of zones: cultivated foothills and montane rainforest, heather and moorland dotted with giant groundsels, high alpine desert, and finally the arctic summit. No ropes or technical skills are needed, but altitude is a serious challenge and should be respected.",
      "Route choice and the number of days matter more than anything else. Longer itineraries on routes such as the Lemosho or Northern Circuit give your body time to acclimatise and improve your chances of reaching the top. We will help you choose the route, the season and the support team that suit you.",
    ],
    image: images.kilimanjaroElephants,
    highlights: [
      "Sunrise at Uhuru Peak, 5,895 metres",
      "Five distinct climate zones in a single climb",
      "Glaciers and the crater rim near the summit",
      "Routes from six to nine days",
      "Experienced mountain guides and support crews",
      "An easy pairing with safari or Zanzibar",
    ],
    wildlife: [
      "Black-and-white colobus",
      "Blue monkey",
      "White-necked raven",
      "Four-striped grass mouse",
      "Alpine chat",
      "Bushbuck",
    ],
    months: kilimanjaroMonths,
    bestTimeSummary:
      "The driest and most reliable climbing months are January to early March and June to October. April and May are the wettest.",
    stays: [],
    faqs: [
      {
        q: "Do I need climbing experience?",
        a: "No technical experience is needed, but good fitness helps and some prior hiking is wise. The main challenge is altitude, which affects people regardless of fitness, so choosing a longer route is the best preparation.",
        category: "Kilimanjaro",
      },
      {
        q: "How many days should I allow?",
        a: "We generally recommend at least seven days on the mountain. Longer routes allow more gradual acclimatisation, and they are widely associated with higher summit success rates than the shortest itineraries.",
        category: "Kilimanjaro",
      },
    ],
    featured: true,
  },
  {
    slug: "arusha",
    name: "Arusha",
    region: "northern",
    kind: "City",
    tagline: "The green gateway to the northern safari circuit",
    summary:
      "Tanzania's safari capital, set on the slopes of Mount Meru, with coffee farms, a lively market town and a small, beautiful national park nearby.",
    overview: [
      "Most northern safaris begin and end in Arusha. The town lies at the foot of Mount Meru, about an hour's drive from Kilimanjaro International Airport, and its cooler highland climate makes it a comfortable place to rest after a long flight.",
      "Around the town, garden lodges and coffee estates offer a peaceful first night. There are markets and craft cooperatives to explore, and coffee farm visits give an insight into one of the region's most important crops.",
      "Arusha National Park, close to town, is often overlooked but well worth a visit. It takes in Mount Meru, the Momella Lakes and Ngurdoto Crater, and offers canoeing, walking safaris and a chance to see black-and-white colobus monkeys in the forest.",
    ],
    image: images.arusha,
    highlights: [
      "Garden lodges and coffee estates on the slopes of Mount Meru",
      "Arusha National Park and the Momella Lakes",
      "Canoeing and walking safaris",
      "Coffee farm visits",
      "Local markets and craft cooperatives",
    ],
    wildlife: [
      "Black-and-white colobus",
      "Giraffe",
      "African buffalo",
      "Blue monkey",
      "Lesser flamingo",
      "Bushbuck",
    ],
    months: northernHighlandsMonths,
    bestTimeSummary:
      "Arusha can be visited all year. June to October is dry and cool, while April and May bring the heaviest rain.",
    stays: [],
    faqs: [
      {
        q: "Which airport should we fly into?",
        a: "For northern safaris and Kilimanjaro, Kilimanjaro International Airport (JRO) is usually the most convenient. It is roughly an hour from Arusha by road. Some international routes connect via Nairobi or Dar es Salaam.",
        category: "Planning",
      },
      {
        q: "Do we need a night in Arusha?",
        a: "After a long-haul flight, a night in a garden lodge near Arusha is a gentle way to begin. It also gives a buffer in case of flight delays before a light-aircraft connection.",
        category: "Planning",
      },
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    region: "zanzibar",
    kind: "Island",
    tagline: "Spice-scented lanes and a turquoise Indian Ocean",
    summary:
      "From the historic lanes of Stone Town to white-sand beaches on the east and north coasts, Zanzibar is the natural place to unwind after safari.",
    overview: [
      "Zanzibar's main island, Unguja, lies a short flight off the Tanzanian mainland. Its old capital, Stone Town, is a UNESCO World Heritage Site, a maze of narrow lanes, carved doors and coral-stone houses shaped by centuries of Swahili, Arab, Indian and European influence.",
      "Beyond the town, the island's coast is lined with reefs, lagoons and palm-fringed beaches. The north, around Nungwi and Kendwa, is less affected by the tides, while the east coast at Matemwe, Pongwe and Paje has a quieter feel and dramatic tidal shifts across the reef flats.",
      "There is plenty to do between days on the sand: snorkelling or diving around Mnemba Atoll, a spice farm tour, a sunset dhow trip or a walk in Jozani Forest to see the endemic Zanzibar red colobus.",
    ],
    image: images.zanzibarBeach,
    highlights: [
      "Stone Town's lanes, markets and carved doors",
      "Snorkelling and diving around Mnemba Atoll",
      "Spice farm tours",
      "Zanzibar red colobus in Jozani Forest",
      "Sunset dhow cruises",
      "Beaches on the north and east coasts",
    ],
    wildlife: [
      "Zanzibar red colobus",
      "Sykes's monkey",
      "Green turtle",
      "Bottlenose dolphin",
      "Hawksbill turtle",
      "Reef fish and corals",
    ],
    months: coastMonths,
    bestTimeSummary:
      "June to October is dry, sunny and breezy, and December to February is hot and calm. April and May bring heavy rain, and some hotels close.",
    stays: ["matemwe-reef-villas", "spice-merchants-house"],
    faqs: [
      {
        q: "Which side of the island should we stay on?",
        a: "The north coast tends to have deeper water for swimming at most states of the tide, while the east coast is quieter, with wide tidal flats and a more village feel. We often suggest a night or two in Stone Town before the beach.",
        category: "Zanzibar",
      },
      {
        q: "Is there a dress code in Stone Town?",
        a: "Zanzibar is a largely Muslim society, so covering shoulders and knees is respectful in Stone Town and villages. Swimwear is perfectly fine at beach hotels.",
        category: "Zanzibar",
      },
    ],
    featured: true,
  },
  {
    slug: "ruaha",
    name: "Ruaha",
    region: "southern",
    kind: "Safari",
    tagline: "Wild, remote and rich in predators",
    summary:
      "One of Tanzania's largest national parks, known for big lion prides, rare antelope and a sense of genuine wilderness.",
    overview: [
      "Ruaha National Park covers around 20,000 square kilometres of rugged country in central-southern Tanzania. It sees a fraction of the visitors of the northern parks, and it is common to spend a game drive without meeting another vehicle.",
      "The Great Ruaha River is the heart of the park. In the dry season it shrinks to a string of pools, drawing elephants, buffalo and antelope, and with them the lions for which Ruaha is known. It is also one of the best places in East Africa to see greater and lesser kudu, sable and roan antelope, and African wild dog.",
      "Camps here are small and personal, and walking safaris with skilled guides are a highlight. Ruaha pairs naturally with Nyerere for a southern safari, or with the northern parks for travellers who want contrast.",
    ],
    image: images.ruaha,
    highlights: [
      "Large lion prides along the Great Ruaha River",
      "Remote game drives with very few vehicles",
      "Walking safaris with expert guides",
      "Greater and lesser kudu, sable and roan",
      "Baobab-studded landscapes",
    ],
    wildlife: [
      "Lion",
      "Leopard",
      "African wild dog",
      "Elephant",
      "Greater kudu",
      "Sable antelope",
      "Roan antelope",
      "Cheetah",
    ],
    months: southernParksMonths,
    bestTimeSummary:
      "The dry season from June to October is the classic time, with wildlife concentrated along the river. Many camps close during the long rains from March to May.",
    stays: [],
    faqs: [
      {
        q: "How do we reach Ruaha?",
        a: "Most guests fly in on scheduled light aircraft from Arusha, Dar es Salaam or Zanzibar, often connecting with Nyerere. Flight times vary with the route and the number of stops.",
        category: "Planning",
      },
      {
        q: "Is Ruaha suitable for a first safari?",
        a: "It can be, particularly for travellers who value space and solitude. Many first-time visitors start in the north, where the migration and crater are hard to match, and add Ruaha on a later trip or as a contrasting extension.",
        category: "On safari",
      },
    ],
    featured: true,
  },
  {
    slug: "nyerere",
    name: "Nyerere (Selous)",
    region: "southern",
    kind: "Safari",
    tagline: "River, lakes and wilderness by boat, on foot and by vehicle",
    summary:
      "A vast southern wilderness on the Rufiji River, where boat safaris and walking add variety to classic game drives.",
    overview: [
      "Nyerere National Park was created in 2019 from the northern part of the former Selous Game Reserve, one of the largest protected areas in Africa. At around 30,000 square kilometres, it is Tanzania's largest national park.",
      "The Rufiji River and its network of lakes and channels define the landscape. Boat safaris bring you close to hippos, crocodiles and a wealth of birdlife, while game drives along the lake shores can turn up lion, elephant, buffalo and African wild dog.",
      "The park is a short flight from Dar es Salaam or Zanzibar, which makes it an easy pairing with the coast. Small camps and the freedom to explore by boat and on foot give it a quieter, more adventurous feel than the northern circuit.",
    ],
    image: images.nyerere,
    highlights: [
      "Boat safaris on the Rufiji River and its lakes",
      "Walking safaris with armed rangers",
      "Strong populations of African wild dog",
      "Short flights from Zanzibar and Dar es Salaam",
      "Small, quiet riverside camps",
    ],
    wildlife: [
      "African wild dog",
      "Lion",
      "Hippo",
      "Nile crocodile",
      "Elephant",
      "African buffalo",
      "African fish eagle",
    ],
    months: southernParksMonths,
    bestTimeSummary:
      "June to October offers the best game viewing as water becomes scarce. Most camps close during the long rains from March to May.",
    stays: ["riverbend-camp"],
    faqs: [
      {
        q: "Is Nyerere the same as the Selous?",
        a: "Nyerere covers the northern section of what was the Selous Game Reserve, which includes the area used for photographic safaris. Many people still use the older name.",
        category: "Planning",
      },
      {
        q: "Can we combine Nyerere with Zanzibar?",
        a: "Yes, and it is one of the simplest combinations in Tanzania. Scheduled light-aircraft flights link the park with Zanzibar, typically in under an hour.",
        category: "Planning",
        verify: true,
      },
    ],
  },
  {
    slug: "mahale-mountains",
    name: "Mahale Mountains",
    region: "western",
    kind: "Primates",
    tagline: "Wild chimpanzees on the shores of Lake Tanganyika",
    summary:
      "Forested mountains rising from a clear freshwater lake, home to one of Africa's most studied communities of wild chimpanzees.",
    overview: [
      "Mahale Mountains National Park lies on the eastern shore of Lake Tanganyika, far from any road. Access is by light aircraft and then by boat along the lake, and the sense of remoteness is part of the appeal.",
      "Chimpanzee research here dates back to the 1960s, and one community is habituated to human visitors. Treks into the forest to find them can be short or long depending on where they are feeding, and spending an hour in their company is an experience that stays with people.",
      "Between treks there is the lake itself: clear, deep water that is home to hundreds of species of cichlid fish, with sandy beaches and forested peaks behind. Mahale combines well with Katavi or with a safari in the south or north.",
    ],
    image: images.mahale,
    highlights: [
      "Trekking to habituated wild chimpanzees",
      "Arrival by boat along Lake Tanganyika",
      "Swimming and kayaking in clear lake water",
      "Forested peaks rising from sandy beaches",
      "Dhow trips at sunset",
    ],
    wildlife: [
      "Chimpanzee",
      "Red-tailed monkey",
      "Yellow baboon",
      "Red colobus",
      "Blue monkey",
      "Cichlid fish",
      "Crowned eagle",
    ],
    months: westernParksMonths,
    bestTimeSummary:
      "The dry season from July to October offers the easiest trekking, as chimps often move lower down. Camps usually close during the long rains.",
    stays: [],
    faqs: [
      {
        q: "How fit do we need to be?",
        a: "Treks can range from a short walk to several hours on steep, slippery forest paths. A reasonable level of fitness is needed, and guides set the pace to suit the group.",
        category: "On safari",
      },
      {
        q: "Are there age or health restrictions for chimp trekking?",
        a: "Minimum ages apply, and visitors with colds or other infectious illnesses are asked not to trek, as chimpanzees are vulnerable to human diseases. Masks are often required near the chimps. We confirm current rules when planning.",
        category: "Entry & health",
        verify: true,
      },
    ],
  },
  {
    slug: "gombe-stream",
    name: "Gombe Stream",
    region: "western",
    kind: "Primates",
    tagline: "Where Jane Goodall's chimpanzee research began",
    summary:
      "Tanzania's smallest national park, a steep strip of forest on Lake Tanganyika and the site of the world's longest-running study of wild chimpanzees.",
    overview: [
      "Gombe Stream National Park covers a narrow band of forested valleys running down to the shore of Lake Tanganyika, north of Kigoma. It is small, at roughly 35 square kilometres, but its place in the history of science is large.",
      "Jane Goodall began her study of the chimpanzees here in 1960, and the research she started continues today. Many of the chimpanzees visitors meet belong to families that have been followed for generations.",
      "Access is by boat from Kigoma, and accommodation is simple. Gombe is best suited to travellers with a particular interest in primates and conservation, and it can be combined with Mahale or added to a wider Tanzania journey.",
    ],
    image: images.gombe,
    highlights: [
      "Trekking to the chimpanzees made famous by Jane Goodall",
      "Boat transfer along Lake Tanganyika from Kigoma",
      "Kakombe waterfall",
      "Views over the lake from the forested ridges",
    ],
    wildlife: [
      "Chimpanzee",
      "Olive baboon",
      "Red-tailed monkey",
      "Red colobus",
      "Blue monkey",
      "Bushbuck",
    ],
    months: gombeMonths,
    bestTimeSummary:
      "Gombe is open all year. The drier months from June to October make for easier trekking, while the wet season brings slippery trails but lush forest.",
    stays: [],
    faqs: [
      {
        q: "How do we get to Gombe?",
        a: "Travellers fly to Kigoma, usually via Dar es Salaam or Arusha, and then take a boat north along the lake. The boat journey typically takes one to two hours depending on the vessel.",
        category: "Planning",
      },
      {
        q: "How close do we get to the chimpanzees?",
        a: "Park rules set a minimum viewing distance, and time with the chimps is limited to protect them. Guides will explain the current regulations before your trek.",
        category: "On safari",
        verify: true,
      },
    ],
  },
  {
    slug: "lake-eyasi",
    name: "Lake Eyasi",
    region: "northern",
    kind: "Culture",
    tagline: "An ancient way of life beneath the Rift escarpment",
    summary:
      "A seasonal soda lake south-west of the Ngorongoro highlands, where visitors can spend time with Hadzabe hunter-gatherers and Datoga pastoralists.",
    overview: [
      "Lake Eyasi lies in a hot, dry basin below the Eyasi escarpment, a couple of hours' drive from Karatu. Its water level rises and falls with the seasons, and the surrounding country of acacia, baobab and rocky hills feels far removed from the busy safari circuit.",
      "The area is home to the Hadzabe, one of the last communities in Africa to live largely by hunting and gathering. With a local guide and interpreter, small groups can join them in the early morning as they track, forage and share their knowledge of the bush.",
      "Nearby, Datoga families keep cattle and are known for their metalwork, making arrowheads and jewellery from recycled metal. A visit is best approached with respect and curiosity, and we work with guides who keep visits small and fair to the communities involved.",
    ],
    image: images.eyasi,
    highlights: [
      "A morning with Hadzabe hunter-gatherers",
      "Datoga blacksmiths at work",
      "Dramatic escarpment and lake views",
      "Onion farms and local markets",
      "An easy extension from Karatu or Ngorongoro",
    ],
    wildlife: [
      "Lesser flamingo",
      "Great white pelican",
      "Vervet monkey",
      "Dik-dik",
      "Hornbills",
    ],
    months: northernHighlandsMonths,
    bestTimeSummary:
      "Eyasi can be visited all year. The dry season from June to October brings easier roads, while the lake holds more water after the rains.",
    stays: ["highlands-coffee-lodge"],
    faqs: [
      {
        q: "Is visiting the Hadzabe ethical?",
        a: "It depends on how it is done. We use experienced local guides, keep groups small and make sure fees reach the community. Visits are low-key and on the community's terms, not staged performances.",
        category: "On safari",
      },
      {
        q: "How long should we spend at Lake Eyasi?",
        a: "A day trip from Karatu is possible, but an overnight stay lets you join an early-morning walk with the Hadzabe without a pre-dawn drive.",
        category: "Planning",
      },
    ],
  },
  {
    slug: "mafia-island",
    name: "Mafia Island",
    region: "coast",
    kind: "Island",
    tagline: "A quiet marine park and seasonal whale sharks",
    summary:
      "A low-key island south of Zanzibar, protected by a marine park and known for whale shark encounters, healthy reefs and an unhurried pace.",
    overview: [
      "Mafia Island lies off the Rufiji Delta, a short flight from Dar es Salaam. It has a handful of small lodges and very little development, and life on the island moves to the rhythm of the tides and the fishing dhows.",
      "Much of the surrounding sea falls within Mafia Island Marine Park, which protects coral reefs, seagrass beds and mangroves. Chole Bay offers sheltered diving and snorkelling, and green and hawksbill turtles nest on beaches around the outer islands.",
      "Between roughly October and March, whale sharks gather off the west coast near Kilindoni, and snorkelling alongside them with a responsible operator is the highlight for many visitors. Mafia also pairs well with Nyerere, which is only a short flight away.",
    ],
    image: images.mafia,
    highlights: [
      "Snorkelling with whale sharks, roughly October to March",
      "Diving and snorkelling in Chole Bay",
      "Turtle nesting on the outer islands",
      "Ruins on Chole Island",
      "Dhow trips to sandbanks",
      "Easy pairing with Nyerere",
    ],
    wildlife: [
      "Whale shark",
      "Green turtle",
      "Hawksbill turtle",
      "Reef fish and corals",
      "Dolphins",
      "Humpback whale, seasonally",
    ],
    months: mafiaMonths,
    bestTimeSummary:
      "Whale sharks are usually present from around October to March, the island's prime season. Several lodges close during the long rains in April and May.",
    stays: [],
    faqs: [
      {
        q: "Are whale shark encounters guaranteed?",
        a: "No. Whale sharks are wild and their presence varies from year to year, though sightings are frequent in the main season. Responsible operators keep group sizes small and follow strict guidelines in the water.",
        category: "Planning",
      },
      {
        q: "How do we get to Mafia?",
        a: "Scheduled light-aircraft flights connect Mafia with Dar es Salaam, and there are connections with Zanzibar and Nyerere on some routes. Flight schedules change seasonally, so we confirm them when planning.",
        category: "Planning",
        verify: true,
      },
    ],
  },
  {
    slug: "pemba-island",
    name: "Pemba Island",
    region: "zanzibar",
    kind: "Island",
    tagline: "Zanzibar's green, hilly and unhurried sister island",
    summary:
      "The quieter northern island of the Zanzibar archipelago, with clove plantations, mangroves and some of East Africa's most rewarding wall diving.",
    overview: [
      "Pemba lies north of Unguja, Zanzibar's main island, and sees only a small fraction of its visitors. It is hillier and greener, covered in clove trees, mango groves and rice paddies, and the villages and markets have a relaxed, traditional character.",
      "The island is separated from the mainland by the deep Pemba Channel, and its reefs and walls attract experienced divers. Misali Island, a protected marine conservation area off the west coast, offers fine snorkelling and quiet beaches.",
      "On land, Ngezi Forest protects one of the island's last areas of indigenous forest and is home to the endemic Pemba flying fox. With few hotels and little traffic, Pemba suits travellers looking for a quiet end to a safari.",
    ],
    image: images.pemba,
    highlights: [
      "Wall diving along the Pemba Channel",
      "Snorkelling at Misali Island",
      "Ngezi Forest and the Pemba flying fox",
      "Clove plantations and village markets",
      "Ancient Swahili ruins",
    ],
    wildlife: [
      "Pemba flying fox",
      "Green turtle",
      "Reef sharks",
      "Napoleon wrasse",
      "Dolphins",
      "Reef fish and corals",
    ],
    months: coastMonths,
    bestTimeSummary:
      "The dry months from June to October and the hot, calm months of December to February are the best times to visit. April and May are wet.",
    stays: [],
    faqs: [
      {
        q: "Is Pemba good for beginner divers?",
        a: "Pemba has some sheltered sites, but much of its diving involves walls and currents that suit experienced divers. Beginners may find Mnemba or Mafia more forgiving, though local dive centres can advise on suitable sites.",
        category: "Zanzibar",
      },
      {
        q: "How do we get to Pemba?",
        a: "Short scheduled flights connect Pemba with Zanzibar and Dar es Salaam. Ferries also run from Zanzibar, though flying is usually more comfortable and reliable.",
        category: "Planning",
      },
    ],
  },
];
