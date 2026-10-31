import { z } from "zod";
import { addOns, budgetTiers, contactMethodIds, tripTypes } from "@/data/planner";

const tripTypeIds = tripTypes.map((t) => t.id) as [string, ...string[]];
const budgetIds = budgetTiers.map((b) => b.id) as [string, ...string[]];
const addOnIds = addOns.map((a) => a.id) as [string, ...string[]];

function isFutureDate(value: string) {
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d >= today;
}

export const plannerSchema = z.object({
  // Step 1: When
  arrivalDate: z
    .string()
    .min(1, "Please choose an arrival date")
    .refine(isFutureDate, "Please choose a date in the future"),
  nights: z
    .number({ error: "Please enter a number of nights" })
    .int("Whole nights only")
    .min(1, "At least 1 night")
    .max(50, "For trips over 50 nights, tell us in the notes"),
  dateFlexibility: z.enum(["exact", "approximate"], { error: "Please choose one" }),
  experience: z.enum(["first", "experienced"], { error: "Please choose one" }),

  // Step 2: What
  tripTypes: z.array(z.enum(tripTypeIds)).min(1, "Pick at least one, or choose “Not sure yet”"),
  tripNotes: z.string().max(1000, "Please keep this under 1,000 characters").optional(),

  // Step 3: Budget
  budget: z.enum(budgetIds, { error: "Please choose a budget style" }),

  // Step 4: Who
  adults: z.number({ error: "Required" }).int().min(1, "At least one adult").max(30, "For groups over 30, tell us in the notes"),
  children: z.number({ error: "Required" }).int().min(0).max(15),
  childAges: z.array(z.string().min(1, "Select age")),
  addOns: z.array(z.enum(addOnIds)),

  // Step 5: Contact
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  phoneCode: z.string().min(1, "Code"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9 ()-]{6,20}$/, "Please enter a valid phone number"),
  contactMethods: z.array(z.enum(contactMethodIds)).min(1, "Choose at least one way to reach you"),
  notes: z.string().max(2000).optional(),
  consent: z.literal(true, { error: "Please agree so we can contact you about your trip" }),
});

export type PlannerValues = z.infer<typeof plannerSchema>;

/** Field names validated at each step. */
export const stepFields: (keyof PlannerValues)[][] = [
  ["arrivalDate", "nights", "dateFlexibility", "experience"],
  ["tripTypes", "tripNotes"],
  ["budget"],
  ["adults", "children", "childAges", "addOns"],
  ["name", "email", "phoneCode", "phone", "contactMethods", "notes", "consent"],
];

export const stepLabels = ["When", "What", "Budget", "Who", "Contact"] as const;

export const plannerDefaults: Partial<PlannerValues> = {
  arrivalDate: "",
  nights: 10,
  tripTypes: [],
  tripNotes: "",
  adults: 2,
  children: 0,
  childAges: [],
  addOns: [],
  name: "",
  email: "",
  phoneCode: "+44",
  phone: "",
  contactMethods: ["email"],
  notes: "",
};

/** Optional values passed when the planner is opened from a page (e.g. a safari). */
export interface PlannerPrefill {
  tripTypes?: string[];
  notes?: string;
}
