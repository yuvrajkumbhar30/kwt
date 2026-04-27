import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Successful operations showcasing our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-slate-200 flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
