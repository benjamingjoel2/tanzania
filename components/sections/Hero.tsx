import { homeContent } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

/**
 * Full-bleed hero: one photograph (slow CSS zoom) with a small headline, one line
 * and one call to action at the bottom left.
 */
export function Hero() {
  const { hero } = homeContent;
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 -z-10">
        <div className="hero-zoom absolute inset-0">
          {hero.video ? (
            <video className="size-full object-cover" autoPlay muted loop playsInline poster={hero.image.src} aria-hidden>
              <source src={hero.video} type="video/mp4" />
            </video>
          ) : (
            <SmartImage image={hero.image} fill priority sizes="100vw" className="object-cover" />
          )}
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/0 to-black/65" />

      <div className="container-x pt-28 pb-[clamp(2.5rem,7svh,5rem)]">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 animate-fade-up text-white/85 [animation-delay:0.3s]">{hero.eyebrow}</p>
          <h1 className="animate-fade-up text-[clamp(2rem,min(4.2vw,7svh),4.25rem)] leading-[1.04] [animation-delay:0.4s]">
            Tailor-made safaris, Kilimanjaro climbs and Zanzibar escapes
          </h1>
          <p className="mt-5 max-w-xl animate-fade-up text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-white/85 [animation-delay:0.5s]">
            {hero.intro}
          </p>
          <div className="mt-7 animate-fade-up [animation-delay:0.6s]">
            <OpenPlannerButton size="lg" arrow />
          </div>
        </div>
      </div>
    </section>
  );
}
