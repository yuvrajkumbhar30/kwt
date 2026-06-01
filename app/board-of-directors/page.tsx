"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  X,
  Linkedin,
  ShieldCheck,
  Leaf,
  Lightbulb,
  Eye,
  Users,
  Globe,
  Award,
  Briefcase,
  Phone,
  Mail,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// ─── DATA ────────────────────────────────────────────────────────────────────

const directors = [
  {
    id: 1,
    name: "Abdulaziz Al-Mutairi",
    title: "Chairman of the Board",
    image: "/images/director-1.png",
    bio: "Over 35 years of leadership in Kuwait's oil & gas sector. Former senior executive at Kuwait Oil Company with deep expertise in drilling operations and corporate governance.",
    fullBio:
      "Abdulaziz Al-Mutairi has dedicated more than three and a half decades to shaping the oil and gas landscape in Kuwait and across the GCC. He served in senior executive capacities at Kuwait Oil Company before transitioning to private sector leadership. His expertise spans strategic drilling programs, corporate governance frameworks, and international joint ventures. Under his chairmanship, KDC has expanded its regional footprint into Oman and Jordan while maintaining its commitment to safety and operational excellence.",
    expertise: ["Corporate Governance", "Drilling Operations", "Strategic Leadership"],
  },
  {
    id: 2,
    name: "Khalid Al-Rasheed",
    title: "Vice Chairman",
    image: "/images/director-2.png",
    bio: "30+ years in petroleum engineering and project management across the Middle East. Instrumental in KDC's regional expansion and technological advancement.",
    fullBio:
      "Khalid Al-Rasheed brings three decades of hands-on petroleum engineering experience to the Board. He has overseen major multi-well drilling campaigns across Kuwait, Iraq, and Oman, and has been a driving force behind KDC's adoption of advanced directional drilling and LWD technologies. He holds a BSc in Petroleum Engineering from Kuwait University and an MBA from the American University of Beirut.",
    expertise: ["Petroleum Engineering", "Project Management", "Regional Expansion"],
  },
  {
    id: 3,
    name: "Fahad Al-Sabah",
    title: "Board Member",
    image: "/images/director-3.png",
    bio: "Distinguished career spanning finance, infrastructure investment, and energy sector development. Board member of several leading GCC energy companies.",
    fullBio:
      "Fahad Al-Sabah has built a distinguished career at the intersection of finance and energy. He has served on the boards of multiple GCC energy and infrastructure companies, bringing a rigorous investment and capital allocation perspective. His leadership has been pivotal in securing project financing for KDC's long-term growth initiatives and establishing strategic alliances with international oilfield service providers.",
    expertise: ["Finance & Investment", "Energy Strategy", "Board Governance"],
  },
  {
    id: 4,
    name: "Mohammed Al-Aqeel",
    title: "Board Member",
    image: "/images/director-4.png",
    bio: "Legal and regulatory expert with extensive experience in oil & gas contracts, international arbitration, and compliance across GCC jurisdictions.",
    fullBio:
      "Mohammed Al-Aqeel is one of the GCC's leading legal minds in the energy sector. He advises on complex upstream oil & gas contracts, production sharing agreements, and international arbitration matters. His counsel has been essential to KDC's cross-border operations in Jordan and Oman, ensuring full regulatory compliance and protecting the company's interests in all jurisdictions.",
    expertise: ["Legal & Compliance", "Contract Governance", "International Arbitration"],
  },
  {
    id: 5,
    name: "Bader Al-Enezi",
    title: "Board Member",
    image: "/images/director-5.png",
    bio: "Operations and logistics leader with 25+ years managing large-scale oilfield projects, equipment fleets, and integrated service delivery across Kuwait and the wider Gulf.",
    fullBio:
      "Bader Al-Enezi has led operational excellence initiatives throughout his 25-year career in oilfield services. He has managed integrated drilling campaigns involving hundreds of personnel, complex BHA rental programs, and time-sensitive workover operations. His meticulous approach to HSE compliance and operational KPIs has been a cornerstone of KDC's zero-incident track record.",
    expertise: ["Operations Management", "HSE Leadership", "Logistics"],
  },
  {
    id: 6,
    name: "Nasser Al-Hajri",
    title: "Independent Director",
    image: "/images/director-6.png",
    bio: "International business strategist with experience advising energy companies on digital transformation, sustainability, and next-generation oilfield technologies.",
    fullBio:
      "Nasser Al-Hajri brings a forward-looking perspective to the KDC Board as its Independent Director. With a background in management consulting for tier-1 energy companies, he has advised organizations across the MENA region on digital transformation, ESG strategy, and operational efficiency. He holds an MBA from INSEAD and has been a keynote speaker at multiple international energy forums.",
    expertise: ["Digital Transformation", "ESG Strategy", "Independent Governance"],
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Years Combined Experience", icon: Award },
  { value: 3, suffix: "", label: "Countries of Operation", icon: Globe },
  { value: 500, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 1200, suffix: "+", label: "Workforce Strength", icon: Users },
];

const governancePillars = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "Full accountability to shareholders, stakeholders, and regulators through rigorous disclosure standards and open reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Zero-tolerance QHSE policy embedded at every level of governance, from Board mandate to field operations.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Committed to responsible environmental stewardship and sustainable energy practices across all operations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Investing in advanced drilling technologies and digital solutions to maintain a competitive operational edge.",
  },
];

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const HIGHLIGHTED: Record<string, { name: string; coords: [number, number] }> = {
  "414": { name: "Kuwait", coords: [47.4818, 29.3117] },
  "512": { name: "Oman", coords: [57.5522, 23.6139] },
  "400": { name: "Jordan", coords: [36.2384, 31.2461] },
};

// ─── HOOK: counter animation ──────────────────────────────────────────────────

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function StatCard({ value, suffix, label, icon: Icon, trigger }: {
  value: number; suffix: string; label: string; icon: React.ElementType; trigger: boolean;
}) {
  const count = useCountUp(value, 2000, trigger);
  return (
    <div className="flex flex-col items-center gap-3 p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
      </div>
      <p className="font-display text-4xl font-bold text-slate-900">
        {count}{suffix}
      </p>
      <p className="text-slate-500 text-sm text-center leading-snug font-medium">{label}</p>
    </div>
  );
}

function DirectorCard({ director, onClick }: { director: typeof directors[0]; onClick: () => void }) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Gold accent top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700" />

      {/* Portrait */}
      <div className="relative overflow-hidden aspect-[4/5] bg-slate-100">
        <img
          src={director.image}
          alt={director.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* LinkedIn placeholder */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          <Linkedin className="w-4 h-4 text-blue-700" />
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-1">{director.title}</p>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-3 leading-tight">{director.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{director.bio}</p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {director.expertise.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200 font-medium">
              {tag}
            </span>
          ))}
        </div>

        <button className="mt-5 flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all">
          Full Profile <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function DirectorModal({ director, onClose }: { director: typeof directors[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 rounded-t-2xl" />

        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>

          <div className="flex gap-6 items-start mb-6">
            <div className="w-24 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
              <img src={director.image} alt={director.name} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-1">{director.title}</p>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">{director.name}</h2>
              <div className="flex flex-wrap gap-1.5">
                {director.expertise.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed text-[15px]">{director.fullBio}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-500 text-sm">LinkedIn Profile (placeholder)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BoardOfDirectorsPage() {
  const [activeDirector, setActiveDirector] = useState<typeof directors[0] | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <img
            src="/images/board-hero-bg.png"
            alt="KDC Boardroom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Layered overlay: dark bottom for text, lighter top for photo visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-slate-800/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-5" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/50">About Us</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-600 font-medium">Board of Directors</span>
            </nav>

            <div className="max-w-3xl">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Corporate Governance
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight text-balance mb-5 drop-shadow-md">
                Board of<br />Directors
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                Guided by decades of industry expertise, our Board steers Kuwait Drilling CO. with integrity, vision, and an unwavering commitment to excellence.
              </p>
            </div>

            {/* Decorative gold bar */}
            <div className="mt-10 w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-300 rounded-full" />
          </div>
        </section>

        {/* ── 2. INTRODUCTION ─────────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Leadership & Governance
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance mb-6">
                Driving Excellence<br />Through Principled Leadership
              </h2>
              {/* Animated gold divider */}
              <div className="w-16 h-1 bg-blue-600 rounded-full mb-6" />
              <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">
                The Board of Directors of Kuwait Drilling CO. K.S.C.C. represents the highest level of corporate governance in the company. Comprising distinguished leaders from the energy, finance, legal, and operations sectors, our Board ensures that KDC upholds the highest standards of transparency, accountability, and strategic foresight.
              </p>
              <p className="text-slate-500 leading-relaxed text-[15px]">
                Collectively, our directors bring over 50 years of combined expertise in the oil & gas industry — spanning Kuwait, Oman, Jordan, and the broader GCC region. Their collective wisdom shapes KDC's long-term direction and safeguards the interests of all stakeholders.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {["ISO 9001 Certified", "OHSAS 18001", "Zero Incident Record"].map((b) => (
                  <span key={b} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-semibold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — governance image with frame decoration */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/board-hero-bg.png"
                  alt="KDC Corporate Boardroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
              </div>
              {/* Decorative corner frame */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-blue-600 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-blue-600 rounded-br-xl" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-xl border border-slate-100">
                <p className="font-display text-3xl font-bold text-slate-900">35+</p>
                <p className="text-slate-500 text-xs font-medium mt-0.5">Years of Drilling Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. DIRECTORS GRID ───────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Leadership</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance mb-4">
                Meet the Board
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
              <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
                Six distinguished leaders united by a shared commitment to KDC's mission, values, and long-term vision for the energy sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directors.map((d) => (
                <DirectorCard key={d.id} director={d} onClick={() => setActiveDirector(d)} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. LEADERSHIP STATS ─────────────────────────────────────────── */}
        <section ref={statsRef} className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">By The Numbers</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Leadership Highlights
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-5" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} trigger={statsVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. GOVERNANCE / VALUES ──────────────────────────────────────── */}
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
          {/* Background image */}
          <img
            src="/images/governance-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Stand For</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance mb-4">
                Governance & Values
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
              <p className="text-slate-400 max-w-xl mx-auto text-[15px] leading-relaxed">
                Our Board upholds four foundational pillars that guide every decision, from the boardroom to the field.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governancePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-600/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                    <pillar.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. GLOBAL PRESENCE MAP ──────────────────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Where We Operate</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance mb-4">
                Our Regional Presence
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
              <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
                KDC delivers world-class oilfield services across Kuwait, Oman, and Jordan.
              </p>
            </div>

            {/* Country badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {Object.values(HIGHLIGHTED).map((c) => (
                <div key={c.name} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-blue-800 text-sm font-bold font-display tracking-wide">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-800">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [50, 27], scale: 1100 }}
                style={{ width: "100%", height: "auto" }}
                viewBox="0 0 800 440"
              >
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
                          stroke={isHighlighted ? "#60a5fa" : "#334155"}
                          strokeWidth={isHighlighted ? 1.5 : 0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill: isHighlighted ? "#3b82f6" : "#263348" },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                {Object.values(HIGHLIGHTED).map((c) => (
                  <Marker key={c.name} coordinates={c.coords}>
                    <circle r={10} fill="#3b82f6" fillOpacity={0.25} />
                    <circle r={5} fill="#60a5fa" stroke="#fff" strokeWidth={1.5} />
                    <text
                      textAnchor="middle"
                      y={-14}
                      style={{
                        fontFamily: "var(--font-oswald), Oswald, sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        fill: "#e2e8f0",
                        letterSpacing: "0.05em",
                        pointerEvents: "none",
                      }}
                    >
                      {c.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </section>

        {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-blue-700 relative overflow-hidden">
          {/* Subtle animated radial shapes */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-900/40 blur-3xl" />
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white text-balance mb-5 leading-tight">
              Build the Future<br />With Us
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Partner with KDC's world-class team for your next drilling project. Decades of experience. Unmatched safety. Delivered on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="#"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors font-display tracking-wide shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-colors font-display tracking-wide"
              >
                Explore Projects
              </Link>
            </div>

            {/* Contact strip */}
            <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
              <a href="tel:+965XXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-600" /> +965 XXXX XXXX
              </a>
              <a href="mailto:info@kdckwt.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-600" /> info@kdckwt.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Director modal */}
      {activeDirector && (
        <DirectorModal director={activeDirector} onClose={() => setActiveDirector(null)} />
      )}

      <Footer />
    </>
  );
}
