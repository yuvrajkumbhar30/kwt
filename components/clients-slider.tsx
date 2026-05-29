"use client"

import Image from "next/image"

// Using real oil & gas company logo placeholders — rendered as styled name badges
// since external logo URLs would require image domain config.
// Replace src with actual logo file paths when available.
const clients = [
  { name: "Kuwait Oil Company",        abbr: "KOC"   },
  { name: "Kuwait National Petroleum", abbr: "KNPC"  },
  { name: "Kuwait Gulf Oil Company",   abbr: "KGOC"  },
  { name: "Petroleum Development Oman",abbr: "PDO"   },
  { name: "Saudi Aramco",              abbr: "Aramco" },
  { name: "Abu Dhabi National Oil",    abbr: "ADNOC" },
  { name: "Baker Hughes",              abbr: "BH"    },
  { name: "Schlumberger",              abbr: "SLB"   },
  { name: "Halliburton",               abbr: "HAL"   },
  { name: "National Oil Well Varco",   abbr: "NOV"   },
]

// Duplicate for seamless infinite scroll
const track = [...clients, ...clients]

export default function ClientsSlider() {
  return (
    <section className="py-16 bg-secondary border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Trusted By
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>
        <h2 className="font-display font-bold text-foreground text-2xl sm:text-3xl uppercase tracking-tight">
          Our Valued Clients &amp; Partners
        </h2>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, oklch(0.96 0.008 265), transparent)" }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, oklch(0.96 0.008 265), transparent)" }}
          aria-hidden="true"
        />

        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {track.map((client, i) => (
            <div
              key={`${client.abbr}-${i}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-card border border-border rounded-xl px-8 py-5 w-44 hover:border-primary hover:shadow-md transition-all duration-300 group"
            >
              {/* Abbr badge acts as logo placeholder */}
              <span className="font-display font-bold text-primary text-2xl leading-none group-hover:scale-110 transition-transform duration-300">
                {client.abbr}
              </span>
              <span className="text-muted-foreground text-[10px] text-center leading-snug uppercase tracking-wide">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
