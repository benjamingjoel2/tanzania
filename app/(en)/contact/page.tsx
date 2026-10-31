import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { ImageReveal } from "@/components/ui/Motion";

export const metadata = buildMetadata({
  title: "Contact us",
  description: "Talk to a Tanzania specialist by email or send us a message. We reply within one working day.",
  path: "/contact",
  image: images.specialist,
});

export default function ContactPage() {
  const { contact } = siteConfig;
  const items = [
    { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { Icon: MapPin, label: "Office", value: contact.address, href: undefined },
  ];
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Contact"
        title="Talk to a specialist"
        intro="Real people who know Tanzania inside out. Say jambo: we reply within one working day."
        image={images.specialist}
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <section className="container-x grid gap-10 pb-24 lg:grid-cols-2 lg:gap-16">
        <div className="relative hidden lg:block">
          <div className="sticky top-28 aspect-[4/5] overflow-hidden">
            <ImageReveal image={images.guide} className="absolute inset-0" sizes="50vw" />
          </div>
        </div>
        <div>
          <p className="text-lead">
            Planning a trip? The quickest route is our five-step trip planner. For anything else, use the form or reach us
            directly.
          </p>
          <OpenPlannerButton className="mt-6" variant="dark" arrow />
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {items.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4 bg-snow p-5">
                <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-savanna-ink" />
                <div>
                  <p className="text-sm text-stone">{label}</p>
                  {href ? (
                    <a href={href} className="underline-offset-4 hover:underline">
                      {value}
                    </a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-stone">{contact.hours}</p>
          <h2 className="mt-14 mb-6 text-h3">Send us a message</h2>
          <ContactForm />
        </div>
      </section>
      <DetailSection tone="sand" eyebrow="Find us" title="Our base in Dar es Salaam">
        <MapPlaceholder stops={["Dar es Salaam office", "Julius Nyerere International Airport (DAR)"]} title="Find us" />
      </DetailSection>
    </>
  );
}
