"use client";

import { useRef } from "react";
import { Users, Zap, Shield, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Users,
    number: "01",
    title: "Experienced Engineering Team",
    description:
      "Highly skilled professionals with deep expertise in oilfield operations and problem-solving across complex well environments.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Advanced Technology",
    description:
      "State-of-the-art equipment and real-time monitoring systems delivering optimal performance on every operation.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Strong Safety Compliance",
    description:
      "100% commitment to QHSE standards with certified safety protocols and a proven zero-incident operational record.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Reliable Manpower",
    description:
      "Trained and certified personnel available for immediate deployment across all service lines, anywhere in the field.",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-6 origin-top-right" aria-hidden />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-blue-600 opacity-20" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Our Advantage
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance font-display">
              Why Choose KDC?
            </h2>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm md:text-right">
              Industry-leading expertise backed by decades of proven results and an unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="group relative flex gap-6 p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors duration-300 leading-none select-none font-display">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
