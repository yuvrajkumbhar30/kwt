import { Trophy, Star, Award, Shield } from "lucide-react";

const awards = [
  {
    id: 1,
    icon: Trophy,
    year: "2023",
    title: "Best Drilling Contractor",
    body: "Kuwait Oil & Gas Excellence Awards",
  },
  {
    id: 2,
    icon: Star,
    year: "2022",
    title: "Outstanding Safety Performance",
    body: "Middle East Energy Industry Council",
  },
  {
    id: 3,
    icon: Award,
    year: "2021",
    title: "Top Performer — Directional Drilling",
    body: "Arabian Gulf Petroleum Forum",
  },
  {
    id: 4,
    icon: Shield,
    year: "2020",
    title: "QHSE Excellence Certificate",
    body: "Kuwait Oil Company — Annual Supplier Awards",
  },
];

export function AwardsSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display text-balance">
            Awards &amp; Achievements
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <div
                key={award.id}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 group-hover:scale-110 transition-transform duration-300 mb-5 shadow-md">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-1">
                  {award.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-2 leading-snug">
                  {award.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {award.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
