"use client"

import { useEffect, useRef, useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// ISO numeric codes for highlighted countries
const HIGHLIGHTED = new Set([
  "414", // Kuwait
  "682", // Saudi Arabia
  "784", // UAE
  "512", // Oman
  "634", // Qatar
  "586", // Pakistan
  "818", // Egypt
  "364", // Iran
  "586", // Pakistan
  "800", // Uganda
  "706", // Somalia
  "288", // Ghana
])

const markers = [
  { name: "Kuwait", coordinates: [47.48, 29.37] as [number, number] },
  { name: "Saudi Arabia", coordinates: [45.08, 23.89] as [number, number] },
  { name: "UAE", coordinates: [54.37, 24.47] as [number, number] },
  { name: "Oman", coordinates: [57.55, 22.0] as [number, number] },
]

const outreachStats = [
  {
    end: 500000,
    suffix: "+",
    label: "Barrels",
    description:
      "Delivering consistent energy output through strategic operations, advanced technology, and reliable global production performance.",
    large: true,
  },
  {
    end: 340,
    suffix: "+",
    label: "Completed Drilling Projects",
    description:
      "Successfully executed drilling projects with precision planning, safety compliance, and operational excellence.",
    large: false,
  },
  {
    end: 500,
    suffix: "+",
    label: "Skilled Field Professionals",
    description:
      "Highly trained industry experts ensuring safe operations, technical accuracy, and dependable delivery.",
    large: false,
  },
]

function AnimatedCounter({
  end,
  suffix,
  started,
  large,
}: {
  end: number
  suffix: string
  started: boolean
  large: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 80
    const increment = end / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [started, end])

  const formatted = count >= 1000 ? count.toLocaleString() : count.toString()

  return (
    <span className={large ? "text-5xl sm:text-6xl font-display font-bold text-foreground" : "text-5xl font-display font-bold text-foreground"}>
      {formatted}
      <span className="text-primary ml-1">{suffix}</span>
    </span>
  )
}

export default function GlobalOutreach() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="global-outreach" ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Global Outreach
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: map + headline */}
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-bold text-foreground text-4xl sm:text-5xl md:text-6xl uppercase leading-tight tracking-tight text-balance mb-8 max-w-lg">
              Fueling Progress, One Barrel at a Time
              <span className="inline-block w-2 h-2 rounded-full bg-primary ml-2 align-top mt-2" />
            </h2>

            {/* World Map */}
            <div className="w-full rounded-xl overflow-hidden bg-secondary/50 border border-border">
              <ComposableMap
                projectionConfig={{ scale: 140, center: [20, 10] }}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isHighlighted = HIGHLIGHTED.has(geo.id as string)
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isHighlighted ? "oklch(0.65 0.19 42)" : "oklch(0.82 0.005 260)"}
                          stroke="oklch(1 0 0)"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: {
                              fill: isHighlighted ? "oklch(0.55 0.19 42)" : "oklch(0.75 0.01 260)",
                              outline: "none",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      )
                    })
                  }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle r={4} fill="oklch(0.18 0.02 265)" stroke="white" strokeWidth={1.5} />
                    <title>{name}</title>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>

          {/* Right: animated stats */}
          <div className="w-full lg:w-[380px] flex flex-col gap-10 lg:pt-16">
            {outreachStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="flex items-end gap-2 leading-none">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    started={started}
                    large={stat.large}
                  />
                </div>
                <p className={`font-semibold text-foreground ${stat.large ? "text-base" : "text-sm uppercase tracking-wide text-primary"}`}>
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                {!stat.large && <div className="w-12 h-0.5 bg-border mt-1" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
