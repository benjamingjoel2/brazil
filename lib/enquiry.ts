import { z } from "zod";

export const interestOptions = ["Wildlife", "Beaches", "Culture", "Music", "Food", "Adventure", "Carnival"] as const;
export const paceOptions = ["Slow and easy", "Balanced", "Full and active"] as const;
export const stayOptions = ["River lodges", "Fazendas", "Beach pousadas", "Boutique hotels", "Colonial pousadas", "A mix"] as const;
export const budgetOptions = [
  "Under US$4,000 per person",
  "US$4,000–6,000 per person",
  "US$6,000–9,000 per person",
  "US$9,000+ per person",
  "Not sure yet",
] as const;
export const contactOptions = ["Email", "WhatsApp", "Phone"] as const;
export const biomeOptions = ["Amazon", "Cerrado", "Atlantic Forest", "Caatinga", "Pantanal", "Pampa"] as const;

/** Shared by the form and the API route. */
export const enquirySchema = z.object({
  month: z.string().min(1, "Choose a month, or 'Flexible'"),
  year: z.string().optional(),
  days: z.coerce.number().int().min(3, "At least 3 days").max(60, "Up to 60 days"),
  firstTime: z.enum(["First time in Brazil", "Returning"]),
  interests: z.array(z.enum(interestOptions)).default([]),
  biomes: z.array(z.enum(biomeOptions)).default([]),
  pace: z.enum(paceOptions),
  stayStyle: z.array(z.enum(stayOptions)).default([]),
  adults: z.coerce.number().int().min(1).max(20),
  children: z.coerce.number().int().min(0).max(20).default(0),
  childAges: z.string().max(100).optional(),
  budget: z.enum(budgetOptions),
  name: z.string().trim().min(2, "Please tell us your name").max(120),
  email: z.email("Please enter a valid email"),
  phone: z.string().trim().max(40).optional(),
  contact: z.enum(contactOptions),
  notes: z.string().max(4000).optional(),
  context: z.string().max(200).optional(),
  /** Honeypot: must stay empty. */
  website: z.string().max(0).optional(),
});

export type Enquiry = z.infer<typeof enquirySchema>;
