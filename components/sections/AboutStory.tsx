import { homeContent } from "@/data/home";
import { testimonials } from "@/data/testimonials";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TestimonialFeature } from "./TestimonialFeature";

export function AboutStory() {
  const { story } = homeContent;
  return (
    <section className="section-y bg-acacia-deep text-white">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-4 text-savanna-light">{story.eyebrow}</p>
          <h2 className="text-h2">
            <span className="italic text-savanna-light">Uhuru</span> means freedom
          </h2>
          {story.body.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-white/80">
              {p}
            </p>
          ))}
          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl bg-acacia">
            <SmartImage image={story.image} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col justify-center lg:col-span-6">
          <TestimonialFeature testimonial={testimonials[0]} tone="dark" />
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="primary" arrow>
              Read our story
            </ButtonLink>
            <ButtonLink href="/testimonials" variant="outline-light">
              More traveller stories
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
