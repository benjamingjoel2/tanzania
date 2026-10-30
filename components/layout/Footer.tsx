import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DoorMotif } from "@/components/ui/DoorMotif";

const bigLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Safaris", href: "/safaris" },
  { label: "Kilimanjaro", href: "/kilimanjaro" },
  { label: "Zanzibar", href: "/zanzibar" },
  { label: "Experiences", href: "/experiences" },
  { label: "Plan your journey", href: "/plan-your-journey" },
];

/** Tall dark footer: oversized links, contact columns and a giant wordmark at the base. */
export function Footer() {
  const { contact, footerNav } = siteConfig;
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white/75">
      <DoorMotif className="opacity-40" />
      <div className="container-x flex min-h-[75svh] flex-col pt-20 pb-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <nav aria-label="Footer primary" className="lg:col-span-7">
            <ul className="space-y-1">
              {bigLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-baseline gap-3 text-[clamp(1.9rem,3.6vw,3.25rem)] leading-[1.15] tracking-[-0.035em] text-white transition-colors hover:text-savanna-light"
                  >
                    <span className="text-[0.5em] text-savanna-light transition-transform duration-300 group-hover:rotate-90">+</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <h2 className="eyebrow mb-5 text-white/65">Talk to a specialist</h2>
              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${contact.email}`} className="text-white hover:text-savanna-light">
                    {contact.email}
                  </a>
                </li>
                <li>{contact.address}</li>
              </ul>
              <p className="mt-5 text-sm text-white/65">{contact.hours}</p>
            </div>
            <div>
              <h2 className="eyebrow mb-5 text-white/65">Uhuru Journeys</h2>
              <ul className="space-y-3">
                {footerNav.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-savanna-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-16">
          {/* Decorative watermark, drawn as SVG so it isn't treated as body text. */}
          <svg aria-hidden viewBox="0 0 1000 190" className="w-full text-white/[0.07] md:hidden">
            <text x="0" y="165" fontSize="235" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="currentColor" letterSpacing="-12">
              uhuru
            </text>
          </svg>
          <svg aria-hidden viewBox="0 0 1000 120" className="hidden w-full text-white/[0.07] md:block">
            <text x="0" y="100" fontSize="135" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="currentColor">
              uhuru journeys
            </text>
          </svg>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

/** Cached at build/revalidation time, so the static shell stays prerenderable. */
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
