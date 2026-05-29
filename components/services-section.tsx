import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const coreServices = [
  {
    image: "/images/service-drilling.jpg",
    tag: "Core Service",
    title: "Drilling & Workover",
    description:
      "Comprehensive drilling and workover services utilizing advanced equipment and seasoned crews to maximize well productivity and minimize downtime.",
  },
  {
    image: "/images/service-waterwell.jpg",
    tag: "Water Resources",
    title: "Water Well",
    description:
      "Truck-mounted and trailer rig water well drilling providing sustainable fresh water solutions for agricultural, municipal, and industrial applications.",
  },
  {
    image: "/images/service-tubular.jpg",
    tag: "Core Service",
    title: "Tubular Running Services",
    description:
      "Expert casing, liner, and tubing running with power tong and torque-turn technology, ensuring well integrity at every depth across all formation types.",
  },
  {
    image: "/images/service-manpower.jpg",
    tag: "Workforce",
    title: "Manpower",
    description:
      "Qualified oilfield engineers, drillers, and technicians supplied under frame contracts to support your operations with skilled, safety-conscious professionals.",
  },
  {
    image: "/images/service-bha.jpg",
    tag: "Rental",
    title: "BHA Rental",
    description:
      "Full Bottom Hole Assembly rental packages — stabilizers, reamers, drilling jars — from a certified inventory ready to deploy at short notice.",
  },
  {
    image: "/images/service-training.jpg",
    tag: "Training",
    title: "Trainings",
    description:
      "Technical and safety training programs for oilfield personnel, covering QHSE compliance, equipment operation, and skills development for the energy sector.",
  },
]

const integratedServices = [
  {
    image: "/images/service-dnm.jpg",
    tag: "Downhole",
    title: "Drilling & Measurements",
    description:
      "Advanced MWD/LWD services providing real-time formation evaluation and directional data to optimize well placement and reduce drilling risk.",
  },
  {
    image: "/images/service-fishing.jpg",
    tag: "Intervention",
    title: "Fishing & Remedial Services",
    description:
      "Specialized downhole fishing, milling, and remediation to recover stuck tools and restore wellbore integrity efficiently and cost-effectively.",
  },
  {
    image: "/images/service-cementing.jpg",
    tag: "Well Integrity",
    title: "Cementing Services",
    description:
      "Primary and remedial cementing operations with engineered slurry design, ensuring zonal isolation and long-term well integrity across all formation types.",
  },
  {
    image: "/images/service-fluids.jpg",
    tag: "Fluids",
    title: "Drilling Fluids Services",
    description:
      "Complete drilling fluids engineering and supply — water-based, oil-based, and synthetic systems — tailored to formation conditions and environmental requirements.",
  },
]

function ServiceCard({ service }: { service: typeof coreServices[0] }) {
  return (
    <div className="group flex flex-col border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-secondary">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
          {service.tag}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5 bg-card">
        <h3 className="font-display font-bold text-foreground text-xl uppercase tracking-wide mb-2 leading-snug">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {service.description}
        </p>
        <Link
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold group/link"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 text-center">
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="w-6 h-px bg-primary" />
        <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</span>
        <span className="w-6 h-px bg-primary" />
      </div>
      <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl uppercase tracking-tight text-balance mb-3">
        {title}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm">{description}</p>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Core Services ── */}
        <SectionHeader
          eyebrow="What We Do"
          title="Our Core Services"
          description="From wellbore construction to workforce deployment and technical training, we deliver integrated solutions engineered for Kuwait and the GCC market."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* ── Integrated Drilling Services ── */}
        <div className="border-t border-border pt-12">
          <SectionHeader
            eyebrow="Integrated Solutions"
            title="Integrated Drilling Services"
            description="Specialist downhole and surface services seamlessly integrated with drilling operations to maximise well performance and reduce non-productive time."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integratedServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
