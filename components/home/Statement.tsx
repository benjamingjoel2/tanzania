import { homeContent } from "@/data/home";
import { SplitReveal } from "@/components/ui/Motion";
import { Reveal } from "@/components/ui/Reveal";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

/** The meaning of "uhuru" as a centred statement. */
export function Statement() {
  const { story } = homeContent;
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
        <Reveal className="mx-auto mt-14 max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="/about" variant="outline" arrow>
              Our story
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
