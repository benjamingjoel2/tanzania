import { experiences, safaris, stays } from "@/lib/content";
import { homeContent } from "@/data/home";
import { Hero } from "@/components/sections/Hero";
import { TrustRow } from "@/components/sections/TrustRow";
import { IntroSplit } from "@/components/sections/IntroSplit";
import { DestinationsGrid } from "@/components/sections/DestinationsGrid";
import { ExperiencesCarousel } from "@/components/sections/ExperiencesCarousel";
import { SafarisGrid } from "@/components/sections/SafarisGrid";
import { KiliSection } from "@/components/sections/KiliSection";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { StaysGrid } from "@/components/sections/StaysGrid";
import { AboutStory } from "@/components/sections/AboutStory";
import { JournalSection } from "@/components/sections/JournalSection";
import { GuideSignup } from "@/components/sections/GuideSignup";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  const { zanzibar } = homeContent;
  const featuredSafaris = safaris.filter((s) => s.featured).slice(0, 6);
  const featuredStays = ["kopje-ridge-camp", "crater-rim-lodge", "matemwe-reef-villas", "spice-merchants-house"]
    .map((slug) => stays.find((s) => s.slug === slug))
    .filter((s) => s !== undefined);

  return (
    <>
      <Hero />
      <TrustRow />
      <IntroSplit />
      <DestinationsGrid />
      <ExperiencesCarousel experiences={experiences} />
      <SafarisGrid safaris={featuredSafaris} />
      <KiliSection />
      <ParallaxBand
        image={zanzibar.image}
        eyebrow={zanzibar.eyebrow}
        title={zanzibar.title}
        body={zanzibar.body}
        cta={{ label: "Discover Zanzibar", href: "/zanzibar" }}
      />
      <StaysGrid stays={featuredStays} />
      <AboutStory />
      <JournalSection />
      <GuideSignup />
      <FinalCta />
    </>
  );
}
