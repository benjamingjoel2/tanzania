import { homeContent } from "@/data/home";
import { whatsappLink } from "@/config/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { buttonClasses } from "@/components/ui/Button";

export function FinalCta({
  title = homeContent.finalCta.title,
  body = homeContent.finalCta.body,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <SmartImage image={homeContent.finalCta.image} fill sizes="100vw" className="-z-10 object-cover opacity-60" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="container-x section-y text-center">
        <Reveal className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-savanna-light">Your journey starts here</p>
          <h2 className="text-h1">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">{body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <OpenPlannerButton size="lg" arrow>
              Plan your journey
            </OpenPlannerButton>
            <a
              href={whatsappLink("Hello Uhuru Journeys! I'd like to plan a trip to Tanzania.")}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("outline-light", "lg")}
            >
              <SocialIcon name="whatsapp" className="size-5" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
