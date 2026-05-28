"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import {
  ChevronRight,
  ChevronDown,
  Search,
  MapPin,
  Briefcase,
  Clock,
  TrendingUp,
  ShieldCheck,
  Globe,
  Users,
  ArrowRight,
  Upload,
  CheckCircle2,
  Star,
  Play,
  ChevronLeft,
  FileText,
  UserCheck,
  MessageSquare,
  Handshake,
  ClipboardList,
  Heart,
  BookOpen,
  Award,
  Plane,
  Gift,
  Calendar,
  AlertCircle,
  X,
  Plus,
  Minus,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const whyKdcCards = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Structured career pathways and mentorship programmes that accelerate your professional development from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "An uncompromising QHSE culture built on ISO 9001 and OSHAS 18001 standards — your safety is never negotiated.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description:
      "Work on international projects across Kuwait, Oman, Jordan and beyond, gaining cross-border operational experience.",
  },
  {
    icon: Users,
    title: "Team Excellence",
    description:
      "Collaborate with industry veterans and emerging talent in a culture defined by technical rigour and mutual respect.",
  },
];

const lifeHighlights = [
  "Competitive compensation benchmarked to international energy sector standards",
  "Continuous technical learning and professional certifications",
  "Field, offshore, and corporate office opportunities across all disciplines",
  "Operations conducted to international standards including API, ISO, and OSHA",
  "Diverse, multinational workforce spanning 12+ nationalities",
];

const hiringSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Application",
    description: "Submit your CV and application through our portal or via email.",
  },
  {
    icon: Search,
    step: "02",
    title: "Screening",
    description: "Our HR team reviews qualifications and shortlists suitable candidates.",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Technical Interview",
    description: "In-depth assessment of your technical expertise with our engineering leads.",
  },
  {
    icon: UserCheck,
    step: "04",
    title: "HR Discussion",
    description: "Culture fit conversation, compensation alignment, and final verification.",
  },
  {
    icon: Handshake,
    step: "05",
    title: "Offer & Onboarding",
    description: "Formal offer extended with a structured onboarding programme.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Drilling Engineer",
    department: "Drilling Operations",
    location: "Kuwait",
    type: "Full-time",
    experience: "5+ Years",
    posted: "3 days ago",
  },
  {
    id: 2,
    title: "HSE Officer",
    department: "QHSE",
    location: "Kuwait",
    type: "Full-time",
    experience: "3+ Years",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Mechanical Supervisor",
    department: "Maintenance",
    location: "Oman",
    type: "Full-time",
    experience: "7+ Years",
    posted: "2 weeks ago",
  },
  {
    id: 4,
    title: "Electrical Technician",
    department: "Electrical",
    location: "Kuwait",
    type: "Contract",
    experience: "3+ Years",
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "HR Executive",
    department: "Human Resources",
    location: "Kuwait",
    type: "Full-time",
    experience: "2+ Years",
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Procurement Specialist",
    department: "Supply Chain",
    location: "Kuwait",
    type: "Full-time",
    experience: "4+ Years",
    posted: "3 weeks ago",
  },
  {
    id: 7,
    title: "Directional Drilling Specialist",
    department: "Drilling Operations",
    location: "Jordan",
    type: "Full-time",
    experience: "8+ Years",
    posted: "4 days ago",
  },
  {
    id: 8,
    title: "Rig Superintendent",
    department: "Drilling Operations",
    location: "Kuwait",
    type: "Full-time",
    experience: "10+ Years",
    posted: "2 days ago",
  },
];

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage for you and your dependants." },
  { icon: BookOpen, title: "Training Programmes", description: "Fully funded technical certifications, safety courses, and leadership workshops." },
  { icon: TrendingUp, title: "Career Advancement", description: "Transparent promotion pathways with performance-linked progression." },
  { icon: Calendar, title: "Paid Leave", description: "Generous annual leave entitlement aligned with regional labour standards." },
  { icon: Plane, title: "International Exposure", description: "Rotation and secondment opportunities across our operations in 3+ countries." },
  { icon: Gift, title: "Performance Rewards", description: "Competitive bonus schemes, recognition programmes, and long-service awards." },
];

const testimonials = [
  {
    image: "/images/careers-emp-1.png",
    name: "Ahmed Al-Rashidi",
    role: "Senior Drilling Engineer",
    quote:
      "KDC gave me the platform to grow from a junior engineer to leading multi-well campaigns. The mentorship culture here is unmatched in the industry.",
  },
  {
    image: "/images/careers-emp-2.png",
    name: "Fatima Al-Mansouri",
    role: "QHSE Engineer",
    quote:
      "What I value most is the genuine commitment to safety. It is not a slogan here — every decision on site reflects our zero-incident philosophy.",
  },
  {
    image: "/images/careers-emp-3.png",
    name: "Ravi Krishnamurthy",
    role: "Mechanical Supervisor",
    quote:
      "Working across Kuwait and Oman has broadened my expertise enormously. KDC invests in its people and that makes all the difference.",
  },
];

const faqs = [
  {
    q: "How can I apply for a position at KDC?",
    a: "You can apply through our Open Positions section on this page, or submit a general application via the CV Submission form. We also accept applications via email at hr@kdckwt.com.",
  },
  {
    q: "What qualifications are required to join KDC?",
    a: "Requirements vary by role. Technical positions generally require a relevant engineering or technical degree alongside industry experience. All roles require a commitment to our QHSE values.",
  },
  {
    q: "Does KDC hire fresh graduates?",
    a: "Yes. We run structured graduate development programmes for select disciplines. Entry-level applicants are encouraged to apply and will be assessed on academic performance, aptitude, and attitude.",
  },
  {
    q: "Can I apply for multiple roles simultaneously?",
    a: "Yes, you may apply for multiple positions that match your qualifications. We recommend tailoring your application for each role to highlight the most relevant experience.",
  },
  {
    q: "How long does the recruitment process take?",
    a: "Our typical process takes 3–6 weeks from initial application to offer, depending on the role and volume of applicants. We will keep you informed at each stage.",
  },
  {
    q: "Are there opportunities for career progression at KDC?",
    a: "Absolutely. KDC has a structured career framework with clearly defined progression pathways. We promote from within wherever possible and invest heavily in employee development.",
  },
];

const departments = ["All Departments", "Drilling Operations", "QHSE", "Maintenance", "Electrical", "Human Resources", "Supply Chain"];
const locations = ["All Locations", "Kuwait", "Oman", "Jordan"];
const experienceLevels = ["All Experience", "2+ Years", "3+ Years", "4+ Years", "5+ Years", "7+ Years", "8+ Years", "10+ Years"];

// ─── COUNTER HOOK ─────────────────────────────────────────────────────────────

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
  }, [target, duration, active]);
  return count;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1800, active);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm mt-1 font-medium tracking-wide">{label}</div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800 text-[15px] font-display">{q}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-slate-100">
          <p className="text-slate-600 text-sm leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [loc, setLoc] = useState("All Locations");
  const [exp, setExp] = useState("All Experience");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredJobs = jobs.filter((j) => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.department.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "All Departments" || j.department === dept;
    const matchLoc = loc === "All Locations" || j.location === loc;
    const matchExp = exp === "All Experience" || j.experience === exp;
    return matchSearch && matchDept && matchLoc && matchExp;
  });

  const handleFileDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => { setFormLoading(false); setFormSubmitted(true); }, 1800);
  };

  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);

  const t = testimonials[testimonialIdx];

  return (
    <>
      <Header />
      <main className="overflow-hidden">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/careers-hero-bg.png"
            alt="KDC careers hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/90">Careers</span>
            </nav>

            <p className="text-blue-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Join Our Team</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight text-balance mb-6 max-w-2xl">
              Build Your Career With KDC
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              Join a team driving operational excellence across the energy sector in Kuwait, Oman, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg font-display tracking-wide"
              >
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#cv-submission"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-colors text-sm font-display tracking-wide"
              >
                Submit Your CV <Upload className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────────────────────── */}
        <section className="bg-slate-900 py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-700/60">
            <StatCounter value={20} suffix="+" label="Years of Operations" />
            <StatCounter value={500} suffix="+" label="Completed Projects" />
            <StatCounter value={12} suffix="+" label="Nationalities on Team" />
            <StatCounter value={95} suffix="%" label="Employee Retention" />
          </div>
        </section>

        {/* ── 2. WHY WORK WITH KDC ─────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Culture</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Why Work With KDC
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyKdcCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. LIFE AT KDC ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src="/images/careers-life-1.png" alt="Engineers reviewing documents" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src="/images/careers-life-3.png" alt="Engineer at control room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src="/images/careers-life-2.png" alt="Team celebrating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src="/images/careers-life-4.png" alt="Safety training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Environment</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance mb-6 leading-tight">
                Life at KDC
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-[15px]">
                At Kuwait Drilling CO., every employee is part of a mission-driven organisation. From field operations to corporate offices, we foster a culture where excellence is the standard and people are the priority.
              </p>
              <ul className="space-y-4">
                {lifeHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 4. HIRING PROCESS ────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white overflow-x-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">How We Hire</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Our Hiring Process
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600" />
            </div>

            <div className="relative">
              {/* Connector line — desktop only */}
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-200" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {hiringSteps.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="flex flex-col items-center text-center relative">
                      {/* Circle */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center shadow-md mb-5 group-hover:border-blue-600 transition-colors">
                        <Icon className="w-7 h-7 text-blue-600" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center font-display">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{s.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. OPEN POSITIONS ────────────────────────────────────────────── */}
        <section id="open-positions" className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Now Hiring</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Open Positions
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600" />
            </div>

            {/* Filters */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search roles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
                />
              </div>
              {[
                { value: dept, setter: setDept, options: departments },
                { value: loc, setter: setLoc, options: locations },
                { value: exp, setter: setExp, options: experienceLevels },
              ].map(({ value, setter, options }, i) => (
                <div key={i} className="relative">
                  <select
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-white"
                  >
                    {options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Job cards */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-20 text-slate-500">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                <p className="font-display text-xl font-bold text-slate-700 mb-1">No positions found</p>
                <p className="text-sm">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-0.5">{job.department}</p>
                      </div>
                      <span className="flex-shrink-0 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-5">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-slate-400" />{job.experience}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" />{job.posted}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a
                        href="#cv-submission"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors font-display"
                      >
                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <button className="text-xs text-slate-400 hover:text-blue-600 transition-colors font-medium">
                        Save Role
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── 6. BENEFITS ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">What We Offer</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">
                Employee Benefits
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-500" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-600/20 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. CV SUBMISSION ─────────────────────────────────────────────── */}
        <section id="cv-submission" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Apply Today</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Submit Your CV
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600" />
              <p className="text-slate-500 text-sm mt-4 max-w-lg mx-auto">
                Can&apos;t find the right position? Submit your profile and we will reach out when a suitable opportunity arises.
              </p>
            </div>

            {formSubmitted ? (
              <div className="max-w-md mx-auto text-center py-16">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Application Received</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Thank you for your interest in joining KDC. Our HR team will review your profile and be in touch within 5–7 business days.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setFileName(""); }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-xl text-sm transition-colors font-display"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    { label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                    { label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
                    { label: "Phone Number", type: "tel", placeholder: "+965 XXXX XXXX", required: false },
                    { label: "Position Applied For", type: "text", placeholder: "e.g. Drilling Engineer", required: false },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        {f.label}{f.required && <span className="text-blue-600 ml-0.5">*</span>}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                      />
                    </div>
                  ))}
                </div>

                {/* Experience select */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Years of Experience</label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400">
                      <option>Less than 2 years</option>
                      <option>2 – 5 years</option>
                      <option>5 – 10 years</option>
                      <option>10+ years</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Drag & drop upload */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Resume / CV <span className="text-blue-600">*</span>
                  </label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors ${
                      dragOver ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50"
                    }`}
                  >
                    <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
                    {fileName ? (
                      <div className="flex items-center justify-center gap-3 text-sm text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-5 h-5" />
                        {fileName}
                      </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                        <p className="text-slate-600 font-semibold text-sm">Drag & drop your CV here</p>
                        <p className="text-slate-400 text-xs mt-1">or click to browse — PDF, DOC, DOCX up to 5 MB</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Message</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your experience and the type of role you are seeking..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 hover:bg-blue-600 disabled:opacity-60 text-white font-bold rounded-xl transition-colors font-display tracking-wide text-sm shadow-lg"
                >
                  {formLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>Submit Application <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── 8. TESTIMONIALS ──────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our People</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                What Our Employees Say
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600" />
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 shadow-sm relative">
              {/* Quote mark */}
              <div className="font-display text-8xl text-blue-100 leading-none absolute top-6 left-10 select-none">&ldquo;</div>

              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-blue-100 shadow-md">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-display text-lg font-bold text-slate-900">{t.name}</p>
                    <p className="text-blue-600 text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-end gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
                <button onClick={prevTestimonial} className="ml-2 w-9 h-9 rounded-full border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextTestimonial} className="w-9 h-9 rounded-full border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Common Questions</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600" />
            </div>
            <div className="space-y-3">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA ────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-blue-700 relative overflow-hidden">
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-blue-200 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Take The Next Step</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white text-balance mb-6 leading-tight">
              Ready to Build Your Future With KDC?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Explore our open opportunities or send us your profile. We are always looking for talented professionals to grow with us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl transition-colors text-sm font-display tracking-wide shadow-lg"
              >
                Explore Opportunities <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#cv-submission"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white border border-blue-500 font-bold rounded-xl transition-colors text-sm font-display tracking-wide"
              >
                Submit Your Resume <Upload className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
