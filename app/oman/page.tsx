"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Award,
  ShieldCheck,
  Leaf,
  TrendingUp,
  Scale,
  Users,
  CheckCircle2,
  ArrowRight,
  Download,
  Globe,
  Star,
  Building2,
  Wrench,
  Droplets,
  Package,
  HardHat,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const BRAND = "#1d4ed8";

// ─── ANIMATION HELPERS ───────────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "35+", label: "Years Leadership Experience" },
  { value: "ISO", label: "Certified Systems" },
  { value: "PDO", label: "Approved Vendor" },
  { value: "4 Yrs", label: "LTI Free" },
];

const services = [
  {
    icon: HardHat,
    title: "Drilling & Workover Services",
    color: "blue",
    items: ["Rig Operations", "Workover Support", "Drilling Support", "Well Intervention"],
  },
  {
    icon: Wrench,
    title: "Tubular Running Services",
    color: "blue",
    items: ["Casing Running", "Tubing Running", "Completion Support"],
  },
  {
    icon: Package,
    title: "Rental Services",
    color: "blue",
    items: ["Stabilizers", "Drill Collars", "Drilling Jars", "Shock Subs"],
  },
  {
    icon: Droplets,
    title: "Water Well Services",
    color: "blue",
    items: ["Water Well Drilling", "Maintenance", "Rehabilitation"],
  },
  {
    icon: Users,
    title: "Manpower Services",
    color: "blue",
    items: ["Drilling Crew", "Toolpushers", "HSE Personnel", "Technical Experts"],
  },
];

const orgChart = {
  top: { name: "Ali Khamis Al Busaidi", title: "Country Manager" },
  reports: [
    { name: "Mohsin Al Nuumani Balushi", title: "Drilling Superintendent" },
    { name: "Ibrahim Al Hasani", title: "Logistics & Operations Support Manager" },
    { name: "Adnan Al Hawqani", title: "HR & GRO" },
    { name: "Abdulaziz Al Amri", title: "Finance Director" },
    { name: "Fouad Bouchemla", title: "QHSE Manager" },
  ],
};

const management = [
  {
    name: "Ali Khamis Al Busaidi",
    title: "Country Manager",
    exp: "35",
    image: "/images/oman-mgr-ali.png",
    bio: "Leads KDC Oman operations with 35 years of oilfield leadership, driving excellence across drilling, manpower, and rentals.",
  },
  {
    name: "Mohsin Al Nuumani",
    title: "Drilling Superintendent",
    exp: "25",
    image: "/images/oman-mgr-mohsin.png",
    bio: "Oversees all drilling operations in Oman with extensive experience in HP-HT wells and PDO project management.",
  },
  {
    name: "Fouad Bouchemla",
    title: "QHSE Manager",
    exp: "28",
    image: "/images/oman-mgr-fouad.png",
    bio: "Manages integrated QHSE systems, ISO certifications, and zero-harm safety culture across all Oman operations.",
  },
  {
    name: "Mohammed Al Amri",
    title: "Senior Toolpusher",
    exp: "30",
    image: "/images/oman-mgr-mohammed.png",
    bio: "30 years of rig floor expertise across multiple Omani basins. Specialises in complex well intervention.",
  },
  {
    name: "Sathi Reddywan",
    title: "Senior Toolpusher",
    exp: "26",
    image: "/images/oman-mgr-sathi.png",
    bio: "Experienced toolpusher with 26 years on land drilling rigs across the GCC and Southeast Asia.",
  },
];

const achievements = [
  { label: "4 Years LTI Free", detail: "10 May 2026", icon: ShieldCheck },
  { label: "Registered in JSRS", detail: "Oman In-Country Value", icon: Building2 },
  { label: "OPAL Member", detail: "Oman Energy Association", icon: Globe },
  { label: "PDO Approved Vendor", detail: "Petroleum Development Oman", icon: Award },
  { label: "Rabitah Supplier ID", detail: "1404893", icon: Star },
];

const certifications = [
  { code: "ISO 9001:2015", label: "Quality Management", status: "Certified", active: true },
  { code: "ISO 14001:2015", label: "Environmental Management", status: "Certified", active: true },
  { code: "ISO 45001:2018", label: "OH&S Management", status: "Certified", active: true },
  { code: "API Spec Q2", label: "Service Quality Management", status: "In Progress", active: false },
];

const qhseCards = [
  { icon: ShieldCheck, title: "Safety First", desc: "Zero harm philosophy embedded in every operation, from planning through execution." },
  { icon: Leaf, title: "Environmental Responsibility", desc: "ISO 14001-certified environmental management minimising our operational footprint." },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Regular audits, lessons-learned reviews, and KPI-driven performance enhancement." },
  { icon: Scale, title: "Regulatory Compliance", desc: "Full compliance with PDO, Omani regulatory bodies, and international standards." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function OmanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="/images/oman-hero-bg.png"
          alt="KDC Oman drilling operations"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-slate-900/20" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 px-6 md:px-12">
          <nav className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">KDC Oman</span>
          </nav>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Country badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="text-base">🇴🇲</span>
              Sultanate of Oman
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none mb-4 text-balance">
              KDC Oman
            </h1>
            <p className="font-display text-xl md:text-2xl text-blue-300 font-semibold mb-5 leading-snug">
              Oilfield Drilling, Workover, Rental,<br className="hidden md:block" /> Tubular Running & Manpower Services
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              Providing safe, reliable, and efficient oilfield solutions across the Sultanate of Oman through experienced leadership, certified systems, and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors font-display tracking-wide text-sm shadow-lg"
              >
                Contact Oman Team <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors text-sm">
                <Download className="w-4 h-4" /> Download Company Profile
              </button>
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-3xl"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 text-center">
                <p className="font-display text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-white/60 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. ABOUT KDC OMAN ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left — image */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/oman-overview.png"
                alt="KDC Oman drilling operations"
                fill
                className="object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-blue-700 text-white rounded-xl px-4 py-3">
                <p className="font-display text-xl font-bold">4 Yrs</p>
                <p className="text-blue-200 text-xs">LTI Free</p>
              </div>
              {/* PDO badge */}
              <div className="absolute top-5 right-5 bg-white/95 text-slate-900 rounded-xl px-4 py-3 shadow-lg">
                <p className="font-display text-sm font-bold text-blue-700">PDO Approved</p>
                <p className="text-slate-500 text-xs">Vendor</p>
              </div>
            </div>
          </Reveal>

          {/* Right — copy */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance mb-5">
                About KDC Oman
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-600 leading-relaxed mb-4">
                KDC Oman delivers drilling support services, tubular running services, rental tools, manpower solutions, and oilfield operational support for the energy sector.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We focus on safety, operational efficiency, environmental responsibility, and customer satisfaction — partnering with leading operators including PDO to achieve outstanding results.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="space-y-3">
                {[
                  "Experienced management team",
                  "ISO certified systems",
                  "PDO approved supplier",
                  "Strong HSE culture",
                  "Local operational support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
              Our Services in Oman
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-7 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                    <svc.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-4">{svc.title}</h3>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ORG CHART ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Structure</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
              Oman Organisation Chart
            </h2>
          </Reveal>

          {/* Top node */}
          <Reveal>
            <div className="flex justify-center mb-0">
              <div className="bg-blue-700 text-white rounded-2xl px-10 py-6 text-center shadow-xl w-72">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="font-display text-lg font-bold">{orgChart.top.name}</p>
                <p className="text-blue-200 text-sm mt-1">{orgChart.top.title}</p>
              </div>
            </div>
          </Reveal>

          {/* Connector line */}
          <div className="flex justify-center">
            <div className="w-0.5 h-10 bg-blue-200" />
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl h-0.5 bg-blue-200" />
          </div>

          {/* Reports row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-0">
            {orgChart.reports.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07}>
                <div className="flex flex-col items-center">
                  {/* Vertical line from top */}
                  <div className="w-0.5 h-8 bg-blue-200" />
                  <div className="bg-white border-2 border-blue-100 hover:border-blue-400 rounded-xl px-4 py-5 text-center shadow-sm hover:shadow-md transition-all duration-300 w-full">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="font-semibold text-slate-900 text-xs leading-tight mb-1">{r.name}</p>
                    <p className="text-blue-600 text-[11px] leading-tight">{r.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MANAGEMENT TEAM ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
              Oman Management Team
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {management.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Blue top bar */}
                  <div className="h-1.5 bg-blue-600" />
                  {/* Portrait */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    {/* Experience badge */}
                    <div className="absolute bottom-3 right-3 bg-blue-600 text-white rounded-lg px-2.5 py-1.5 text-center">
                      <p className="font-display text-sm font-bold">{m.exp}+</p>
                      <p className="text-blue-200 text-[9px] leading-none">Yrs Exp</p>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <p className="font-display font-bold text-slate-900 text-sm leading-tight">{m.name}</p>
                    <p className="text-blue-600 text-xs font-semibold mt-0.5 mb-2">{m.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{m.bio}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ACHIEVEMENTS & CERTIFICATIONS ─────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Track Record</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">
              Achievements & Certifications
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-14">
            {/* Left — achievements */}
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-7">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((a, i) => (
                  <Reveal key={a.label} delay={i * 0.07}>
                    <div className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-colors">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <a.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{a.label}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{a.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right — certifications */}
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-7">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <Reveal key={cert.code} delay={i * 0.07}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-xl border p-6 flex flex-col gap-3 ${
                        cert.active
                          ? "bg-blue-600/10 border-blue-500/30"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          cert.active
                            ? "bg-blue-600 text-white"
                            : "bg-white/10 text-slate-400"
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                      <div>
                        <p className="font-display font-bold text-white text-sm">{cert.code}</p>
                        <p className="text-slate-400 text-xs mt-1">{cert.label}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. QHSE ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <div>
              <Reveal>
                <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Safety & QHSE</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance mb-6">
                  QHSE Excellence
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Safety is the foundation of every KDC Oman operation. Our integrated management systems ensure compliance with international standards while protecting people, assets, and the environment.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qhseCards.map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-xl p-5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300">
                        <card.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="font-display font-bold text-slate-900 text-sm mb-1">{card.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right — safety image with overlaid stats */}
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/oman-safety.png"
                  alt="KDC Oman QHSE operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
                  {[
                    { val: "4", label: "Yrs LTI Free" },
                    { val: "3", label: "ISO Certs" },
                    { val: "100%", label: "PPE Compliance" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center">
                      <p className="font-display text-xl font-bold text-white">{s.val}</p>
                      <p className="text-white/70 text-[10px] leading-tight mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-blue-200 text-xs font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Partner With KDC Oman
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Ready to bring safe, efficient, and world-class oilfield services to your Oman operations? Our team is standing by.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors font-display tracking-wide shadow-lg"
              >
                Contact Oman Team <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+96898XXXXXX"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Oman Office
              </a>
            </div>

            {/* Contact strip */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <a href="mailto:oman@kdckwt.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> oman@kdckwt.com
              </a>
              <a href="tel:+96898XXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +968 98 XXX XXX
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Muscat, Oman
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
