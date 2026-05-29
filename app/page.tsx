import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CredibilityStrip from "@/components/credibility-strip"
import AwardsSection from "@/components/awards-section"
import ServicesSection from "@/components/services-section"
import ClientsSlider from "@/components/clients-slider"
import AboutSnapshot from "@/components/about-snapshot"
import WhyChooseUs from "@/components/why-choose-us"
import GlobalOutreach from "@/components/global-outreach"
import ProjectsSection from "@/components/projects-section"
import QhseSection from "@/components/qhse-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AwardsSection />
        <CredibilityStrip />
        <ServicesSection />
        <ClientsSlider />
        <AboutSnapshot />
        <WhyChooseUs />
        <GlobalOutreach />
        <ProjectsSection />
        <QhseSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
