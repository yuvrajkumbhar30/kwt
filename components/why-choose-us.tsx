import Image from "next/image"
import { ShieldCheck, Cpu, Users, Clock, Globe, Handshake } from "lucide-react"

const points = [
  {
    icon: Users,
    title: "Experienced Engineering Team",
    description:
      "Engineers with 15–25 years of hands-on experience in Kuwait and across the GCC, ready to tackle any well challenge.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description:
      "Latest downhole tools, MWD/LWD systems, and real-time data platforms deployed to optimise well performance.",
  },
  {
    icon: ShieldCheck,
    title: "Strong QHSE Culture",
    description:
      "Certified under international standards with a proven zero-incident track record on major Kuwait contracts.",
  },
  {
    icon: Clock,
    title: "Reliable, On-Time Delivery",
    description:
      "Our logistics and planning ensure equipment and personnel arrive ready on schedule — every time.",
  },
  {
    icon: Globe,
    title: "Local Presence, Global Standards",
    description:
      "Deep local knowledge combined with international best practices for the best of both worlds.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We build partnerships, not just contracts. Many of our clients have worked with us for over a decade.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split layout: left content, right image */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: header + grid */}
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Our Advantage
              </span>
            </div>
            <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-balance mb-4">
              Why Choose KDC Kuwait
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
              When you choose KDC, you choose a partner committed to your success — from spud to total depth and beyond.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, i) => {
                const Icon = point.icon
                return (
                  <div key={point.title} className="flex gap-4 group">
                    {/* Number + icon */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                      </div>
                      {i < points.length - 2 && (
                        <div className="w-px flex-1 bg-border mt-2 hidden sm:block" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-1">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: stacked images */}
          <div className="flex-shrink-0 w-full lg:w-[440px] relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 aspect-[4/5]">
              <Image
                src="/images/about-team.jpg"
                alt="KDC Kuwait engineering team on site"
                fill
                className="object-cover"
              />
              {/* Floating accent card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-lg leading-none">Zero LTI</p>
                  <p className="text-muted-foreground text-xs mt-1">Maintained across all Kuwait operations since inception</p>
                </div>
              </div>
            </div>
            {/* Orange decorative block */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" aria-hidden="true" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-2xl -z-10" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  )
}
