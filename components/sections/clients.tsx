"use client";

const clients = [
  { name: "Kuwait Oil Company", abbr: "KOC" },
  { name: "Kuwait National Petroleum Company", abbr: "KNPC" },
  { name: "Kuwait Gulf Oil Company", abbr: "KGOC" },
  { name: "Petrochemical Industries Company", abbr: "PIC" },
  { name: "Kuwait Oil Tanker Company", abbr: "KOTC" },
  { name: "Kuwait Foreign Petroleum Exploration", abbr: "KUFPEC" },
  { name: "Arabian Drilling Company", abbr: "ADC" },
  { name: "SLB", abbr: "SLB" },
];

// Duplicate for seamless loop
const doubled = [...clients, ...clients];

export function ClientsSection() {
  return (
    <section className="py-10 px-4 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        {/* Left/right fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex gap-8 animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] h-16 px-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex-shrink-0"
              title={client.name}
            >
              <span className="font-bold text-slate-600 text-sm tracking-wide font-display hover:text-blue-700 transition-colors">
                {client.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
