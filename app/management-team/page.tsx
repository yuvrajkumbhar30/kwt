"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  X,
  Linkedin,
  ShieldCheck,
  Lightbulb,
  Users,
  Globe,
  Award,
  Briefcase,
  Phone,
  Mail,
  ArrowRight,
  Handshake,
  Leaf,
  Target,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";

// ─── TYPES ───────────────────────────────────────────────────────────────────

type Executive = {
  id: number;
  name: string;
  title: string;
  department: string;
  image: string;
  summary: string;
  bio: string;
  expertise: string[];
  education: string[];
  years: number;
  quote: string;
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const executives: Executive[] = [
  {
    id: 1,
    name: "Mr. Khaled Al-Damkhi",
    title: "Administration Manager",
    department: "Administration",
    image: "/images/mgmt-khaled.png",
    summary:
      "Senior administrator with deep expertise in HR management, institutional governance, and corporate operations. A certified Chartered HR Consultant with extensive public and private sector experience.",
    bio: "Khalid Al Damkhi is the Administrative Manager at KDC, a role he commenced in 2005. Prior to his current appointment, Al-Damkhi served at the Kuwait Chamber of Commerce. At the Council of Ministers General Secretariat he served as the Head Supervisor. Al-Damkhi holds a Bachelor's degree from Kuwait University. He is a certified Chartered Human Resource Consultant from the Chartered Association of Business Administrators.",
    expertise: ["Human Resources", "Corporate Administration", "Institutional Governance", "Workforce Management"],
    education: [
      "Bachelor's Degree, Kuwait University",
      "Certified Chartered HR Consultant, Chartered Association of Business Administrators",
    ],
    years: 20,
    quote: "Operational excellence begins with the right people in the right roles.",
  },
  {
    id: 2,
    name: "Mr. Abdulfatah Ramadan Mohalhel",
    title: "Technical Manager",
    department: "Technical & Operations",
    image: "/images/mgmt-abdulfatah.png",
    summary:
      "34 years of upstream oil & gas experience spanning drilling, workover operations, rig purchasing, and rig contracts. Former Operations Manager and General Manager's Deputy at ADWOC, Libya.",
    bio: "In February 2016, Abdulfatah Ramadan Mohalhel joined KDC in the capacity of Technical Manager. In this role, he is responsible for KDC's Operations, Project Management and Supply Chain. Mr. Mohalhel has 34 years' experience in the upstream sector of the O&G industry spanning drilling and workover operations, rig purchasing and rig contracts. Prior to joining KDC, Mr. Mohalhel served at Arab Drilling & Workover Company (ADWOC), Libya in the capacity of Operations Manager and General Manager's Deputy. He also served on the Drilling and Workover Committee of the Libyan National Oil Corporation (NOC).",
    expertise: ["Drilling Operations", "Workover Engineering", "Supply Chain Management", "Project Management", "Rig Contracts"],
    education: [
      "Associate of Applied Science, Eastern New Mexico University (ENMUR), USA — Graduated with Honors",
      "Associate of Science in Petroleum Technology, ENMUR, USA",
      "International Diploma in Health and Safety Management, London, UK",
    ],
    years: 34,
    quote: "Technical precision and operational discipline are the backbone of every successful well.",
  },
  {
    id: 3,
    name: "Mr. Tarek Mohamed",
    title: "Business Development Manager",
    department: "Business Development",
    image: "/images/mgmt-tarek.png",
    summary:
      "PMP-certified executive with an international career spanning Bechtel, PROJACS, and Trident USA. Expert in project management, business development, and strategic growth across the Middle East.",
    bio: "Tarek Mohamed is the Business Development Manager at Kuwait Drilling Company. He joined KDC in 2014 as the Head of the Project Management Office. Prior to joining KDC he served as the Middle East Operation Manager for Trident USA, Vice President for PROJACS International, and Controls Manager for Bechtel International. He is a certified Project Manager (PMP), holds a Bachelor of Science in Engineering from the American University in Cairo (AUC), Master of Business Administration (MBA) from Penn State University in Pennsylvania USA, and a Contracts Law Certificate from Harvard University USA.",
    expertise: ["Business Development", "Project Management (PMP)", "Contracts Management", "Strategic Planning"],
    education: [
      "BSc in Engineering, American University in Cairo (AUC)",
      "MBA, Penn State University, Pennsylvania, USA",
      "Contracts Law Certificate, Harvard University, USA",
      "Project Management Professional (PMP) Certification",
    ],
    years: 11,
    quote: "Sustainable growth is built on strategic partnerships and disciplined execution.",
  },
  {
    id: 4,
    name: "Ms. Anwar Al-Khabbaz",
    title: "Manager",
    department: "Commercial",
    image: "/images/mgmt-anwar.png",
    summary:
      "15 years of oil and gas industry experience, with a distinguished career at Weatherford International prior to KDC. Specialist in strategic marketing and commercial operations.",
    bio: "Anwar Alkhabbaz brings a wealth of experience from her distinguished career in the upstream oil and gas sector. Previous to KDC, Anwar spent the earlier part of her career at Weatherford International based in Kuwait, holding positions in various product lines and managerial assignments. Anwar has a total of 15 years' experience in the oil and gas industry. Ms. Alkhabbaz has graduated from Florida International University and specialized in Strategic Marketing in her Master's Degree.",
    expertise: ["Strategic Marketing", "Commercial Operations", "Product Line Management", "Oil & Gas Services"],
    education: [
      "Master's Degree in Strategic Marketing, Florida International University",
    ],
    years: 15,
    quote: "Commercial success is a direct result of understanding your clients' operational needs.",
  },
  {
    id: 5,
    name: "Mr. Antonio J. Delgado",
    title: "Health, Safety & Environmental Manager",
    department: "QHSE",
    image: "/images/mgmt-antonio.png",
    summary:
      "26 years of global HSE experience across Shell, Petrobras, Baker Hughes, and Maersk. Specialist in transforming HSE organizations into service-oriented, high-performance teams.",
    bio: "Antonio Delgado is a seasoned HSE professional with 26 years' experience in Oil & Gas, including Operators such as Shell and Petrobras, as well as service companies such as Baker Hughes and Maersk. Antonio has an HSE Degree in Civil/Environmental Engineering from Worcester Polytechnic Institute (Mass, USA), with a concentration on International Studies. His international work experience includes Latin America, the Caribbean, Scandinavia, UK, Africa, and more recently the Middle East and Gulf States. Antonio is fluent in English and Spanish, and has basic command of Italian and Portuguese. Antonio joined KDC in late 2015 to oversee the transformation of the HSE team towards a service-oriented organization. Antonio is originally from Venezuela.",
    expertise: ["HSE Management", "Environmental Engineering", "Safety Culture Transformation", "International Operations"],
    education: [
      "BSc in Civil/Environmental Engineering (HSE Concentration), Worcester Polytechnic Institute, Massachusetts, USA",
    ],
    years: 26,
    quote: "A zero-incident culture is not a target — it is the only acceptable standard.",
  },
];

const values = [
  { icon: Lightbulb, label: "Innovation", desc: "Embracing new technologies and processes to drive operational efficiency." },
  { icon: ShieldCheck, label: "Safety", desc: "Unwavering commitment to zero incidents and protecting every life on site." },
  { icon: Target, label: "Operational Excellence", desc: "Delivering precision, quality, and efficiency across every project." },
  { icon: Leaf, label: "Sustainability", desc: "Responsible operations that preserve the environment for future generations." },
  { icon: Users, label: "Teamwork", desc: "Collaborative culture that values every team member's contribution." },
  { icon: Handshake, label: "Integrity", desc: "Transparent, ethical business conduct in every relationship and decision." },
];

const stats = [
  { value: 100, suffix: "+", label: "Years Combined Experience" },
  { value: 5, suffix: "", label: "Departments Led" },
  { value: 3, suffix: "", label: "Countries of Operation" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
];

const orgLevels = [
  {
    level: "Board of Directors",
    color: "bg-blue-700",
    roles: ["Chairman of the Board", "Vice Chairman", "Board Members"],
  },
  {
    level: "Executive Management",
    color: "bg-blue-600",
    roles: ["Technical Manager", "Administration Manager", "Business Development Manager"],
  },
  {
    level: "Department Heads",
    color: "bg-blue-500",
    roles: ["HSE Manager", "Commercial Manager", "Project Management Office"],
  },
  {
    level: "Operations & Field Teams",
    color: "bg-slate-600",
    roles: ["Drilling Supervisors", "Directional Drillers", "Field Engineers", "Rig Crews"],
  },
];

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── SECTION HEADING ──────────────────────────────────────────────────────────

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">{label}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">{title}</h2>
      {subtitle && <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-[15px]">{subtitle}</p>}
    </div>
  );
}

// ─── EXECUTIVE CARD ───────────────────────────────────────────────────────────

function ExecutiveCard({ exec, onOpen }: { exec: Executive; onOpen: (e: Executive) => void }) {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
      aria-label={`${exec.name}, ${exec.title}`}
    >
      {/* Photo */}
      <div className="relative overflow-hidden h-72 bg-slate-100">
        <img
          src={exec.image}
          alt={exec.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gold top bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-amber-400" />
        {/* Department badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 bg-blue-700/90 text-white text-[10px] font-bold tracking-widest uppercase rounded-full backdrop-blur-sm">
            {exec.department}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">{exec.name}</h3>
          <p className="text-blue-600 text-sm font-semibold mt-0.5">{exec.title}</p>
        </div>
        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3 flex-1">{exec.summary}</p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {exec.expertise.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-full">
              {tag}
            </span>
          ))}
          {exec.expertise.length > 2 && (
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-400 text-[11px] rounded-full">
              +{exec.expertise.length - 2} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 mt-auto border-t border-slate-100">
          <button
            onClick={() => onOpen(exec)}
            className="flex-1 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold tracking-wide uppercase rounded-lg transition-colors"
          >
            View Profile
          </button>
          <a
            href="#"
            aria-label={`${exec.name} LinkedIn`}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-colors text-slate-400 hover:text-blue-600"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function ProfileModal({ exec, onClose }: { exec: Executive; onClose: () => void }) {
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
        className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-slate-600" />
        </button>

        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-8 rounded-t-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/30 flex-shrink-0 shadow-xl">
              <img src={exec.image} alt={exec.name} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-amber-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">{exec.department}</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{exec.name}</h2>
              <p className="text-blue-200 text-sm mt-0.5">{exec.title}</p>
              <div className="flex items-center gap-1.5 mt-2">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-semibold">{exec.years}+ Years of Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 flex flex-col gap-8">
          {/* Quote */}
          <blockquote className="border-l-4 border-amber-400 pl-5 py-1">
            <p className="text-slate-600 italic text-[15px] leading-relaxed">&ldquo;{exec.quote}&rdquo;</p>
          </blockquote>

          {/* Bio */}
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide">Biography</h3>
            <p className="text-slate-600 text-[14px] leading-relaxed">{exec.bio}</p>
          </div>

          {/* Expertise + Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" /> Areas of Expertise
              </h3>
              <ul className="space-y-2">
                {exec.expertise.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13px] text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" /> Education & Certifications
              </h3>
              <ul className="space-y-2">
                {exec.education.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LinkedIn CTA */}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </a>
            <button onClick={onClose} className="px-5 py-2.5 text-slate-500 hover:text-slate-700 text-sm transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ManagementTeamPage() {
  const [selected, setSelected] = useState<Executive | null>(null);

  return (
    <>
      <Header />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden" aria-label="Management Team hero">
          <img
            src="/images/mgmt-hero-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/40">About Us</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-400 font-semibold">Management Team</span>
            </nav>

            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Leadership & Excellence</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Management Team
            </h1>
            <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
              The experienced professionals who drive KDC&apos;s operations, strategy, and growth across Kuwait and the region.
            </p>
          </div>
        </section>

        {/* ── 2. INTRODUCTION ─────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-3">Who We Are</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-balance leading-tight">
                Expertise That<br />Drives Results
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">
                KDC&apos;s management team brings together decades of specialised expertise across drilling engineering, business development, HSE, and corporate administration. Each leader has been selected for their proven track record in Kuwait&apos;s demanding oil and gas environment.
              </p>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                Our executives have worked with globally recognised organisations — from Bechtel and Baker Hughes to the Libyan National Oil Corporation and Kuwait Chamber of Commerce — bringing an international perspective to every decision.
              </p>
              <Link
                href="/board-of-directors"
                className="inline-flex items-center gap-2 mt-6 text-blue-700 hover:text-blue-900 font-semibold text-sm transition-colors group"
              >
                Meet the Board of Directors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-2 hover:shadow-md transition-shadow">
                  <p className="font-display text-4xl font-bold text-blue-700">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-slate-600 text-sm leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. MANAGEMENT GRID ──────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-50" aria-label="Management Team profiles">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              label="Our Leaders"
              title="Meet the Management Team"
              subtitle="Seasoned professionals with international experience guiding KDC's mission across every discipline."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
              {executives.map((exec) => (
                <ExecutiveCard key={exec.id} exec={exec} onOpen={setSelected} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. LEADERSHIP VALUES ────────────────────────────────────────── */}
        <section className="relative py-20 px-4 overflow-hidden">
          <img
            src="/images/mgmt-values-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/90" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <SectionHeading
              label="Our Principles"
              title="Leadership Values"
              subtitle="The core principles that define how KDC's management team leads — every day, on every project."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-700 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">{label}</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{desc}</p>
                  </div>
                  <div className="h-0.5 w-8 bg-amber-400 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. ORG STRUCTURE ────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Structure</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Organisational Hierarchy</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-[15px] leading-relaxed">
                A clear, enterprise-grade leadership structure ensuring accountability at every level.
              </p>
            </div>

            <div className="flex flex-col items-center gap-0">
              {orgLevels.map((level, i) => (
                <div key={level.level} className="w-full flex flex-col items-center">
                  {/* Connector line */}
                  {i > 0 && <div className="w-0.5 h-6 bg-amber-400/40" />}
                  <div className="w-full max-w-2xl">
                    <div className={`${level.color} rounded-2xl p-5 shadow-lg`}>
                      <p className="text-white/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Level {i + 1}</p>
                      <h3 className="font-display text-lg font-bold text-white mb-3">{level.level}</h3>
                      <div className="flex flex-wrap gap-2">
                        {level.roles.map((role) => (
                          <span
                            key={role}
                            className="px-3 py-1 bg-white/15 text-white/90 text-xs font-medium rounded-full border border-white/10"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. GLOBAL EXPERIENCE ────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              label="Global Footprint"
              title="International Experience"
              subtitle="KDC's management team brings hands-on experience from operations across four continents."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Globe, value: 15, suffix: "+", label: "Countries of Experience" },
                { icon: Users, value: 100, suffix: "+", label: "Combined Years in O&G" },
                { icon: Briefcase, value: 500, suffix: "+", label: "Projects Delivered" },
                { icon: Award, value: 10, suffix: "+", label: "International Certifications" },
              ].map(({ icon: Icon, value, suffix, label }) => (
                <div key={label} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <p className="font-display text-4xl font-bold text-blue-700 mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="text-slate-500 text-sm">{label}</p>
                </div>
              ))}
            </div>

            {/* Countries served tags */}
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              {["Kuwait", "Libya", "Oman", "Jordan", "USA", "UK", "Venezuela", "Latin America", "Scandinavia", "Africa"].map((country) => (
                <span key={country} className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors">
                  <MapPin className="w-3 h-3" />{country}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-700 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              {/* Dot texture */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              {/* Gold accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-amber-400 rounded-t-3xl" />

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">Join Our Team</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-balance leading-tight">
                    Work With Our Leadership Team
                  </h2>
                  <p className="text-blue-100 leading-relaxed text-[15px]">
                    KDC is always seeking talented professionals who share our commitment to safety, excellence, and innovation in the oil and gas industry.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-4 bg-white hover:bg-slate-50 text-blue-700 font-bold rounded-xl transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <Briefcase className="w-5 h-5" />
                      View Open Positions
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-between px-6 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/20 transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      Contact Our Team
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <a href="tel:+96522225800" className="text-white/80 hover:text-white text-sm transition-colors">
                      +965 2222 5800
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── PROFILE MODAL ───────────────────────────────────────────────── */}
      {selected && <ProfileModal exec={selected} onClose={() => setSelected(null)} />}

      <Footer />
    </>
  );
}
