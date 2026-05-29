"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/vilkasss-ai-generated-8675585_1280.jpg",
    eyebrow: "Kuwait & Middle East",
    title: "Advanced Drilling & Oilfield Services",
    subtitle:
      "Delivering safe, efficient, and high-performance solutions across drilling, directional services, and manpower — built on decades of regional expertise.",
    cta: { label: "Request a Quote", href: "#contact" },
  },
  {
    image: "/images/hero-slide-2.jpg",
    eyebrow: "Precision Downhole Technology",
    title: "Directional Drilling with Pinpoint Accuracy",
    subtitle:
      "State-of-the-art MWD/LWD systems and RSS technology to reach complex reservoir targets efficiently while minimising rig time and cost.",
    cta: { label: "Our Services", href: "#services" },
  },
  {
    image: "/images/hero-slide-3.jpg",
    eyebrow: "Offshore & Onshore Operations",
    title: "Integrated Well Services Across Kuwait",
    subtitle:
      "From wellbore construction to complex intervention — a single trusted partner for all your oilfield service requirements in the GCC region.",
    cta: { label: "View Projects", href: "#projects" },
  },
  {
    image: "/images/hero-slide-4.jpg",
    eyebrow: "Zero Incident Record",
    title: "Safety & QHSE at the Core of Everything",
    subtitle:
      "Our certified QHSE management system and strong safety culture ensure every operation is executed to the highest international standards.",
    cta: { label: "QHSE Commitment", href: "#qhse" },
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), 700)
    },
    [animating]
  )

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Slide backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.image}')`,
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {/*
        Directional gradient overlay — best practice for text-over-image readability.
        Heavy dark at the left/bottom where text sits, transparent toward top-right so
        the photo remains visible. No flat colour wash.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,14,30,0.82) 0%, rgba(10,14,30,0.55) 45%, rgba(10,14,30,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom vignette — keeps dots/arrows legible */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(10,14,30,0.55), transparent)" }}
        aria-hidden="true"
      />
      {/* Primary colour bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary z-10" aria-hidden="true" />

      {/* Content — left-aligned for natural reading, max width keeps lines short */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center h-full pt-20">
        <div
          key={current}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-0.5 bg-primary rounded" />
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#ffffff", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
            >
              {slide.eyebrow}
            </span>
          </div>

          {/* Headline — text-shadow gives contrast without a colour wash */}
          <h1
            className="font-display font-bold text-white text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] leading-[1.1] text-balance mb-5 uppercase tracking-tight"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.7)" }}
          >
            {slide.title}
          </h1>

          {/* Subtitle — slightly lighter weight, limited line length for comfort */}
          <p
            className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold uppercase tracking-wider text-sm rounded hover:bg-[var(--blue-dark)] transition-colors shadow-lg shadow-primary/30"
            >
              {slide.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold uppercase tracking-wider text-sm rounded hover:bg-white/20 hover:border-white/60 transition-colors"
            >
              Who We Are
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-primary hover:border-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-primary hover:border-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
