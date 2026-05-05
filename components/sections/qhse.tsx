import { Award, ShieldCheck, Activity, Microscope, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Certified Quality Management System ensuring consistent service delivery.",
  },
  {
    icon: ShieldCheck,
    title: "OHSAS 18001",
    description: "Occupational Health & Safety Management with zero reportable incidents.",
  },
  {
    icon: Activity,
    title: "24/7 Safety Monitoring",
    description: "Round-the-clock compliance monitoring by certified safety professionals.",
  },
  {
    icon: BookOpen,
    title: "Continuous Training",
    description: "Regular training programs keeping all personnel up to date with best practices.",
  },
  {
    icon: Microscope,
    title: "Equipment Integrity",
    description: "Advanced maintenance protocols guaranteeing equipment reliability and uptime.",
  },
];

export function QHSESection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-slate-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/qhse-bg.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-950/90" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between gap-8">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Safety First
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance font-display">
              QHSE Commitment
            </h2>
          </div>
          <p className="text-slate-300 max-w-sm text-sm leading-relaxed mt-4 md:mt-0 md:text-right">
            Safety, quality, and environmental stewardship are embedded in every operation we undertake — not just policies on paper.
          </p>
        </div>

        {/* Stat highlight */}
        <div className="grid grid-cols-3 gap-4 mb-16 border border-slate-700 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
          {[
            { value: "0", label: "Reportable Incidents" },
            { value: "100%", label: "Safety Compliance Rate" },
            { value: "20+", label: "Years Incident-Free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 font-display mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group flex gap-4 p-6 rounded-xl border border-slate-700 bg-white/5 backdrop-blur-sm hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 font-display text-sm">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {pillar.description}
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
