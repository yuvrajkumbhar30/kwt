'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronRight, ArrowRight, Phone, Mail, Shield, Award, Zap,
  Settings, Users, Wrench, ClipboardCheck, HardHat, Droplets,
  BarChart3, CheckCircle2, Search, Layers, Activity, Cpu,
  FlaskConical, Leaf, Mountain, Gauge, FileText, Globe,
  Target, Timer, ThumbsUp, Star, MapPin, Download, Plus, X,
  ChevronDown,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';

/* ─── Brand tokens ───────────────────────────────────────────────── */
const RED   = '#C0182A';   // KDC deep red
const DARK  = '#1a1a1a';   // charcoal

/* ─── Hooks ──────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Data ───────────────────────────────────────────────────────── */
const heroStats = [
  { value: 35,   suffix: '+', label: 'Years Experience' },
  { value: 250,  suffix: '+', label: 'Wells Drilled' },
  { value: 100,  suffix: '%', label: 'Safety Compliance' },
  { value: 98,   suffix: '%', label: 'Project Success' },
];

const coreServices = [
  { icon: Droplets,      title: 'Water Well Drilling',        desc: 'Rotary and percussion drilling to depths of 600m+ for industrial, municipal, and agricultural water supply projects across Kuwait and the GCC.' },
  { icon: Mountain,      title: 'Water Supply Wells',         desc: 'Design, drilling, and development of high-capacity production wells for continuous water supply to industrial complexes and urban infrastructure.' },
  { icon: Activity,      title: 'Monitoring Wells',           desc: 'Dedicated groundwater monitoring boreholes for aquifer characterization, contamination tracking, and environmental compliance programs.' },
  { icon: Wrench,        title: 'Maintenance & Rehabilitation', desc: 'Comprehensive well rehabilitation services including mechanical brushing, chemical treatment, and pump inspection to restore yield and performance.' },
  { icon: Gauge,         title: 'Pump Installation',          desc: 'Supply and installation of submersible and turbine pumps with full electrical commissioning, control panels, and flow metering systems.' },
  { icon: FlaskConical,  title: 'Well Testing',               desc: 'Constant-rate pumping tests, step-drawdown tests, and water quality sampling to evaluate aquifer parameters and well efficiency.' },
  { icon: Search,        title: 'Hydrogeological Support',    desc: 'Expert hydrogeological assessment including geophysical surveys, borehole logging, and aquifer yield mapping for project feasibility.' },
  { icon: HardHat,       title: 'Site Preparation',           desc: 'Full site civil works including access roads, pad construction, sumps, and casing handling areas to mobilization-ready standard.' },
  { icon: Cpu,           title: 'Inspection & Logging',       desc: 'CCTV borehole inspection, caliper surveys, and geophysical logging to assess well condition, screen integrity, and sediment build-up.' },
  { icon: Leaf,          title: 'Environmental Support',      desc: 'Environmental baseline studies, effluent management, cuttings disposal, and post-drilling site restoration to regulatory standards.' },
];

const processSteps = [
  { num: '01', title: 'Site Survey',    icon: Search,        desc: 'Geophysical survey, hydrogeological mapping, and site feasibility assessment to determine optimal drill location and expected yield.' },
  { num: '02', title: 'Planning',       icon: FileText,      desc: 'Well design, casing programme, drilling fluid selection, and HSE risk assessment with full stakeholder alignment.' },
  { num: '03', title: 'Drilling',       icon: Droplets,      desc: 'Rotary or cable percussion drilling using certified rigs, with real-time monitoring of formation, yield, and water quality indicators.' },
  { num: '04', title: 'Installation',   icon: Settings,      desc: 'Well casing, screen and gravel pack installation, pump and control panel commissioning to specification.' },
  { num: '05', title: 'Testing',        icon: Gauge,         desc: 'Pumping tests, water quality sampling, yield verification, and full performance documentation for client handover.' },
  { num: '06', title: 'Maintenance',    icon: Wrench,        desc: 'Scheduled preventive maintenance, annual inspection, rehabilitation when required, and 24/7 emergency response.' },
];

const equipment = [
  { title: 'Rotary Drilling Rigs',       spec: 'Up to 600 m depth capacity', badge: 'Advanced Technology', icon: Layers },
  { title: 'Cable Tool Percussion Rigs', spec: 'Hard rock & overburden drilling', badge: 'High Efficiency',     icon: Zap },
  { title: 'Submersible Pump Units',     spec: '2" – 20" diameter, variable flow',badge: 'Safety Certified',    icon: Gauge },
  { title: 'Geophysical Survey Tools',   spec: 'ERT, seismic, and EM methods',  badge: 'Advanced Technology', icon: Activity },
  { title: 'Borehole Camera Systems',    spec: 'HD CCTV to 600 m depth',         badge: 'High Efficiency',     icon: Cpu },
  { title: 'Water Quality Analysers',    spec: 'Real-time field laboratory',      badge: 'Safety Certified',    icon: FlaskConical },
];

const safetyKpis = [
  { label: 'Zero Harm Vision',     value: 0,   suffix: ' LTI', desc: 'Lost time incidents in the past 5 years' },
  { label: 'Safety Compliance',    value: 100, suffix: '%',    desc: 'Adherence to ISO 9001 & OSHAS 18001' },
  { label: 'Trained Workforce',    value: 500, suffix: '+',    desc: 'IWCF and KOC-certified personnel' },
  { label: 'Operational Reliability', value: 98, suffix: '%',  desc: 'Equipment uptime and availability' },
];

const gallery = [
  { src: '/images/ww-gallery-1.png', label: 'Desert Drilling Operations',   size: 'large' },
  { src: '/images/ww-gallery-2.png', label: 'Pump Installation & Testing',  size: 'small' },
  { src: '/images/ww-gallery-3.png', label: 'Well Infrastructure Network',  size: 'small' },
  { src: '/images/ww-gallery-4.png', label: 'Flow Rate Testing',            size: 'small' },
  { src: '/images/ww-gallery-5.png', label: 'Site Survey & Assessment',     size: 'small' },
  { src: '/images/ww-gallery-6.png', label: 'Night Drilling Operations',    size: 'large' },
];

const whyKdc = [
  { icon: Users,         title: 'Experienced Workforce',  desc: '35+ years of deep domain expertise in arid-region water well drilling with certified IWCF and KOC-approved personnel.' },
  { icon: Layers,        title: 'Advanced Equipment',     desc: 'Modern rotary and percussion rig fleet maintained to OEM specifications with full spares inventory.' },
  { icon: ThumbsUp,      title: 'Reliable Operations',    desc: '98% project success rate and 99%+ equipment availability powered by rigorous maintenance programs.' },
  { icon: Globe,         title: 'Regional Expertise',     desc: 'Proven performance across Kuwait, Oman, Jordan, and wider GCC — deep knowledge of regional aquifer conditions.' },
  { icon: Shield,        title: 'Safety Commitment',      desc: 'Zero LTI over 5 years. ISO 9001 and OSHAS 18001 certified. HSE embedded at every operational level.' },
  { icon: Star,          title: 'Client Satisfaction',    desc: 'Repeat contracts with Kuwait Oil Company, Ministry of Electricity & Water, and major international operators.' },
];

const relatedServices = [
  { title: 'Drilling & Workover',    href: '/services/drilling-workover', icon: HardHat,      desc: 'Full-service drilling and workover operations for oil and gas wells.' },
  { title: 'Directional Drilling',   href: '#',                           icon: Target,       desc: 'Precision directional and horizontal drilling with MWD/LWD technology.' },
  { title: 'BHA Rental',             href: '#',                           icon: Settings,     desc: 'Complete bottom hole assembly equipment rental and support.' },
  { title: 'Fishing Services',       href: '#',                           icon: Award,        desc: 'Wellbore remediation and stuck pipe recovery operations.' },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
function StatCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 text-center min-w-[130px]">
      <div className="text-3xl font-bold text-white font-display">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-xs mt-1 tracking-wide uppercase">{label}</div>
    </div>
  );
}

function ServiceCard({ svc }: { svc: typeof coreServices[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = svc.icon;
  return (
    <div
      className="group relative bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4
                 hover:border-red-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => setOpen(!open)}
    >
      {/* Red top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        style={{ backgroundColor: open ? RED : '#fef2f2' }}
      >
        <Icon className={`w-6 h-6 transition-colors duration-300 ${open ? 'text-white' : 'text-red-600'}`} />
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{svc.title}</h3>
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-slate-600 text-sm leading-relaxed mb-3">{svc.desc}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 text-red-600 text-sm font-semibold mt-auto">
        <span>{open ? 'Show Less' : 'Learn More'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
    </div>
  );
}

function EquipmentCard({ item }: { item: typeof equipment[0] }) {
  const Icon = item.icon;
  const badgeColor = item.badge === 'Advanced Technology' ? 'bg-blue-500/20 text-blue-300'
    : item.badge === 'High Efficiency' ? 'bg-amber-500/20 text-amber-300'
    : 'bg-green-500/20 text-green-300';
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
          <Icon className="w-6 h-6 text-red-400 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>{item.badge}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
      <p className="text-slate-400 text-sm">{item.spec}</p>
    </div>
  );
}

function SafetyCounter({ item, active }: { item: typeof safetyKpis[0]; active: boolean }) {
  const count = useCountUp(item.value, 2000, active);
  return (
    <div className="text-center">
      <div className="text-5xl font-display font-bold mb-1" style={{ color: RED }}>
        {count}{item.suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1">{item.label}</div>
      <div className="text-slate-400 text-sm">{item.desc}</div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function WaterWellPage() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const statsRef = useInView(0.3);
  const safetyRef = useInView(0.3);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <Header />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden"
      >
        {/* Background image */}
        <img
          src="/images/ww-hero.png"
          alt="Water Well Drilling Operations"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        {/* Red left accent strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: RED }} />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 md:left-12 flex items-center gap-2 text-white/60 text-sm z-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/40">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white">Water Well</span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <div className="mb-3 flex items-center gap-3">
            <div className="w-10 h-0.5" style={{ backgroundColor: RED }} />
            <span className="text-red-400 text-xs font-bold tracking-[0.3em] uppercase">KDC Water Well Division</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none text-balance mb-5 tracking-tight">
            Water Well<br />
            <span style={{ color: RED }}>Services</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Kuwait Drilling CO. delivers world-class water well drilling, pump installation, and well maintenance services across the GCC — combining 35+ years of operational expertise with cutting-edge technology to secure vital water resources for industry and infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="px-8 py-3.5 font-bold text-white rounded-lg text-sm transition-colors"
              style={{ backgroundColor: RED }}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 font-bold text-white rounded-lg text-sm border border-white/30 hover:bg-white/10 transition-colors"
            >
              Request Proposal
            </Link>
          </div>

          {/* Stats strip */}
          <div ref={statsRef.ref} className="flex flex-wrap gap-4">
            {heroStats.map((s) => (
              <StatCard key={s.label} {...s} active={statsRef.inView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <div className="relative">
            <img
              src="/images/ww-overview.png"
              alt="Water well drilling operations in Kuwait"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 hidden md:flex bg-white rounded-2xl shadow-xl p-5 border border-slate-100 flex-col items-center gap-1 min-w-[130px]">
              <Droplets className="w-7 h-7" style={{ color: RED }} />
              <span className="font-display text-2xl font-bold text-slate-900">250+</span>
              <span className="text-xs text-slate-500 text-center">Wells Drilled</span>
            </div>
            {/* Red corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-tl-2xl border-t-4 border-l-4" style={{ borderColor: RED }} />
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>Overview</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance">
              Securing Water Resources for the GCC
            </h2>
            <p className="text-slate-600 leading-relaxed">
              As one of the region&apos;s most experienced water well drilling contractors, KDC brings a rare combination of subsurface expertise, modern rig technology, and deep familiarity with Kuwait&apos;s geological formations to every project we undertake.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our multidisciplinary teams handle the entire project lifecycle — from hydrogeological survey and site preparation through drilling, pump installation, well testing, and long-term maintenance — ensuring water supply security for government, industrial, and agricultural clients.
            </p>

            {/* Four highlights */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { icon: Award,          label: 'Deep Expertise',          sub: '35+ years in arid environments' },
                { icon: Cpu,            label: 'Modern Technology',       sub: 'Latest rotary & percussion rigs' },
                { icon: Users,          label: 'Skilled Manpower',        sub: 'IWCF & KOC-certified crews' },
                { icon: BarChart3,      label: 'Operational Efficiency',  sub: '98% project completion rate' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#fef2f2' }}>
                    <Icon className="w-5 h-5" style={{ color: RED }} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{label}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE SERVICES GRID ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>What We Do</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From initial hydrogeological survey to long-term maintenance, our full-spectrum water well services cover every phase of the project lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {coreServices.map((svc) => (
              <ServiceCard key={svc.title} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OPERATIONAL CAPABILITIES / PROCESS ───────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>How We Work</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Operational Process</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A disciplined six-stage workflow ensuring every well is delivered on time, to spec, and to the highest safety standards.</p>
          </div>

          {/* Horizontal steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(8.33%+28px)] right-[calc(8.33%+28px)] h-0.5 bg-slate-200 z-0" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative z-10 flex flex-col items-center text-center gap-3">
                    {/* Step bubble */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border-2 bg-white font-display text-xl font-bold shadow-md"
                      style={{ borderColor: RED, color: RED }}
                    >
                      {i + 1}
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#fef2f2' }}>
                      <Icon className="w-5 h-5" style={{ color: RED }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. EQUIPMENT & TECHNOLOGY ───────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: DARK }}>
        {/* Background image overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
          <img src="/images/ww-equipment.png" alt="" className="w-full h-full object-cover" aria-hidden />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-red-400">Our Fleet</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Equipment & Technology</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              KDC deploys a modern, fully certified fleet of water well drilling and testing equipment, maintained to OEM standards for maximum reliability in harsh desert conditions.
            </p>
          </div>

          {/* Full-width equipment image */}
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <img
              src="/images/ww-equipment.png"
              alt="KDC water well drilling equipment"
              className="w-full aspect-[21/6] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div className="max-w-md">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-2">KDC Fleet</p>
                <h3 className="font-display text-3xl font-bold text-white mb-3">Modern Certified Rig Fleet</h3>
                <p className="text-white/70 text-sm leading-relaxed">All equipment maintained to API, ISO, and manufacturer specifications with full traceability documentation available on request.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item) => (
              <EquipmentCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SAFETY & QUALITY ─────────────────────────────────────── */}
      <section ref={safetyRef.ref} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — counters + badges */}
            <div className="grid grid-cols-2 gap-8">
              {safetyKpis.map((item) => (
                <SafetyCounter key={item.label} item={item} active={safetyRef.inView} />
              ))}

              {/* Certification badges */}
              <div className="col-span-2 flex flex-wrap gap-3 mt-4">
                {['ISO 9001:2015', 'OSHAS 18001', 'API Q1', 'KOC Approved', 'MOW Certified'].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 rounded-full text-sm font-bold border-2 text-red-700 bg-red-50"
                    style={{ borderColor: RED }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — text */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
                <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>Safety First</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-slate-900 leading-tight">
                Zero-Harm Culture, Every Project
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At KDC, safety is not a compliance exercise — it is a deeply embedded cultural value. Our zero-harm philosophy is enforced through rigorous permit-to-work systems, daily toolbox talks, mandatory PPE, and continuous workforce training.
              </p>
              <ul className="space-y-3">
                {[
                  'Dedicated HSE officers on every site',
                  'Pre-task risk assessments for all operations',
                  'Emergency response plans and drills',
                  'Real-time incident reporting and analysis',
                  'Management of Change (MOC) procedures',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: RED }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. PROJECT SHOWCASE / GALLERY ───────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>Gallery</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Project Showcase</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A selection of completed water well projects demonstrating KDC&apos;s operational range and technical capability.</p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl cursor-zoom-in ${img.size === 'large' ? 'md:col-span-2 row-span-1' : ''}`}
                style={{ aspectRatio: img.size === 'large' ? '16/7' : '4/3' }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white font-bold text-sm font-display">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Project detail"
            className="max-w-5xl w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── 8. WHY KDC ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-red-400">Why Choose Us</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Why KDC?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Six reasons why governments, operators, and infrastructure companies trust KDC with their most critical water well projects.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyKdc.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500 blur-xl" />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(192,24,42,0.15)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: RED }} />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA BANNER ───────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-white relative overflow-hidden"
        style={{ backgroundColor: RED }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
            Partner With Kuwait&apos;s Trusted Water Well Experts
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a single production well or a multi-borehole water supply scheme, KDC&apos;s team is ready to deliver. Contact us today for a tailored proposal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-9 py-4 bg-white rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
              style={{ color: RED }}
            >
              Contact Team
            </Link>
            <a
              href="#"
              className="px-9 py-4 border-2 border-white/60 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Company Profile
            </a>
          </div>

          {/* Quick contact */}
          <div className="flex flex-wrap gap-8 justify-center mt-10 text-sm text-white/80">
            <a href="tel:+96522262660" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +965 2226 2660
            </a>
            <a href="mailto:info@kdckwt.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@kdckwt.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Kuwait City, Kuwait
            </span>
          </div>
        </div>
      </section>

      {/* ── 10. RELATED SERVICES ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: RED }}>Explore More</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Related Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map(({ icon: Icon, title, href, desc }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-red-300 hover:shadow-lg hover:bg-white transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: '#fef2f2' }}
                >
                  <Icon className="w-6 h-6" style={{ color: RED }} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-1 group-hover:text-red-700 transition-colors">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold mt-auto" style={{ color: RED }}>
                  View Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky floating contact button */}
      <a
        href="/contact"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold text-sm shadow-2xl hover:shadow-red-500/30 transition-all"
        style={{ backgroundColor: RED }}
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Contact Us</span>
      </a>

      <Footer />
    </>
  );
}
