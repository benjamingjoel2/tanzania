import type { Faq } from "./types";

export const faqCategories = ["Planning", "Entry & health", "On safari", "Kilimanjaro", "Zanzibar"] as const;

export const faqs: Faq[] = [
  {
    category: "Planning",
    q: "When is the best time to visit Tanzania?",
    a: "There is no single best time; it depends on what you want to see. The long dry season from June to October offers excellent game viewing across the country and the Mara River crossings in the northern Serengeti. January and February bring the calving season in the southern Serengeti and good weather on the coast. The long rains, usually from late March to May, mean lush landscapes, fewer visitors and lower rates, though some camps close and a few roads become difficult. Your specialist will match the month to the experience you have in mind.",
  },
  {
    category: "On safari",
    q: "Where will the Great Migration be when I travel?",
    a: "The herds follow the rains in a broadly predictable circuit. From roughly December to March they are on the short-grass plains of the southern Serengeti and around Ndutu, with calving peaking in late January and February. From April to June they move north and west through the central Serengeti and the Western Corridor. From about July to October they are in the northern Serengeti, where Mara River crossings take place. In November they begin to move south again. Exact timings vary from year to year, so we choose camps that give you the best chance whatever the rains decide.",
  },
  {
    category: "Entry & health",
    q: "Do I need a visa to visit Tanzania?",
    a: "Most visitors need a visa, and requirements depend on your nationality. Tanzania offers an eVisa through the official Tanzania Immigration Services portal, and we recommend applying well in advance rather than relying on a visa on arrival. Your passport should usually be valid for at least six months beyond your travel dates, with blank pages available. Entry rules change, so please check the current requirements on official government sources, including the Tanzanian immigration website and your own government's travel advice, before you book flights and again before you travel. Beware of unofficial websites that charge extra fees.",
    verify: true,
  },
  {
    category: "Entry & health",
    q: "What vaccinations do I need, and is there malaria?",
    a: "Please see a travel health clinic or your doctor six to eight weeks before you travel for advice tailored to you. A yellow fever vaccination certificate may be required if you are arriving from, or have transited through, a country with a risk of yellow fever transmission, and this can apply when travelling between the mainland and Zanzibar. Malaria is present in most of Tanzania below high altitude, including Zanzibar, so antimalarial medication is commonly recommended, along with insect repellent, long sleeves in the evening and sleeping under a net where provided. Health requirements change, so check current guidance with official health authorities before you travel.",
    verify: true,
  },
  {
    category: "Planning",
    q: "Is Tanzania safe to visit?",
    a: "Tanzania is a stable and welcoming country, and the great majority of visits are trouble-free. On safari you are looked after by experienced guides and camp teams at every stage. In towns and cities, take the usual sensible precautions: keep valuables out of sight, use the transport we arrange and avoid walking alone at night. We monitor official travel advice and will always tell you if anything affects your plans. Please check your own government's current advice for Tanzania before you travel.",
  },
  {
    category: "On safari",
    q: "Are park fees included in the price?",
    a: "Yes. All national park and conservation area fees for your itinerary are included in our quotes. Fees are charged per person per day, and some areas, such as the Ngorongoro Crater, also have vehicle or service fees. They are set by the authorities and can change at short notice, sometimes after a trip has been booked. If that happens we will explain the change clearly, and we never add our own margin to park fees.",
  },
  {
    category: "On safari",
    q: "How much luggage can I take on light aircraft?",
    a: "Light aircraft between safari airstrips and the coast typically allow around 15 kg per person in total, including hand luggage and camera equipment, and bags should be soft-sided so they fit into small cargo holds. Allowances vary between airlines and routes, so your specialist will confirm the exact limit for your flights. If you need more, an extra seat can sometimes be purchased, and most hotels in Arusha or Zanzibar can store excess luggage while you are on safari.",
  },
  {
    category: "On safari",
    q: "What should I pack for a safari?",
    a: "Pack light, layered clothing in neutral colours such as khaki, olive and beige; avoid dark blue and black, which can attract tsetse flies, and avoid camouflage prints. Bring a warm fleece or jacket, as early mornings can be cold, particularly at the Ngorongoro Crater. Add a wide-brimmed hat, sunglasses, high-factor sun cream, insect repellent, comfortable closed shoes, binoculars, a torch and any personal medication. Most camps offer a laundry service, so you need less than you might think. We send a detailed packing list with your final documents.",
  },
  {
    category: "Kilimanjaro",
    q: "How fit do I need to be to climb Kilimanjaro, and what about altitude sickness?",
    a: "You do not need climbing experience, but you should be in good general health and comfortable walking for six to eight hours a day over several consecutive days. Regular hill walking in the months beforehand is the best preparation. Altitude, not fitness, is the main challenge: mild symptoms such as headache and poor sleep are common, and anyone can be affected regardless of age or fitness. Longer routes with good acclimatisation profiles improve your chances considerably. Our guides check every climber twice a day, carry pulse oximeters and emergency oxygen, and will always descend with anyone showing signs of serious altitude illness. Speak to your doctor before booking.",
  },
  {
    category: "Kilimanjaro",
    q: "How much should we tip our Kilimanjaro crew?",
    a: "Tipping is a customary and important part of crew income on Kilimanjaro. As indicative guidance only, many groups give roughly USD 20 to 25 per day for the lead guide, USD 15 to 20 per day for each assistant guide, USD 12 to 15 per day for the cook and USD 8 to 10 per day for each porter, shared across the whole group rather than per climber. Tips are best given directly to each crew member at a ceremony at the end of the climb. Our partner crews follow porter welfare standards aligned with the Kilimanjaro Porters Assistance Project (KPAP), including fair wages, proper equipment, load limits and adequate food and shelter.",
  },
  {
    category: "Zanzibar",
    q: "What should I know before visiting Zanzibar?",
    a: "Zanzibar is predominantly Muslim, so modest dress is appreciated in Stone Town and in villages: cover shoulders and knees, and keep swimwear for the beach and your hotel. During Ramadan, avoid eating, drinking or smoking in public during daylight hours; some restaurants may close or change their hours, though hotels continue as normal. On the east coast, around Paje, Jambiani and Matemwe, the tides are large and the sea can retreat a long way at low tide, so if swimming at any time of day matters to you, the north of the island, around Nungwi and Kendwa, is less affected.",
  },
  {
    category: "Planning",
    q: "How do payments and deposits work?",
    a: "Once you are happy with your itinerary, a deposit, usually around 30% of the total, secures your booking and allows us to confirm camps, flights and permits. The balance is typically due 60 days before departure. For bookings made closer to travel, full payment may be needed at the time of booking. Some properties have their own deposit or cancellation terms, particularly at peak times, and your specialist will set out the exact terms in writing before you commit.",
  },
  {
    category: "Planning",
    q: "Do I need travel insurance?",
    a: "Yes. Comprehensive travel insurance is a condition of booking. It should cover medical treatment, emergency evacuation and repatriation, cancellation and curtailment. If you are climbing Kilimanjaro or Mount Meru, make sure your policy covers trekking to the summit altitude, which is 5,895 m on Kilimanjaro. Zanzibar has also introduced a mandatory inbound travel insurance requirement for international visitors, so please check the current rules on official Zanzibar government sources before you travel.",
    verify: true,
  },
  {
    category: "Planning",
    q: "How does working with one specialist work?",
    a: "From your first message to the day you fly home, you deal with one specialist who knows Tanzania first-hand. They will listen to what you are hoping for, design and refine your itinerary, handle every booking and remain your point of contact throughout. While you are travelling, our team on the ground in Tanzania is available around the clock.",
  },
];
