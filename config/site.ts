/**
 * Single source of truth for brand, contact, currency and navigation settings.
 * Replace the [BRACKETED] placeholders before launch.
 */

export type CurrencyCode = "USD" | "EUR" | "GBP" | "AUD" | "CAD" | "TZS";

export interface Currency {
  code: CurrencyCode;
  label: string;
  /** Units of this currency per 1 USD. */
  rate: number;
  /** Round converted prices to this step (e.g. 1000 for TZS). */
  roundTo: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Uhuru Journeys",
  shortName: "Uhuru",
  tagline: "Tailor-made Tanzania, from the plains to the peak",
  description:
    "Tailor-made Tanzania safaris, Kilimanjaro climbs and Zanzibar escapes, planned end to end by one dedicated specialist.",
  /**
   * Canonical origin used for canonical tags, the sitemap and Open Graph URLs.
   * Set NEXT_PUBLIC_SITE_URL to your real domain; on Vercel it falls back to the
   * project's production URL so canonicals always point at a live site.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  locale: "en_GB",

  brandColors: {
    snow: "#F8F6F1",
    sand: "#EDE6D8",
    savanna: "#C69A3D",
    ocean: "#1C8C93",
    acacia: "#2E4637",
    charcoal: "#24211E",
  },

  contact: {
    email: "[EMAIL]",
    phone: "[PHONE]",
    /** International format, digits only, used for wa.me links. */
    whatsappNumber: "[NUMBER]",
    whatsappDisplay: "[WHATSAPP]",
    address: "Arusha, Tanzania",
    hours: "Specialists available Mon–Sat, 8am–7pm EAT · 24/7 WhatsApp while you travel",
  },

  /**
   * Approximate conversion rates from USD, for display only.
   * TODO: replace with a live FX feed (and cache it) before launch.
   */
  currencies: [
    { code: "USD", label: "US Dollar", rate: 1, roundTo: 10 },
    { code: "EUR", label: "Euro", rate: 0.92, roundTo: 10 },
    { code: "GBP", label: "British Pound", rate: 0.78, roundTo: 10 },
    { code: "AUD", label: "Australian Dollar", rate: 1.52, roundTo: 10 },
    { code: "CAD", label: "Canadian Dollar", rate: 1.38, roundTo: 10 },
    { code: "TZS", label: "Tanzanian Shilling", rate: 2650, roundTo: 1000 },
  ] satisfies Currency[],
  defaultCurrency: "USD" as CurrencyCode,

  mainNav: [
    { label: "Destinations", href: "/destinations" },
    { label: "Safaris", href: "/safaris" },
    { label: "Kilimanjaro", href: "/kilimanjaro" },
    { label: "Zanzibar", href: "/zanzibar" },
    { label: "Experiences", href: "/experiences" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  footerNav: {
    explore: [
      { label: "Destinations", href: "/destinations" },
      { label: "Safaris", href: "/safaris" },
      { label: "Kilimanjaro climbs", href: "/kilimanjaro" },
      { label: "Zanzibar", href: "/zanzibar" },
      { label: "Experiences", href: "/experiences" },
    ],
    company: [
      { label: "Our story", href: "/about" },
      { label: "Conservation", href: "/conservation" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Journal", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Terms & booking conditions", href: "/legal/terms" },
      { label: "Cookie policy", href: "/legal/cookies" },
    ],
  },

  socials: [
    { label: "Instagram", href: "https://instagram.com/[HANDLE]", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/[HANDLE]", icon: "facebook" },
    { label: "YouTube", href: "https://youtube.com/@[HANDLE]", icon: "youtube" },
    { label: "LinkedIn", href: "https://linkedin.com/company/[HANDLE]", icon: "linkedin" },
  ] as const,

  /** Placeholder membership badges. Replace with real logos and member numbers. */
  memberships: [
    { short: "TATO", name: "Tanzania Association of Tour Operators", note: "Member no. [TBC]" },
    { short: "KPAP", name: "Kilimanjaro Porters Assistance Project", note: "Partner for porter welfare" },
    { short: "TTB", name: "Tanzania Tourist Board", note: "Licensed operator [TBC]" },
    { short: "ATTA", name: "Africa Travel & Tourism Association", note: "Member [TBC]" },
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
