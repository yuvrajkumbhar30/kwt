'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Phone, Mail, Shield, Award,
  Settings, Users, Wrench, ClipboardCheck, HardHat,
  BarChart3, CheckCircle2, Layers, Activity,
  Gauge, FileText, Globe, Target, Timer, Download, Plus, X,
  Zap, ArrowUpRight, Wind, Anchor, AlertTriangle,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';

/* ─── Brand ──────────────────────────────────────────────────────────── */
const BRAND = '#1d4ed8';
const DARK  = '#0f172a';

/* ─── Animation variants ─────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 44 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function Reveal({ children, variants = fadeUp, custom = 0, className = '' }: {
  children: React.ReactNode;
  variants?: typeof fadeUp;
  custom?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Count-up hook ──────────────────────────────────────────────────── */
function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  if (active && !started.current) {
    started.current = true;
    const step = Math.ceil(target / (duration / 16));
    let curr = 0;
    const id = setInterval(() => {
      curr = Math.min(curr + step, target);
      setCount(curr);
      if (curr >= target) clearInterval(id);
    }, 16);
  }
  return count;
}

function StatCard({ value, suffix, label, icon: Icon, delay }: {
  value: number; suffix: string; label: string;
  icon: React.ElementType; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, inView);
  return (
    <Reveal custom={delay} className="h-full">
      <div
        ref={ref}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white h-full
                   hover:bg-white/15 hover:border-white/35 transition-all duration-300 group"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center mb-4 group-hover:bg-blue-500/50 transition-colors">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="text-3xl font-display font-bold text-white mb-1">
          {count}{suffix}
        </div>
        <p className="text-white/70 text-sm leading-snug">{label}</p>
      </div>
    </Reveal>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const capabilities = [
  { icon: Layers,        title: 'Casing Running',        desc: 'Full-service casing running from surface to production casing using automated hydraulic tools for repeatable, consistent make-up.' },
  { icon: Wrench,        title: 'Tubing Running',         desc: 'Production tubing and completion string installation with real-time torque monitoring and thread integrity verification.' },
  { icon: Activity,      title: 'Drill Pipe Handling',    desc: 'Efficient drill pipe, HWDP and drill collar tripping with certified crew and hydraulic handling equipment.' },
  { icon: ClipboardCheck, title: 'Completion Running',   desc: 'Premium completion equipment deployment including screens, packers, and intelligent completion systems.' },
  { icon: Gauge,          title: 'Hydraulic Power Units', desc: 'High-pressure HPU systems driving casing running tools, Iron Roughnecks, and power tongs for consistent torque delivery.' },
  { icon: BarChart3,      title: 'Torque Turn Monitoring', desc: 'Real-time electronic torque monitoring with graphical output, ensuring premium thread connections meet API and manufacturer specifications.' },
  { icon: Settings,       title: 'Handling Equipment',    desc: 'Full suite of elevators, slips, spiders, pick-up/lay-down systems and casing stabbing boards for safe tubular management.' },
  { icon: Shield,         title: 'Inspection & Maintenance', desc: 'Pre-job tubular inspection including drift, ring gauge, visual thread inspection, and torque compound application.' },
];

const trsServices = [
  'Casing running',
  'Tubing running',
  'Torque monitoring',
  'Pick-up / Lay-down',
  'Hammering',
  'Accessories',
  'Bucking services',
  'Thread washing',
  'Installation of control lines',
];

const equipmentTabs = [
  {
    label: 'Casing Running Tools',
    specs: [
      { key: 'Type',          val: 'Hydraulic Top-Drive CRT' },
      { key: 'Size Range',    val: '4.5" to 20"' },
      { key: 'Max Torque',    val: 'Up to 120,000 ft-lbs' },
      { key: 'Pressure',      val: '5,000 psi hydraulic system' },
      { key: 'Drive',         val: 'Top-drive compatible' },
      { key: 'Certification', val: 'API, ISO 9001, DNV' },
    ],
  },
  {
    label: 'Torque Monitoring',
    specs: [
      { key: 'System',        val: 'Electronic Torque Turn' },
      { key: 'Resolution',    val: '±0.5% full scale' },
      { key: 'Output',        val: 'Real-time graphical display' },
      { key: 'Logging',       val: 'Digital PDF reports per joint' },
      { key: 'Connectivity',  val: 'Wi-Fi / USB data export' },
      { key: 'Standards',     val: 'API RP 5C1, manufacturer specs' },
    ],
  },
  {
    label: 'Power Tongs',
    specs: [
      { key: 'Type',         val: 'Hydraulic Power Tongs' },
      { key: 'Size Range',   val: '2-3/8" to 30"' },
      { key: 'Torque',       val: 'Up to 200,000 ft-lbs' },
      { key: 'RPM',          val: '0–8 RPM variable' },
      { key: 'Mounting',     val: 'Rig floor / standalone' },
      { key: 'Standards',    val: 'API 7K, API 11E' },
    ],
  },
  {
    label: 'Handling Equipment',
    specs: [
      { key: 'Elevators',    val: 'Single/joint, rotary, bushing' },
      { key: 'Slips',        val: 'Manual / pneumatic / hydraulic' },
      { key: 'Spiders',      val: 'Rotary / flush-mounted' },
      { key: 'Stabbing Board', val: 'Adjustable man-riding type' },
      { key: 'Lay-down',     val: 'Hydraulic pick-up / lay-down' },
      { key: 'Certification', val: 'SWL marked, CE / DNV' },
    ],
  },
];

const processSteps = [
  { n: '01', title: 'Equipment Preparation', desc: 'Full pre-job inspection, calibration of torque monitoring systems, HPU testing, and equipment certification review.' },
  { n: '02', title: 'Site Mobilization',     desc: 'Crew and equipment mobilized to location with pre-job safety meeting, JSA completion, and rig-up coordination.' },
  { n: '03', title: 'Tubular Inspection',    desc: 'Each joint drifted, ring-gauged, visually inspected, thread-cleaned and compound applied prior to running.' },
  { n: '04', title: 'Running Operations',    desc: 'Casing or tubing run to target depth using automated CRT with continuous torque-turn monitoring on every connection.' },
  { n: '05', title: 'Torque Monitoring',     desc: 'Real-time electronic torque-turn data recorded per joint, verified against manufacturer targets, and reported digitally.' },
  { n: '06', title: 'Final Verification',    desc: 'Post-job report prepared, all connection data reviewed, wellhead spacing confirmed, and equipment rigged down safely.' },
];

const industries = [
  { icon: Globe,    label: 'Oil & Gas Drilling',   desc: 'Land and offshore drilling operations across Kuwait and GCC.' },
  { icon: Wind,     label: 'Offshore Operations',  desc: 'Platform and FPSO tubular running with marine-certified crews.' },
  { icon: Target,   label: 'Onshore Rigs',          desc: 'Desert and remote location operations with full logistics support.' },
  { icon: Wrench,   label: 'Workover Operations',   desc: 'Re-entry, re-completion, and workover tubular services.' },
  { icon: Layers,   label: 'Completion Services',   desc: 'Premium completion string deployment and intelligent well completions.' },
  { icon: Zap,      label: 'Energy Infrastructure', desc: 'Water and gas injection well tubular installation for reservoir management.' },
];

const whyKDC = [
  { icon: Users,         title: 'Experienced Crews',       desc: 'All TRS personnel are API-trained, IWCF/BOSIET certified and have minimum 5 years of field experience.' },
  { icon: Settings,      title: 'Advanced Equipment',      desc: 'Modern hydraulic CRTs, electronic torque monitoring and automated handling tools with full redundancy.' },
  { icon: HardHat,       title: 'Safety-First Culture',    desc: 'Zero-incident philosophy enforced through toolbox talks, JSAs, dropped-object prevention and red zone control.' },
  { icon: Globe,         title: 'Regional Expertise',      desc: 'Proven experience in Kuwaiti HP-HT formations, H2S exposure wells and KOC/NOC operator requirements.' },
  { icon: Timer,         title: '24/7 Reliable Support',   desc: 'Round-the-clock supervisory support, standby crew availability and rapid mobilization capability.' },
  { icon: BarChart3,     title: '99%+ Uptime',             desc: 'Rigorous preventive maintenance programs and redundant equipment packages ensure maximum operational uptime.' },
];

const safetyItems = [
  { icon: Shield,        title: 'Red Zone Elimination',    desc: 'Automated CRT keeps personnel out of the rotary table red zone — reducing crew exposure by over 50%.' },
  { icon: ClipboardCheck, title: 'QHSE Management',       desc: 'ISO 9001 and OHSAS 18001 certified systems with mandatory PTW, JSA, and daily safety audits.' },
  { icon: AlertTriangle, title: 'Dropped Object Prevention', desc: 'Full dropped-object prevention scheme with equipment tagging, securing, and pre-job inspection checklist.' },
  { icon: Award,         title: 'Crew Certifications',     desc: 'IWCF well control, BOSIET offshore survival, Rigger/Slinger, and manufacturer-specific CRT certification.' },
  { icon: Activity,      title: 'Torque Integrity Assurance', desc: 'Every connection verified electronically against API and premium thread targets with documented reports.' },
  { icon: FileText,      title: 'Regulatory Compliance',  desc: 'Full compliance with KOC, Kuwait Ministry of Oil, API RP 5C1, and ISO 11961 standards.' },
];

const galleryImages = [
  { src: '/images/trs-gallery-1.png', alt: 'Hydraulic power tongs torquing casing connection' },
  { src: '/images/trs-gallery-2.png', alt: 'Drill pipe racking on offshore rig' },
  { src: '/images/trs-gallery-3.png', alt: 'Torque turn monitoring system display' },
  { src: '/images/trs-gallery-4.png', alt: 'Thread inspection and cleaning' },
  { src: '/images/trs-gallery-5.png', alt: 'Tubular running crew coordinating on rig floor' },
  { src: '/images/trs-gallery-6.png', alt: 'Completion operations aerial view' },
];

const relatedServices = [
  { href: '/services/drilling-workover', label: 'Drilling & Workover',    icon: Settings },
  { href: '/services/water-well',         label: 'Water Well Drilling',    icon: Layers },
  { href: '/qhse',                         label: 'QHSE & Safety',          icon: Shield },
  { href: '/careers',                      label: 'Careers at KDC',         icon: Users },
];

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function TubularRunningPage() {
  const [activeTab, setActiveTab]       = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [lightbox, setLightbox]         = useState<number | null>(null);

  /* Parallax hero */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <>
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[600px] overflow-hidden flex items-center">
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 will-change-transform">
          <img
            src="/images/trs-hero.png"
            alt="Tubular Running Services KDC"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
          {/* Breadcrumb */}
          <Reveal custom={0}>
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-8 font-medium tracking-wide uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="hover:text-white transition-colors cursor-default">Services</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/90">Tubular Running Services</span>
            </nav>
          </Reveal>

          <div className="max-w-3xl">
            <Reveal custom={1}>
              <span className="inline-block mb-5 px-3 py-1 text-xs font-bold tracking-[0.3em] uppercase text-blue-300 border border-blue-400/40 rounded-full">
                Tubular Running Services
              </span>
            </Reveal>
            <Reveal custom={2}>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6 text-balance drop-shadow-lg">
                Precision Tubular<br />Running Excellence
              </h1>
            </Reveal>
            <Reveal custom={3}>
              <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Take control and deliver the casing with consistency and repeatability through a single touch. KDC&apos;s TRS integrates casing running tools with the rig to create a safer environment, reducing on-site personnel by over 50%.
              </p>
            </Reveal>
            <Reveal custom={4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                  style={{ backgroundColor: BRAND }}
                >
                  Contact Our Team <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" /> Download Brochure
                </a>
              </div>
            </Reveal>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <StatCard value={20}  suffix="+" label="Years of TRS experience"          icon={Award}         delay={0} />
            <StatCard value={100} suffix="%" label="Safety compliance rate"            icon={Shield}        delay={1} />
            <StatCard value={50}  suffix="%" label="Personnel reduction via automation" icon={Users}         delay={2} />
            <StatCard value={500} suffix="+" label="Wells completed successfully"       icon={ClipboardCheck} delay={3} />
          </div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <Reveal>
                <p className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase mb-4">TRS Integration</p>
              </Reveal>
              <Reveal custom={1}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 text-balance">
                  A Safer, Smarter<br />Approach to Tubular Running
                </h2>
              </Reveal>
              <Reveal custom={2}>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Tubular Running Services (TRS) integrates the Casing Running Tools with the rig to create a safer environment by keeping employees out of the red zone, reducing on-site personnel by over 50%.
                </p>
              </Reveal>
              <Reveal custom={3}>
                <p className="text-slate-600 leading-relaxed mb-10">
                  KDC&apos;s TRS crews are equipped with the latest hydraulic and electronic tools to ensure every casing, tubing, and drill pipe connection meets the highest thread integrity standards — all with real-time torque-turn data recorded and reported digitally.
                </p>
              </Reveal>

              {/* Capability badges */}
              <Reveal custom={4}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {trsServices.map((s, i) => (
                    <motion.div
                      key={s}
                      custom={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-sm font-semibold text-blue-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      {s}
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — image */}
            <Reveal variants={scaleIn}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/images/trs-overview.png"
                    alt="KDC Tubular Running Services overview"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-5 -left-5 rounded-2xl shadow-xl px-6 py-4 text-white flex items-center gap-4"
                  style={{ backgroundColor: DARK }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: BRAND }}>
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">Torque Monitored</p>
                    <p className="text-white/60 text-xs">Every Joint — Digitally Logged</p>
                  </div>
                </div>
                {/* Accent block */}
                <div className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl opacity-15" style={{ backgroundColor: BRAND }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. CAPABILITIES GRID ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Deliver</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Services & Capabilities</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Eight core capability areas covering every aspect of tubular handling and connection integrity.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const open = expandedCard === i;
              return (
                <Reveal key={cap.title} custom={i % 4} variants={scaleIn}>
                  <motion.div
                    layout
                    onClick={() => setExpandedCard(open ? null : i)}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-slate-100 rounded-2xl p-6 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors duration-300 group-hover:opacity-90"
                      style={{ backgroundColor: `${BRAND}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND }} />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-tight">{cap.title}</h3>
                    <AnimatePresence>
                      {open && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-slate-500 text-sm leading-relaxed mt-2 overflow-hidden"
                        >
                          {cap.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-bold" style={{ color: BRAND }}>
                      {open ? 'Show less' : 'Learn more'}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. EQUIPMENT & TECHNOLOGY ───────────────────────────────────── */}
      <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: DARK }}>
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(${BRAND} 1px, transparent 1px),
              linear-gradient(90deg, ${BRAND} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Technical Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">Equipment & Technology</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              Industry-leading tools maintained to API and manufacturer standards, ensuring precision on every run.
            </p>
          </Reveal>

          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {equipmentTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  backgroundColor: activeTab === i ? BRAND : 'rgba(255,255,255,0.07)',
                  color: activeTab === i ? '#fff' : 'rgba(255,255,255,0.55)',
                  border: activeTab === i ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Spec table */}
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <h3 className="font-display text-xl font-bold text-white">{equipmentTabs[activeTab].label}</h3>
                  <p className="text-slate-400 text-sm mt-1">Technical specifications</p>
                </div>
                <div className="divide-y divide-white/5">
                  {equipmentTabs[activeTab].specs.map((s) => (
                    <div key={s.key} className="flex justify-between items-center px-6 py-3.5">
                      <span className="text-slate-400 text-sm">{s.key}</span>
                      <span className="text-white text-sm font-semibold text-right max-w-[55%]">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment image */}
              <Reveal variants={scaleIn}>
                <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10">
                  <img
                    src="/images/trs-equipment.png"
                    alt="TRS equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 5. SAFETY & COMPLIANCE ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">Safety First</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Safety & Compliance</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Every TRS operation is governed by a zero-harm philosophy — from equipment preparation to final rig-down.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {safetyItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} custom={i}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(29,78,216,0.10)' }}
                    className="border border-slate-100 rounded-2xl p-7 bg-white transition-all duration-300 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${BRAND}12` }}>
                      <Icon className="w-5 h-5" style={{ color: BRAND }} />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          {/* Safety stat bar */}
          <Reveal>
            <div className="rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center" style={{ backgroundColor: DARK }}>
              {[
                { val: '0', label: 'LTI Incidents',           sub: 'Zero lost-time injuries on TRS operations' },
                { val: '50%', label: 'Personnel Reduction',   sub: 'Through CRT automation and red-zone elimination' },
                { val: '100%', label: 'Connection Reporting', sub: 'Torque-turn data logged for every joint' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="font-display text-4xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-blue-400 font-bold text-sm mb-1">{s.label}</div>
                  <div className="text-slate-500 text-xs leading-snug max-w-[200px]">{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. OPERATIONAL PROCESS ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">How We Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Operational Process</h2>
          </Reveal>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-slate-200 mx-16" />
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} custom={i}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-white text-lg mb-5 shadow-lg cursor-default"
                      style={{ backgroundColor: BRAND }}
                    >
                      {step.n}
                    </motion.div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-2 leading-snug">{step.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} custom={i}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0"
                      style={{ backgroundColor: BRAND }}
                    >
                      {step.n}
                    </div>
                    {i < processSteps.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-display font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. INDUSTRIES SERVED ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">Sectors We Serve</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Industries Served</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.label} custom={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden border border-slate-100 rounded-2xl p-7 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"
                      style={{ backgroundColor: BRAND }}
                    />
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${BRAND}12` }}>
                      <Icon className="w-6 h-6" style={{ color: BRAND }} />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{ind.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{ind.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. WHY KDC ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Our Advantage</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance">
                  Why Choose KDC<br />for Tubular Running?
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  With 20+ years of operational experience across Kuwait&apos;s most technically demanding wells, KDC delivers tubular running services that combine certified expertise, advanced equipment, and an unwavering commitment to zero-harm operations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                  style={{ backgroundColor: BRAND }}
                >
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyKDC.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} custom={i}>
                    <motion.div
                      whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.09)' }}
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${BRAND}25` }}>
                        <Icon className="w-5 h-5" style={{ color: '#93c5fd' }} />
                      </div>
                      <h3 className="font-display font-bold text-white text-sm mb-1.5">{item.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. GALLERY ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-blue-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">Field Operations</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Gallery</h2>
          </Reveal>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} custom={i % 3}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                  onClick={() => setLightbox(i)}
                >
                  <img src={img.src} alt={img.alt} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                    <Plus className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-5xl w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 10. CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div
              className="rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
              style={{ backgroundColor: BRAND }}
            >
              {/* Watermark */}
              <div
                className="absolute -right-16 -top-16 font-display text-[220px] font-black opacity-[0.04] text-white leading-none select-none pointer-events-none"
                aria-hidden
              >
                KDC
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-blue-200 text-xs font-bold tracking-[0.3em] uppercase mb-4">Get in Touch</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5 text-balance">
                    Reliable Tubular Running Solutions for Critical Operations
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Contact our TRS specialists to discuss your well program, equipment requirements, or mobilization timelines.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+96500000000"
                    className="flex items-center gap-4 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors rounded-xl px-6 py-4 group"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Call Us</p>
                      <p className="text-white font-bold">+965 XXXX XXXX</p>
                    </div>
                  </a>
                  <a
                    href="mailto:trs@kdckwt.com"
                    className="flex items-center gap-4 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors rounded-xl px-6 py-4 group"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Email Us</p>
                      <p className="text-white font-bold">trs@kdckwt.com</p>
                    </div>
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold rounded-xl px-6 py-4 hover:bg-blue-50 transition-colors mt-2 shadow-lg"
                  >
                    Send an Inquiry <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 11. RELATED SERVICES ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-slate-900">Related Services</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.label} custom={i}>
                  <Link href={svc.href}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="flex items-center gap-4 bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md rounded-2xl p-5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity" style={{ backgroundColor: `${BRAND}12` }}>
                        <Icon className="w-5 h-5" style={{ color: BRAND }} />
                      </div>
                      <div>
                        <p className="font-display font-bold text-slate-900 text-sm leading-snug">{svc.label}</p>
                        <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                          View service <ArrowRight className="w-3 h-3" />
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
