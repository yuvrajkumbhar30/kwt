"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { end: 20,  suffix: "+", label: "Years of Experience" },
  { end: 500, suffix: "+", label: "Projects Completed"  },
  { end: 150, suffix: "+", label: "Clients Served"      },
  { end: 100, suffix: "%", label: "Safety Compliance"   },
]

function AnimatedNumber({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const steps = 60
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

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function CredibilityStrip() {
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
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="credibility"
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Faded background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-slide-2.jpg')" }}
        aria-hidden="true"
      />
      {/* Strong light wash so image becomes very faint */}
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl text-center text-balance mb-16 max-w-2xl mx-auto leading-tight">
          We are committed to provide safe solutions to many industries
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start gap-3">
              {/* Big number */}
              <span className="font-display font-bold text-primary leading-none"
                style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}>
                <AnimatedNumber end={stat.end} suffix={stat.suffix} started={started} />
              </span>
              {/* Thin rule */}
              <span className="w-10 h-0.5 bg-border block" aria-hidden="true" />
              {/* Label */}
              <p className="text-foreground text-sm leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
