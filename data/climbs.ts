import type { Climb } from "./types";
import { images } from "./images";

const rateCaveat = "rates vary by operator, season and itinerary length";

export const climbs: Climb[] = [
  {
    slug: "machame",
    name: "Machame Route",
    days: 7,
    difficulty: 4,
    difficultyLabel: "Challenging",
    successNote: `Indicative summit success ~85% on the 7-day itinerary; ${rateCaveat}.`,
    priceFrom: 2450,
    tagline: "The scenic favourite, with a climb-high, sleep-low profile",
    summary:
      "Machame climbs through rainforest and heath to the Shira Plateau, then traverses the mountain's southern flank beneath the glaciers before the summit push from Barafu. It is steeper and more demanding than Marangu, but the varied scenery and sound acclimatisation profile make it the most popular route on Kilimanjaro.",
    overview: [
      "The route begins on the mountain's south-western slopes and gains height quickly through the rainforest. From the Shira Plateau it swings east, climbing to Lava Tower at 4,630 m before dropping to sleep at Barranco, a pattern that helps the body adapt to altitude. The Barranco Wall, a short scramble the next morning, is more exhilarating than it looks from below and needs no technical skill.",
      "Seven days gives an extra night on the southern circuit compared with the six-day version, and we strongly recommend it. Because Machame is busy, our crews time departures to avoid the main bottlenecks and choose quieter pitches where they can. The descent is by the Mweka route, through forest, to the gate.",
    ],
    scenery:
      "Rainforest, giant heather and groundsel gardens, the Shira Plateau and the great southern glaciers seen from the Barranco Wall.",
    crowds: "High",
    accommodation: "Camping",
    acclimatisation: "Good",
    image: images.kilimanjaroTrail,
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        description:
          "After registration at the gate, the trail climbs steadily through dense montane rainforest, often damp underfoot, to the edge of the heath zone.",
        altitudeM: 3000,
        hiking: "5–7 hrs · 11 km",
      },
      {
        day: 2,
        title: "Machame Camp to Shira 2 Camp",
        description:
          "A steeper climb up a rocky ridge through giant heather, emerging onto the Shira Plateau with wide views to Mount Meru on a clear day.",
        altitudeM: 3850,
        hiking: "4–6 hrs · 5 km",
      },
      {
        day: 3,
        title: "Shira 2 Camp to Barranco Camp via Lava Tower",
        description:
          "Climb east across high desert to Lava Tower for lunch, then descend through groundsel gardens to Barranco. The day is the route's key acclimatisation step: climb high, sleep low.",
        altitudeM: 3960,
        maxAltitudeM: 4630,
        hiking: "6–8 hrs · 10 km",
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        description:
          "Scramble up the Barranco Wall using hands for balance, then follow a rolling path across valleys to Karanga, the last water point on the route.",
        altitudeM: 4035,
        hiking: "4–5 hrs · 5 km",
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        description:
          "A short climb over rocky alpine desert to base camp. Rest, an early dinner and a final briefing before trying to sleep for a few hours.",
        altitudeM: 4673,
        hiking: "3–5 hrs · 4 km",
      },
      {
        day: 6,
        title: "Summit day: Barafu to Uhuru Peak, down to Mweka Camp",
        description:
          "Leave around midnight and climb by headtorch on steep scree to Stella Point on the crater rim, arriving around sunrise, then follow the rim to Uhuru Peak. Descend to Barafu for a rest and continue down to Mweka Camp.",
        altitudeM: 3100,
        maxAltitudeM: 5895,
        hiking: "11–15 hrs · 17 km",
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate",
        description:
          "A final descent through the rainforest to the gate, where you collect your summit certificate before the drive back to your hotel.",
        altitudeM: 1640,
        hiking: "3–4 hrs · 10 km",
      },
    ],
  },
  {
    slug: "lemosho",
    name: "Lemosho Route",
    days: 8,
    difficulty: 3,
    difficultyLabel: "Moderate–challenging",
    successNote: `Indicative summit success ~90% on the 8-day itinerary; ${rateCaveat}.`,
    priceFrom: 2890,
    tagline: "The quiet western approach, and our first recommendation",
    summary:
      "Lemosho starts on the remote western side of the mountain and crosses the full width of the Shira Plateau before joining the southern circuit. Its length and gradual ascent give one of the best acclimatisation profiles on Kilimanjaro, with fewer people in the early days.",
    overview: [
      "The first two days are spent in some of the mountain's most beautiful and least visited country: thick forest where colobus monkeys are common, then open moorland rising to the Shira Plateau. The pace is gentle, which is exactly what the body needs while it adjusts to altitude.",
      "From Shira the route joins Machame for the traverse beneath the southern glaciers, via Lava Tower, Barranco and Karanga, to Barafu for the summit. Eight days allows a properly gradual ascent and is the itinerary we recommend to most first-time climbers.",
    ],
    scenery:
      "Untouched western forest, the vast caldera of the Shira Plateau and the full sweep of the southern ice fields.",
    crowds: "Moderate",
    accommodation: "Camping",
    acclimatisation: "Excellent",
    image: images.kilimanjaroCamp,
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa",
        description:
          "Register at Londorossi Gate, then drive on to the Lemosho trailhead. A gentle walk through lush forest brings you to camp beneath the 'big tree' that gives it its name.",
        altitudeM: 2750,
        hiking: "3–4 hrs · 6 km",
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1 Camp",
        description:
          "Leave the forest for heather and moorland, crossing the rim of the old Shira volcano onto the plateau.",
        altitudeM: 3500,
        hiking: "5–6 hrs · 8 km",
      },
      {
        day: 3,
        title: "Shira 1 Camp to Shira 2 Camp",
        description:
          "An easy crossing of the plateau, with an optional detour to Shira Cathedral to help acclimatisation. Kibo's summit dome dominates the view ahead.",
        altitudeM: 3850,
        hiking: "4–6 hrs · 10 km",
      },
      {
        day: 4,
        title: "Shira 2 Camp to Barranco Camp via Lava Tower",
        description:
          "Climb to Lava Tower at 4,630 m, then descend to sleep at Barranco beneath the Western Breach.",
        altitudeM: 3960,
        maxAltitudeM: 4630,
        hiking: "6–8 hrs · 10 km",
      },
      {
        day: 5,
        title: "Barranco Camp to Karanga Camp",
        description:
          "Up the Barranco Wall in the morning, then along the southern flank to Karanga, with time to rest in the afternoon.",
        altitudeM: 4035,
        hiking: "4–5 hrs · 5 km",
      },
      {
        day: 6,
        title: "Karanga Camp to Barafu Camp",
        description:
          "A short, steady climb to base camp on a rocky ridge, followed by an early dinner and summit briefing.",
        altitudeM: 4673,
        hiking: "3–5 hrs · 4 km",
      },
      {
        day: 7,
        title: "Summit day: Barafu to Uhuru Peak, down to Mweka Camp",
        description:
          "A midnight start to reach Stella Point around dawn and Uhuru Peak shortly after. Descend to Barafu for a rest and brunch, then continue down to Mweka Camp.",
        altitudeM: 3100,
        maxAltitudeM: 5895,
        hiking: "11–15 hrs · 17 km",
      },
      {
        day: 8,
        title: "Mweka Camp to Mweka Gate",
        description:
          "A final walk down through the rainforest to the gate, your certificate and the drive back to your hotel.",
        altitudeM: 1640,
        hiking: "3–4 hrs · 10 km",
      },
    ],
  },
  {
    slug: "marangu",
    name: "Marangu Route",
    days: 6,
    difficulty: 3,
    difficultyLabel: "Moderate",
    successNote: `Indicative summit success ~80% on the 6-day itinerary; ${rateCaveat}.`,
    priceFrom: 2150,
    tagline: "The original route, with huts rather than tents",
    summary:
      "Marangu is the oldest route on Kilimanjaro and the only one with dormitory huts throughout, which appeals to climbers who would rather not camp. The gradients are gentle, but the ascent and descent share a path, and acclimatisation is less forgiving than on the longer routes.",
    overview: [
      "The route climbs from the south-east through rainforest to Mandara Hut, then across open moorland to Horombo, where the six-day itinerary includes a full acclimatisation day. From Horombo the path crosses the stark Saddle between Mawenzi and Kibo to reach Kibo Hut, the base for the summit.",
      "Huts are simple A-frame or dormitory buildings with bunks and shared facilities, and they can be busy in the peak months. We only offer Marangu over six days, because the five-day version gives too little time to adjust to altitude.",
    ],
    scenery:
      "Rainforest, moorland and the lunar Saddle, with the jagged peaks of Mawenzi alongside for much of the climb.",
    crowds: "High",
    accommodation: "Huts",
    acclimatisation: "Fair",
    image: images.kilimanjaroSummit,
    itinerary: [
      {
        day: 1,
        title: "Marangu Gate to Mandara Hut",
        description:
          "A gentle climb through rainforest on a well-made path. In the afternoon, a short walk to the Maundi Crater gives the first views over the plains.",
        altitudeM: 2720,
        hiking: "3–5 hrs · 8 km",
      },
      {
        day: 2,
        title: "Mandara Hut to Horombo Hut",
        description:
          "Leave the forest for heath and moorland dotted with giant groundsels and lobelias, with Kibo and Mawenzi coming into view.",
        altitudeM: 3720,
        hiking: "5–7 hrs · 12 km",
      },
      {
        day: 3,
        title: "Acclimatisation day at Horombo",
        description:
          "A morning walk up to Zebra Rocks, named for their striped mineral streaks, then back to Horombo to rest. Climbing higher and returning to sleep is the best preparation for the days ahead.",
        altitudeM: 3720,
        maxAltitudeM: 4000,
        hiking: "3–4 hrs · 6 km",
      },
      {
        day: 4,
        title: "Horombo Hut to Kibo Hut",
        description:
          "Cross the Saddle, a high alpine desert between Mawenzi and Kibo, to Kibo Hut at the foot of the summit cone. Early dinner and rest.",
        altitudeM: 4703,
        hiking: "6–7 hrs · 10 km",
      },
      {
        day: 5,
        title: "Summit day: Kibo Hut to Uhuru Peak, down to Horombo Hut",
        description:
          "Start around midnight up long scree switchbacks, past Hans Meyer Cave, to Gilman's Point on the crater rim. Continue around the rim to Uhuru Peak, then descend all the way to Horombo.",
        altitudeM: 3720,
        maxAltitudeM: 5895,
        hiking: "12–16 hrs · 21 km",
      },
      {
        day: 6,
        title: "Horombo Hut to Marangu Gate",
        description:
          "A long but easy descent back through moorland and forest to the gate, your certificate and the drive to your hotel.",
        altitudeM: 1860,
        hiking: "5–7 hrs · 20 km",
      },
    ],
  },
  {
    slug: "rongai",
    name: "Rongai Route",
    days: 7,
    difficulty: 3,
    difficultyLabel: "Moderate",
    successNote: `Indicative summit success ~85% on the 7-day itinerary; ${rateCaveat}.`,
    priceFrom: 2390,
    tagline: "The quiet northern approach, near the Kenyan border",
    summary:
      "Rongai is the only route that approaches from the north, a drier side of the mountain that often sees less rain and far fewer climbers. The gradients are gentle, and the seven-day itinerary adds a night beside Mawenzi Tarn to help with acclimatisation.",
    overview: [
      "After registering at Marangu Gate, you drive around the mountain to the Rongai trailhead near the Kenyan border. The trail climbs through pine plantations and a narrow band of forest to open moorland, with wide views north across the plains, then turns towards Mawenzi's spires.",
      "The camp at Mawenzi Tarn, a small lake beneath Mawenzi's cliffs, is one of the most striking on the mountain, and the acclimatisation day there makes a real difference. From Kibo Hut the summit route follows Marangu's, and the descent is by the Marangu route to the gate, so you see both sides of the mountain.",
    ],
    scenery:
      "Wilderness moorland, views across the northern plains and a night beneath the craggy towers of Mawenzi.",
    crowds: "Low",
    accommodation: "Camping",
    acclimatisation: "Good",
    image: images.kilimanjaroElephants,
    itinerary: [
      {
        day: 1,
        title: "Rongai Gate to Simba Camp",
        description:
          "Register at Marangu Gate and drive to the Rongai trailhead. A gentle walk through farmland and forest, where colobus monkeys are often seen, to the first camp on the edge of the moorland.",
        altitudeM: 2600,
        hiking: "3–4 hrs · 7 km",
      },
      {
        day: 2,
        title: "Simba Camp to Kikelewa Camp",
        description:
          "Climb steadily past Second Cave, then strike out across the moorland towards Mawenzi to camp in a sheltered valley.",
        altitudeM: 3600,
        hiking: "6–7 hrs · 12 km",
      },
      {
        day: 3,
        title: "Kikelewa Camp to Mawenzi Tarn",
        description:
          "A short, steep climb up grassy slopes to the tarn, set in a cirque directly beneath Mawenzi's jagged peaks.",
        altitudeM: 4330,
        hiking: "3–4 hrs · 4 km",
      },
      {
        day: 4,
        title: "Acclimatisation day at Mawenzi Tarn",
        description:
          "A short walk up the ridges above the tarn to gain height, then back to camp to rest. It is a day to drink plenty, eat well and let the body adjust.",
        altitudeM: 4330,
        maxAltitudeM: 4600,
        hiking: "2–3 hrs · 3 km",
      },
      {
        day: 5,
        title: "Mawenzi Tarn to Kibo Hut",
        description:
          "Cross the high desert of the Saddle to Kibo Hut at the foot of the summit cone. Early dinner and rest before the summit attempt.",
        altitudeM: 4703,
        hiking: "5–6 hrs · 9 km",
      },
      {
        day: 6,
        title: "Summit day: Kibo Hut to Uhuru Peak, down to Horombo Hut",
        description:
          "A midnight start up the scree to Gilman's Point, then around the crater rim to Uhuru Peak. Descend to Kibo Hut for a rest, then continue down the Marangu route to Horombo.",
        altitudeM: 3720,
        maxAltitudeM: 5895,
        hiking: "11–15 hrs · 21 km",
      },
      {
        day: 7,
        title: "Horombo Hut to Marangu Gate",
        description:
          "A long, easy descent through moorland and rainforest to Marangu Gate, your certificate and the drive back to your hotel.",
        altitudeM: 1860,
        hiking: "5–6 hrs · 20 km",
      },
    ],
  },
  {
    slug: "northern-circuit",
    name: "Northern Circuit",
    days: 9,
    difficulty: 3,
    difficultyLabel: "Moderate (long)",
    successNote: `Indicative summit success ~95% on the 9-day itinerary; ${rateCaveat}.`,
    priceFrom: 3290,
    tagline: "The longest route, circling the mountain in near solitude",
    summary:
      "The Northern Circuit begins like Lemosho, then loops around the little-visited northern slopes before climbing to the summit from the east. It is the longest route on Kilimanjaro, with the best acclimatisation and the highest success rates.",
    overview: [
      "After crossing the Shira Plateau and climbing to Lava Tower, the route turns north rather than south, contouring around Kibo through high, open country that few climbers ever see. Camps such as Buffalo and Third Cave are quiet, and the views stretch north into Kenya.",
      "Nine days on the mountain allow a gradual ascent with plenty of time spent between 3,800 m and 4,200 m. The summit attempt starts from School Hut and reaches the crater rim at Gilman's Point, before a descent by the Mweka route. It suits climbers who value time, space and the best possible chance of standing on Uhuru Peak.",
    ],
    scenery:
      "Western forest, the Shira Plateau and the remote northern slopes, with views over the Kenyan plains to Amboseli.",
    crowds: "Low",
    accommodation: "Camping",
    acclimatisation: "Excellent",
    image: images.kilimanjaroSummit,
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa",
        description:
          "Register at Londorossi Gate and drive to the Lemosho trailhead, then walk through rich forest to the first camp.",
        altitudeM: 2750,
        hiking: "3–4 hrs · 6 km",
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1 Camp",
        description:
          "Climb out of the forest through giant heather and onto the western edge of the Shira Plateau.",
        altitudeM: 3500,
        hiking: "5–6 hrs · 8 km",
      },
      {
        day: 3,
        title: "Shira 1 Camp to Shira 2 Camp",
        description:
          "A gentle walk across the plateau, with an optional climb to Shira Cathedral to aid acclimatisation.",
        altitudeM: 3850,
        hiking: "4–6 hrs · 10 km",
      },
      {
        day: 4,
        title: "Shira 2 Camp to Moir Hut via Lava Tower",
        description:
          "Climb to Lava Tower, then leave the busy southern circuit and head north to the secluded camp at Moir Hut.",
        altitudeM: 4200,
        maxAltitudeM: 4630,
        hiking: "6–7 hrs · 12 km",
      },
      {
        day: 5,
        title: "Moir Hut to Buffalo Camp",
        description:
          "Begin the traverse of the northern slopes, with an optional climb up Lent Hills, and long views across the Kenyan plains.",
        altitudeM: 4020,
        hiking: "5–7 hrs · 12 km",
      },
      {
        day: 6,
        title: "Buffalo Camp to Third Cave",
        description:
          "Continue east across the remote northern slopes, a rolling walk through high alpine country with Kibo's glaciers above.",
        altitudeM: 3870,
        hiking: "5–7 hrs · 8 km",
      },
      {
        day: 7,
        title: "Third Cave to School Hut",
        description:
          "A steady climb onto the Saddle to School Hut, the base camp for the summit. Early dinner and rest.",
        altitudeM: 4750,
        hiking: "4–5 hrs · 5 km",
      },
      {
        day: 8,
        title: "Summit day: School Hut to Uhuru Peak, down to Mweka Camp",
        description:
          "A midnight start up the eastern scree to Gilman's Point, then along the crater rim past Stella Point to Uhuru Peak. Descend by the Mweka route, with a rest at Barafu, to Mweka Camp.",
        altitudeM: 3100,
        maxAltitudeM: 5895,
        hiking: "12–15 hrs · 17 km",
      },
      {
        day: 9,
        title: "Mweka Camp to Mweka Gate",
        description:
          "A final descent through the rainforest to the gate and the drive back to your hotel.",
        altitudeM: 1640,
        hiking: "3–4 hrs · 10 km",
      },
    ],
  },
];
