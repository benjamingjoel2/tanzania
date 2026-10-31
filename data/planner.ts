import { images } from "./images";
import type { ImageAsset } from "./types";

export interface TripTypeOption {
  id: string;
  label: string;
  description: string;
  image: ImageAsset;
}

export const tripTypes: TripTypeOption[] = [
  { id: "northern-circuit", label: "Northern circuit safari", description: "Serengeti, Ngorongoro, Tarangire", image: images.heroSerengeti },
  { id: "great-migration", label: "Great Migration special", description: "Calving or river crossings", image: images.migration },
  { id: "safari-zanzibar", label: "Safari & Zanzibar", description: "Bush, then beach", image: images.zanzibarBeach },
  { id: "kilimanjaro", label: "Kilimanjaro climb", description: "Summit Uhuru Peak", image: images.kilimanjaroSummit },
  { id: "kilimanjaro-safari", label: "Kilimanjaro & safari", description: "Climb, then unwind on safari", image: images.kilimanjaroElephants },
  { id: "southern-wilderness", label: "Southern wilderness", description: "Ruaha & Nyerere", image: images.ruaha },
  { id: "chimpanzees", label: "Chimpanzee trekking", description: "Mahale & Gombe", image: images.mahale },
  { id: "zanzibar-only", label: "Zanzibar only", description: "Stone Town & beaches", image: images.stoneTown },
  { id: "not-sure", label: "Not sure yet", description: "Help me decide", image: images.specialist },
];

export const budgetTiers = [
  {
    id: "value",
    label: "Value luxury",
    perDayFrom: 400,
    perDayTo: 650,
    description: "Comfortable, characterful camps and lodges in excellent locations, with shared or private guiding.",
  },
  {
    id: "premium",
    label: "Premium",
    perDayFrom: 650,
    perDayTo: 1100,
    description: "Our most popular style: intimate camps, private vehicles and light-aircraft flights between parks.",
  },
  {
    id: "ultra",
    label: "Ultra luxury",
    perDayFrom: 1100,
    perDayTo: 2500,
    description: "Exceptional properties, private guides, exclusive concessions and every detail handled.",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    perDayFrom: 0,
    perDayTo: 0,
    description: "Tell us what matters most and we'll suggest options at a few price points.",
  },
] as const;

export const addOns = [
  { id: "insurance", label: "Travel insurance information", description: "Guidance on cover for safari and high-altitude trekking" },
  { id: "international-flights", label: "International flights", description: "We can quote or advise on flights into JRO or ZNZ" },
  { id: "light-aircraft", label: "Light-aircraft safari flights", description: "Fly between parks instead of driving" },
  { id: "balloon", label: "Hot air balloon safari", description: "Dawn flight over the Serengeti" },
  { id: "zanzibar-extension", label: "Zanzibar extension", description: "A few days on the beach to finish" },
  { id: "gear-rental", label: "Kilimanjaro gear rental", description: "Sleeping bags, jackets, poles and more" },
] as const;

export const contactMethods = [
  { id: "email", label: "Email" },
  { id: "telephone", label: "Telephone" },
] as const;
export const contactMethodIds = ["email", "telephone"] as const;

export const countryCodes = [
  { code: "+1", label: "US/CA +1" },
  { code: "+44", label: "UK +44" },
  { code: "+61", label: "AU +61" },
  { code: "+64", label: "NZ +64" },
  { code: "+353", label: "IE +353" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+31", label: "NL +31" },
  { code: "+39", label: "IT +39" },
  { code: "+34", label: "ES +34" },
  { code: "+41", label: "CH +41" },
  { code: "+46", label: "SE +46" },
  { code: "+971", label: "AE +971" },
  { code: "+27", label: "ZA +27" },
  { code: "+254", label: "KE +254" },
  { code: "+255", label: "TZ +255" },
  { code: "+91", label: "IN +91" },
  { code: "+65", label: "SG +65" },
  { code: "other", label: "Other" },
] as const;
