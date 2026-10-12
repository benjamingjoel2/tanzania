import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { Logo } from "./Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { DoorMotif } from "@/components/ui/DoorMotif";

export function Footer() {
  const { contact, footerNav, socials, memberships } = siteConfig;
  return (
    <footer className="bg-acacia-deep text-white/80">
      <DoorMotif className="opacity-60" />
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed">
              Tailor-made safaris, Kilimanjaro climbs and Zanzibar escapes, planned by one specialist from your first
              message to the day you fly home.
            </p>
            <ul className="mt-8 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:border-savanna hover:bg-savanna hover:text-charcoal"
                  >
                    <SocialIcon name={s.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Explore" links={footerNav.explore} className="lg:col-span-2" />
          <FooterColumn title="Uhuru Journeys" links={footerNav.company} className="lg:col-span-2" />

          <div className="lg:col-span-4">
            <h2 className="eyebrow mb-5 font-sans text-savanna-light">Talk to a specialist</h2>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white">
                  <Mail aria-hidden className="size-4 text-savanna" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 hover:text-white">
                  <Phone aria-hidden className="size-4 text-savanna" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} className="flex items-center gap-3 hover:text-white">
                  <SocialIcon name="whatsapp" className="size-4 text-savanna" /> WhatsApp {contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden className="size-4 text-savanna" /> {contact.address}
              </li>
            </ul>
            <p className="mt-6 text-sm text-white/60">{contact.hours}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="eyebrow mb-5 text-white/50">Memberships & partners (placeholders)</p>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {memberships.map((m) => (
              <li
                key={m.short}
                title={m.name}
                className="flex items-center gap-3 rounded-xl border border-dashed border-white/20 px-4 py-3"
              >
                <span className="font-display text-xl text-white">{m.short}</span>
                <span className="text-xs leading-tight text-white/60">{m.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
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

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="eyebrow mb-5 font-sans text-savanna-light">{title}</h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Cached at build/revalidation time, so the static shell stays prerenderable. */
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
