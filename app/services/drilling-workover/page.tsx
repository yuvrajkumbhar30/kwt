'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight, ArrowRight, Phone, Mail, Shield, Award, Zap,
  Settings, Users, Wrench, ClipboardCheck, HardHat, Truck,
  BarChart3, CheckCircle2, ChevronDown, Play, AlertTriangle,
  Globe, Target, Timer, ThumbsUp, Layers, Star,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections/footer';

/* ─── Animated counter hook ─────────────────────────────────────── */
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

/* ─── Section observer hook ─────────────────────────────────────── */
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
const stats = [
  { value: 35, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Safety Compliance' },
  { value: 1500, suffix: '+', label: 'Skilled Workforce' },
];

const coreServices = [
  { icon: HardHat, title: 'Drilling Support Services', desc: 'End-to-end drilling support covering all well types including development, exploratory, and HP-HT wells across Kuwait and the GCC.' },
  { icon: Wrench, title: 'Workover Operations', desc: 'Comprehensive workover solutions using 750–1500 HP rigs to restore, re-complete, or abandon wells with maximum efficiency.' },
  { icon: Settings, title: 'Rig Maintenance', desc: 'Planned and corrective maintenance programs ensuring maximum rig uptime and equipment reliability in harsh desert conditions.' },
  { icon: Users, title: 'Manpower Supply', desc: 'Certified, experienced oilfield personnel from tool pushers to derrickmen, fully trained in KOC and KPC safety standards.' },
  { icon: Truck, title: 'Equipment Handling', desc: 'Safe mobilization, rigging up/down, and logistics for all drilling equipment including VFD and SCR rig packages.' },
  { icon: Shield, title: 'HSE Compliance', desc: 'Strict adherence to international QHSE standards with zero-harm philosophy embedded in every operational phase.' },
  { icon: ClipboardCheck, title: 'Site Supervision', desc: 'Experienced resident supervisors and company men ensuring drilling programs are executed to specification and on schedule.' },
  { icon: BarChart3, title: 'Operational Support', desc: 'Real-time operational reporting, KPI tracking, and continuous improvement programs to optimize performance.' },
];

const processSteps = [
  { num: '01', title: 'Planning', desc: 'Well program review, hazard identification, resource allocation, and timeline mapping with all stakeholders.' },
  { num: '02', title: 'Mobilization', desc: 'Rig transport, equipment certification, personnel deployment, and site preparation to specification.' },
  { num: '03', title: 'Execution', desc: 'Drilling and workover operations executed by experienced crews with real-time performance monitoring.' },
  { num: '04', title: 'Safety Monitoring', desc: 'Continuous QHSE surveillance, toolbox talks, permit-to-work enforcement, and incident prevention protocols.' },
  { num: '05', title: 'Reporting & Completion', desc: 'Detailed daily drilling reports, well completion documentation, lessons learned, and rig demobilization.' },
];

const kpis = [
  { icon: HardHat, label: 'Safety Training Hours', value: '50,000+', sub: 'Annually' },
  { icon: AlertTriangle, label: 'Incident Prevention Rate', value: '99.8%', sub: 'Track Record' },
  { icon: CheckCircle2, label: 'Compliance Standards Met', value: 'ISO 9001', sub: '+ OSHAS 18001' },
  { icon: Shield, label: 'Risk Assessments', value: '2,000+', sub: 'Per Year' },
];

const certifications = ['ISO 9001:2015', 'OHSAS 18001', 'ISO 14001', 'IADC Certified', 'KOC Approved', 'KPC Approved'];

const capabilities = [
  { icon: Layers, title: 'Heavy Equipment', items: ['1,500–3,000 HP Drilling Rigs', '750–1,500 HP Workover Rigs', 'VFD & SCR Rig Packages', '7,500 psi Circulating Systems'] },
  { icon: Settings, title: 'Drilling Tools', items: ['Top Drive Systems', 'BOP Stacks', 'Drill String Equipment', 'Mud Pump Packages'] },
  { icon: Truck, title: 'Field Support Units', items: ['Cementing Units', 'Mud Logging Units', 'Fuel & Water Tanks', 'Camp Facilities'] },
  { icon: Users, title: 'Technical Workforce', items: ['Drilling Engineers', 'Company Men', 'Tool Pushers', 'HSE Supervisors'] },
  { icon: Globe, title: 'Logistics Support', items: ['Equipment Transport', 'Customs Clearance', 'Spare Parts Supply', 'Vendor Management'] },
];

const sectors = [
  { icon: Zap, title: 'Oil & Gas', desc: 'Upstream drilling and workover for national and international oil companies across Kuwait and GCC.' },
  { icon: BarChart3, title: 'Energy', desc: 'Supporting energy infrastructure development with reliable drilling services and manpower supply.' },
  { icon: Settings, title: 'Petrochemical', desc: 'Well services for petrochemical feedstock facilities requiring high-spec drilling capabilities.' },
  { icon: Layers, title: 'Infrastructure', desc: 'Industrial drilling support for pipeline crossing, dewatering, and infrastructure development projects.' },
];

const whyKdc = [
  { icon: Award, title: 'Experienced Workforce', desc: '35+ years of Kuwait oilfield expertise with crews fully certified to KOC and KPC operating standards.' },
  { icon: Timer, title: 'Rapid Deployment', desc: 'Pre-mobilized rig packages and standby crews enable rapid project initiation across the GCC region.' },
  { icon: Shield, title: 'Uncompromising HSE', desc: 'Zero-harm philosophy with ISO-certified QHSE management systems and dedicated safety supervisors on every job.' },
  { icon: Target, title: 'Kuwait Market Expertise', desc: 'Unmatched knowledge of Kuwait's deep HP-HT wells, H2S exposure conditions, and regulatory requirements.' },
  { icon: ThumbsUp, title: 'Operational Reliability', desc: '99%+ equipment availability powered by rigorous maintenance programs and dedicated engineering support teams.' },
  { icon: CheckCircle2, title: 'End-to-End Support', desc: 'From well planning through completion and demobilization — KDC delivers the full service package under one roof.' },
];

const projects = [
  { img: '/images/dw-project-1.png', title: 'Deep HP-HT Exploration Campaign', scope: 'Drilling — 2 × 3,000HP VFD Rigs', location: 'North Kuwait', outcome: '4 wells, 0 incidents' },
  { img: '/images/dw-project-2.png', title: 'Pad Drilling Development Program', scope: 'Drilling — Multi-well pad setup', location: 'West Kuwait', outcome: '12 wells, ahead of schedule' },
  { img: '/images/dw-project-3.png', title: 'Emergency Workover Campaign', scope: 'Workover — 1,500HP SCR Rig', location: 'South Kuwait', outcome: '8 wells restored, 100% uptime' },
];

const faqs = [
  { q: 'What drilling services does KDC provide?', a: 'KDC provides full-scope drilling services including development drilling, exploratory drilling, HP-HT well operations, pad drilling, and workover campaigns using rigs ranging from 750 to 3,000 HP.' },
  { q: 'What industries are supported?', a: 'KDC primarily serves the oil and gas, energy, petrochemical, and industrial infrastructure sectors across Kuwait, Oman, Jordan, and the wider GCC region.' },
  { q: 'How does KDC maintain safety standards?', a: 'KDC operates under ISO 9001, OHSAS 18001, and ISO 14001 certified management systems, with dedicated HSE supervisors, daily toolbox talks, permit-to-work systems, and rigorous incident prevention protocols.' },
  { q: 'Is manpower supply included?', a: 'Yes. KDC provides certified drilling crews including drilling engineers, tool pushers, derrickmen, motormen, and HSE supervisors — all fully trained to KOC/KPC standards.' },
  { q: 'Does KDC support offshore and onshore projects?', a: 'KDC\'s primary expertise is onshore desert drilling in Kuwait and the GCC. For offshore or extended-reach requirements, please contact our technical team to discuss specific project needs.' },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
function StatCounter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 2000, active);
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-3xl md:text-4xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-slate-400 text-xs tracking-widest uppercase">{label}</span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
      >
        <span className="font-display text-lg pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 text-blue-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function DrillingWorkoverPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsActive(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const overview = useInView();
  const process = useInView();
  const whySection = useInView();

  return (
    <>
      <Header />
      <main>

        {/* ── 1. HERO ────────────────────────────────────────────────── */}
        <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
          <Image src="/images/dw-hero.png" alt="KDC Drilling Operations" fill className="object-cover" priority />
          {/* Layered overlays for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />

          {/* Animated geometric accent */}
          <div className="absolute top-1/4 right-12 w-64 h-64 border border-amber-400/10 rotate-12 hidden xl:block" />
          <div className="absolute top-1/3 right-20 w-40 h-40 border border-blue-400/10 -rotate-6 hidden xl:block" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-32 w-full">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">KDC Services</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-none mb-6 text-balance">
                Drilling &<br />
                <span className="text-amber-400">Workover</span><br />
                Services
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Kuwait Drilling CO. delivers world-class drilling and workover solutions — built for the harsh desert environment, engineered for Kuwait&apos;s most demanding HP-HT wells.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-lg transition-colors shadow-lg font-display tracking-wide text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Contact Our Team
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-colors text-sm font-display tracking-wide"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Stats strip ── */}
          <div ref={statsRef} className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={statsActive} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. BREADCRUMB ─────────────────────────────────────────── */}
        <nav className="bg-slate-50 border-b border-slate-200 px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-700 transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#services" className="hover:text-blue-700 transition-colors font-medium">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Drilling & Workover</span>
          </div>
        </nav>

        {/* ── 3. OVERVIEW ───────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white" ref={overview.ref}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <div className={`transition-all duration-700 ${overview.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase">Company Overview</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight text-balance">
                Built for Kuwait&apos;s<br />Toughest Wells
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
                <p>
                  Kuwait Drilling CO. K.S.C.C. provides expert drilling and workover services capable of drilling various types of wells. KDC rigs are built to withstand the harsh desert environment conditions and to handle the challenging drilling conditions in Kuwait — including deep HP-HT wells and exposure to H2S.
                </p>
                <p>
                  Our extensive experience in these operating conditions prepares us to provide service in GCC countries and across the region. KDC operates drilling rigs ranging from <strong className="text-slate-800">1,500 to 3,000 HP</strong>, and workover rigs from <strong className="text-slate-800">750 to 1,500 HP</strong>, covering a wide range of drilling and workover needs for development and deep exploratory wells.
                </p>
                <p>
                  Our diverse and modern rig fleet is made up of VFD and SCR rigs, built or refurbished in the last 10 years, many of them equipped with <strong className="text-slate-800">7,500 psi circulating systems</strong>, and upgraded to include pad-drilling capabilities.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors text-sm">
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#capabilities" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-700 font-semibold rounded-lg transition-colors text-sm">
                  View Capabilities
                </a>
              </div>
            </div>

            {/* Right — image + floating cards */}
            <div className={`relative transition-all duration-700 delay-200 ${overview.inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image src="/images/dw-overview.png" alt="KDC Drilling Rig" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {/* Floating info cards */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Safety First</p>
                  <p className="text-slate-500 text-xs">ISO-certified QHSE</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-xl px-5 py-4 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Certified Teams</p>
                  <p className="text-slate-500 text-xs">KOC & KPC approved</p>
                </div>
              </div>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-amber-400 rounded-xl shadow-xl px-5 py-4 flex items-center gap-3 hidden xl:flex">
                <div className="w-10 h-10 bg-amber-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm">Advanced Equipment</p>
                  <p className="text-slate-800 text-xs">7,500 psi systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CORE SERVICES GRID ─────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-950" id="services-grid">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">What We Deliver</span>
                <div className="h-px w-10 bg-amber-400" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Core Service Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-[15px] leading-relaxed">
                From initial planning through final completion, KDC provides a comprehensive suite of drilling and workover services.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreServices.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/60 to-transparent transition-all duration-500" />

                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-600/10 group-hover:bg-blue-600/20 border border-blue-500/20 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                    <span className="inline-flex items-center text-blue-400 text-xs font-semibold gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. OPERATIONAL EXCELLENCE / PROCESS ──────────────────── */}
        <section className="py-24 px-6 bg-white" ref={process.ref}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase">How We Work</span>
                <div className="h-px w-10 bg-blue-600" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Operational Excellence Process</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
                A proven five-phase methodology that delivers every project safely, on time, and within scope.
              </p>
            </div>

            {/* Desktop horizontal timeline */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-16 left-0 right-0 h-0.5 bg-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-amber-400 transition-all duration-2000"
                    style={{ width: process.inView ? '100%' : '0%', transition: 'width 2s ease-in-out' }}
                  />
                </div>
                <div className="grid grid-cols-5 gap-4 relative">
                  {processSteps.map((step, i) => (
                    <div
                      key={step.num}
                      className="flex flex-col items-center text-center group"
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      {/* Node */}
                      <div className={`w-12 h-12 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center mb-6 z-10 shadow-md group-hover:bg-blue-600 transition-colors duration-300 ${process.inView ? 'scale-100' : 'scale-0'} transition-transform duration-500`}
                        style={{ transitionDelay: `${i * 200}ms` }}>
                        <span className="font-display text-sm font-bold text-blue-600 group-hover:text-white transition-colors">{step.num}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="lg:hidden space-y-0">
              {processSteps.map((step, i) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow">
                      <span className="font-display text-xs font-bold text-white">{step.num}</span>
                    </div>
                    {i < processSteps.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 my-2 min-h-8" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. SAFETY & QHSE ──────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-green-400" />
                <span className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase">Safety & QHSE</span>
                <div className="h-px w-10 bg-green-400" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
                <span className="text-green-400">Zero</span> Harm
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-[15px] leading-relaxed mt-4">
                Safety is not a priority at KDC — it is a core value. Every operation is governed by our Zero Harm philosophy, ensuring every worker goes home safely every day.
              </p>
            </div>

            {/* KPI cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {kpis.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-center hover:border-green-500/40 transition-colors group">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="font-display text-2xl font-bold text-white mb-0.5">{value}</p>
                  <p className="text-green-400 text-xs font-semibold mb-2">{sub}</p>
                  <p className="text-slate-400 text-xs">{label}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="border border-slate-800 rounded-2xl p-8 bg-slate-900/50">
              <h3 className="font-display text-xl font-bold text-white mb-6 text-center">Certifications & Approvals</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert) => (
                  <span key={cert} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. EQUIPMENT & CAPABILITIES ──────────────────────────── */}
        <section className="py-24 px-6 bg-white" id="capabilities">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase">Fleet & Resources</span>
                <div className="h-px w-10 bg-blue-600" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">Equipment & Capabilities</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {capabilities.map(({ icon: Icon, title, items }) => (
                <div key={title} className="group bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-3">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-slate-500 text-sm flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Rig fleet image */}
            <div className="mt-12 relative rounded-2xl overflow-hidden shadow-xl aspect-[21/6]">
              <Image src="/images/dw-rig-fleet.png" alt="KDC Rig Fleet" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-white">KDC Rig Fleet</p>
                  <p className="text-slate-300 text-sm">VFD & SCR Rigs — 1,500 to 3,000 HP</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-lg text-sm transition-colors">
                  Request a Rig <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. SECTORS SERVED ─────────────────────────────────────── */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">Industries We Support</h2>
              <p className="text-slate-500 text-sm">Trusted by national oil companies and international operators across the GCC</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sectors.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. WHY KDC ────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white" ref={whySection.ref}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left sticky heading */}
              <div className={`transition-all duration-700 ${whySection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-amber-400" />
                  <span className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase">Our Advantage</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance leading-tight">
                  Why Choose<br />
                  <span className="text-blue-700">KDC</span> for Drilling?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">
                  From equipment reliability to workforce certification, KDC brings a unique combination of local expertise and international standards to every project.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors text-sm">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyKdc.map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={title}
                    className={`border border-slate-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all duration-300 group ${whySection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. PROJECT SHOWCASE ──────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase">Case Studies</span>
                <div className="h-px w-10 bg-amber-400" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Settings className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{p.scope}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Globe className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{p.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="font-semibold">{p.outcome}</span>
                      </div>
                    </div>
                  </div>
                  {/* Bottom gold sweep */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/0 group-hover:via-amber-400/80 to-transparent transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. CLIENT TRUST ──────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">Trusted by Industry Leaders</h2>
              <p className="text-slate-500 text-sm">KDC is an approved and qualified vendor for Kuwait&apos;s major national oil companies</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {['Kuwait Oil Company (KOC)', 'Kuwait Petroleum Corporation', 'Kuwait Gulf Oil Company', 'Kuwait National Petroleum Co.'].map((client) => (
                <div key={client} className="flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl p-6 h-20 hover:border-blue-300 hover:shadow-sm transition-all">
                  <span className="text-slate-600 font-semibold text-xs text-center leading-tight">{client}</span>
                </div>
              ))}
            </div>
            {/* Testimonial */}
            <div className="bg-slate-950 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-6 left-8 text-8xl text-blue-600/10 font-display font-bold leading-none">&ldquo;</div>
              <div className="relative max-w-3xl mx-auto text-center">
                <p className="text-slate-300 text-lg leading-relaxed italic mb-6">
                  &ldquo;KDC has been a reliable drilling contractor for our operations in Kuwait. Their crews are highly professional, their equipment is modern, and their commitment to safety is uncompromising.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">Senior Drilling Engineer</p>
                    <p className="text-slate-500 text-xs">Major Kuwait Oil Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. FAQ ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase">FAQs</span>
                <div className="h-px w-10 bg-blue-600" />
              </div>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-sm">Answers to common questions about KDC&apos;s drilling and workover services</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
            </div>
          </div>
        </section>

        {/* ── 13. FINAL CTA ─────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-blue-700 relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px)' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-amber-300" />
              <span className="text-amber-300 text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
              <div className="h-px w-10 bg-amber-300" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Looking for Reliable Drilling<br />& Workover Support?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Our team of drilling experts is ready to discuss your project requirements, rig availability, and how KDC can support your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl transition-colors shadow-xl font-display tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Request Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors font-display tracking-wide"
              >
                <Mail className="w-4 h-4" />
                Contact KDC
              </Link>
            </div>
            {/* Quick contact strip */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
              <a href="tel:+965XXXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +965 XXXX XXXX
              </a>
              <div className="hidden sm:block w-px h-4 bg-blue-400" />
              <a href="mailto:info@kdckwt.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@kdckwt.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
