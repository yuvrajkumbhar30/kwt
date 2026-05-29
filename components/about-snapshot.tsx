import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSnapshot() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-team.jpg"
                alt="KDC Kuwait engineering team at work in the oilfield"
                fill
                className="object-cover"
              />
              {/* Orange accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-4 bg-primary rounded px-6 py-4 shadow-xl">
              <p className="font-display font-bold text-white text-3xl leading-none">20+</p>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mt-1">
                Years in Kuwait
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                Who We Are
              </span>
            </div>
            <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl uppercase tracking-tight text-balance mb-6">
              Trusted Partner for Kuwait&apos;s Oil &amp; Gas Sector
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                KDC Kuwait is a specialist oilfield services company headquartered in Kuwait City,
                delivering integrated drilling, directional, and well intervention solutions to
                Kuwait&apos;s National Oil Companies and major international operators.
              </p>
              <p>
                Built on a foundation of technical excellence and an unwavering commitment to safety,
                our team of experienced engineers and field professionals brings world-class
                capabilities directly to the wellsite.
              </p>
              <p>
                We hold ourselves to the highest international standards in quality, health, safety,
                and environmental performance — because in oil &amp; gas, there is no room for compromise.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold uppercase tracking-wider text-sm rounded hover:bg-[var(--blue-dark)] transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
