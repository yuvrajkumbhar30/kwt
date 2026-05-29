"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Drilling & Workover", href: "#services" },
      { label: "Water Well", href: "#services" },
      { label: "Tubular Running Services", href: "#services" },
      { label: "Manpower", href: "#services" },
      { label: "BHA Rental", href: "#services" },
      { label: "Trainings", href: "#services" },
      { label: "Drilling & Measurements", href: "#services" },
      { label: "Fishing & Remedial Services", href: "#services" },
      { label: "Cementing Services", href: "#services" },
      { label: "Drilling Fluids Services", href: "#services" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Global Outreach", href: "#global-outreach" },
  { label: "Projects", href: "#projects" },
  { label: "QHSE", href: "#qhse" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/97 shadow-md backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group" aria-label="KDC Kuwait Home">
            <Image
              src="/images/kdc-logo.png"
              alt="Kuwait Drilling Co. K.S.C.C. logo"
              width={52}
              height={60}
              className="object-contain"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-sm uppercase tracking-widest transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
                Kuwait Drilling Co.
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                K.S.C.C.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-white border border-border rounded shadow-xl shadow-black/10 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary uppercase tracking-wide"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l border-border pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>
        </div>
      )}
    </header>
  )
}
