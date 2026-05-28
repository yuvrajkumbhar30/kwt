"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Users,
  Briefcase,
  ShoppingCart,
  ChevronRight,
  ChevronDown,
  Send,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
  HeadphonesIcon,
  AlertCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const quickCards = [
  {
    id: "corporate",
    icon: Building2,
    label: "Corporate Office",
    description: "General inquiries, partnerships, and corporate communications.",
    email: "info@kdckwt.com",
    phone: "+965 239 815 98",
    color: "blue",
  },
  {
    id: "hr",
    icon: Users,
    label: "HR & Careers",
    description: "Job applications, recruitment, and HR-related enquiries.",
    email: "hr@kdckwt.com",
    phone: "+965 239 815 99",
    color: "emerald",
  },
  {
    id: "operations",
    icon: Briefcase,
    label: "Operations Support",
    description: "Technical operations, service delivery, and field support.",
    email: "info@kdc-services.com",
    phone: "+965 239 815 98",
    color: "amber",
  },
  {
    id: "vendor",
    icon: ShoppingCart,
    label: "Vendor / Procurement",
    description: "Supplier registration, tenders, and procurement enquiries.",
    email: "procurement@kdckwt.com",
    phone: "+965 239 815 98",
    color: "slate",
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  blue:    { bg: "bg-blue-50",   border: "border-blue-100",   icon: "bg-blue-600 text-white",       badge: "bg-blue-600" },
  emerald: { bg: "bg-emerald-50",border: "border-emerald-100",icon: "bg-emerald-600 text-white",    badge: "bg-emerald-600" },
  amber:   { bg: "bg-amber-50",  border: "border-amber-100",  icon: "bg-amber-500 text-white",      badge: "bg-amber-500" },
  slate:   { bg: "bg-slate-50",  border: "border-slate-200",  icon: "bg-slate-700 text-white",      badge: "bg-slate-700" },
};

const trustPoints = [
  { icon: Zap,             label: "Fast Response",        desc: "We respond to all inquiries within 48 business hours." },
  { icon: Shield,          label: "Industry Expertise",   desc: "20+ years of oil & gas operational experience." },
  { icon: Globe,           label: "Global Operations",    desc: "Active presence in Kuwait, Oman, and Jordan." },
  { icon: HeadphonesIcon,  label: "Safety-First Culture", desc: "QHSE certified with zero-incident operational record." },
];

const faqs = [
  {
    q: "How quickly does KDC respond to inquiries?",
    a: "We aim to respond to all general inquiries within 48 business hours. For urgent operational matters, please use our emergency contact line directly.",
  },
  {
    q: "Where are KDC's operations located?",
    a: "Our headquarters is in Ahmadi, Kuwait. We operate active oilfield service projects across Kuwait, Oman, and Jordan, with international partnership networks throughout the GCC.",
  },
  {
    q: "How can vendors contact the procurement team?",
    a: "Vendors and suppliers are welcome to reach out via procurement@kdckwt.com. Please include your company profile, capability statement, and the specific service or product category you are offering.",
  },
  {
    q: "Where can I apply for a job at KDC?",
    a: "You can submit your CV and application via our Careers page or directly email hr@kdckwt.com. We regularly recruit for field operations, engineering, and corporate roles.",
  },
  {
    q: "What is the emergency contact process?",
    a: "For operational emergencies, please call our 24/7 operations line at +965 239 815 98. For non-emergency technical support, email info@kdc-services.com with a detailed description of the issue.",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative h-[420px] md:h-[480px] flex items-center overflow-hidden">
      <img
        src="/images/contact-hero-bg.png"
        alt="KDC Kuwait contact hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/55 to-slate-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/60 text-xs mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90">Contact Us</span>
          </nav>

          <p className="text-blue-300 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight text-balance mb-4 drop-shadow">
            Contact KDC Kuwait
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Get in touch with our corporate, operational, recruitment, and support teams.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm shadow-lg"
            >
              Send Inquiry
            </a>
            <a
              href="#locations"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-colors text-sm"
            >
              View Locations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickCards() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Direct Contacts
          </p>
          <h2 className="font-display text-4xl font-bold text-slate-900">
            How Can We Help?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickCards.map((card) => {
            const colors = colorMap[card.color];
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative rounded-2xl border ${colors.border} ${colors.bg} p-6 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full ${colors.badge} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon} shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{card.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <a
                    href={`mailto:${card.email}`}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group/link"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate group-hover/link:underline underline-offset-2">{card.email}</span>
                  </a>
                  <a
                    href={`tel:${card.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors group/link"
                  >
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="group-hover/link:underline underline-offset-2">{card.phone}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", department: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Full name is required.";
    if (!form.email.trim())   e.email   = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter your message.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500";

  return (
    <div id="contact-form" className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
      <h2 className="font-display text-3xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
      <p className="text-slate-500 text-sm mb-7">We respond to all inquiries within 48 business hours.</p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900">Message Sent</h3>
          <p className="text-slate-500 text-sm max-w-xs">
            Thank you for contacting KDC. A member of our team will be in touch within 48 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name:"",company:"",email:"",phone:"",department:"",message:"" }); }}
            className="mt-2 text-blue-600 text-sm font-semibold hover:underline underline-offset-2"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Full Name *"
                className={`${inputBase} ${errors.name ? "border-red-400 focus:ring-red-300/40" : "border-slate-200"}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
            </div>
            <div>
              <input
                name="company" value={form.company} onChange={handleChange}
                placeholder="Company Name"
                className={`${inputBase} border-slate-200`}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Email Address *"
                className={`${inputBase} ${errors.email ? "border-red-400 focus:ring-red-300/40" : "border-slate-200"}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
            </div>
            <div>
              <input
                name="phone" type="tel" value={form.phone} onChange={handleChange}
                placeholder="Phone Number"
                className={`${inputBase} border-slate-200`}
              />
            </div>
          </div>

          <select
            name="department" value={form.department} onChange={handleChange}
            className={`${inputBase} border-slate-200 text-${form.department ? "slate-800" : "slate-400"}`}
          >
            <option value="" disabled>Select Department</option>
            <option value="corporate">Corporate Office</option>
            <option value="hr">HR &amp; Careers</option>
            <option value="operations">Operations Support</option>
            <option value="vendor">Vendor / Procurement</option>
          </select>

          <div>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              rows={5}
              placeholder="Your Message *"
              className={`${inputBase} resize-none ${errors.message ? "border-red-400 focus:ring-red-300/40" : "border-slate-200"}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 font-display tracking-wide text-sm shadow-md"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

function InfoPanel() {
  return (
    <div className="flex flex-col gap-6">
      {/* Corporate Info card */}
      <div className="bg-slate-900 text-white rounded-2xl p-8">
        <h2 className="font-display text-2xl font-bold mb-6 text-white">KDC Headquarters</h2>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Building2 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Company</p>
              <p className="text-white font-semibold">Kuwait Drilling CO. K.S.C.C.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Head Office</p>
              <p className="text-white">P.O. Box 9066, Ahmadi</p>
              <p className="text-slate-300">61001, Kuwait</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Telephone</p>
              <a href="tel:+96523981598" className="text-white hover:text-blue-300 transition-colors">+965 239 815 98 / 9</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Fax</p>
              <p className="text-white">+965 239 881 38</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">General Enquiries</p>
              <a href="mailto:info@kdckwt.com" className="text-white hover:text-blue-300 transition-colors">info@kdckwt.com</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">KDC Services</p>
              <a href="mailto:info@kdc-services.com" className="text-white hover:text-blue-300 transition-colors">info@kdc-services.com</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Working Hours</p>
              <p className="text-white">Sunday – Thursday</p>
              <p className="text-slate-300">7:30 AM – 4:00 PM (AST)</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Trust points */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
        <h3 className="font-display text-lg font-bold text-slate-900 mb-4">Why Contact KDC?</h3>
        <ul className="space-y-3">
          {trustPoints.map(({ icon: Icon, label, desc }) => (
            <li key={label} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-semibold">{label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <section id="locations" className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-2">Find Us</p>
          <h2 className="font-display text-4xl font-bold text-slate-900">Office Location</h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            title="KDC Kuwait Head Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.555!2d48.0763!3d29.0769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA0JzM3LjEiTiA0OMKwMDQnMzQuNiJF!5e0!3m2!1sen!2skw!4v1693000000000!5m2!1sen!2skw"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />

          {/* Overlay card */}
          <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-xl p-4 max-w-xs border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-display font-bold text-slate-900 text-sm">KDC Head Office</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">P.O. Box 9066, Ahmadi, 61001 Kuwait</p>
            <a
              href="https://maps.google.com/?q=Ahmadi,Kuwait"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Get Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  const locations = [
    {
      flag: "🇰🇼",
      country: "Kuwait",
      city: "Ahmadi",
      type: "Headquarters",
      typeColor: "bg-blue-100 text-blue-700",
      address: "P.O. Box 9066, Ahmadi, 61001",
      phone: "+965 239 815 98",
      email: "info@kdckwt.com",
    },
    {
      flag: "🇰🇼",
      country: "Kuwait",
      city: "Kuwait City",
      type: "Operational Site",
      typeColor: "bg-emerald-100 text-emerald-700",
      address: "Kuwait Oil Field Operations Zone",
      phone: "+965 239 815 99",
      email: "info@kdc-services.com",
    },
    {
      flag: "🇴🇲",
      country: "Oman",
      city: "Muscat",
      type: "International Partner",
      typeColor: "bg-amber-100 text-amber-700",
      address: "Muscat Governorate, Oman",
      phone: "Via Kuwait HQ",
      email: "info@kdc-services.com",
    },
    {
      flag: "🇯🇴",
      country: "Jordan",
      city: "Amman",
      type: "International Partner",
      typeColor: "bg-amber-100 text-amber-700",
      address: "Amman, Hashemite Kingdom of Jordan",
      phone: "Via Kuwait HQ",
      email: "info@kdc-services.com",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Regional Presence
          </p>
          <h2 className="font-display text-4xl font-bold text-slate-900">Our Locations</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={`${loc.country}-${loc.city}`}
              className="rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Map thumbnail placeholder with gradient */}
              <div className="relative h-28 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="text-5xl relative z-10 drop-shadow">{loc.flag}</span>
                <div className="absolute bottom-2 right-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${loc.typeColor}`}>
                    {loc.type}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{loc.city}</h3>
                  <p className="text-slate-500 text-xs">{loc.country}</p>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">{loc.address}</p>

                <div className="pt-2 border-t border-slate-200 space-y-1.5">
                  <a href={`tel:${loc.phone.replace(/\s/g,"")}`} className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 transition-colors">
                    <Phone className="w-3 h-3 flex-shrink-0" /> {loc.phone}
                  </a>
                  <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-xs text-slate-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-3 h-3 flex-shrink-0" /> {loc.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersBanner() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <img
        src="/images/contact-careers-bg.png"
        alt="KDC careers workforce"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Join Our Team
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-5 text-balance">
          Looking to Join KDC?
        </h2>
        <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          We are always seeking talented engineers, operators, and professionals who share our passion for excellence, safety, and innovation in the oil and gas industry.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl transition-colors font-display tracking-wide text-sm shadow-lg inline-flex items-center gap-2"
          >
            Explore Careers <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:hr@kdckwt.com"
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-colors text-sm inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Email HR Team
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
            Common Questions
          </p>
          <h2 className="font-display text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-slate-900 text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Mobile sticky CTA
function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl p-3 flex gap-3 lg:hidden">
      <a
        href="tel:+96523981598"
        className="flex-1 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" /> Call Us
      </a>
      <a
        href="mailto:info@kdckwt.com"
        className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2"
      >
        <Mail className="w-4 h-4" /> Email Us
      </a>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* SEO heading structure */}
      <main className="pb-20 lg:pb-0">
        <HeroSection />

        <QuickCards />

        {/* Main 2-col form + info */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-10">
            <ContactForm />
            <InfoPanel />
          </div>
        </section>

        <MapSection />

        <LocationsSection />

        <CareersBanner />

        <FAQSection />
      </main>

      <Footer />

      <MobileStickyBar />
    </>
  );
}
