'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Phone, Mail, Shield, Award, Zap,
  Settings, Users, Wrench, ClipboardCheck, HardHat, Droplets,
  BarChart3, CheckCircle2, Search, Layers, Activity,
  Leaf, Mountain, Gauge, FileText, Globe,
  Target, Timer, ThumbsUp, Star, MapPin, Download, Plus, X,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';

/* ─── Brand ──────────────────────────────────────────────────────────── */
const RED  = '#C0182A';
const DARK = '#111111';

/* ─── Animation variants ─────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};
const scaleIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

/* ─── Reusable animation wrapper ─────────────────────────────────────── */
function Reveal({
  children,
  variants = fadeUp,
  custom = 0,
  className = '',
  once = true,
}: {
  children: React.ReactNode;
  variants?: typeof fadeUp;
  custom?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px 0px' });
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

/* ─── Count-up ───────────────────────────────────────────────────────── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.span>
          {inView
            ? <AnimatedNumber target={target} />
            : '0'}
        </motion.span>
        {suffix}
      </motion.span>
    </span>
  );
}

function AnimatedNumber({ target }: { target: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={0}
        animate={inView ? target : 0}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {({ latest }: { latest: number }) => Math.floor(latest)}
      </motion.span>
    </motion.span>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const heroStats = [
  { value: 35,  suffix: '+', label: 'Years Experience' },
  { value: 250, suffix: '+', label: 'Wells Drilled' },
  { value: 100, suffix: '%', label: 'Safety Compliance' },
  { value: 98,  suffix: '%', label: 'Project Success' },
];

const coreServices = [
  { icon: Droplets,      title: 'Water Well Drilling',         desc: 'Rotary and percussion drilling to 600m+ for industrial, municipal, and agricultural projects across Kuwait and the GCC.' },
  { icon: Globe,         title: 'Water Supply Wells',          desc: 'End-to-end supply well solutions delivering reliable groundwater for industrial facilities and communities.' },
  { icon: Activity,      title: 'Monitoring Wells',            desc: 'Scientific installation and data-logging for hydrogeological monitoring, environmental compliance, and aquifer study.' },
  { icon: Wrench,        title: 'Maintenance & Rehabilitation', desc: 'Full-cycle well maintenance, rehabilitation, and redevelopment to restore production capacity and extend well life.' },
  { icon: Settings,      title: 'Pump Installation',           desc: 'Supply, installation, and commissioning of submersible pumps, surface pumps, and associated control systems.' },
  { icon: Gauge,         title: 'Well Testing',                desc: 'Comprehensive pumping tests, step-rate tests, and aquifer analysis to confirm well performance and yield.' },
  { icon: Search,        title: 'Hydrogeological Support',     desc: 'Expert geological assessment, groundwater modelling, and site-suitability analysis before mobilisation.' },
  { icon: Mountain,      title: 'Site Preparation',            desc: 'Access road construction, site clearing, casing delivery logistics, and civil works ahead of drilling.' },
  { icon: ClipboardCheck,title: 'Inspection & Logging',        desc: 'Down-hole camera surveys, geophysical logging, and casing integrity tests throughout the well lifecycle.' },
  { icon: Leaf,          title: 'Environmental Support',       desc: 'Water quality sampling, contamination assessment, regulatory compliance documentation, and remediation advisory.' },
];

const processSteps = [
  { num: '01', title: 'Site Survey',    desc: 'Hydrogeological assessment, geophysical survey, and permit acquisition.' },
  { num: '02', title: 'Planning',       desc: 'Engineering design, casing programme, drill-bit selection, and logistics mobilisation.' },
  { num: '03', title: 'Drilling',       desc: 'Execution with advanced rotary rigs, real-time monitoring, and daily reporting.' },
  { num: '04', title: 'Installation',   desc: 'Casing, screen, and gravel-pack installation with precision alignment.' },
  { num: '05', title: 'Testing',        desc: 'Step-rate and constant-rate pumping tests with yield and water-quality analysis.' },
  { num: '06', title: 'Maintenance',    desc: 'Scheduled inspections, pump servicing, and rehabilitation over the well lifetime.' },
];

const equipment = [
  { title: 'Rotary Drilling Rigs',    spec: 'Capacity to 800m', badge: 'Advanced Technology',  desc: 'Top-drive rotary rigs with automated pipe-handling and real-time WOB/RPM control.' },
  { title: 'Air Rotary Systems',      spec: 'DTH up to 600m',   badge: 'High Efficiency',       desc: 'Down-the-hole hammer systems for high-penetration-rate drilling in hard rock formations.' },
  { title: 'Submersible Pump Fleet',  spec: 'Up to 250kW',      badge: 'Safety Certified',      desc: 'Factory-tested electric submersible pump packages with variable-speed drives.' },
  { title: 'Down-Hole Logging Tools', spec: 'Gamma / Resistivity',badge: 'Advanced Technology', desc: 'Wireline formation evaluation including gamma ray, resistivity, and caliper logging.' },
];

const safetyKPIs = [
  { value: 0,    suffix: '',  label: 'Lost-Time Incidents',   sub: 'Zero Harm Vision' },
  { value: 100,  suffix: '%', label: 'Safety Compliance',     sub: 'All Active Sites' },
  { value: 500,  suffix: '+', label: 'Trained Workforce',     sub: 'Certified Professionals' },
  { value: 99,   suffix: '%', label: 'Operational Reliability', sub: 'Equipment Uptime' },
];

const galleryImages = [
  { src: '/images/ww-gallery-1.png', label: 'Rig Operations, Kuwait' },
  { src: '/images/ww-gallery-2.png', label: 'Pump Installation' },
  { src: '/images/ww-gallery-3.png', label: 'Completed Infrastructure' },
  { src: '/images/ww-gallery-4.png', label: 'Well Testing' },
  { src: '/images/ww-gallery-5.png', label: 'Site Survey & Assessment' },
  { src: '/images/ww-gallery-6.png', label: 'Night Operations' },
];

const whyKDC = [
  { icon: Users,       title: 'Experienced Workforce',  desc: '500+ certified professionals with decades of Kuwait and GCC water-well expertise.' },
  { icon: Zap,         title: 'Advanced Equipment',     desc: 'Modern rig fleet capable of drilling to 800m with real-time monitoring systems.' },
  { icon: Timer,       title: 'Reliable Operations',    desc: '99% equipment availability and rapid mobilisation within 72 hours for urgent projects.' },
  { icon: MapPin,      title: 'Regional Expertise',     desc: 'Deep knowledge of Kuwait geology, regulatory frameworks, and aquifer conditions.' },
  { icon: Shield,      title: 'Safety Commitment',      desc: 'Zero-harm culture underpinned by ISO-certified QHSE systems and daily safety audits.' },
  { icon: ThumbsUp,    title: 'Client Satisfaction',    desc: '20+ long-term government and industrial clients returning for successive projects.' },
];

const relatedServices = [
  { title: 'Drilling & Workover', href: '/services/drilling-workover', icon: Activity },
  { title: 'Directional Drilling', href: '#', icon: Target },
  { title: 'BHA Rental',           href: '#', icon: Layers },
  { title: 'Fishing Services',     href: '#', icon: Search },
];

/* ════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function WaterWellPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  /* parallax on hero image */
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <>
      <Header />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[680px] overflow-hidden flex items-center">
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="/images/ww-hero.png"
            alt="Water Well Operations"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>

        {/* Overlay — left-heavy gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Red accent line */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-red-700"
          initial={{ width: 0 }}
          animate={{ width: '35%' }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          style={{ backgroundColor: RED }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <Reveal custom={0}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-red-500" style={{ backgroundColor: RED }} />
                <span className="text-xs tracking-[0.35em] uppercase font-semibold text-white/70">
                  KDC Services
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal custom={1}>
              <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none tracking-tight text-balance">
                Water Well<br />
                <span style={{ color: RED }}>Services</span>
              </h1>
            </Reveal>

            <Reveal custom={2}>
              <p className="mt-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-xl">
                Kuwait&apos;s most trusted partner for precision groundwater drilling, pump installation, and long-term well management across industrial and government sectors.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal custom={3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-lg text-sm tracking-wide transition-all duration-300"
                  style={{ backgroundColor: RED }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-lg text-sm tracking-wide border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Request Proposal
                  <FileText className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="py-6 px-6 border-r border-white/10 last:border-r-0 backdrop-blur-sm bg-black/30"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-white">
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-white/55 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ───────────────────────────────────────────────── */}
      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center gap-2 text-xs text-stone-500">
          <Link href="/" className="hover:text-stone-800 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-400">Services</span>
          <ChevronRight className="w-3 h-3" />
          <span className="font-medium text-stone-800">Water Well Services</span>
        </div>
      </div>

      {/* ── 2. INTRODUCTION ──────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <Reveal variants={fadeIn}>
            <div className="relative grid grid-cols-2 gap-3 h-[520px]">
              <div className="col-span-2 rounded-2xl overflow-hidden h-64">
                <img src="/images/ww-hero.png" alt="Drilling operations" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/ww-overview.png" alt="Site preparation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/ww-gallery-4.png" alt="Well testing" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4 border border-stone-100"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: RED }}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-stone-900">ISO Certified</div>
                  <div className="text-stone-500 text-xs">QHSE Management</div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="flex flex-col gap-6">
            <Reveal custom={0}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px" style={{ backgroundColor: RED }} />
                <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>
                  Our Expertise
                </span>
              </div>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight text-balance">
                Precision Groundwater Solutions for Critical Infrastructure
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="text-stone-600 leading-relaxed">
                With over 35 years drilling in Kuwait&apos;s demanding geological conditions, KDC delivers water well solutions that government agencies, industrial operators, and infrastructure developers can depend on. From initial hydrogeological survey through to long-term maintenance, our integrated service model eliminates the complexity of managing multiple contractors.
              </p>
            </Reveal>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { icon: Target,   label: 'Deep Expertise',    sub: '35+ years in Kuwait' },
                { icon: Cpu,      label: 'Technology',        sub: 'Modern rig fleet' },
                { icon: Users,    label: 'Skilled Manpower',  sub: '500+ professionals' },
                { icon: Gauge,    label: 'Efficiency',        sub: '99% uptime record' },
              ].map((item, i) => (
                <Reveal key={item.label} custom={i * 0.5}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-red-200 hover:bg-red-50/30 transition-colors duration-300">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${RED}18` }}>
                      <item.icon className="w-4 h-4" style={{ color: RED }} />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{item.label}</div>
                      <div className="text-stone-500 text-xs mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <Reveal custom={0}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px" style={{ backgroundColor: RED }} />
                  <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>What We Do</span>
                </div>
              </Reveal>
              <Reveal custom={1}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Core Services</h2>
              </Reveal>
            </div>
            <Reveal custom={2}>
              <p className="text-stone-500 max-w-md text-sm leading-relaxed">
                A comprehensive portfolio covering every phase of the water well lifecycle — from exploration to long-term asset management.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {coreServices.map((svc, i) => (
              <Reveal key={svc.title} custom={i * 0.05} variants={scaleIn}>
                <motion.div
                  className="group relative bg-white rounded-2xl p-6 border border-stone-200 cursor-pointer overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveCard(activeCard === i ? null : i)}
                >
                  {/* Red top accent on hover */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: RED }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ backgroundColor: `${RED}14` }}>
                    <svc.icon className="w-5 h-5" style={{ color: RED }} />
                  </div>

                  <h3 className="font-display font-bold text-stone-900 text-base mb-2 leading-snug">{svc.title}</h3>

                  <AnimatePresence>
                    {activeCard === i ? (
                      <motion.p
                        key="desc"
                        className="text-stone-500 text-xs leading-relaxed flex-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {svc.desc}
                      </motion.p>
                    ) : (
                      <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed flex-1">{svc.desc}</p>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: RED }}>
                    {activeCard === i ? (
                      <><X className="w-3 h-3" /> Close</>
                    ) : (
                      <><Plus className="w-3 h-3" /> Learn More</>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ───────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal custom={0}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: RED }} />
              <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>How We Work</span>
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-16">Operational Process</h2>
          </Reveal>

          {/* Desktop horizontal steps */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <Reveal variants={fadeIn}>
              <div className="absolute top-8 left-0 right-0 h-px bg-stone-200 mx-16" />
            </Reveal>

            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.num} custom={i * 0.15} variants={fadeUp}>
                  <motion.div
                    className="relative flex flex-col items-center text-center group"
                    whileHover={{ y: -4 }}
                  >
                    {/* Number bubble */}
                    <motion.div
                      className="relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center mb-5 font-display font-bold text-lg transition-all duration-300 bg-white"
                      style={{ borderColor: RED, color: RED }}
                      whileHover={{ backgroundColor: RED, color: '#fff' }}
                    >
                      {step.num}
                    </motion.div>
                    <h3 className="font-display font-bold text-stone-900 text-sm mb-2">{step.title}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile vertical steps */}
          <div className="md:hidden flex flex-col gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} custom={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                      style={{ borderColor: RED, color: RED }}>
                      {step.num}
                    </div>
                    {i < processSteps.length - 1 && <div className="w-px flex-1 mt-3" style={{ backgroundColor: `${RED}30` }} />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-display font-bold text-stone-900 mb-1">{step.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EQUIPMENT & TECHNOLOGY ────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <Reveal custom={0}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px" style={{ backgroundColor: RED }} />
                  <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>Our Fleet</span>
                </div>
              </Reveal>
              <Reveal custom={1}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Equipment &amp; Technology</h2>
              </Reveal>
            </div>
            <Reveal custom={2}>
              <p className="text-white/50 max-w-md text-sm leading-relaxed">
                A modern, fully-maintained fleet built for Kuwait&apos;s demanding geological and environmental conditions.
              </p>
            </Reveal>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden h-64 md:h-80">
            <motion.img
              src="/images/ww-equipment.png"
              alt="Equipment fleet"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {equipment.map((eq, i) => (
              <Reveal key={eq.title} custom={i * 0.1} variants={scaleIn}>
                <motion.div
                  className="bg-white/5 rounded-2xl p-6 border border-white/8 hover:border-red-800/60 hover:bg-white/8 transition-all duration-300 flex flex-col gap-4"
                  whileHover={{ y: -4 }}
                >
                  <span className="inline-block self-start text-xs font-bold px-3 py-1 rounded-full border"
                    style={{ color: RED, borderColor: `${RED}50`, backgroundColor: `${RED}15` }}>
                    {eq.badge}
                  </span>
                  <div>
                    <div className="font-display font-bold text-white text-lg mb-1">{eq.title}</div>
                    <div className="text-white/40 text-xs mb-3">{eq.spec}</div>
                    <p className="text-white/60 text-sm leading-relaxed">{eq.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SAFETY & QUALITY ──────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* KPIs */}
          <div>
            <Reveal custom={0}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: RED }} />
                <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>Safety First</span>
              </div>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-8">Zero Harm.<br />Zero Compromise.</h2>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {safetyKPIs.map((kpi, i) => (
                <Reveal key={kpi.label} custom={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
                    <div className="font-display text-4xl font-bold mb-1" style={{ color: RED }}>
                      {kpi.value}{kpi.suffix}
                    </div>
                    <div className="font-semibold text-stone-900 text-sm">{kpi.label}</div>
                    <div className="text-stone-400 text-xs mt-1">{kpi.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Certification badges */}
            <Reveal custom={4}>
              <div className="flex flex-wrap gap-3 mt-8">
                {['ISO 9001:2015', 'ISO 14001', 'OHSAS 18001', 'KOC Approved'].map((cert) => (
                  <span key={cert}
                    className="px-4 py-1.5 rounded-full text-xs font-bold border"
                    style={{ color: RED, borderColor: `${RED}50`, backgroundColor: `${RED}08` }}>
                    {cert}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image + copy */}
          <Reveal variants={fadeIn}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-72">
                <img src="/images/qhse-hero-bg.png" alt="Safety culture" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  'Mandatory pre-job risk assessments for all site activities',
                  'Real-time incident reporting and 24-hour HSE officer coverage',
                  'Stop-Work Authority granted to every team member',
                  'Monthly safety audits by independent QHSE team',
                ].map((point, i) => (
                  <Reveal key={point} custom={i * 0.1}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: RED }} />
                      <span className="text-stone-600 text-sm leading-relaxed">{point}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. GALLERY ───────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <Reveal custom={0}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: RED }} />
              <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>Our Work</span>
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-12">Project Gallery</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} custom={i * 0.08} variants={scaleIn}>
                <motion.div
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  style={{ aspectRatio: i % 3 === 0 ? '4/3' : '1/1' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(img.src)}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">{img.label}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm flex items-center gap-1"
              >
                <X className="w-4 h-4" /> Close
              </button>
              <img src={lightbox} alt="Gallery" className="w-full rounded-xl object-cover max-h-[80vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 8. WHY KDC ───────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal custom={0}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px" style={{ backgroundColor: RED }} />
                  <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: RED }}>Why Choose Us</span>
                </div>
              </Reveal>
              <Reveal custom={1}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight text-balance">
                  The Standard for Water Well Excellence in Kuwait
                </h2>
              </Reveal>
              <Reveal custom={2}>
                <p className="mt-6 text-stone-500 leading-relaxed text-sm">
                  Government agencies, national oil companies, and industrial developers choose KDC because we combine decades of on-the-ground experience with modern technology and an unwavering commitment to safety and quality delivery.
                </p>
              </Reveal>
              <Reveal custom={3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 font-semibold text-white rounded-lg text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: RED }}
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyKDC.map((item, i) => (
                <Reveal key={item.title} custom={i * 0.1} variants={scaleIn}>
                  <motion.div
                    className="p-6 rounded-2xl border border-stone-200 bg-stone-50 hover:border-red-200 hover:bg-red-50/40 transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${RED}14` }}>
                      <item.icon className="w-5 h-5" style={{ color: RED }} />
                    </div>
                    <h3 className="font-display font-bold text-stone-900 text-sm mb-2">{item.title}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CTA ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 relative overflow-hidden" style={{ backgroundColor: RED }}>
        {/* Texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Large watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18rem] font-black text-white/5 leading-none select-none pointer-events-none">
          KDC
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <Reveal custom={0}>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight text-balance">
                Partner With Kuwait&apos;s Trusted Water Well Experts
              </h2>
            </Reveal>
            <Reveal custom={1}>
              <p className="mt-5 text-white/75 leading-relaxed">
                Ready to discuss your project? Our engineering team is available for site consultations, technical proposals, and feasibility assessments across Kuwait, Oman, and Jordan.
              </p>
            </Reveal>
          </div>

          <Reveal custom={2}>
            <div className="flex flex-col gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white font-bold text-sm rounded-lg hover:bg-stone-100 transition-colors"
                style={{ color: RED }}
              >
                <Phone className="w-4 h-4" /> Contact Our Team
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Company Profile
              </a>
              <a href="mailto:info@kdckwt.com"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors text-center justify-center">
                <Mail className="w-4 h-4" /> info@kdckwt.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10. RELATED SERVICES ─────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto">
          <Reveal custom={0}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">Related Services</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((svc, i) => (
              <Reveal key={svc.title} custom={i * 0.1} variants={scaleIn}>
                <Link href={svc.href}>
                  <motion.div
                    className="group p-6 rounded-2xl border border-white/8 hover:border-red-700/50 bg-white/4 hover:bg-white/8 transition-all duration-300 flex items-center justify-between"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${RED}20` }}>
                        <svc.icon className="w-5 h-5" style={{ color: RED }} />
                      </div>
                      <span className="font-semibold text-white text-sm">{svc.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky floating contact ───────────────────────────────────── */}
      <motion.div
        className="fixed bottom-8 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4, type: 'spring' }}
      >
        <Link
          href="/contact"
          className="flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-bold shadow-2xl hover:opacity-90 transition-opacity"
          style={{ backgroundColor: RED }}
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Contact Us</span>
        </Link>
      </motion.div>

      <Footer />
    </>
  );
}
