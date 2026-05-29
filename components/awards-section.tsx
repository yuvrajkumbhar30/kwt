import { Trophy, Medal, Star, Award, ShieldCheck, Handshake } from "lucide-react"

const awards = [
  {
    icon: Trophy,
    year: "2023",
    title: "Best Drilling Contractor",
    body: "Kuwait Oil Company",
    description: "Recognised for outstanding drilling performance, HSE compliance, and on-time delivery across all KOC contract wells.",
  },
  {
    icon: Medal,
    year: "2022",
    title: "Zero LTI Achievement Award",
    body: "Kuwait Petroleum Corporation",
    description: "Awarded for maintaining a zero Lost-Time Injury record throughout a full year of continuous drilling operations.",
  },
  {
    icon: Star,
    year: "2021",
    title: "Excellence in Well Services",
    body: "GCC Oilfield Awards",
    description: "Honoured for best-in-class tubular running and directional drilling services across the Gulf region.",
  },
  {
    icon: ShieldCheck,
    year: "2020",
    title: "QHSE Gold Standard",
    body: "International Drilling Federation",
    description: "Certified at Gold level for our integrated QHSE management system and its consistent application in the field.",
  },
  {
    icon: Award,
    year: "2019",
    title: "Top Supplier Award",
    body: "Kuwait National Petroleum Company",
    description: "Selected as the top-rated oilfield services supplier for responsiveness, technical quality, and safety culture.",
  },
  {
    icon: Handshake,
    year: "2018",
    title: "Strategic Partner of the Year",
    body: "Arabian Gulf Energy Forum",
    description: "Recognised for long-term contribution to the development of Kuwait's upstream oil and gas sector.",
  },
]

export default function AwardsSection() {
  return (
    <section id="awards" className="py-14 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Recognition</span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl uppercase tracking-tight text-balance">
            Awards &amp; Achievements
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Our commitment to safety, performance, and innovation has been recognised by leading industry bodies and clients across Kuwait and the wider Gulf region.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award) => {
            const Icon = award.icon
            return (
              <div
                key={award.title}
                className="group flex gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                {/* Icon column */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-0.5">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <span className="text-primary text-xs font-bold">{award.year}</span>
                </div>

                {/* Text column */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    {award.body}
                  </p>
                  <h3 className="font-display font-bold text-foreground text-base uppercase tracking-wide mb-2 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
