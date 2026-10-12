import { homeContent } from "@/data/home";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function IntroSplit() {
  const { intro } = homeContent;
  return (
    <section className="section-y">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
            <SmartImage image={intro.image} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -right-4 -bottom-10 hidden aspect-square w-48 overflow-hidden rounded-2xl border-8 border-snow bg-sand md:block lg:-right-10 lg:w-56">
            <SmartImage image={intro.secondaryImage} fill sizes="224px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6">
          <p className="eyebrow mb-4 text-savanna-ink">{intro.eyebrow}</p>
          <h2 className="text-h2">{intro.title}</h2>
          {intro.body.map((p) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-stone">
              {p}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="dark" arrow>
              Our story
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Meet your specialist
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
