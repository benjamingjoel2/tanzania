import { SplitReveal } from "@/components/ui/Motion";
import { EyebrowLabel } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { OpenPlannerButton } from "@/components/ui/OpenPlannerButton";

const steps = [
  { title: "Tell us your dream", body: "Share your dates, style and wish list through the planner or by email." },
  { title: "Meet your specialist", body: "One expert designs your route, chooses the camps and talks you through every option." },
  { title: "Refine it together", body: "We adjust the pace, the stays and the budget until it feels exactly right. No obligation." },
  { title: "Travel freely", body: "Private guides, seamless transfers and support throughout from the same specialist." },
];

function Corners() {
  return (
    <>
      {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((c) => (
        <span key={c} aria-hidden className={`absolute size-3 border-savanna-light/70 ${c}`} />
      ))}
    </>
  );
}

/** Dark bento: combine-your-journey statement plus four numbered planning steps. */
export function PlanningBento() {
  return (
    <section className="section-y bg-acacia-deep text-white">
      <div className="container-x">
        <EyebrowLabel tone="dark" className="mb-6">
          How it works
        </EyebrowLabel>
        <SplitReveal text="Combine it your way" className="text-h2" />
        <p className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[clamp(2rem,5.5vw,5rem)] leading-none tracking-[-0.05em] text-white/90">
          {["Safari", "Kilimanjaro", "Zanzibar"].map((w) => (
            <span key={w}>
              <span aria-hidden className="text-savanna-light">+</span>
              {w}
            </span>
          ))}
        </p>
        <RevealGroup className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <RevealItem className="relative flex flex-col justify-between gap-10 bg-white/[0.05] p-8 md:col-span-2 lg:row-span-2">
            <Corners />
            <p className="text-lead text-white/85">
              Start on the plains, climb to Uhuru Peak, finish with your toes in the Indian Ocean. Or do just one, slowly and
              beautifully. Every Uhuru journey is built from scratch around you, by a specialist who will see it through.
            </p>
            <div>
              <OpenPlannerButton variant="primary" size="lg" arrow />
            </div>
          </RevealItem>
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="relative bg-white/[0.05] p-7">
              <Corners />
              <p className="text-sm text-savanna-light">0{i + 1} Step</p>
              <h3 className="mt-8 text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-3 text-white/65">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
