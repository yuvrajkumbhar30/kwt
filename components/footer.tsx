import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, ArrowRight, Drill } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Global Outreach", href: "#global-outreach" },
  { label: "Projects", href: "#projects" },
  { label: "QHSE", href: "#qhse" },
]

const services = [
  { label: "Drilling & Workover", href: "#services" },
  { label: "Directional Drilling", href: "#services" },
  { label: "Tubular Running", href: "#services" },
  { label: "BHA Rental", href: "#services" },
  { label: "Fishing Services", href: "#services" },
  { label: "Water Well Drilling", href: "#services" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 265) 0%, oklch(0.25 0.06 255) 50%, oklch(0.20 0.05 240) 100%)" }}>

      {/* Decorative top accent band */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, oklch(0.42 0.22 265), oklch(0.62 0.18 240), oklch(0.42 0.22 265))" }} aria-hidden="true" />

      {/* Subtle background pattern dots */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, oklch(0.9 0 0) 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top logo + tagline band */}
        <div className="py-10 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="#" className="flex items-center gap-4" aria-label="KDC Kuwait Home">
            <div className="bg-white rounded-xl p-2 shadow-lg">
              <Image
                src="/images/kdc-logo.png"
                alt="Kuwait Drilling Co. K.S.C.C."
                width={56}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-display font-bold text-xl uppercase tracking-widest">
                Kuwait Drilling Co.
              </span>
              <span className="text-white/50 text-xs tracking-[0.25em] uppercase mt-1">
                K.S.C.C. — Est. Kuwait
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Drill className="w-5 h-5 text-primary" aria-hidden="true" />
            <p className="text-white/60 text-sm max-w-sm text-center md:text-right leading-relaxed">
              Advanced drilling and oilfield services delivered with safety, precision and accountability across Kuwait and the GCC.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Contact block */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary inline-block" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Kuwait City, State of Kuwait<br />P.O. Box 1234, Safat 13013
                </span>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <a href="tel:+96522000000" className="text-white/60 text-sm hover:text-white transition-colors self-center">
                  +965 2200 0000
                </a>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <a href="mailto:info@kdckuwait.com" className="text-white/60 text-sm hover:text-white transition-colors self-center">
                  info@kdckuwait.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter / X" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-primary inline-block" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-3">
                Ready to Discuss Your Project?
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Our engineering team is available to answer your questions and prepare a tailored service proposal.
              </p>
            </div>
            <a
              href="mailto:info@kdckuwait.com"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold uppercase tracking-wide rounded-lg hover:bg-[var(--blue-dark)] transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Kuwait Drilling Co. K.S.C.C. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
