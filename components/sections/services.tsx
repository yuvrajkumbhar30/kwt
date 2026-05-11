import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { coreServices, integratedServices } from "@/lib/data/services";

type Service = { id: number; title: string; description: string; image: string };

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display leading-tight">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
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
    </div>
  );
}

function ServiceGroup({
  title,
  subtitle,
  services,
  bg = "bg-white",
}: {
  title: string;
  subtitle: string;
  services: Service[];
  bg?: string;
}) {
  return (
    <section className={`py-14 px-4 ${bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display text-balance">
            {title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <>
      <ServiceGroup
        title="Our Core Services"
        subtitle="What We Do"
        services={coreServices}
        bg="bg-white"
      />
      <ServiceGroup
        title="Integrated Drilling Services"
        subtitle="Advanced Solutions"
        services={integratedServices}
        bg="bg-slate-50"
      />
    </>
  );
}
