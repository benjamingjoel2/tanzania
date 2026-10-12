import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

export const metadata = buildMetadata({
  title: "Contact us",
  description: "Talk to a Tanzania specialist by email, phone or WhatsApp, or send us a message. We reply within one working day.",
  path: "/contact",
  image: images.specialist,
});

export default function ContactPage() {
  const { contact } = siteConfig;
  const items = [
    { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { Icon: Phone, label: "Telephone", value: contact.phone, href: `tel:${contact.phone}` },
    { Icon: null, label: "WhatsApp", value: contact.whatsappDisplay, href: whatsappLink() },
    { Icon: MapPin, label: "Office", value: contact.address, href: undefined },
  ];
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Contact"
        title="Talk to a specialist"
        intro="Real people who know Tanzania inside out. We reply within one working day."
        image={images.specialist}
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <DetailSection tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2">Say jambo</h2>
            <p className="mt-4 text-lg text-stone">
              Planning a trip? The quickest route is our{" "}
              <span className="font-medium text-charcoal">five-step trip planner</span>. For anything else, use the form or reach us
              directly.
            </p>
            <OpenPlannerButton className="mt-6" variant="dark" arrow />
            <ul className="mt-10 space-y-5">
              {items.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-snow ring-1 ring-line">
                    {Icon ? <Icon aria-hidden className="size-5 text-savanna-ink" /> : <SocialIcon name="whatsapp" className="size-5 text-savanna-ink" />}
                  </span>
                  <div>
                    <p className="text-sm text-stone">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium underline-offset-4 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-stone">{contact.hours}</p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </DetailSection>
      <DetailSection>
        <MapPlaceholder stops={["Arusha office", "Kilimanjaro Airport (JRO)"]} title="Find us" />
      </DetailSection>
    </>
  );
}
