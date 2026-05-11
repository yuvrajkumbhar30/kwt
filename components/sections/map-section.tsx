"use client";

import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO numeric codes for highlighted countries
const HIGHLIGHTED = {
  "414": { name: "Kuwait",  coords: [47.4818, 29.3117] as [number, number] },
  "512": { name: "Oman",    coords: [57.5522, 23.6139] as [number, number] },
  "400": { name: "Jordan",  coords: [36.2384, 31.2461] as [number, number] },
};

export function MapSection() {
  return (
    <section className="py-20 px-4 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Where We Operate
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance font-display leading-tight mb-4">
            Our Regional Presence
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            KDC delivers oilfield services across the Middle East, with active operations in Kuwait, Oman, and Jordan.
          </p>
        </div>

        {/* Country badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.values(HIGHLIGHTED).map((country) => (
            <div
              key={country.name}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-white text-sm font-semibold font-display tracking-wide">
                {country.name}
              </span>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ center: [50, 27], scale: 1100 }}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 0 800 440"
          >
            <ZoomableGroup zoom={1} center={[50, 27]} minZoom={1} maxZoom={1}>
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const id = geo.id as string;
                    const isHighlighted = id in HIGHLIGHTED;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? "#2563eb" : "#1e293b"}
                        stroke={isHighlighted ? "#3b82f6" : "#334155"}
                        strokeWidth={isHighlighted ? 1.5 : 0.5}
                        style={{
                          default: { outline: "none" },
                          hover:   { outline: "none", fill: isHighlighted ? "#3b82f6" : "#263348" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Markers */}
              {Object.values(HIGHLIGHTED).map((country) => (
                <Marker key={country.name} coordinates={country.coords}>
                  {/* Pulse ring */}
                  <circle r={10} fill="#3b82f6" fillOpacity={0.25} />
                  {/* Dot */}
                  <circle r={5} fill="#60a5fa" stroke="#fff" strokeWidth={1.5} />
                  {/* Label */}
                  <text
                    textAnchor="middle"
                    y={-16}
                    style={{
                      fontFamily: "var(--font-oswald), Oswald, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      fill: "#e2e8f0",
                      letterSpacing: "0.05em",
                      pointerEvents: "none",
                    }}
                  >
                    {country.name}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
