import { stats } from "@/lib/data/stats";

export function CredibilitySection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
