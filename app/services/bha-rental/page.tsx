'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Phone, Mail, Shield, Award,
  Settings, Wrench, ClipboardCheck, HardHat, BarChart3,
  CheckCircle2, Layers, Activity, Gauge, FileText, Target,
  Timer, Download, Plus, X, Zap, Package, Anchor, Hammer,
  AlertTriangle, TrendingUp, Users, Truck, Search,
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
    const tick = () => {
      curr = Math.min(curr + step, target);
      setCount(curr);
      if (curr < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  return count;
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const HERO_STATS = [
  { label: 'High Reliability', icon: Shield },
  { label: 'API Standard Equipment', icon: Award },
  { label: 'Fast Deployment', icon: Zap },
  { label: 'Technical Support', icon: Users },
];

const EQUIPMENT_CATEGORIES = [
  {
    id: 'stabilizers',
    title: 'Stabilizers',
    icon: Layers,
    image: '/images/bha-stabilizer.png',
    description:
      'KDC stabilizers provide reliable string stabilization across varied formation profiles, minimizing vibration and maintaining directional accuracy throughout the drilling program.',
    features: ['String Stabilization', 'Reduced Vibration', 'Improved Directional Control'],
    specs: [
      { label: 'Sizes', value: '4¾" – 17½"' },
      { label: 'Material', value: 'High-Alloy Steel' },
      { label: 'Connection', value: 'API Reg / IF' },
      { label: 'Gauge Length', value: 'Up to 24"' },
    ],
  },
  {
    id: 'drill-collars',
    title: 'Drill Collars',
    icon: Hammer,
    image: '/images/bha-drill-collar.png',
    description:
      'Our precision-machined drill collars deliver the required weight-on-bit for optimized drilling performance in demanding HP-HT and H2S environments. Full API inspection on every rental unit.',
    features: ['High Strength Steel', 'Precision Machined', 'Improved Drilling Efficiency'],
    specs: [
      { label: 'OD Range', value: '3⅛" – 11"' },
      { label: 'Standard', value: 'API 7-1' },
      { label: 'Connections', value: 'NC/IF/Reg/HT' },
      { label: 'Lengths', value: '30 ft / 20 ft' },
    ],
  },
  {
    id: 'drilling-jars',
    title: 'Drilling Jars',
    icon: Zap,
    image: '/images/bha-jar.png',
    description:
      'Hydraulic drilling jars provide high-impact jarring force to free stuck pipe in challenging formations, reducing costly non-productive time and safeguarding the entire bottom hole assembly.',
    features: ['Hydraulic Performance', 'High Impact Force', 'Reliable Downhole Operation'],
    specs: [
      { label: 'Type', value: 'Hydraulic / Mechanical' },
      { label: 'Jar Force', value: 'Up to 500,000 lbf' },
      { label: 'Temperature', value: 'Up to 400°F' },
      { label: 'Pressure Rating', value: '15,000 psi' },
    ],
  },
  {
    id: 'shock-subs',
    title: 'Shock Subs',
    icon: Activity,
    image: '/images/bha-shock-sub.png',
    description:
      'KDC shock subs absorb axial and torsional vibrations transmitted through the drill string, protecting expensive MWD/LWD tools and bit assemblies from fatigue damage in rough formations.',
    features: ['Tool Protection', 'Reduced Equipment Stress', 'Extended Tool Life'],
    specs: [
      { label: 'Load Capacity', value: 'Up to 250,000 lbs' },
      { label: 'Reduction', value: 'Up to 80% vibration' },
      { label: 'OD Range', value: '4¾" – 9½"' },
      { label: 'Rating', value: 'API Standard' },
    ],
  },
];

const WHY_KDC = [
  { icon: Users,         title: 'Experienced Oilfield Team',    desc: 'Senior engineers and field technicians with decades of BHA operations across Kuwait and the GCC.' },
  { icon: ClipboardCheck, title: 'High Quality Maintenance',    desc: 'Every rental tool undergoes full pre-run inspection, dimensional verification, and API drift testing.' },
  { icon: Award,         title: 'API Standard Compliance',      desc: 'All equipment manufactured and maintained to API Spec 7-1 standards with traceability records.' },
  { icon: Zap,           title: 'Fast Equipment Availability',  desc: 'Pre-mobilized tool inventory and standby stock ensure rapid deployment to any Kuwait or GCC location.' },
  { icon: Shield,        title: 'Operational Reliability',      desc: 'Proven performance track record across deep HP-HT and H2S wells operated by NOC operators.' },
  { icon: Wrench,        title: 'Technical Support & Inspection', desc: 'Dedicated on-site support engineers available for pre-run checks, BHA design, and post-run analysis.' },
];

const COUNTERS = [
  { label: 'Years Experience',    value: 30,  suffix: '+' },
  { label: 'Rental Tools Available', value: 200, suffix: '+' },
  { label: 'Operational Support', value: 24,  suffix: '/7' },
  { label: 'Client Satisfaction', value: 99,  suffix: '%' },
];

const PROCESS = [
  { step: 1, icon: Search,        title: 'Requirement Analysis',     desc: 'Review well program, formation data, and operational targets to define the optimal BHA configuration.' },
  { step: 2, icon: ClipboardCheck, title: 'Tool Selection & Inspection', desc: 'Select tools from rental inventory, complete full API inspection, and issue certification documentation.' },
  { step: 3, icon: Truck,         title: 'Mobilization & Delivery',  desc: 'Pre-mobilized packages deployed to rig site with all necessary handling and safety equipment.' },
  { step: 4, icon: HardHat,       title: 'Field Technical Support',  desc: 'KDC field engineer on-site for BHA make-up, operational monitoring, and real-time troubleshooting.' },
  { step: 5, icon: Wrench,        title: 'Maintenance & Return',     desc: 'Post-run inspection, refurbishment, and detailed condition reporting on all returned tools.' },
];

const GALLERY = [
  { src: '/images/bha-gallery-1.png', alt: 'BHA assembly on rig floor' },
  { src: '/images/bha-gallery-2.png', alt: 'BHA tool pre-run inspection' },
  { src: '/images/bha-gallery-3.png', alt: 'BHA equipment mobilization' },
  { src: '/images/bha-stabilizer.png', alt: 'Stabilizer equipment' },
  { src: '/images/bha-drill-collar.png', alt: 'Drill collar array' },
  { src: '/images/bha-qc.png', alt: 'Quality control inspection' },
];

const RELATED = [
  { label: 'Drilling & Workover',      href: '/services/drilling-workover', icon: Gauge,   desc: 'Land rig drilling operations for Kuwait NOC operators.' },
  { label: 'Tubular Running Services', href: '/services/tubular-running',   icon: Layers,  desc: 'Precision casing and tubing running with torque monitoring.' },
  { label: 'Water Well Services',      href: '/services/water-well',        icon: Activity, desc: 'Water well drilling and pump installation services.' },
  { label: 'Manpower Services',        href: '/services/manpower',          icon: Users,   desc: 'Skilled oilfield workforce supply across disciplines.' },
];

/* ─── Lightbox ───────────────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="lb"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={e => e.stopPropagation()}
          className="relative max-w-5xl w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <Image src={src} alt={alt} width={1200} height={800} className="w-full h-auto object-cover" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function BHARentalPage() {
  const [activeEquip, setActiveEquip] = useState<string | null>(null);
  const [lightbox, setLightbox]       = useState<{ src: string; alt: string } | null>(null);
  const heroRef   = useRef(null);
  const statsRef  = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOp  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" aria-label="BHA Rental Services Hero">
        {/* Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -z-10">
          <Image
            src="/images/bha-hero.png"
            alt="BHA Rental Services"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Layered overlay — deep navy gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0f172a]/80 to-[#0f172a]/40" />
        <div className="absolute inset-0 -z-10"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)' }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-40">
          {/* Breadcrumb */}
          <motion.nav style={{ opacity: heroOp }} aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-10 tracking-wider uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-500">Services</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">BHA Rental</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                  <Package className="w-3 h-3" />
                  Downhole Tool Rental
                </div>
              </Reveal>
              <Reveal custom={1}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 text-balance">
                  BHA Rental<br />
                  <span style={{ color: BRAND }}>Services</span>
                </h1>
              </Reveal>
              <Reveal custom={2}>
                <p className="text-xl text-slate-300 leading-relaxed mb-4 font-medium">
                  Reliable Downhole Tools &amp; Rental Solutions for High-Performance Drilling Operations
                </p>
              </Reveal>
              <Reveal custom={3}>
                <p className="text-slate-400 leading-relaxed mb-10 max-w-xl">
                  KDC provides premium Bottom Hole Assembly rental equipment engineered for Kuwait&apos;s
                  demanding drilling environments. From drill collars and stabilizers to jars and shock subs,
                  our API-certified tool inventory is inspection-ready and field-tested.
                </p>
              </Reveal>
              <Reveal custom={4} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-lg text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:brightness-110 hover:-translate-y-0.5"
                  style={{ backgroundColor: BRAND }}
                >
                  Request Rental Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-white/25 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all"
                >
                  View Equipment
                </button>
              </Reveal>
            </div>

            {/* Right — floating stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {HERO_STATS.map(({ label, icon: Icon }, i) => (
                <Reveal key={label} custom={i + 2} variants={scaleIn}>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 group">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${BRAND}25` }}
                    >
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-white font-semibold text-sm leading-tight">{label}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2.5 bg-white/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" aria-label="BHA Introduction">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal variants={scaleIn}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/bha-overview.png" alt="BHA equipment inspection" fill className="object-cover" />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4 text-white flex items-center gap-4"
                style={{ backgroundColor: `${DARK}e6`, backdropFilter: 'blur(8px)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND }}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm font-display">API Certified Inventory</p>
                  <p className="text-slate-300 text-xs">Full inspection records on every rental unit</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">BHA Rental Capabilities</p>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance">
                Precision Downhole Tools<br />Built for the Field
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="text-slate-600 leading-relaxed">
                KDC&apos;s BHA rental program provides operators with immediate access to a comprehensive
                inventory of API-certified downhole tools. Our rental model eliminates capital expenditure
                on low-utilization equipment while guaranteeing field-ready condition through rigorous
                pre-run inspection and maintenance protocols.
              </p>
            </Reveal>
            <Reveal custom={3}>
              <p className="text-slate-600 leading-relaxed">
                Every tool in our fleet is inspected to API Spec 7-1, dimensionally verified, drift tested,
                and certified prior to mobilization. Our experienced field engineers provide technical
                assistance from BHA design through post-run analysis, ensuring operational efficiency and
                reduced non-productive time across all well types.
              </p>
            </Reveal>
            <Reveal custom={4}>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  'Certified Equipment',
                  'Field-Tested Performance',
                  'Rapid Mobilization',
                  'Technical Assistance',
                  'Full API Compliance',
                  'Post-Run Reporting',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal custom={5} className="flex gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: BRAND }}
              >
                Get a Quotation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/qhse"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                QHSE Standards
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EQUIPMENT CATEGORIES ──────────────────────────────────── */}
      <section id="equipment" className="py-24 px-6 bg-slate-50" aria-label="Equipment Categories">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Rental Inventory</p>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Equipment Categories</h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                Our rental fleet covers the full BHA spectrum — from weight-on-bit assemblies to downhole shock mitigation.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EQUIPMENT_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              const isOpen = activeEquip === cat.id;
              return (
                <Reveal key={cat.id} custom={i} variants={scaleIn}>
                  <div
                    className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 shadow-md hover:shadow-xl
                      ${isOpen ? 'border-blue-500 shadow-xl' : 'border-slate-200 hover:border-blue-300'}`}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold tracking-wide">
                        <Icon className="w-3 h-3" />
                        {cat.title}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{cat.description}</p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {cat.features.map(f => (
                          <span
                            key={f}
                            className="text-xs px-3 py-1 rounded-full font-semibold"
                            style={{ backgroundColor: `${BRAND}12`, color: BRAND }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      {/* Toggle specs */}
                      <button
                        onClick={() => setActiveEquip(isOpen ? null : cat.id)}
                        className="flex items-center gap-2 text-sm font-bold transition-colors"
                        style={{ color: BRAND }}
                        aria-expanded={isOpen}
                      >
                        <span>{isOpen ? 'Hide' : 'View'} Specifications</span>
                        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                          <Plus className="w-4 h-4" />
                        </motion.div>
                      </button>

                      {/* Specs expandable */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3">
                              {cat.specs.map(s => (
                                <div key={s.label} className="bg-slate-50 rounded-lg p-3">
                                  <p className="text-xs text-slate-500 font-medium mb-0.5">{s.label}</p>
                                  <p className="text-sm font-bold text-slate-800">{s.value}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: BRAND }}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE KDC + COUNTERS ─────────────────────────────── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ backgroundColor: DARK }}
        aria-label="Why Choose KDC"
      >
        {/* Blueprint grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(${BRAND} 1px, transparent 1px), linear-gradient(90deg, ${BRAND} 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Advantage</p>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">Why Choose KDC</h2>
            </Reveal>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {WHY_KDC.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} custom={i} variants={scaleIn}>
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${BRAND}25` }}
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Animated counters */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {COUNTERS.map(({ label, value, suffix }, i) => {
              const count = useCountUp(value, statsInView);
              return (
                <Reveal key={label} custom={i} variants={scaleIn}>
                  <div className="text-center bg-white/5 border border-white/8 rounded-2xl p-8">
                    <p className="font-display text-5xl font-bold text-white mb-2">
                      {count}<span style={{ color: BRAND }}>{suffix}</span>
                    </p>
                    <p className="text-slate-400 text-sm font-medium">{label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. OPERATIONAL PROCESS ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" aria-label="Operational Process">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">How We Work</p>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Rental Process</h2>
            </Reveal>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            {/* Connecting line */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-200">
              <motion.div
                className="h-full origin-left"
                style={{ backgroundColor: BRAND }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {PROCESS.map(({ step, icon: Icon, title, desc }, i) => (
                <Reveal key={step} custom={i}>
                  <div className="flex flex-col items-center text-center group">
                    <div
                      className="relative w-[104px] h-[104px] rounded-full border-4 flex items-center justify-center mb-6 bg-white z-10 shadow-lg transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: BRAND }}
                    >
                      <Icon className="w-9 h-9 text-blue-600" />
                      <span
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                        style={{ backgroundColor: BRAND }}
                      >
                        {step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-2 leading-tight">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden relative pl-12">
            <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-slate-200">
              <motion.div
                className="w-full origin-top"
                style={{ backgroundColor: BRAND }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                viewport={{ once: true }}
              />
            </div>
            <div className="space-y-8">
              {PROCESS.map(({ step, icon: Icon, title, desc }, i) => (
                <Reveal key={step} custom={i}>
                  <div className="relative flex gap-6">
                    <div
                      className="absolute -left-12 w-10 h-10 rounded-full border-4 bg-white flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ borderColor: BRAND }}
                    >
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-xl p-5 border border-slate-200">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white mb-2 inline-block"
                        style={{ backgroundColor: BRAND }}
                      >
                        Step {step}
                      </span>
                      <h3 className="font-display font-bold text-slate-900 mb-2">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50" aria-label="Equipment Gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Reveal>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Visual Library</p>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">Equipment Gallery</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map(({ src, alt }, i) => (
              <Reveal key={src} custom={i} variants={scaleIn}>
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[3/2] shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setLightbox({ src, alt })}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      </section>

      {/* ── 7. SAFETY & QUALITY ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white" aria-label="Safety and Quality">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal variants={scaleIn}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image src="/images/bha-qc.png" alt="BHA quality control inspection" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-bold"
                  style={{ backgroundColor: BRAND }}
                >
                  <Shield className="w-4 h-4" />
                  API Spec 7-1 Compliant
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">Safety &amp; Quality Assurance</p>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Inspection-Verified.<br />Field-Certified.
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="text-slate-600 leading-relaxed">
                Every BHA rental component undergoes a rigorous pre-run inspection protocol at our fully
                equipped maintenance facility. Dimensional verification, ultrasonic testing, MPI crack
                detection, and API drift testing are performed by qualified inspection engineers before
                any tool leaves the yard.
              </p>
            </Reveal>
            <Reveal custom={3}>
              <p className="text-slate-600 leading-relaxed">
                Post-run condition reporting enables operators to track tool performance, cumulative
                footage drilled, and maintenance history — supporting reliability engineering and
                reducing downhole failure risk on successive runs.
              </p>
            </Reveal>

            {/* Certification badges */}
            <Reveal custom={4}>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { icon: Award,         label: 'API Standards',        sub: 'Spec 7-1 Certified' },
                  { icon: ShieldCheck,   label: 'QHSE Compliance',      sub: 'ISO 9001 Aligned' },
                  { icon: ClipboardCheck, label: 'Inspection Verified',  sub: 'Pre & Post-Run' },
                  { icon: HardHat,       label: 'Operational Safety',   sub: 'Zero Harm Policy' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${BRAND}15` }}>
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{label}</p>
                      <p className="text-slate-500 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. CTA BANNER ────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{ backgroundColor: DARK }}
        aria-label="Contact CTA"
      >
        {/* Background overlay image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/images/bha-hero.png" alt="" fill className="object-cover opacity-15" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${DARK}f0 60%, ${BRAND}22)` }} />

        {/* KDC watermark */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
          <span className="font-display text-[18rem] font-black text-white leading-none">KDC</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 border border-blue-500/30"
              style={{ backgroundColor: `${BRAND}20` }}
            >
              <Package className="w-3.5 h-3.5" />
              BHA Rental Support Available
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-5 text-balance">
              Need Reliable BHA<br />Rental Support?
            </h2>
          </Reveal>
          <Reveal custom={2}>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              KDC delivers dependable drilling tool rental solutions for complex oilfield operations.
              Contact our technical team today for rental availability and quotations.
            </p>
          </Reveal>
          <Reveal custom={3} className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold tracking-wide shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all"
              style={{ backgroundColor: BRAND }}
            >
              <Phone className="w-5 h-5" />
              Contact Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-white font-bold tracking-wide hover:bg-white/10 transition-all"
            >
              <FileText className="w-5 h-5" />
              Request Quotation
            </Link>
          </Reveal>

          {/* Quick contact bar */}
          <Reveal custom={4} className="mt-12 flex flex-wrap gap-6 justify-center">
            <a href="tel:+96522221060" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <Phone className="w-4 h-4 text-blue-500" />
              +965 2222 1060
            </a>
            <a href="mailto:info@kdckwt.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <Mail className="w-4 h-4 text-blue-500" />
              info@kdckwt.com
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 9. RELATED SERVICES ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200" aria-label="Related Services">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-10 text-center">Related Services</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED.map(({ label, href, icon: Icon, desc }, i) => (
              <Reveal key={label} custom={i} variants={scaleIn}>
                <Link
                  href={href}
                  className="group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${BRAND}12` }}
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-bold">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky contact button */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
        style={{ backgroundColor: BRAND }}
        aria-label="Contact KDC about BHA Rental"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">Rental Enquiry</span>
      </motion.a>
    </div>
  );
}
