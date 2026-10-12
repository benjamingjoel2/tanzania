import type { Safari } from "./types";
import { images } from "./images";

export const safaris: Safari[] = [
  {
    slug: "classic-northern-circuit",
    title: "The Classic Northern Circuit",
    days: 7,
    nights: 6,
    regions: ["northern"],
    destinations: ["tarangire", "ngorongoro-crater", "serengeti"],
    budget: "premium",
    inclusionLine: "All meals on safari · Private vehicle & guide · Return light-aircraft flight from the Serengeti",
    summary:
      "Tanzania's three great northern landscapes in one unhurried week: the baobab country of Tarangire, the floor of the Ngorongoro Crater and the open plains of the Serengeti. It is the journey most first-time visitors picture, paced so that you spend your time watching wildlife rather than watching the road.",
    highlights: [
      "Two nights on the Ngorongoro Crater rim with a full morning on the crater floor",
      "Elephant herds among the baobabs of Tarangire",
      "Two full days in the central Serengeti, timed around the year-round resident predators",
      "Fly back to Arusha rather than repeating the long drive",
    ],
    bestFor: ["First-time visitors", "Couples", "Photographers"],
    priceFrom: 4650,
    image: images.heroSerengeti,
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro, on to Arusha",
        description:
          "Your guide meets you at Kilimanjaro International Airport (JRO) for the hour's drive to a coffee farm on the slopes of Mount Meru. The rest of the day is yours to unwind after the flight.",
        stay: "Highlands Coffee Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "A two-hour drive brings you to Tarangire, where the Tarangire River draws large elephant herds through the dry months. Afternoon game drive among ancient baobabs, returning to camp at sunset.",
        stay: "Baobab Valley Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "Tarangire to the Ngorongoro highlands",
        description:
          "A final morning drive in Tarangire before climbing through farmland and forest to the crater rim. Arrive in time for a fire-side evening with the crater falling away below you.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "The Ngorongoro Crater",
        description:
          "Descend into the crater soon after the gates open, when the light is soft and the vehicles are few. Lion, buffalo, hyena and, with patience, black rhino share the grasslands and the soda lake. Picnic lunch on the floor, then back to the rim in the afternoon.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Into the Serengeti",
        description:
          "Drive west across the Ngorongoro Conservation Area, past the Olduvai Gorge, and onto the short-grass plains. Game drive en route to camp in the central Serengeti.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "The central Serengeti",
        description:
          "A full day following the Seronera River valley, known for its lions and leopards. Your guide sets the pace, whether that means an early start or a long wait at a sighting.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "Fly to Arusha and depart",
        description:
          "A last early drive, then a light-aircraft flight from the Seronera airstrip to Arusha. You are transferred to Kilimanjaro International Airport for your onward flight.",
        meals: "B",
      },
    ],
    inclusions: [
      "Meet-and-greet and all ground transfers",
      "Private 4x4 safari vehicle with pop-up roof and professional guide",
      "Accommodation as listed",
      "All meals on safari and drinking water in the vehicle",
      "National park, conservation and crater service fees",
      "Light-aircraft flight from the Serengeti to Arusha",
      "Emergency medical evacuation cover while on safari",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and camp staff",
      "Premium drinks and optional activities such as balloon flights",
    ],
  },
  {
    slug: "tanzania-in-five-days",
    title: "Tanzania in Five Days",
    days: 5,
    nights: 4,
    regions: ["northern"],
    destinations: ["tarangire", "lake-manyara", "ngorongoro-crater"],
    budget: "value",
    inclusionLine: "All meals on safari · Private vehicle & guide · Airport transfers",
    summary:
      "A short, well-judged introduction to the northern parks for travellers with limited time, or as a prelude to Kilimanjaro or Zanzibar. Three contrasting parks, comfortable lodges and no internal flights to arrange.",
    highlights: [
      "Elephants and baobabs in Tarangire",
      "Groundwater forest and lakeshore birdlife at Lake Manyara",
      "A morning on the floor of the Ngorongoro Crater",
    ],
    bestFor: ["Short stays", "Adding to a climb or beach trip", "First-time visitors"],
    priceFrom: 2450,
    image: images.tarangire,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Arusha",
        description:
          "You are met at Kilimanjaro International Airport (JRO) and driven to a quiet garden lodge outside Arusha. Your guide will run through the days ahead over dinner.",
        stay: "Meru Gardens Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Drive south-west to Tarangire for a full day in the park, with a picnic lunch overlooking the river. Elephant, giraffe and the park's tree-climbing pythons are among the regulars.",
        stay: "Baobab Valley Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "Lake Manyara",
        description:
          "A game drive through Manyara's forest and along the lakeshore, where hippo pools and seasonal flamingos are the draw. Continue up the escarpment to Karatu in the afternoon.",
        stay: "Karatu Farm House",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "The Ngorongoro Crater",
        description:
          "An early descent into the crater for a half-day game drive among some of Africa's densest wildlife. Return to the farm for a slower afternoon among the coffee and gardens.",
        stay: "Karatu Farm House",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Return to Arusha and depart",
        description:
          "Drive back to Arusha, with time for lunch in town, before your transfer to Kilimanjaro International Airport or onward to the next part of your trip.",
        meals: "B, L",
      },
    ],
    inclusions: [
      "All airport and ground transfers",
      "Private 4x4 safari vehicle with professional guide",
      "Accommodation as listed",
      "All meals on safari and drinking water in the vehicle",
      "National park, conservation and crater service fees",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and lodge staff",
      "Drinks and optional activities",
    ],
  },
  {
    slug: "calving-season-safari",
    title: "Calving Season on the Southern Plains",
    days: 7,
    nights: 6,
    regions: ["northern"],
    destinations: ["serengeti", "ngorongoro-crater"],
    budget: "premium",
    inclusionLine: "All meals on safari · Private vehicle & guide · Light-aircraft flight to Ndutu",
    summary:
      "Between January and March the wildebeest herds gather on the short-grass plains around Ndutu, where hundreds of thousands of calves are born, most of them within a few weeks in late January and February. This journey places you in the middle of it, with time in the Ngorongoro Crater to finish.",
    highlights: [
      "Three nights in a mobile camp on the Ndutu plains",
      "Wildebeest calving and the predators that follow it",
      "Cheetah hunting on the open short grass",
      "A full morning on the Ngorongoro Crater floor",
    ],
    bestFor: ["Wildlife enthusiasts", "Photographers", "Travelling in January or February"],
    priceFrom: 5200,
    image: images.migration,
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro, on to Arusha",
        description:
          "Met at Kilimanjaro International Airport (JRO) and driven to a coffee lodge on the edge of Arusha to rest before the safari begins.",
        stay: "Highlands Coffee Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Fly to Ndutu",
        description:
          "A light-aircraft flight from Arusha to the Ndutu airstrip, on the boundary of the southern Serengeti. Your guide meets you with the vehicle, and the first game drive starts on the way to camp.",
        stay: "Ndutu Plains Mobile Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "The southern plains",
        description:
          "Full days are spent following the herds wherever the rains have left the best grazing. Expect newborn calves, attentive lion prides and hyena clans close by.",
        stay: "Ndutu Plains Mobile Camp",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "Lakes Ndutu and Masek",
        description:
          "Explore the woodland around the two lakes, good country for leopard and for the cheetah that hunt the plains' edge. Return to camp for a sundowner as the herds move across the horizon.",
        stay: "Ndutu Plains Mobile Camp",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Ndutu to the crater rim",
        description:
          "A morning game drive, then east through the Ngorongoro Conservation Area with an optional stop at the Olduvai Gorge. Arrive at the rim by late afternoon.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "The Ngorongoro Crater",
        description:
          "Descend at first light for a long morning on the crater floor, looking for black rhino among the lion, buffalo and flamingo-fringed lake. Afternoon at leisure on the rim.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "Return to Arusha and depart",
        description:
          "Drive back to Arusha for lunch, then transfer to Kilimanjaro International Airport for your evening flight.",
        meals: "B, L",
      },
    ],
    inclusions: [
      "Meet-and-greet and all ground transfers",
      "Light-aircraft flight from Arusha to Ndutu",
      "Private 4x4 safari vehicle with professional guide",
      "Accommodation as listed",
      "All meals on safari and drinking water in the vehicle",
      "National park, conservation and crater service fees",
      "Emergency medical evacuation cover while on safari",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and camp staff",
      "Premium drinks and optional activities",
    ],
  },
  {
    slug: "migration-river-crossings",
    title: "Great Migration River Crossings",
    days: 9,
    nights: 8,
    regions: ["northern"],
    destinations: ["tarangire", "ngorongoro-crater", "serengeti"],
    budget: "ultra",
    inclusionLine: "All meals & drinks on safari · Private vehicle & guide · Light-aircraft flights & transfers",
    summary:
      "From July to October the herds reach the far north of the Serengeti and face the Mara River, where the crossings are among the most dramatic sights in the natural world. Three nights on the riverbank are built on a classic route through Tarangire and the Ngorongoro Crater.",
    highlights: [
      "Three nights in a mobile camp close to the Mara River crossing points",
      "Patient, private time at the river with an experienced guide",
      "Two nights on the Ngorongoro Crater rim",
      "A night in the central Serengeti on the way north",
    ],
    bestFor: ["Once-in-a-lifetime trips", "Photographers", "Travelling July to October"],
    priceFrom: 8900,
    image: images.riverCrossing,
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro, on to Arusha",
        description:
          "Met at Kilimanjaro International Airport (JRO) and driven to a coffee lodge on the slopes of Mount Meru for a restful first night.",
        stay: "Highlands Coffee Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Drive to Tarangire, at its best in the dry season when elephant herds gather along the river. Afternoon game drive and dinner under the baobabs.",
        stay: "Baobab Valley Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "To the Ngorongoro highlands",
        description:
          "Climb to the crater rim through the forest of the highlands. An optional guided walk along the rim in the afternoon.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "The Ngorongoro Crater",
        description:
          "An early descent for a long morning on the crater floor, with a picnic lunch by the hippo pool. Return to the rim for the afternoon.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Into the central Serengeti",
        description:
          "Cross the conservation area and enter the Serengeti at Naabi Hill, game driving through the afternoon to camp near Seronera.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "Fly north to the Mara River",
        description:
          "A short light-aircraft flight from Seronera to Kogatende in the northern Serengeti. Your guide is waiting, and the afternoon is spent learning where the herds are gathering.",
        stay: "Mara River Mobile Camp",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "The northern Serengeti",
        description:
          "Crossings cannot be predicted, so the day is shaped around the herds. Your guide will read the river, the weather and the animals, and you will stay as long as it takes.",
        stay: "Mara River Mobile Camp",
        meals: "B, L, D",
      },
      {
        day: 8,
        title: "The Mara River",
        description:
          "A final full day in the north, with a bush breakfast and the option to stay out from dawn until dusk. Away from the river, the Lamai Wedge and Wogakuria kopjes are good for lion and elephant.",
        stay: "Mara River Mobile Camp",
        meals: "B, L, D",
      },
      {
        day: 9,
        title: "Fly to Arusha and depart",
        description:
          "Fly from Kogatende to Arusha and connect to Kilimanjaro International Airport for your international departure.",
        meals: "B",
      },
    ],
    inclusions: [
      "Meet-and-greet and all ground transfers",
      "Light-aircraft flights Seronera to Kogatende and Kogatende to Arusha",
      "Private 4x4 safari vehicle with senior guide throughout",
      "Accommodation as listed",
      "All meals and most drinks on safari",
      "National park, conservation and crater service fees",
      "Bush breakfasts and sundowners",
      "Emergency medical evacuation cover while on safari",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and camp staff",
      "Champagne, premium spirits and optional balloon flights",
    ],
  },
  {
    slug: "safari-and-zanzibar",
    title: "Safari & Zanzibar: Bush and Beach",
    days: 11,
    nights: 10,
    regions: ["northern", "zanzibar"],
    destinations: ["tarangire", "ngorongoro-crater", "serengeti", "zanzibar"],
    budget: "premium",
    inclusionLine: "All meals on safari · Private vehicle & guide · Light-aircraft flights & transfers",
    summary:
      "Six nights in the northern parks followed by four on Zanzibar: a night in the old lanes of Stone Town, then three on a quiet reef-fringed beach. The flight from the Serengeti to the island makes this one of the easiest and most rewarding combinations in Africa.",
    highlights: [
      "Tarangire, the Ngorongoro Crater and the Serengeti in one week",
      "A night in a restored merchant's house in Stone Town",
      "Three nights on Zanzibar's north-east coast",
      "Light-aircraft flight from the Serengeti to the island",
    ],
    bestFor: ["Honeymoons", "First-time visitors", "Couples"],
    priceFrom: 6400,
    image: images.zanzibarBeach,
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro, on to Arusha",
        description:
          "Met at Kilimanjaro International Airport (JRO) and driven to a coffee lodge outside Arusha.",
        stay: "Highlands Coffee Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Drive to Tarangire for an afternoon among the elephants and baobabs, staying in a camp overlooking the river valley.",
        stay: "Baobab Valley Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "To the Ngorongoro highlands",
        description:
          "A morning game drive, then on to the crater rim, arriving in time to watch the evening light across the caldera.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "The Ngorongoro Crater",
        description:
          "Descend at first light for a morning among the crater's lion, buffalo, hyena and black rhino. Afternoon at leisure on the rim.",
        stay: "Crater Rim Lodge",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Into the Serengeti",
        description:
          "Drive west past the Olduvai Gorge and onto the Serengeti plains, game driving all the way to camp.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "The Serengeti",
        description:
          "A full day with your guide, positioned according to the season: the herds, the big cats of the Seronera valley, or both.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "Fly to Zanzibar, Stone Town",
        description:
          "A light-aircraft flight from the Serengeti to Zanzibar, usually via Arusha. In the late afternoon, walk the lanes of Stone Town with a local guide and finish with dinner on a rooftop.",
        stay: "The Spice Merchant's House",
        meals: "B, D",
      },
      {
        day: 8,
        title: "To the north-east coast",
        description:
          "A morning visit to a spice farm on the way to the coast, then settle into a villa above the reef at Matemwe.",
        stay: "Matemwe Reef Villas",
        meals: "B, D",
      },
      {
        day: 9,
        title: "Zanzibar at leisure",
        description:
          "Snorkel the Mnemba Atoll reefs by boat, sail on a traditional dhow at sunset, or do very little at all.",
        stay: "Matemwe Reef Villas",
        meals: "B, D",
      },
      {
        day: 10,
        title: "Zanzibar at leisure",
        description:
          "A final unhurried day on the coast. Your specialist can arrange a massage, a cooking class or a private dinner on the beach.",
        stay: "Matemwe Reef Villas",
        meals: "B, D",
      },
      {
        day: 11,
        title: "Depart from Zanzibar",
        description:
          "Transfer to Abeid Amani Karume International Airport for your onward flight.",
        meals: "B",
      },
    ],
    inclusions: [
      "All airport and ground transfers",
      "Private 4x4 safari vehicle with professional guide",
      "Light-aircraft flight from the Serengeti to Zanzibar",
      "Accommodation as listed",
      "All meals on safari; breakfast and dinner on Zanzibar",
      "National park, conservation and crater service fees",
      "Guided Stone Town walk and spice farm visit",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and hotel staff",
      "Lunches and drinks on Zanzibar",
      "Zanzibar visitor insurance levy and optional excursions",
    ],
  },
  {
    slug: "southern-wilderness",
    title: "Southern Wilderness: Ruaha & Nyerere",
    days: 8,
    nights: 7,
    regions: ["southern"],
    destinations: ["ruaha", "nyerere"],
    budget: "premium",
    inclusionLine: "All meals on safari · Shared game drives, walks & boat trips · Light-aircraft flights & transfers",
    summary:
      "Southern Tanzania offers big wildlife with very few other vehicles: Ruaha for its lions, large elephant herds and baobab-studded hills, and Nyerere for boat safaris on the Rufiji River and its lakes. It is the natural second safari, or a first one for travellers who value solitude.",
    highlights: [
      "Ruaha's large lion prides and elephant herds",
      "Walking safaris with an armed ranger",
      "Boat safaris among hippo and crocodile on the Rufiji",
      "Wild dog, in both parks, for the lucky",
    ],
    bestFor: ["Returning safari-goers", "Walking safaris", "Avoiding the crowds"],
    priceFrom: 6900,
    image: images.ruaha,
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrive in Dar es Salaam",
        description:
          "Met at Julius Nyerere International Airport (DAR) and driven to a calm hotel on the Msasani Peninsula to recover from the flight.",
        stay: "Msasani Bay House",
        meals: "D",
      },
      {
        day: 2,
        title: "Fly to Ruaha",
        description:
          "A morning light-aircraft flight inland to Ruaha. Your guide meets you at the airstrip and the afternoon game drive follows the Great Ruaha River.",
        stay: "Riverbend Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "Ruaha National Park",
        description:
          "Morning and afternoon game drives through the river valley and the sand rivers that feed it, with lion, elephant and greater kudu among the regulars.",
        stay: "Riverbend Camp",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "Walking in Ruaha",
        description:
          "Set out on foot at dawn with a guide and armed ranger to read tracks and look at the smaller details of the bush. Afternoon drive and dinner under the stars.",
        stay: "Riverbend Camp",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Fly to Nyerere",
        description:
          "Fly east to Nyerere National Park, formerly the northern Selous. An afternoon boat trip on the lakes of the Rufiji floodplain introduces a very different kind of safari.",
        stay: "Rufiji Lakes Camp",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "Nyerere National Park",
        description:
          "Game drives through palm-fringed woodland and open plains, where giraffe, buffalo and lion are common and wild dog are sometimes seen.",
        stay: "Rufiji Lakes Camp",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "On the Rufiji River",
        description:
          "A morning walk or a fishing trip, then a final boat safari as the sun goes down over the river.",
        stay: "Rufiji Lakes Camp",
        meals: "B, L, D",
      },
      {
        day: 8,
        title: "Fly to Dar es Salaam and depart",
        description:
          "A light-aircraft flight back to Dar es Salaam to connect with your international departure, or onward to Zanzibar.",
        meals: "B",
      },
    ],
    inclusions: [
      "Meet-and-greet and all ground transfers",
      "Light-aircraft flights Dar es Salaam to Ruaha, Ruaha to Nyerere and Nyerere to Dar es Salaam",
      "Accommodation as listed",
      "All meals and local drinks at the safari camps",
      "Shared game drives, guided walks and boat safaris",
      "National park and conservation fees",
      "Emergency medical evacuation cover while on safari",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and camp staff",
      "Private vehicle supplement and premium drinks",
    ],
  },
  {
    slug: "chimpanzees-and-serengeti",
    title: "Chimpanzees & the Serengeti",
    days: 10,
    nights: 9,
    regions: ["western", "northern"],
    destinations: ["mahale-mountains", "serengeti"],
    budget: "ultra",
    inclusionLine: "All meals & drinks · Chimpanzee treks & Serengeti game drives · Light-aircraft flights & transfers",
    summary:
      "Four nights on the remote shore of Lake Tanganyika, tracking wild chimpanzees through the forests of the Mahale Mountains, followed by four in the Serengeti. It is one of the most complete wildlife journeys in Africa, and one of the most memorable.",
    highlights: [
      "Daily treks to a habituated chimpanzee community",
      "A beach camp reachable only by boat",
      "Swimming, kayaking and dhow trips on Lake Tanganyika",
      "Four nights in the Serengeti to finish",
    ],
    bestFor: ["Returning safari-goers", "Primate enthusiasts", "Adventurous couples"],
    priceFrom: 11800,
    image: images.mahale,
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro, on to Arusha",
        description:
          "Met at Kilimanjaro International Airport (JRO) and driven to a coffee lodge outside Arusha. Your guide will brief you on the weeks ahead.",
        stay: "Highlands Coffee Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Fly to the Mahale Mountains",
        description:
          "A long, scenic light-aircraft flight west to the Mahale airstrip, followed by a boat journey along the lakeshore to camp. Scheduled flights run on set days, so your specialist will build the trip around them.",
        stay: "Lakeshore Forest Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "Chimpanzee trekking",
        description:
          "Set out into the forest with trackers who follow the chimpanzees' movements daily. Treks can take from under an hour to several hours over steep ground, and time with the chimpanzees is limited to one hour.",
        stay: "Lakeshore Forest Camp",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "Mahale Mountains National Park",
        description:
          "A second trek in the morning, then afternoons on the lake: swimming in the clear water, kayaking or fishing from a dhow.",
        stay: "Lakeshore Forest Camp",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Forest and lake",
        description:
          "A final trek, or a walk along the forest streams in search of red colobus and the many forest birds. Sundowners on the sand as the light fades over the lake.",
        stay: "Lakeshore Forest Camp",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "Fly to the Serengeti",
        description:
          "Boat back to the airstrip and fly east to the Serengeti, arriving in time for an afternoon game drive to camp.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "The Serengeti",
        description:
          "Days in the Serengeti are shaped by the season and by your private guide. Expect lion, leopard and cheetah, and the migration herds when they are nearby.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 8,
        title: "The Serengeti",
        description:
          "An early start for the morning light, or a balloon flight over the plains, followed by a bush breakfast.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 9,
        title: "The Serengeti",
        description:
          "A last full day on the plains, with time to return to a favourite sighting or explore new country.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 10,
        title: "Fly to Arusha and depart",
        description:
          "A light-aircraft flight to Arusha, connecting to Kilimanjaro International Airport for your international departure.",
        meals: "B",
      },
    ],
    inclusions: [
      "Meet-and-greet and all ground transfers",
      "All light-aircraft flights and boat transfers",
      "Accommodation as listed",
      "All meals and most drinks",
      "Guided chimpanzee treks",
      "Private 4x4 vehicle and guide in the Serengeti",
      "National park and conservation fees",
      "Emergency medical evacuation cover while on safari",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides, trackers and camp staff",
      "Balloon flights and premium drinks",
    ],
  },
  {
    slug: "family-safari-and-beach",
    title: "Family Safari & Beach",
    days: 10,
    nights: 9,
    regions: ["northern", "zanzibar"],
    destinations: ["tarangire", "ngorongoro-crater", "serengeti", "zanzibar"],
    budget: "value",
    inclusionLine: "All meals on safari · Private family vehicle & guide · Flight to Zanzibar",
    summary:
      "A safari designed around children: shorter drives, family rooms, a guide who enjoys young company, and a pool at almost every stop. Six nights in the northern parks are followed by three on a gentle Zanzibar beach.",
    highlights: [
      "A private vehicle, so you set the pace and the snack breaks",
      "Family rooms and tents throughout",
      "The Ngorongoro Crater, ideal for younger children",
      "Three nights on a calm, shallow Zanzibar beach",
    ],
    bestFor: ["Families with children", "School holidays", "Multi-generational groups"],
    priceFrom: 4300,
    image: images.family,
    itinerary: [
      {
        day: 1,
        title: "Arrive at Kilimanjaro, on to Arusha",
        description:
          "Met at Kilimanjaro International Airport (JRO) and driven to a coffee lodge with gardens and a pool, a gentle start after a long flight.",
        stay: "Highlands Coffee Lodge",
        meals: "D",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "A two-hour drive to Tarangire, where elephants are the reliable stars. Back to camp in time for a swim.",
        stay: "Baobab Valley Camp",
        meals: "B, L, D",
      },
      {
        day: 3,
        title: "To Karatu",
        description:
          "A short drive up to the green highlands near the crater, with an afternoon on the farm: baking bread, picking vegetables or a guided walk to a local village.",
        stay: "Karatu Farm House",
        meals: "B, L, D",
      },
      {
        day: 4,
        title: "The Ngorongoro Crater",
        description:
          "A half-day on the crater floor, where the animals are plentiful and the distances short. Return to the farm for a relaxed afternoon.",
        stay: "Karatu Farm House",
        meals: "B, L, D",
      },
      {
        day: 5,
        title: "Into the Serengeti",
        description:
          "Drive onto the Serengeti plains, with a picnic lunch and plenty of stops. Your camp has family tents and a resident naturalist.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 6,
        title: "The Serengeti",
        description:
          "Morning and afternoon game drives with a long break at camp in the middle of the day. Children can earn a junior ranger certificate along the way.",
        stay: "Kopje Ridge Tented Camp",
        meals: "B, L, D",
      },
      {
        day: 7,
        title: "Fly to Zanzibar",
        description:
          "A light-aircraft flight from the Serengeti to Zanzibar, usually via Arusha, and a transfer to a family-friendly hotel on the island's east coast.",
        stay: "Coral Lagoon Beach House",
        meals: "B, D",
      },
      {
        day: 8,
        title: "Zanzibar at leisure",
        description:
          "Rock-pooling at low tide, a visit to a giant tortoise sanctuary, or simply the beach and the pool.",
        stay: "Coral Lagoon Beach House",
        meals: "B, D",
      },
      {
        day: 9,
        title: "Zanzibar at leisure",
        description:
          "A morning snorkelling trip for older children, or a half-day in Stone Town and a spice farm.",
        stay: "Coral Lagoon Beach House",
        meals: "B, D",
      },
      {
        day: 10,
        title: "Depart from Zanzibar",
        description:
          "Transfer to Abeid Amani Karume International Airport for your onward flight.",
        meals: "B",
      },
    ],
    inclusions: [
      "All airport and ground transfers",
      "Private 4x4 safari vehicle with family-experienced guide",
      "Light-aircraft flight from the Serengeti to Zanzibar",
      "Accommodation in family rooms and tents as listed",
      "All meals on safari; breakfast and dinner on Zanzibar",
      "National park, conservation and crater service fees",
      "Your dedicated travel specialist before and throughout the trip",
    ],
    exclusions: [
      "International flights",
      "Visas",
      "Travel insurance",
      "Tips for guides and hotel staff",
      "Lunches and drinks on Zanzibar",
      "Optional excursions",
    ],
  },
];
