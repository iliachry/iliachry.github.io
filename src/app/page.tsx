import { HeroSection } from "@/components/sections/home/hero";
import { SelectedWorkSection } from "@/components/sections/home/selected-work";
import { ResearchAreasSection } from "@/components/sections/home/research-areas";
import { VenturesSection } from "@/components/sections/home/ventures";
import { AchievementsSection } from "@/components/sections/home/achievements";
import { BioSection } from "@/components/sections/home/bio";
import { ContactCTASection } from "@/components/sections/home/contact-cta";
import { PageWrapper } from "@/components/layout/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <SelectedWorkSection />
      <ResearchAreasSection />
      <VenturesSection />
      <AchievementsSection />
      <BioSection />
      <ContactCTASection />
    </PageWrapper>
  );
}
