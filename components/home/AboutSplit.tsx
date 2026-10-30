import { CalendarDays, Map, MessageCircle, Scale, Tent, UserRound } from "lucide-react";
import { homeContent } from "@/data/home";
import { ImageReveal, LineDraw, SplitReveal } from "@/components/ui/Motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const icons = { user: UserRound, calendar: CalendarDays, tent: Tent, scale: Scale, message: MessageCircle, map: Map } as const;

/** Brand promise split: image, statement, two stat blocks, then the six-point trust row. */
export function AboutSplit() {
  const { intro, trust } = homeContent;
  const years = trust.find((t) => t.icon === "calendar");
  const camps = trust.find((t) => t.icon === "tent");
  return (
    <section className="section-y bg-sand/50">
      <div className="container-x">
        <LineDraw className="mb-6 md:mb-8" />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <EyebrowLabel>{intro.eyebrow}</EyebrowLabel>
          </div>
          <div className="lg:col-span-9">
            <SplitReveal text={intro.title} className="max-w-4xl text-h2" />
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <ImageReveal image={intro.image} className="aspect-[4/5] lg:col-span-5" sizes="(min-width: 1024px) 40vw, 100vw" />
          <div className="flex flex-col lg:col-span-6 lg:col-start-7">
            <Reveal>
              {intro.body.map((p, i) => (
                <p key={p} className={i === 0 ? "text-lead" : "mt-6 text-lg leading-relaxed text-stone"}>
                  {p}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/about" variant="outline" arrow>
                  Our story
                </ButtonLink>
              </div>
            </Reveal>
            <div className="mt-auto grid gap-8 pt-14 sm:grid-cols-2">
              {[years, camps].filter(Boolean).map((s, i) => (
                <Reveal key={s!.label} delay={0.1 * i} className="border-t border-charcoal/15 pt-5">
                  <p className="text-[clamp(3rem,6vw,5rem)] leading-none tracking-[-0.05em]">{s!.value}</p>
                  <p className="mt-3 text-stone">{s!.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <RevealGroup id="trust" className="mt-20 grid grid-cols-2 border-t border-l border-line md:grid-cols-3 lg:grid-cols-6">
          {trust.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <RevealItem key={item.label} className="flex flex-col gap-3 border-r border-b border-line p-5 md:p-6">
                <Icon aria-hidden className="size-5 text-savanna-ink" strokeWidth={1.5} />
                <p className="text-2xl tracking-tight">{item.value}</p>
                <p className="text-sm leading-snug text-stone">{item.label}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
