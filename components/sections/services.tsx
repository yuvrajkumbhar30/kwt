import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance font-display"
          >
            Our Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive oilfield solutions tailored to your operational needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 bg-white"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-xl font-bold text-slate-900 mb-2 font-display"
                >
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Blue bottom accent bar */}
              <div className="h-1 w-0 group-hover:w-full bg-blue-700 transition-all duration-400 mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
