import { destinations, regionLabels } from "@/lib/content";
import { images } from "@/data/images";
import type { Region } from "@/data/types";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailSection } from "@/components/sections/DetailSection";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Tanzania destinations",
  description:
    "From the Serengeti and Ngorongoro Crater to Kilimanjaro, Zanzibar, Ruaha and the chimpanzee forests of Mahale: explore every corner of Tanzania we plan journeys to.",
  path: "/destinations",
  image: images.kilimanjaroElephants,
});

const order: { region: Region[]; intro: string }[] = [
  { region: ["northern"], intro: "Tanzania's classic safari country: the Serengeti, the Ngorongoro Crater and the parks and lakes around them." },
  { region: ["kilimanjaro"], intro: "Africa's highest mountain, rising alone above the plains." },
  { region: ["southern"], intro: "Vast, remote and wonderfully uncrowded, for walking, boating and big predators." },
  { region: ["western"], intro: "Forested mountains on the shores of Lake Tanganyika, home to wild chimpanzees." },
  { region: ["zanzibar", "coast"], intro: "Spice islands, coral reefs and long white beaches on the Indian Ocean." },
];

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Fourteen places, one remarkable country"
        intro="Wide plains, ancient craters, snow on the equator and islands scented with cloves. Here is where we can take you."
        image={images.kilimanjaroElephants}
        crumbs={[{ label: "Destinations", href: "/destinations" }]}
      />
      {order.map(({ region, intro }, i) => {
        const list = destinations.filter((d) => region.includes(d.region));
        return (
          <DetailSection
            key={region.join()}
            id={region[0]}
            tone={i % 2 ? "sand" : "plain"}
            eyebrow={`${list.length} ${list.length === 1 ? "destination" : "destinations"}`}
            title={region.map((r) => regionLabels[r]).join(" & ")}
            intro={intro}
          >
            <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((d) => (
                <RevealItem key={d.slug}>
                  <DestinationCard destination={d} />
                </RevealItem>
              ))}
            </RevealGroup>
          </DetailSection>
        );
      })}
      <FinalCta title="Not sure where to start?" body="Tell us your dates and what excites you. Your specialist will suggest the right combination of places for the season." />
    </>
  );
}
