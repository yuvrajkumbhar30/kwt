import { projects } from "@/lib/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-balance font-display">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed md:text-right">
            Successful operations showcasing our expertise and commitment to excellence across Kuwait and the Middle East.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  {project.tag}
                </span>
                {/* Arrow icon (visible on hover) */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
