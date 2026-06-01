'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Phone, Mail, Shield, Award,
  Users, HardHat, Wrench, Zap, Truck, Building2,
  ClipboardCheck, BarChart3, CheckCircle2, Globe,
  Target, Timer, Download, Plus, X, ArrowUpRight,
  UserCheck, Settings, Hammer, FileText, HeartPulse,
  MapPin, MessageCircle, Star,
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
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView ? 'visible' : 'hidden'} custom={custom} className={className}>
      {children}
    </motion.div>
  );
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  useRef(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  });
  return count;
}

/* ─── Data ────────────────────────────────────────────────────────────── */
const heroStats = [
  { value: 20,  suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Skilled Personnel' },
  { value: 12,  suffix: '+', label: 'Industry Sectors'  },
  { value: 100, suffix: '%', label: 'Safety Compliance' },
];

const workforceCategories = [
  { icon: HardHat,       title: 'Drilling Crew',             desc: 'Experienced drillers, derrickmen, motormen and floormen for all rig types and well conditions.' },
  { icon: Wrench,        title: 'Workover Specialists',      desc: 'Skilled workover and well intervention personnel for maintenance, recompletion and remedial operations.' },
  { icon: Shield,        title: 'HSE Personnel',             desc: 'Certified HSE officers, safety supervisors and environmental compliance specialists.' },
  { icon: Settings,      title: 'Mechanical Technicians',   desc: 'Qualified mechanics and maintenance technicians for rig equipment, pumps and rotating machinery.' },
  { icon: Zap,           title: 'Electrical Technicians',   desc: 'Licensed electricians and instrumentation technicians for power systems and control panels.' },
  { icon: Truck,         title: 'Heavy Equipment Operators', desc: 'Certified operators for cranes, forklifts, bulldozers and other heavy industrial machinery.' },
  { icon: Hammer,        title: 'Welders & Fabricators',    desc: 'Certified welders with AWS/ASME qualifications for structural, pipeline and pressure vessel work.' },
  { icon: Building2,     title: 'Civil Workforce',           desc: 'Skilled civil labourers, masons, carpenters and structural construction workers.' },
  { icon: Truck,         title: 'Logistics & Transport',    desc: 'Professional logistics coordinators and heavy transport drivers for oilfield equipment movement.' },
  { icon: UserCheck,     title: 'Administrative Staff',      desc: 'Experienced admin officers, document controllers, procurement and HR support personnel.' },
];

const industries = [
  { title: 'Oil & Gas',        icon: Globe,         img: '/images/mp-hero.png',       desc: 'Upstream, midstream and downstream operations across Kuwait and the GCC region.' },
  { title: 'Petrochemical',    icon: Settings,      img: '/images/mp-industries.png', desc: 'Skilled workforce for refinery, FEED and petrochemical plant operations.' },
  { title: 'Infrastructure',   icon: Building2,     img: '/images/mp-deployment.png', desc: 'Technical and civil manpower for large-scale infrastructure development projects.' },
  { title: 'Industrial Plants',icon: Zap,           img: '/images/mp-training.png',   desc: 'Electrical, mechanical and operations staff for industrial manufacturing plants.' },
  { title: 'Construction',     icon: Hammer,        img: '/images/mp-overview.png',   desc: 'Multi-trade construction workforce for EPC and turnkey project delivery.' },
  { title: 'Energy Sector',    icon: BarChart3,     img: '/images/mp-safety.png',     desc: 'Specialist support staff for renewable and conventional energy projects.' },
];

const processSteps = [
  { num: '01', icon: FileText,      title: 'Requirement Analysis',      desc: 'We consult with clients to understand exact workforce specifications, technical certifications, headcount and timeline.' },
  { num: '02', icon: Users,         title: 'Candidate Screening',       desc: 'Rigorous CV screening and shortlisting from our pre-qualified talent pool of 500+ registered candidates.' },
  { num: '03', icon: ClipboardCheck,title: 'Skill Verification',        desc: 'Technical competency assessments, trade tests and reference checks verify each candidate\'s qualifications.' },
  { num: '04', icon: Shield,        title: 'Safety & Compliance Check', desc: 'HSE induction, OPITO/BOSIET certifications, medical fitness and PPE standards verification.' },
  { num: '05', icon: Truck,         title: 'Deployment',                desc: 'Coordinated mobilization with transport, accommodation, site access, and onboarding documentation.' },
  { num: '06', icon: HeartPulse,    title: 'Ongoing Support',           desc: '24/7 HR and operations support throughout the deployment period with regular performance reviews.' },
];

const whyKDC = [
  { icon: Award,        title: '20+ Years Experience',    desc: 'Decades of specialized workforce deployment in Kuwait\'s most demanding oil and gas environments.' },
  { icon: Timer,        title: 'Rapid Mobilization',      desc: 'Standby pre-screened workforce allows deployment within 24–72 hours for urgent operational needs.' },
  { icon: ClipboardCheck, title: 'Full Compliance',       desc: 'Every worker meets client HSE requirements, Kuwait Labour Law and international certification standards.' },
  { icon: Target,       title: 'Kuwait Expertise',        desc: 'Deep knowledge of KOC, KNPC and KIPIC site requirements, safety protocols and local regulations.' },
  { icon: Users,        title: 'Large Talent Network',    desc: 'Pre-qualified pool of 500+ multi-discipline professionals across all oilfield and industrial trades.' },
  { icon: HeartPulse,   title: '24/7 Operations Support', desc: 'Round-the-clock HR support, replacement management and emergency staffing response capability.' },
];

const safetyMetrics = [
  { value: 100, suffix: '%', label: 'HSE Compliance Rate',       bar: 100 },
  { value: 100, suffix: '%', label: 'Certified Workforce',        bar: 100 },
  { value: 40,  suffix: '+', label: 'Training Programmes',        bar: 80  },
  { value: 0,   suffix: '',  label: 'Lost Time Incidents (2024)', bar: 0   },
];

function StatCard({ stat, index }: { stat: typeof heroStats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, inView);
  return (
    <motion.div ref={ref} variants={scaleIn} initial="hidden"
      animate={inView ? 'visible' : 'hidden'} custom={index}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-5 text-center min-w-[130px]">
      <p className="text-3xl font-display font-bold text-white">
        {count}{stat.suffix}
      </p>
      <p className="text-white/70 text-xs mt-1 font-medium tracking-wide">{stat.label}</p>
    </motion.div>
  );
}

export default function ManpowerPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#f8fafc' }}>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative h-[92vh] min-h-[620px] overflow-hidden flex items-center">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <img src="/images/mp-hero.png" alt="KDC Manpower workforce"
              className="w-full h-full object-cover" />
          </motion.div>
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fafc] to-transparent" />

          <motion.div className="relative z-10 w-full" style={{ opacity: heroOpacity }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* Breadcrumb */}
              <Reveal className="flex items-center gap-2 text-xs text-white/60 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/90 font-semibold">Manpower Services</span>
              </Reveal>

              <Reveal custom={1}>
                <p className="text-blue-300 text-xs font-bold tracking-[0.35em] uppercase mb-4">
                  Specialized Workforce Solutions
                </p>
              </Reveal>

              <Reveal custom={2}>
                <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.0] text-balance mb-6 max-w-3xl drop-shadow-lg">
                  Specialized Manpower Solutions for the Energy Industry
                </h1>
              </Reveal>

              <Reveal custom={3}>
                <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl">
                  Supplying certified, safety-compliant skilled workforce across drilling, workover, HSE, mechanical, electrical and civil disciplines — on time, every time.
                </p>
              </Reveal>

              <Reveal custom={4} className="flex flex-wrap gap-4 mb-14">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors shadow-xl text-sm font-display tracking-wide">
                  Request Workforce <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold rounded-xl transition-colors text-sm font-display tracking-wide">
                  Contact HR Team
                </Link>
              </Reveal>

              {/* Stat cards */}
              <div className="flex flex-wrap gap-3">
                {heroStats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── 2. ABOUT MANPOWER SERVICES ──────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <div>
              <Reveal>
                <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">About Our Service</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 text-balance">
                  Your Trusted Partner for Skilled Industrial Workforce
                </h2>
              </Reveal>
              <Reveal custom={1}>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Kuwait Drilling CO. delivers end-to-end manpower solutions tailored to the oil and gas, petrochemical, and industrial sectors. With over two decades of operational experience, we maintain a pre-qualified, safety-trained workforce ready for immediate deployment across Kuwait and the wider GCC region.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  From long-term contract staffing to emergency crew mobilization, our HR and operations teams manage the entire lifecycle — recruitment, screening, compliance, deployment and ongoing support.
                </p>
              </Reveal>

              {/* Mini feature list */}
              <Reveal custom={2}>
                <ul className="space-y-3 mb-8">
                  {[
                    'Skilled manpower supply across all oilfield disciplines',
                    'Oil & gas workforce expertise with proven field performance',
                    'Technical staffing for specialized engineering roles',
                    'Field operations support — 24/7 on-call HR management',
                    'Flexible temporary and long-term deployment models',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal custom={3} className="flex gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-sm transition-colors shadow-lg">
                  Request Workforce <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-sm transition-colors">
                  Join Our Network
                </Link>
              </Reveal>
            </div>

            {/* Right — floating cards */}
            <div className="relative">
              <Reveal variants={scaleIn}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="/images/mp-overview.png" alt="KDC Manpower team"
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                </div>
              </Reveal>

              {/* Floating stat card */}
              <Reveal variants={scaleIn} custom={1}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-5 border border-slate-100">
                <p className="font-display text-3xl font-bold text-blue-700">500+</p>
                <p className="text-slate-600 text-sm font-medium">Pre-qualified professionals</p>
              </Reveal>

              {/* Floating cert badge */}
              <Reveal variants={scaleIn} custom={2}
                className="absolute -top-5 -right-5 bg-blue-700 text-white rounded-2xl shadow-xl px-5 py-4 text-center">
                <Award className="w-7 h-7 mx-auto mb-1 text-blue-200" />
                <p className="font-display font-bold text-sm">ISO Certified</p>
                <p className="text-blue-200 text-xs">Workforce</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3. WORKFORCE CATEGORIES ─────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">What We Supply</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Core Workforce Categories
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Multi-discipline professionals across every oilfield and industrial trade, pre-screened and deployment-ready.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {workforceCategories.map((cat, i) => {
                const Icon = cat.icon;
                const isOpen = expandedCard === i;
                return (
                  <Reveal key={cat.title} custom={i % 5} variants={scaleIn}>
                    <motion.div
                      onClick={() => setExpandedCard(isOpen ? null : i)}
                      whileHover={{ y: -4 }}
                      className="relative bg-white rounded-2xl border border-slate-200 p-5 cursor-pointer group overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                      {/* Blue top bar on hover */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                      <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center mb-4 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="font-display font-bold text-slate-900 text-sm mb-2 leading-snug">{cat.title}</h3>

                      <AnimatePresence>
                        {isOpen ? (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                            <p className="text-slate-500 text-xs leading-relaxed mt-1">{cat.desc}</p>
                            <button className="mt-3 text-blue-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                              Request Now <ArrowRight className="w-3 h-3" />
                            </button>
                          </motion.div>
                        ) : (
                          <p className="text-slate-400 text-xs">Tap to learn more</p>
                        )}
                      </AnimatePresence>

                      <Plus className={`absolute top-4 right-4 w-4 h-4 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-45 text-blue-600' : ''}`} />
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. INDUSTRIES SERVED ────────────────────────────────────────── */}
        <section className="py-24 px-6" style={{ backgroundColor: DARK }}>
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-12">
              <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Where We Operate</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">
                Industries Served
              </h2>
            </Reveal>

            {/* Tab selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.button key={ind.title} onClick={() => setActiveIndustry(i)}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      activeIndustry === i
                        ? 'bg-blue-700 text-white shadow-lg'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
                    }`}>
                    <Icon className="w-4 h-4" />
                    {ind.title}
                  </motion.button>
                );
              })}
            </div>

            {/* Active industry panel */}
            <AnimatePresence mode="wait">
              <motion.div key={activeIndustry}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden aspect-[21/7] max-h-[380px]">
                <img src={industries[activeIndustry].img} alt={industries[activeIndustry].title}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 to-slate-900/30" />
                <div className="absolute inset-0 flex items-end p-10">
                  <div>
                    <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-2">Industry Focus</p>
                    <h3 className="font-display text-4xl font-bold text-white mb-3">{industries[activeIndustry].title}</h3>
                    <p className="text-slate-300 text-base max-w-lg">{industries[activeIndustry].desc}</p>
                    <Link href="/contact"
                      className="mt-5 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors">
                      Discuss Your Requirement <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── 5. DEPLOYMENT PROCESS ───────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">How We Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Recruitment & Deployment Process
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                A structured, transparent six-step process ensuring the right personnel reach your site on time and fully compliant.
              </p>
            </Reveal>

            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block relative mb-12">
              {/* Connecting line */}
              <div className="absolute top-[52px] left-[8.33%] right-[8.33%] h-0.5 bg-slate-200 z-0" />
              <Reveal>
                <div className="absolute top-[52px] left-[8.33%] h-0.5 bg-blue-700 z-0 transition-all duration-1000" style={{ width: '83.34%' }} />
              </Reveal>

              <div className="grid grid-cols-6 gap-4">
                {processSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <Reveal key={step.num} custom={i} className="relative flex flex-col items-center text-center pt-2">
                      <motion.div whileHover={{ scale: 1.1, backgroundColor: BRAND }}
                        className="relative z-10 w-[52px] h-[52px] rounded-full bg-blue-700 flex items-center justify-center shadow-lg mb-4 transition-colors cursor-default">
                        <Icon className="w-5 h-5 text-white" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-blue-700 flex items-center justify-center text-[9px] font-bold text-blue-700">
                          {step.num.slice(1)}
                        </span>
                      </motion.div>
                      <h3 className="font-display font-bold text-slate-900 text-xs leading-snug mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{step.desc}</p>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="lg:hidden space-y-0">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.num} custom={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {i < processSteps.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 my-2" />}
                    </div>
                    <div className="pb-8">
                      <span className="text-[10px] font-bold text-blue-600 tracking-widest">{step.num}</span>
                      <h3 className="font-display font-bold text-slate-900 text-base mb-1">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6. SAFETY & COMPLIANCE ──────────────────────────────────────── */}
        <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: DARK }}>
          {/* Background image */}
          <div className="absolute inset-0">
            <img src="/images/mp-safety.png" alt="KDC Safety operations"
              className="w-full h-full object-cover opacity-15" />
          </div>
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          <div className="relative z-10 max-w-7xl mx-auto">
            <Reveal className="text-center mb-14">
              <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Zero Harm Policy</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">
                Safety & Compliance
              </h2>
              <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Every KDC worker is HSE-trained, medically certified and compliant with Kuwait Labour Law and international safety standards before deployment.
              </p>
            </Reveal>

            {/* KPI bars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {safetyMetrics.map((m, i) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true });
                return (
                  <Reveal key={m.label} custom={i} variants={scaleIn}>
                    <div ref={ref} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                      <p className="font-display text-4xl font-bold text-white mb-1">
                        {inView ? m.value : 0}{m.suffix}
                      </p>
                      <p className="text-slate-400 text-xs font-medium mb-4">{m.label}</p>
                      <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${m.bar}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: i * 0.15, ease: 'easeOut' }} />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Safety pillars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Shield,        title: 'PPE Standards',           desc: 'Full PPE compliance verified before any site deployment. Hard hats, high-vis, steel-cap boots and respiratory protection as required.' },
                { icon: ClipboardCheck, title: 'Certification Checks',   desc: 'OPITO, BOSIET, H2S, First Aid, and trade certifications validated and tracked in our compliance management system.' },
                { icon: HeartPulse,    title: 'Medical Fitness',          desc: 'Pre-deployment medical examinations conducted by approved occupational health physicians to ensure full fitness for duty.' },
                { icon: FileText,      title: 'Induction Training',       desc: 'Site-specific HSE inductions, toolbox talks and emergency response drills completed before mobilization.' },
                { icon: BarChart3,     title: 'Performance Monitoring',   desc: 'Regular HSE performance reviews, incident reporting and corrective action processes maintained throughout deployment.' },
                { icon: Award,         title: 'ISO Certifications',       desc: 'KDC holds ISO 9001 and OHSAS 18001 certifications, ensuring quality management and occupational health compliance.' },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} custom={i % 3} variants={scaleIn}>
                    <motion.div whileHover={{ borderColor: 'rgba(59,130,246,0.6)', y: -3 }}
                      className="bg-white/6 border border-white/15 rounded-2xl p-6 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-xl bg-blue-700/30 flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                        <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-white text-sm mb-2">{p.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. WHY KDC ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Advantages</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Why Choose KDC Manpower?
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyKDC.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} custom={i % 3} variants={scaleIn}>
                    <motion.div whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(29,78,216,0.12)' }}
                      className="bg-white rounded-2xl border border-slate-200 p-7 transition-all duration-300 group cursor-default">
                      {/* Large watermark number */}
                      <span className="absolute top-4 right-5 font-display text-7xl font-bold text-slate-50 select-none pointer-events-none leading-none group-hover:text-blue-50 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-display font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        <div className="mt-5 flex items-center gap-2 text-blue-700 text-xs font-bold group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 8. TRAINING IMAGE STRIP ──────────────────────────────────────── */}
        <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
          <img src="/images/mp-training.png" alt="KDC workforce training"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-3 gap-8">
              {[
                { value: '500+', label: 'Workforce Deployed Annually' },
                { value: '40+',  label: 'Training Programmes Completed' },
                { value: '99%',  label: 'Client Retention Rate' },
              ].map((s, i) => (
                <Reveal key={s.label} custom={i} className="text-center">
                  <p className="font-display text-5xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-slate-300 text-sm font-medium">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CTA BANNER ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-blue-700 relative overflow-hidden">
          {/* Watermark text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-display text-[18vw] font-bold text-white/5 whitespace-nowrap leading-none tracking-tight">MANPOWER</span>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <p className="text-blue-200 text-xs font-bold tracking-[0.3em] uppercase mb-4">Ready to Mobilize</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white text-balance mb-6">
                Need Reliable Skilled Manpower for Your Operations?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Tell us your requirements — headcount, discipline, certification and timeline. Our team responds within 4 business hours.
              </p>
            </Reveal>
            <Reveal custom={1} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl text-sm font-display tracking-wide">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/15 transition-colors text-sm font-display tracking-wide">
                Contact Recruitment Team
              </Link>
            </Reveal>

            {/* Quick contact strip */}
            <Reveal custom={2} className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <a href="tel:+96522225555" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +965 2222 5555
              </a>
              <a href="mailto:hr@kdckwt.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> hr@kdckwt.com
              </a>
              <a href="https://wa.me/96522225555" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── 10. CONTACT SECTION ─────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
            {/* Inquiry form */}
            <div>
              <Reveal>
                <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Get In Touch</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                  Workforce Inquiry
                </h2>
              </Reveal>
              <Reveal custom={1}>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Full Name *</label>
                      <input type="text" placeholder="Ahmed Al-Rashidi"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Company *</label>
                      <input type="text" placeholder="Your Company Name"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Email *</label>
                      <input type="email" placeholder="ahmed@company.com"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Phone</label>
                      <input type="tel" placeholder="+965 XXXX XXXX"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Workforce Category</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all">
                      <option>Select category...</option>
                      {workforceCategories.map((c) => <option key={c.title}>{c.title}</option>)}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Headcount Required</label>
                      <input type="number" placeholder="e.g. 10"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Deployment Date</label>
                      <input type="date"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 tracking-wide">Additional Requirements</label>
                    <textarea rows={4} placeholder="Describe certifications, experience level, site conditions..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 resize-none transition-all" />
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl text-sm font-display tracking-wide transition-colors shadow-lg">
                    Submit Workforce Request
                  </motion.button>
                </form>
              </Reveal>
            </div>

            {/* Contact details */}
            <div className="space-y-6 lg:pt-16">
              {[
                { icon: Phone,       label: 'Main Office',       value: '+965 2222 5555',   href: 'tel:+96522225555' },
                { icon: Mail,        label: 'HR & Recruitment',  value: 'hr@kdckwt.com',    href: 'mailto:hr@kdckwt.com' },
                { icon: MessageCircle, label: 'WhatsApp Support', value: '+965 9999 8888',  href: 'https://wa.me/96599998888' },
                { icon: MapPin,      label: 'Head Office',       value: 'Kuwait City, Kuwait', href: '#' },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} custom={i} variants={scaleIn}>
                    <motion.a href={c.href} whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 tracking-wide uppercase">{c.label}</p>
                        <p className="text-slate-900 font-semibold text-sm mt-0.5">{c.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 ml-auto transition-colors" />
                    </motion.a>
                  </Reveal>
                );
              })}

              {/* Emergency support card */}
              <Reveal custom={4} variants={scaleIn}>
                <div className="p-5 bg-blue-700 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <HeartPulse className="w-5 h-5 text-blue-200" />
                    <p className="font-display font-bold text-white text-sm">24/7 Emergency Support</p>
                  </div>
                  <p className="text-blue-200 text-xs leading-relaxed mb-3">
                    For urgent staffing requirements, emergency replacements or operational workforce issues — our team is available around the clock.
                  </p>
                  <a href="tel:+96522225555"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-blue-50 transition-colors">
                    <Phone className="w-3.5 h-3.5" /> Call Emergency Line
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-10">
              <h3 className="font-display text-2xl font-bold text-slate-900">Related Services</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Drilling & Workover',    href: '/services/drilling-workover', icon: HardHat },
                { label: 'Tubular Running',         href: '/services/tubular-running',   icon: Wrench  },
                { label: 'Water Well Drilling',     href: '/services/water-well',        icon: Target  },
                { label: 'QHSE',                    href: '/qhse',                       icon: Shield  },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.label} custom={i} variants={scaleIn}>
                    <Link href={s.href}>
                      <motion.div whileHover={{ y: -4 }}
                        className="bg-white border border-slate-200 hover:border-blue-200 rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 hover:shadow-md">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-display font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors">{s.label}</span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 ml-auto transition-all group-hover:translate-x-1" />
                      </motion.div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Sticky floating contact button */}
      <motion.a href="/contact" initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 }}
        whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-600 text-white rounded-full px-5 py-3.5 shadow-2xl flex items-center gap-2 text-sm font-bold font-display transition-colors">
        <Phone className="w-4 h-4" /> Request Workforce
      </motion.a>

      <Footer />
    </>
  );
}
