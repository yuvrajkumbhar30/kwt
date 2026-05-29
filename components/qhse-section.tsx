import Image from "next/image"
import { ShieldCheck, FileCheck, AlertTriangle, Activity } from "lucide-react"

const commitments = [
  {
    icon: ShieldCheck,
    title: "Zero Harm Policy",
    description:
      "Every operation begins and ends with safety. Our zero-harm commitment applies to all personnel, contractors, and third parties on every job site.",
  },
  {
    icon: FileCheck,
    title: "Certified Standards",
    description:
      "Compliant with ISO 9001, ISO 14001, and ISO 45001. All personnel hold current IWCF / IADC certifications and undergo regular competency assessments.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description:
      "Rigorous hazard identification, risk assessment, and mitigation processes are embedded in every task — from pre-job planning to post-job review.",
  },
  {
    icon: Activity,
    title: "Environmental Stewardship",
    description:
      "We minimize our environmental footprint through responsible waste management, emissions control, and compliance with Kuwaiti environmental regulations.",
  },
]

export default function QhseSection() {
  return (
    <section id="qhse" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Safety First
              </span>
            </div>
            <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl uppercase tracking-tight text-balance mb-4">
              Quality, Health, Safety &amp; Environment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In the oil and gas industry, safety is non-negotiable. KDC Kuwait operates under an
              integrated QHSE management system designed to protect our people, our clients&apos;
              assets, and the environment — on every job, every day.
            </p>

            {/* Commitments */}
            <div className="space-y-6">
              {commitments.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded bg-secondary">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Certification badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["ISO 9001", "ISO 14001", "ISO 45001", "IWCF Certified", "IADC Accredited"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 border border-primary text-primary text-xs font-semibold uppercase tracking-widest rounded"
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded overflow-hidden aspect-[4/3]">
              <Image
                src="/images/qhse-safety.jpg"
                alt="KDC Kuwait QHSE safety briefing in the field"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/30" />
            </div>
            {/* Stat overlay */}
            <div className="absolute top-6 -left-6 bg-card border border-primary rounded px-6 py-4 shadow-xl shadow-black/40">
              <p className="font-display font-black text-primary text-4xl leading-none">0</p>
              <p className="text-foreground text-sm font-semibold uppercase tracking-wide mt-1">
                Lost Time Incidents
              </p>
              <p className="text-muted-foreground text-xs mt-0.5">12-month rolling period</p>
            </div>
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b" />
          </div>
        </div>
      </div>
    </section>
  )
}
