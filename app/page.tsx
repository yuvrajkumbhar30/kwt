import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { CredibilitySection } from "@/components/sections/credibility";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { WhyUsSection } from "@/components/sections/why-us";
import { ProjectsSection } from "@/components/sections/projects";
import { QHSESection } from "@/components/sections/qhse";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
      <CredibilitySection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <ProjectsSection />
      <QHSESection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
