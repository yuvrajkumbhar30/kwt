import { Header } from "@/components/header";
import { HeroSlider } from "@/components/sections/hero-slider";
import { AwardsSection } from "@/components/sections/awards";
import { CredibilitySection } from "@/components/sections/credibility";
import { ServicesSection } from "@/components/sections/services";
import { ClientsSection } from "@/components/sections/clients";
import { AboutSection } from "@/components/sections/about";
import { WhyUsSection } from "@/components/sections/why-us";
import { ProjectsSection } from "@/components/sections/projects";
import { MapSection } from "@/components/sections/map-section";
import { QHSESection } from "@/components/sections/qhse";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSlider />
        <AwardsSection />
        <CredibilitySection />
        <ServicesSection />
        <ClientsSection />
        <AboutSection />
        <WhyUsSection />
        <ProjectsSection />
        <MapSection />
        <QHSESection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
