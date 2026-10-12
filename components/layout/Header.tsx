"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { MobileMenu } from "./MobileMenu";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

export interface MegaMenuGroup {
  label: string;
  links: { label: string; href: string }[];
}

export function Header({
  destinationGroups = [],
}: {
  destinationGroups?: MegaMenuGroup[];
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close menus on navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen || megaOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow,padding] duration-500 ease-out-soft",
          solid
            ? "bg-snow/95 py-3 text-charcoal shadow-[0_1px_0_rgba(36,33,30,0.08)] backdrop-blur-md"
            : "py-5 text-white",
        )}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo tone={solid ? "dark" : "light"} />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-7 text-[0.94rem]">
              {siteConfig.mainNav.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                const hasMega =
                  item.href === "/destinations" && destinationGroups.length > 0;
                return (
                  <li key={item.href} onMouseEnter={() => setMegaOpen(hasMega)}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      aria-expanded={hasMega ? megaOpen : undefined}
                      onFocus={() => setMegaOpen(hasMega)}
                      className="relative py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <CurrencySwitcher
              className="hidden sm:inline-flex"
              id="currency-header"
            />
            <OpenPlannerButton
              size="sm"
              className="hidden md:inline-flex"
              variant={solid ? "dark" : "primary"}
            />
            <button
              type="button"
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full xl:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Destinations mega menu (desktop) */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-0 top-full hidden border-t border-line bg-snow text-charcoal shadow-xl xl:block"
              onKeyDown={(e) => e.key === "Escape" && setMegaOpen(false)}
            >
              <div className="container-x grid grid-cols-5 gap-10 py-10">
                {destinationGroups.map((group) => (
                  <div key={group.label}>
                    <p className="eyebrow mb-4 text-savanna-ink">
                      {group.label}
                    </p>
                    <ul className="space-y-2.5">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="font-display text-lg transition-colors hover:text-ocean-ink"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Rendered outside <header>: its backdrop-filter would trap a fixed overlay. */}
      <MobileMenu open={menuOpen} />
    </>
  );
}
