import { experiences } from "@/lib/content";
import { images } from "@/data/images";
import { ZoomToFill, SplitReveal } from "@/components/ui/Motion";
import { ButtonLink } from "@/components/ui/Button";
import { ExperiencesCarousel } from "@/components/sections/ExperiencesCarousel";

/** Zoom-to-fill teaser image followed by a draggable experiences rail. */
export function ExperiencesSection() {
  return (
    <>
      <ZoomToFill image={images.balloon}>
        <div className="container-x text-center text-white">
          <p className="eyebrow mb-5 text-white/85">Experiences</p>
          <SplitReveal text="Moments that stay with you" className="mx-auto max-w-4xl text-h1" />
          <ButtonLink href="/experiences" variant="outline-light" size="lg" className="mt-10" arrow>
            Explore experiences
          </ButtonLink>
        </div>
      </ZoomToFill>
      <ExperiencesCarousel
        experiences={experiences}
        eyebrow="Fifteen ways in"
        title="Build your journey around what moves you"
        intro="River crossings, chimpanzees, balloon flights at dawn and reefs off quiet islands."
      />
    </>
  );
}
