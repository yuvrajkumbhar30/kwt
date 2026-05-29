import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Kuwait Offshore Drilling Campaign",
    location: "Arabian Gulf, Kuwait",
    description: "Managed a multi-well offshore drilling campaign for Kuwait Oil Company, delivering all wells ahead of schedule with zero HSE incidents.",
    tag: "Drilling & Workover",
  },
  {
    image: "/images/project-2.jpg",
    title: "Directional Well Series — North Kuwait",
    location: "North Kuwait Fields",
    description: "Executed a complex 8-well directional drilling program using RSS technology, achieving precise reservoir targets in tight formations.",
    tag: "Directional Drilling",
  },
  {
    image: "/images/project-3.jpg",
    title: "Casing Running Operations — Burgan Field",
    location: "South Kuwait, Burgan Field",
    description: "Delivered full tubular running services for a major South Kuwait development project, running over 200,000 ft of casing and liner strings.",
    tag: "Tubular Running",
  },
  {
    image: "/images/qhse-safety.jpg",
    title: "BHA Rental — Integrated Campaign",
    location: "Multiple Fields, Kuwait",
    description: "Supplied a complete BHA rental fleet for a year-long integrated drilling campaign, maintaining 98% uptime across 12 concurrent rigs.",
    tag: "BHA Rental",
  },
  {
    image: "/images/about-team.jpg",
    title: "Fishing & Remediation Services",
    location: "Kuwait & Saudi Arabia",
    description: "Resolved 14 complex stuck-pipe and lost-in-hole incidents across Kuwait and Saudi Arabia using specialist fishing tools and techniques.",
    tag: "Fishing Services",
  },
  {
    image: "/images/project-1.jpg",
    title: "Manpower Supply — KOC Frame Contract",
    location: "Kuwait Oil Company",
    description: "Providing qualified oilfield personnel — engineers, drillers, and technicians — under a multi-year KOC frame contract.",
    tag: "Manpower Supply",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Our Track Record</span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-balance mb-4">
            Projects &amp; Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Proven performance on some of the region&apos;s most demanding drilling and well intervention projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group bg-card border border-border rounded overflow-hidden hover:border-primary transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[oklch(0.08_0.008_260/0.4)] group-hover:bg-[oklch(0.08_0.008_260/0.2)] transition-colors" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">
                  {project.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{project.location}</p>
                <h3 className="font-display font-bold text-foreground text-lg uppercase tracking-wide mb-3 leading-snug">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-semibold uppercase tracking-wider text-sm rounded hover:bg-primary hover:text-primary-foreground transition-colors">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
