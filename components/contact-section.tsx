"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
              Get In Touch
            </span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-balance mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our team is available 24/7 to respond to your enquiries. Fill in the form and we will
            get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: MapPin,
                label: "Head Office",
                value: "Kuwait City, State of Kuwait",
                sub: "P.O. Box 1234, Safat 13013",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+965 2200 0000",
                sub: "Mon – Fri, 8:00 AM – 5:00 PM",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@kdckuwait.com",
                sub: "We respond within 24 hours",
              },
            ].map((info) => {
              const Icon = info.icon
              return (
                <div
                  key={info.label}
                  className="flex gap-4 bg-card border border-border rounded p-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded bg-primary">
                    <Icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-foreground font-semibold text-sm">{info.value}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{info.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-card border border-border rounded p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary">
                  <Send className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground text-2xl uppercase tracking-wide">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. A member of our team will contact you within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-foreground text-xs font-semibold uppercase tracking-wide">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Ahmed Al-Rashidi"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-foreground text-xs font-semibold uppercase tracking-wide">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Kuwait Oil Company"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-foreground text-xs font-semibold uppercase tracking-wide">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="ahmed@company.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-foreground text-xs font-semibold uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+965 XXXX XXXX"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="service" className="text-foreground text-xs font-semibold uppercase tracking-wide">
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>Drilling &amp; Workover</option>
                    <option>Directional Drilling</option>
                    <option>Tubular Running</option>
                    <option>BHA Rental</option>
                    <option>Fishing Services</option>
                    <option>Manpower Supply</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-foreground text-xs font-semibold uppercase tracking-wide">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded hover:bg-[oklch(0.62_0.19_42)] transition-colors"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
