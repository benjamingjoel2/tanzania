import { homeContent } from "@/data/home";
import { testimonials } from "@/data/testimonials";
import { SplitReveal } from "@/components/ui/Motion";
import { Reveal } from "@/components/ui/Reveal";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { DoorMotif } from "@/components/ui/DoorMotif";
import { PlaceholderBadge } from "@/components/sections/TestimonialFeature";

/** The meaning of "uhuru" as a centred statement, then a featured (placeholder) testimonial. */
export function Statement() {
  const { story } = homeContent;
  const t = testimonials[0];
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <EyebrowLabel className="justify-center">{story.eyebrow}</EyebrowLabel>
          <SplitReveal text="Uhuru means freedom." className="mt-6 text-h1" />
          <Reveal>
            {story.body.map((p) => (
              <p key={p} className="mx-auto mt-6 max-w-3xl text-lead text-stone">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-20 max-w-4xl border-t border-line pt-14 text-center">
          <DoorMotif className="mx-auto mb-8 max-w-40" />
          <PlaceholderBadge />
          <blockquote className="mt-6">
            <p className="text-[clamp(1.4rem,2.4vw,2.1rem)] leading-snug tracking-[-0.02em]">&ldquo;{t.quote}&rdquo;</p>
          </blockquote>
          <p className="mt-6 text-sm text-stone">
            <span className="font-medium text-charcoal">{t.name}</span> · {t.from} · {t.trip}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/about" variant="outline" arrow>
              Our story
            </ButtonLink>
            <ButtonLink href="/testimonials" variant="outline">
              Traveller stories
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
