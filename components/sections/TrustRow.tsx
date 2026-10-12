import { CalendarDays, Map, MessageCircle, Scale, Tent, UserRound } from "lucide-react";
import { homeContent } from "@/data/home";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const icons = {
  user: UserRound,
  calendar: CalendarDays,
  tent: Tent,
  scale: Scale,
  message: MessageCircle,
  map: Map,
} as const;

export function TrustRow() {
  return (
    <section id="trust" aria-label="Why travel with us" className="bg-acacia text-white">
      <RevealGroup className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-6 lg:py-16">
        {homeContent.trust.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <RevealItem key={item.label} className="flex flex-col gap-3">
              <Icon aria-hidden className="size-6 text-savanna-light" strokeWidth={1.5} />
              <p className="font-display text-3xl">{item.value}</p>
              <p className="text-sm leading-snug text-white/75">{item.label}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
