import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/layout/Logo";

const explore = [...siteConfig.footerNav.explore, { label: "Plan your journey", href: "/plan-your-journey" }];

/** Compact footer: brand, one line, email and address once, three link columns, one base line. */
export function Footer() {
  const { contact, footerNav } = siteConfig;
  const columns = [
    { title: "Explore", links: explore },
    { title: "Uhuru Journeys", links: footerNav.company },
    { title: "Legal", links: footerNav.legal },
  ];
  return (
    <footer className="bg-charcoal text-white/75">
      <div className="container-x pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-white/75">{siteConfig.tagline}</p>
            <p className="mt-5">
              <a href={`mailto:${contact.email}`} className="text-white underline-offset-4 hover:text-savanna-light hover:underline">
                {contact.email}
              </a>
            </p>
            <address className="mt-2 max-w-xs text-sm not-italic text-white/65">{contact.address}</address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2 lg:first-of-type:col-start-7">
              <h2 className="eyebrow mb-4 text-white/65">{col.title}</h2>
              <ul className="space-y-2.5 text-[0.95rem]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-savanna-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}
          </p>
          <p>{contact.hours}</p>
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
