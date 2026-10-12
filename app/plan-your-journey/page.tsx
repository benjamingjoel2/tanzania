import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { TripPlanner } from "@/components/planner/TripPlanner";

export const metadata = buildMetadata({
  title: "Plan your journey",
  description:
    "Tell us about your dream Tanzania trip in five quick steps. A dedicated specialist will reply within one working day with ideas and a first itinerary.",
  path: "/plan-your-journey",
  image: images.sundowner,
});

export default function PlanYourJourneyPage() {
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Trip planner"
        title="Plan your journey"
        intro="Five short steps, around three minutes. Your specialist does the rest."
        image={images.sundowner}
        crumbs={[{ label: "Plan your journey", href: "/plan-your-journey" }]}
      />
      <section className="section-y bg-sand/60">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <TripPlanner />
          </div>
          <aside className="space-y-8 lg:col-span-4 lg:pt-4">
            {[
              { Icon: Clock, title: "A reply within a working day", body: "From the specialist who will plan your whole trip." },
              { Icon: ShieldCheck, title: "No obligation, no deposit", body: "Ideas and a draft itinerary are always free." },
              {
                Icon: MessageCircle,
                title: "Prefer to talk?",
                body: (
                  <>
                    Message us on{" "}
                    <a href={whatsappLink()} className="underline underline-offset-2">
                      WhatsApp
                    </a>{" "}
                    or email{" "}
                    <a href={`mailto:${siteConfig.contact.email}`} className="underline underline-offset-2">
                      {siteConfig.contact.email}
                    </a>
                    .
                  </>
                ),
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-snow ring-1 ring-line">
                  <Icon aria-hidden className="size-5 text-savanna-ink" />
                </span>
                <div>
                  <p className="font-display text-xl">{title}</p>
                  <p className="mt-1 text-stone">{body}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
