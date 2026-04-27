import {
  Drill,
  Compass,
  Wrench,
  Package,
  Anchor,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/data/services";

const iconMap = {
  Drill: Drill,
  Compass: Compass,
  Wrench: Wrench,
  Package: Package,
  Anchor: Anchor,
};

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive oilfield solutions tailored to your operational needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                className="p-8 hover:shadow-lg transition-shadow duration-300 border-slate-200"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
