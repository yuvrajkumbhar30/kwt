"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import {
  ChevronRight,
  ShieldCheck,
  Heart,
  Leaf,
  Award,
  AlertTriangle,
  Clock,
  BarChart2,
  Users,
  BookOpen,
  Download,
  CheckCircle2,
  ArrowRight,
  Play,
  X,
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
  Zap,
  Target,
  Activity,
  Globe,
  Lock,
  Phone,
  Mail,
  ClipboardList,
  Radio,
  Flame,
  Eye,
  RefreshCw,
  TrendingDown,
} from "lucide-react";

// ─── COUNTER HOOK ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── INTERSECTION HOOK ────────────────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const kpiData = [
  { label: "Lost Time Injury Rate", value: 0.12, suffix: "", prefix: "", decimals: 2, color: "text-green-400", bar: 95 },
  { label: "Total Safe Manhours (M)", value: 9, suffix: "M+", prefix: "", decimals: 0, color: "text-blue-400", bar: 100 },
  { label: "Projects Delivered Safely", value: 500, suffix: "+", prefix: "", decimals: 0, color: "text-blue-600", bar: 88 },
  { label: "Training Hours / Year", value: 12000, suffix: "+", prefix: "", decimals: 0, color: "text-cyan-400", bar: 75 },
  { label: "Incident Reduction", value: 50, suffix: "%", prefix: "", decimals: 0, color: "text-green-400", bar: 50 },
  { label: "Environmental Compliance", value: 100, suffix: "%", prefix: "", decimals: 0, color: "text-emerald-400", bar: 100 },
];

const pillars = [
  {
    icon: Award,
    title: "Quality Assurance",
    color: "blue",
    description: "ISO 9001:2015 certified quality management ensuring consistent, measurable service delivery across all operations.",
    details: [
      "ISO 9001:2015 Certified QMS",
      "Document-controlled procedures",
      "Regular internal & external audits",
      "Non-conformance tracking system",
      "Customer satisfaction monitoring",
    ],
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    color: "rose",
    description: "Comprehensive occupational health programmes protecting workforce physical and mental wellbeing at all sites.",
    details: [
      "Pre-employment medical screening",
      "Periodic health surveillance",
      "Mental health support programmes",
      "Ergonomics and fatigue management",
      "24/7 medical emergency response",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Workplace Safety",
    color: "blue",
    description: "ISO 45001 certified safety management with zero-tolerance incident culture and stop-work authority for all personnel.",
    details: [
      "ISO 45001:2018 OHS Management",
      "Stop Work Authority for all staff",
      "Daily toolbox talks & JSA reviews",
      "Hazard identification & risk control",
      "Near-miss reporting system",
    ],
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    color: "green",
    description: "ISO 14001 environmental management minimising our footprint through waste reduction, emission controls and resource optimisation.",
    details: [
      "ISO 14001:2015 EMS Certified",
      "Waste segregation & disposal",
      "Spill prevention & containment",
      "Emission monitoring programme",
      "Carbon footprint tracking",
    ],
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    body: "Quality Management System",
    status: "Active",
    year: "2018",
    scope: "Drilling & Oilfield Services",
  },
  {
    name: "ISO 14001:2015",
    body: "Environmental Management",
    status: "Active",
    year: "2019",
    scope: "All Kuwait Operations",
  },
  {
    name: "ISO 45001:2018",
    body: "OH&S Management System",
    status: "Active",
    year: "2020",
    scope: "Field & Office Operations",
  },
  {
    name: "KOC Approved",
    body: "Kuwait Oil Company",
    status: "Active",
    year: "2005",
    scope: "Drilling Contractor Category",
  },
];

const safetySteps = [
  { icon: ClipboardList, title: "Risk Assessment", desc: "Systematic identification and evaluation of workplace hazards before every operation." },
  { icon: Users, title: "Toolbox Talks", desc: "Daily pre-shift safety briefings reinforcing task-specific hazards and control measures." },
  { icon: Eye, title: "Site Audits", desc: "Scheduled and unannounced safety inspections verifying compliance with QHSE standards." },
  { icon: Flame, title: "Emergency Preparedness", desc: "Regular drills, trained response teams, and pre-positioned emergency equipment." },
  { icon: Radio, title: "Continuous Monitoring", desc: "24/7 real-time HSE performance tracking with digital reporting dashboards." },
  { icon: RefreshCw, title: "Incident Reporting", desc: "Open near-miss culture with structured root-cause analysis and corrective actions." },
];

const trainingPrograms = [
  { title: "Safety Leadership", hours: "40h", participants: "120+", icon: Users, color: "blue" },
  { title: "Emergency First Aid", hours: "16h", participants: "340+", icon: Heart, color: "rose" },
  { title: "H2S Awareness", hours: "8h", participants: "500+", icon: AlertTriangle, color: "blue" },
  { title: "IADC WellSharp", hours: "80h", participants: "90+", icon: Award, color: "green" },
  { title: "Fire Fighting", hours: "24h", participants: "280+", icon: Flame, color: "orange" },
  { title: "Environmental Awareness", hours: "12h", participants: "400+", icon: Leaf, color: "emerald" },
];

const envMetrics = [
  { label: "Waste Recycled", value: 78, unit: "%", icon: RefreshCw, color: "green" },
  { label: "Emission Reduction", value: 35, unit: "%", icon: TrendingDown, color: "emerald" },
  { label: "Water Reuse Rate", value: 62, unit: "%", icon: Activity, color: "cyan" },
  { label: "Zero Spill Sites", value: 100, unit: "%", icon: ShieldCheck, color: "blue" },
];

const safetyProjects = [
  { title: "South Kuwait Drilling Campaign", manhours: "2.4M", achievement: "Zero LTI", tag: "Land Drilling" },
  { title: "Offshore Platform Support", manhours: "800K", achievement: "100% Compliance", tag: "Offshore" },
  { title: "North Rumaila Workover", manhours: "1.1M", achievement: "Zero Incidents", tag: "Workover" },
  { title: "Directional Drilling — Block 4", manhours: "650K", achievement: "Perfect Safety Score", tag: "Directional" },
  { title: "Oman Multi-Well Programme", manhours: "1.8M", achievement: "Zero LTI", tag: "International" },
  { title: "Jordan Water Well Project", manhours: "320K", achievement: "Zero Incidents", tag: "Water Well" },
];

const downloadFiles = [
  { name: "KDC HSE Policy", desc: "HSE Policy Document I03-R02", icon: FileText, href: "https://www.kdckwt.com/wp-content/uploads/2025/05/KDC-HSE-Policy-I03-R02.pdf", size: "PDF" },
  { name: "HSE Performance Report 2025", desc: "Annual HSE Performance Statistics", icon: BarChart2, href: "http://www.kdckwt.com/wp-content/uploads/2025/05/HSE-Performance-2025.pdf", size: "PDF" },
  { name: "QHSE Manual", desc: "Integrated Management System Manual", icon: BookOpen, href: "#", size: "PDF" },
  { name: "Compliance Documents", desc: "Regulatory & Certification Package", icon: Lock, href: "#", size: "PDF" },
];

// ─── STAT COUNTER CARD ────────────────────────────────────────────────────────
function KpiCard({ item, inView }: { item: typeof kpiData[0]; inView: boolean }) {
  const count = useCountUp(
    item.decimals === 2 ? item.value * 100 : item.value,
    2200,
    inView
  );
  const display =
    item.decimals === 2
      ? (count / 100).toFixed(2)
      : count.toLocaleString();
  return (
    <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-white/8 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className={`text-4xl font-bold font-display mb-1 ${item.color}`}>
          {item.prefix}{display}{item.suffix}
        </div>
        <div className="text-slate-400 text-sm mb-4">{item.label}</div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-current transition-all duration-1000 ${item.color}`}
            style={{ width: inView ? `${item.bar}%` : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── PILLAR CARD ──────────────────────────────────────────────────────────────
function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
  const [open, setOpen] = useState(false);
  const colorMap: Record<string, string> = {
    blue: "bg-blue-600/15 text-blue-400 border-blue-500/30 group-hover:bg-blue-600",
    rose: "bg-rose-600/15 text-rose-400 border-rose-500/30 group-hover:bg-rose-600",
    blue: "bg-blue-700/15 text-blue-600 border-blue-500/30 group-hover:bg-blue-700",
    green: "bg-green-600/15 text-green-400 border-green-500/30 group-hover:bg-green-600",
  };
  const Icon = pillar.icon;
  return (
    <div className="group flex flex-col bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300">
      <div className="p-7 flex-1">
        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors duration-300 ${colorMap[pillar.color]}`}>
          <Icon className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-3">{pillar.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
      </div>
      {/* Expand */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-7 py-3.5 bg-slate-700/40 text-slate-300 text-xs font-semibold uppercase tracking-widest hover:bg-slate-700/70 transition-colors"
      >
        <span>{open ? "Hide Details" : "View Details"}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <ul className="px-7 py-5 bg-slate-900/60 space-y-2 border-t border-slate-700">
          {pillar.details.map((d) => (
            <li key={d} className="flex items-center gap-2.5 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function QHSEPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const kpiRef = useRef<HTMLDivElement>(null);
  const [kpiInView, setKpiInView] = useState(false);
  const envRef = useRef<HTMLDivElement>(null);
  const [envInView, setEnvInView] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const makeObserver = (
      el: HTMLDivElement | null,
      setter: (v: boolean) => void
    ) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    };
    makeObserver(kpiRef.current, setKpiInView);
    makeObserver(envRef.current, setEnvInView);
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function closeVideo() {
    setVideoOpen(false);
    videoRef.current?.pause();
  }

  return (
    <>
      <Header />

      {/* Sticky side nav — desktop only */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        {["Hero","Philosophy","Pillars","KPIs","Certifications","Safety Culture","Training","Environment","Projects","Emergency","Leadership","Downloads","CTA"].map((s, i) => (
          <a
            key={s}
            href={`#section-${i}`}
            title={s}
            className="w-2 h-2 rounded-full bg-slate-400/40 hover:bg-blue-500 hover:scale-150 transition-all duration-200"
          />
        ))}
      </div>

      <main>

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section id="section-0" className="relative min-h-[90vh] flex items-center overflow-hidden">
          <img src="/images/qhse-hero-bg.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          {/* Floating stat pills */}
          <div className="absolute top-24 right-8 md:right-20 flex flex-col gap-3 hidden md:flex">
            {[
              { v: "9M+", l: "Safe Manhours / yr" },
              { v: "0", l: "Lost Time Injuries" },
              { v: "100%", l: "Compliance Rate" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded-full pl-2 pr-5 py-2">
                <span className="w-10 h-10 rounded-full bg-blue-600/60 flex items-center justify-center text-white font-bold text-xs font-display shrink-0">{s.v}</span>
                <span className="text-white/80 text-xs font-medium">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">QHSE</span>
            </nav>

            <p className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Quality · Health · Safety · Environment</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight text-balance max-w-3xl mb-6 drop-shadow-lg">
              Committed to Quality,<br />
              <span className="text-blue-400">Health, Safety</span><br />
              &amp; Environment
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              At KDC, QHSE is not a department — it&apos;s the foundation of every decision, every operation, every day across all our sites.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#section-4"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg font-display tracking-wide"
              >
                <Award className="w-4 h-4" />
                View Certifications
              </a>
              <a
                href="https://www.kdckwt.com/wp-content/uploads/2025/05/KDC-HSE-Policy-I03-R02.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/30 transition-colors font-display tracking-wide"
              >
                <Download className="w-4 h-4" />
                Download HSE Policy
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-sm transition-colors shadow-lg font-display tracking-wide"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Watch QHSE Video
              </button>
            </div>
          </div>
        </section>

        {/* ── 2. PHILOSOPHY ────────────────────────────────────────────────── */}
        <section id="section-1" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">Our Safety Philosophy</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance leading-tight">
                Safety Is Our<br />Core Value
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-[15px]">
                Kuwait Drilling Company provides a wide range of drilling services for the Oil &amp; Gas industry both globally and regionally. KDC&apos;s core values focus on meeting the expectation of the customer, regulatory and international standards for Health, Safety, and Environment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">
                Beyond compliance, we are committed to continuous improvement under HSE through leadership commitment and the efforts of our employees and business partners. <strong className="text-slate-800">KDC empowers each and every employee to STOP WORK</strong> if any action or condition is considered unsafe.
              </p>

              {/* Vertical principles */}
              <div className="space-y-4">
                {[
                  { icon: Target, label: "Leadership-driven safety culture" },
                  { icon: Users, label: "Employee empowerment at every level" },
                  { icon: Globe, label: "Beyond compliance — continuous improvement" },
                  { icon: Zap, label: "Stop Work Authority for all personnel" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-blue-600" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/images/qhse-philosophy.png" alt="KDC Safety team conducting toolbox talk" className="w-full h-full object-cover" />
              </div>
              {/* Floating HSE icon badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <img
                  src="https://www.kdckwt.com/wp-content/uploads/2022/06/HSE-Icon-02-Transparent-PNG-600x271.png"
                  alt="KDC HSE Icon"
                  className="h-14 w-auto object-contain"
                />
              </div>
              {/* Stat badge */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-xl p-4 shadow-xl text-center">
                <div className="font-display text-2xl font-bold">9M+</div>
                <div className="text-blue-200 text-xs">Safe manhours/yr</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CORE PILLARS ──────────────────────────────────────────────── */}
        <section id="section-2" className="py-24 px-6 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Core QHSE Pillars</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Four Foundations of Excellence</h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">Each pillar represents a systematic, certified commitment — audited, measured and continuously improved.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((p) => <PillarCard key={p.title} pillar={p} />)}
            </div>
          </div>
        </section>

        {/* ── 4. KPI DASHBOARD ─────────────────────────────────────────────── */}
        <section id="section-3" className="py-24 px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Performance Dashboard</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance">QHSE KPI Metrics</h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">Live-tracked performance indicators demonstrating our industry-leading safety record.</p>
            </div>
            <div ref={kpiRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {kpiData.map((item) => (
                <KpiCard key={item.label} item={item} inView={kpiInView} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CERTIFICATIONS ────────────────────────────────────────────── */}
        <section id="section-4" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Certifications & Compliance</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Internationally Certified</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed">Our certifications are maintained through rigorous audits, ensuring world-class compliance standards.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert) => (
                <div key={cert.name} className="group relative flex flex-col border border-slate-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Verified badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-200">
                      <CheckCircle2 className="w-3 h-3" /> {cert.status}
                    </span>
                    <span className="text-slate-400 text-xs">Since {cert.year}</span>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <ShieldCheck className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{cert.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold mb-2">{cert.body}</p>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{cert.scope}</p>
                  <button className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    <Download className="w-3.5 h-3.5" /> Download Certificate
                  </button>
                </div>
              ))}
            </div>
            {/* Certification timeline */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-display text-lg font-bold text-slate-800 md:w-40 shrink-0">Certification Timeline</h3>
              <div className="flex-1 hidden md:block h-0.5 bg-blue-200 mx-4" />
              {certifications.map((cert, i) => (
                <div key={cert.name} className="flex flex-col items-center text-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center font-display shadow">{cert.year}</div>
                  <span className="text-slate-700 text-xs font-semibold mt-1">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. SAFETY CULTURE ────────────────────────────────────────────── */}
        <section id="section-5" className="py-24 px-6 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Safety Culture</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance">How We Operate Safely</h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">A step-by-step workflow embedded into every operation, every shift, every day.</p>
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-10 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 opacity-30" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                {safetySteps.map((step, i) => {
                  const Icon = step.icon;
                  const active = activeStep === i;
                  return (
                    <button
                      key={step.title}
                      onClick={() => setActiveStep(i)}
                      className={`group flex flex-col items-center text-center p-5 rounded-2xl border transition-all duration-300 ${
                        active
                          ? "bg-blue-600 border-blue-500 shadow-xl shadow-blue-900/40"
                          : "bg-slate-800/60 border-slate-700 hover:border-blue-600/50 hover:bg-slate-800"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${active ? "bg-white/20" : "bg-slate-700 group-hover:bg-blue-600/20"}`}>
                        <Icon className={`w-6 h-6 ${active ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`} />
                      </div>
                      <div className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center mb-2 ${active ? "bg-white text-blue-600" : "bg-slate-600 text-slate-300"}`}>{i + 1}</div>
                      <span className={`text-xs font-bold leading-tight ${active ? "text-white" : "text-slate-300"}`}>{step.title}</span>
                    </button>
                  );
                })}
              </div>
              {/* Detail panel */}
              <div className="mt-8 p-8 bg-slate-800/60 border border-slate-700 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    {(() => { const Icon = safetySteps[activeStep].icon; return <Icon className="w-6 h-6 text-white" />; })()}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{safetySteps[activeStep].title}</h3>
                    <p className="text-slate-300 leading-relaxed">{safetySteps[activeStep].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. TRAINING ──────────────────────────────────────────────────── */}
        <section id="section-6" className="py-24 px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-end md:justify-between gap-8 mb-14">
              <div>
                <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Training & Development</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">Workforce Excellence</h2>
              </div>
              <p className="text-slate-400 text-sm max-w-xs mt-4 md:mt-0 leading-relaxed">12,000+ training hours conducted annually, building a safety-first workforce.</p>
            </div>
            <div className="relative overflow-x-auto pb-4">
              <div className="flex gap-5 min-w-max">
                {trainingPrograms.map((prog) => {
                  const Icon = prog.icon;
                  const colorMap: Record<string, string> = {
                    blue: "bg-blue-600/15 border-blue-500/30 text-blue-400",
                    rose: "bg-rose-600/15 border-rose-500/30 text-rose-400",
                    blue: "bg-blue-700/15 border-blue-500/30 text-blue-600",
                    green: "bg-green-600/15 border-green-500/30 text-green-400",
                    orange: "bg-orange-500/15 border-orange-500/30 text-orange-400",
                    emerald: "bg-emerald-600/15 border-emerald-500/30 text-emerald-400",
                  };
                  return (
                    <div key={prog.title} className="w-52 flex-shrink-0 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 group">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colorMap[prog.color]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-white mb-3">{prog.title}</h3>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Clock className="w-3.5 h-3.5" />{prog.hours} per cycle
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Users className="w-3.5 h-3.5" />{prog.participants} participants
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Training image */}
            <div className="mt-12 rounded-2xl overflow-hidden h-64 relative">
              <img src="/images/qhse-training.png" alt="KDC safety training drill" className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center px-10">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Annual Safety Drills</h3>
                  <p className="text-slate-300 text-sm max-w-sm">Mandatory emergency response drills conducted at all operational sites twice per year.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. ENVIRONMENT ───────────────────────────────────────────────── */}
        <section id="section-7" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-green-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Environmental Responsibility</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Protecting Our Environment</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed">ISO 14001 certified environmental management minimising our operational footprint across all sites.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                <img src="/images/qhse-environment.png" alt="KDC sustainable operations" className="w-full h-full object-cover" />
              </div>
              <div ref={envRef} className="grid grid-cols-2 gap-5">
                {envMetrics.map((m) => {
                  const Icon = m.icon;
                  const colorMap: Record<string, string> = {
                    green: "text-green-500 bg-green-50",
                    emerald: "text-emerald-500 bg-emerald-50",
                    cyan: "text-cyan-600 bg-cyan-50",
                    blue: "text-blue-600 bg-blue-50",
                  };
                  return (
                    <div key={m.label} className="flex flex-col border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colorMap[m.color]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="font-display text-3xl font-bold text-slate-900 mb-1">
                        {envInView ? m.value : 0}{m.unit}
                      </div>
                      <p className="text-slate-500 text-xs leading-snug">{m.label}</p>
                      <div className="mt-3 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-1000"
                          style={{ width: envInView ? `${m.value}%` : "0%" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ESG cards */}
            <div className="grid md:grid-cols-3 gap-5 mt-12">
              {[
                { title: "Waste Management", desc: "Strict waste segregation, recycling programmes, and certified disposal partners across all sites.", icon: RefreshCw },
                { title: "Emission Reduction", desc: "35% reduction in operational emissions through equipment efficiency upgrades and monitoring.", icon: TrendingDown },
                { title: "Resource Optimisation", desc: "Water reuse systems and energy-efficient equipment reducing resource consumption by 40%.", icon: Zap },
              ].map(({ title, desc, icon: Icon }) => (
                <div key={title} className="flex gap-4 p-6 border border-slate-200 rounded-xl hover:border-green-400 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 mb-1">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. PROJECTS SAFETY EXCELLENCE ────────────────────────────────── */}
        <section id="section-8" className="py-24 px-6 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Safety Excellence</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Projects Delivered Safely</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {safetyProjects.map((proj) => (
                <div key={proj.title} className="group relative rounded-2xl overflow-hidden bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <img src="/images/qhse-project-safety.png" alt={proj.title} className="w-full h-40 object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-blue-700/90 text-slate-900 text-xs font-bold rounded-full">{proj.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-white mb-3">{proj.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-4 h-4" />{proj.manhours} manhours
                      </div>
                      <div className="flex items-center gap-1.5 text-green-400 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />{proj.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. EMERGENCY RESPONSE ────────────────────────────────────────── */}
        <section id="section-9" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/qhse-emergency.png" alt="" aria-hidden className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-slate-900/80" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="md:flex md:items-end md:justify-between gap-8 mb-14">
              <div>
                <p className="text-red-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Emergency Response</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">Always Ready. Always Prepared.</h2>
              </div>
              <p className="text-slate-400 text-sm max-w-xs mt-4 md:mt-0 leading-relaxed">24/7 emergency response capabilities with trained teams on every active site.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Users, title: "Trained Response Teams", desc: "Dedicated first responders on every site, trained to OPITO standards." },
                { icon: ShieldCheck, title: "Safety Equipment", desc: "Pre-positioned fire, medical, and evacuation equipment across all facilities." },
                { icon: Radio, title: "Communication Systems", desc: "Multi-redundant comms with satellite backup for remote site operations." },
                { icon: Activity, title: "Site Readiness", desc: "Quarterly drills validating emergency readiness at every operational site." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. LEADERSHIP COMMITMENT ─────────────────────────────────────── */}
        <section id="section-10" className="py-24 px-6 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">Leadership Commitment</p>
            <div className="relative inline-block mb-8">
              <div className="absolute -top-4 -left-4 text-8xl text-blue-600/20 font-serif leading-none select-none">&ldquo;</div>
              <blockquote className="font-display text-2xl md:text-3xl font-bold text-white leading-relaxed text-balance relative z-10">
                Safety is not a priority that competes with our business — it is the foundation upon which every decision is made. At KDC, every employee has the authority, and the responsibility, to stop unsafe work.
              </blockquote>
              <div className="absolute -bottom-4 -right-4 text-8xl text-blue-600/20 font-serif leading-none select-none">&rdquo;</div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0NU6YcKMYEqn4H9EdvYbbZ0YRN3Mhn.png"
                alt="KDC Logo"
                className="h-12 w-auto object-contain opacity-80"
              />
              <div className="text-left">
                <div className="font-display font-bold text-white text-base">KDC Chairman</div>
                <div className="text-slate-400 text-sm">Kuwait Drilling CO. K.S.C.C.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. BUSINESS PARTNERS PORTAL ──────────────────────────────────── */}
        <section className="py-16 px-6 bg-blue-900/30 border-y border-blue-800/40">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-64 flex-shrink-0">
              <img
                src="https://www.kdckwt.com/wp-content/uploads/2022/06/BP-Meeting-Group-Photo-600x381.jpg"
                alt="KDC Business Partner meeting"
                className="rounded-xl w-full object-cover shadow-xl"
              />
            </div>
            <div className="flex-1">
              <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Business Partners Portal</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
                Collaborate on QHSE Standards
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-[15px]">
                We recognise that the value we bring to our customers is largely due to the coordination with our business partners. This portal facilitates the exchange of HSE-related information, KDC HSE-MS requirements, and the sharing of lessons learned.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://bp.kdckwt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors font-display"
                >
                  <ExternalLink className="w-4 h-4" /> Partner Login Portal
                </a>
                <span className="inline-flex items-center px-4 py-2.5 bg-white/10 text-white/60 rounded-xl text-xs border border-white/10">
                  Full portal coming soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. DOWNLOAD CENTER ───────────────────────────────────────────── */}
        <section id="section-11" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Download Center</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">QHSE Documentation</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed">Access our full library of QHSE policies, compliance documents, and certifications.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {downloadFiles.map((file) => {
                const Icon = file.icon;
                return (
                  <a
                    key={file.name}
                    href={file.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 mb-1">{file.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">{file.desc}</p>
                    <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold group-hover:gap-3 transition-all duration-200">
                      <Download className="w-3.5 h-3.5" />
                      Download {file.size}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 13. CTA ───────────────────────────────────────────────────────── */}
        <section id="section-12" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(37,99,235,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(16,185,129,0.1) 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-green-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Commitment</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Safety Is<br />
              <span className="text-blue-400">Everyone&apos;s</span><br />
              Responsibility
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Join us in building a safer, more sustainable oilfield industry. Contact our QHSE team or explore opportunities to join our workforce.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg font-display tracking-wide"
              >
                <Phone className="w-4 h-4" /> Contact QHSE Team
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm border border-white/30 transition-colors font-display tracking-wide"
              >
                <Users className="w-4 h-4" /> Join Our Workforce
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-12 text-slate-500 text-xs">
              {[
                { icon: Mail, label: "qhse@kdckwt.com" },
                { icon: Phone, label: "+965 XXXX XXXX" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" />{label}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── VIDEO MODAL ───────────────────────────────────────────────────────── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <video
              ref={videoRef}
              src="https://www.kdckwt.com/wp-content/uploads/2022/06/QHSE.mp4"
              controls
              autoPlay
              playsInline
              className="w-full aspect-video bg-black"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
