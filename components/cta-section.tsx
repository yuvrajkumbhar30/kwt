import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function CtaSection() {
  return (
    <section
      id="contact-cta"
      className="relative py-24 overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-drilling.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      {/* Top + bottom orange bars */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-px bg-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Work With Us
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>

        <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-balance mb-6">
          Looking for Reliable{" "}
          <span className="text-primary">Oilfield Services?</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you need a single service or a fully integrated drilling package, our team is ready
          to respond. Reach out today for a tailored proposal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold uppercase tracking-wider text-sm rounded hover:bg-[var(--blue-dark)] transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+96522000000"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold uppercase tracking-wider text-sm rounded hover:border-primary hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
