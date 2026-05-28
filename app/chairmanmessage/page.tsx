"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Eye,
  ShieldCheck,
  Globe,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  Play,
  X,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const VIDEO_URL =
  "https://www.kdckwt.com/wp-content/uploads/2022/06/KDC-Chairman-Message-online-video-cutter.com_.mp4";

function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openModal() { setIsOpen(true); }
  function closeModal() {
    setIsOpen(false);
    if (videoRef.current) videoRef.current.pause();
  }

  return (
    <>
      {/* ── FEATURED VIDEO ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-100 relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — Video card */}
            <div className="relative group cursor-pointer" onClick={openModal}>
              {/* Glassmorphism card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-2xl aspect-video bg-slate-200">
                {/* Thumbnail — first frame via the video poster */}
                <video
                  src={VIDEO_URL}
                  className="w-full h-full object-cover opacity-60"
                  muted
                  playsInline
                  preload="metadata"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                {/* Gold play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulse ring */}
                    <span className="absolute w-24 h-24 rounded-full bg-amber-400/20 animate-ping" />
                    <button
                      aria-label="Play Chairman's Message video"
                      className="relative w-20 h-20 rounded-full bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center shadow-xl group-hover:scale-110 duration-300"
                    >
                      <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/60 text-xs tracking-widest uppercase font-semibold">
                    Watch Now
                  </p>
                </div>
              </div>

              {/* Decorative glow behind card */}
              <div className="absolute -inset-1 rounded-2xl bg-blue-600/20 blur-xl -z-10 group-hover:bg-blue-500/30 transition-colors duration-500" />
            </div>

            {/* Right — Copy */}
            <div className="flex flex-col gap-6">
              <p className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
                From Our Chairman
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance">
                A Message From<br />Our Chairman
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                In this exclusive address, our Chairman shares his vision for Kuwait Drilling CO. — outlining the values, strategy, and long-term commitment that have made KDC a trusted leader in the region&apos;s oilfield services industry.
              </p>
              <ul className="space-y-3 text-slate-700 text-sm">
                {[
                  "Company vision and long-term strategy",
                  "Commitment to safety and quality",
                  "Regional growth across Kuwait, Oman & Jordan",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-3 self-start mt-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl transition-colors font-display tracking-wide text-sm shadow-lg"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Play Chairman&apos;s Message
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── MODAL PLAYER ───────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <video
              ref={videoRef}
              src={VIDEO_URL}
              controls
              autoPlay
              playsInline
              className="w-full aspect-video bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const HIGHLIGHTED: Record<string, { name: string; coords: [number, number] }> = {
  "414": { name: "Kuwait", coords: [47.48, 29.31] },
  "512": { name: "Oman",   coords: [57.55, 23.61] },
  "400": { name: "Jordan", coords: [36.24, 31.25] },
};

const pillars = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the region's most trusted oilfield services partner — delivering innovative, reliable, and safe drilling solutions that power economic progress across the Middle East.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Every engagement is grounded in honesty, transparency, and accountability. Our reputation is built on doing what is right — for our clients, our people, and the communities we serve.",
  },
  {
    icon: Globe,
    title: "Global Commitment",
    description:
      "From Kuwait to Oman and Jordan, we bring world-class expertise and international best practices to every project, ensuring excellence across borders.",
  },
];

const timeline = [
  {
    year: "2000",
    title: "Company Foundation",
    desc: "Kuwait Drilling CO. K.S.C.C. was established in Kuwait City, beginning operations with a single rig and a vision for excellence.",
  },
  {
    year: "2005",
    title: "Regional Expansion",
    desc: "Extended operations into Oman and Jordan, growing the fleet and establishing long-term partnerships with major NOCs.",
  },
  {
    year: "2012",
    title: "International Operations",
    desc: "Achieved ISO 9001 and OHSAS 18001 certifications, positioning KDC as a globally compliant, internationally recognised services provider.",
  },
  {
    year: "2018",
    title: "Digital Transformation",
    desc: "Adopted real-time MWD/LWD data transmission and digital rig monitoring, elevating operational efficiency and decision-making.",
  },
  {
    year: "2025+",
    title: "Future Growth Vision",
    desc: "Expanding service lines, investing in next-generation drilling technologies, and deepening our footprint across the GCC and broader MENA region.",
  },
];

const stats = [
  { value: 3,   suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "+", label: "Clients" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 20,  suffix: "+", label: "Years of Experience" },
];

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(value, 1600, triggered);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-white font-display">
        {count}{suffix}
      </p>
      <p className="text-slate-400 text-sm mt-2 tracking-wide">{label}</p>
    </div>
  );
}

export default function ChairmanMessagePage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <Image
            src="/images/chairman-hero-bg.png"
            alt="KDC Offshore Operations"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-800/35 to-slate-800/10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400 text-xs mb-8 tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Chairman&apos;s Message</span>
            </nav>

            <p className="text-blue-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Leadership &amp; Vision
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight text-balance mb-6 drop-shadow-md">
              Message From<br />The Chairman
            </h1>
            <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
              A commitment to excellence, safety, and long-term value creation — guiding Kuwait Drilling CO. into its next chapter.
            </p>

            {/* Animated entrance line */}
            <div className="mt-10 w-16 h-1 bg-blue-500 rounded-full" />
          </div>
        </section>

        <VideoSection />

        {/* ── CHAIRMAN PROFILE ─────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-14 items-start">

            {/* Left — Portrait */}
            <div className="md:col-span-2 flex flex-col items-center gap-6">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/chairman-portrait.png"
                  alt="KDC Chairman Portrait"
                  width={480}
                  height={640}
                  className="w-full object-cover"
                />
                {/* Floating stats badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-center px-6 py-3 rounded-xl shadow-lg whitespace-nowrap">
                  <p className="font-display text-2xl font-bold leading-none">30+</p>
                  <p className="text-xs tracking-wide mt-1 opacity-90">Years Industry Leadership</p>
                </div>
              </div>

              {/* Name plate */}
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold text-slate-900 tracking-wide">
                  H.E. Abdullah Al-Mutairi
                </h2>
                <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mt-1">
                  Chairman, Kuwait Drilling CO. K.S.C.C.
                </p>
              </div>

              {/* Company seal element */}
              <div className="flex items-center gap-3 border border-slate-200 rounded-full px-5 py-2.5 text-slate-500 text-xs tracking-widest uppercase">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0NU6YcKMYEqn4H9EdvYbbZ0YRN3Mhn.png"
                  alt="KDC Seal"
                  width={24}
                  height={24}
                  className="object-contain opacity-70"
                />
                Kuwait Drilling CO.
              </div>
            </div>

            {/* Right — Message */}
            <div className="md:col-span-3 space-y-7">
              <div>
                <p className="text-blue-500 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  A Word From Our Chairman
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance">
                  Building a Legacy of Excellence in Oilfield Services
                </h2>
                <div className="mt-4 w-12 h-1 bg-blue-600 rounded-full" />
              </div>

              <div className="space-y-5 text-slate-600 leading-[1.85] text-[15px]">
                <p>
                  On behalf of the Board of Directors and the entire team at Kuwait Drilling Company K.S.C.C., it is my honour to address our valued clients, partners, and stakeholders.
                </p>
                <p>
                  Since our founding, KDC has been driven by a singular purpose: to deliver world-class drilling and oilfield services with the highest standards of safety, quality, and professionalism. Over more than two decades, we have grown from a domestic operator into a recognised regional force — active in Kuwait, Oman, and Jordan.
                </p>

                {/* Quote block */}
                <blockquote className="relative border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-xl my-6">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                  <p className="font-display text-xl font-semibold text-slate-800 leading-snug">
                    &ldquo;Our people are our greatest asset. Their expertise, dedication, and commitment to zero-incident operations is what sets KDC apart.&rdquo;
                  </p>
                </blockquote>

                <p>
                  The energy sector is evolving rapidly. We embrace new technologies, digital tools, and smarter operational methodologies to remain at the forefront. Yet our foundational values — integrity, accountability, and a relentless focus on client satisfaction — remain unchanged.
                </p>
                <p>
                  Looking ahead, I am confident that KDC is well-positioned to support the ambitious energy programmes of the region, contributing to national development and sustainable growth for years to come.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-4 border-t border-slate-100">
                <p className="font-display text-xl italic text-slate-700 mb-1">H.E. Abdullah Al-Mutairi</p>
                <p className="text-sm text-slate-400 tracking-wide">Chairman, Kuwait Drilling CO. K.S.C.C.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & LEADERSHIP PILLARS ──────────────────────────────── */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-500 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Our Guiding Principles
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Vision &amp; Leadership
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPANY JOURNEY TIMELINE ─────────────────────────────────── */}
        <section className="py-20 px-4 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-500 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Our History
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 text-balance">
                Company Journey
              </h2>
            </div>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Centre spine */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, i) => {
                  const isRight = i % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`relative flex items-start gap-6 md:gap-0 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      {/* Content block */}
                      <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isRight ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                        <div className={`bg-white border border-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow ${isRight ? "" : ""}`}>
                          <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 font-display">
                            {item.year}
                          </span>
                          <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>

                      {/* Dot on spine */}
                      <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md ring-2 ring-blue-200 z-10 top-6" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── GLOBAL PRESENCE (Map + Counters) ─────────────────────────── */}
        <section className="py-20 px-4 bg-slate-900 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Where We Operate
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-balance">
                Global Presence
              </h2>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/40">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [50, 27], scale: 1100 }}
                style={{ width: "100%", height: "auto" }}
                viewBox="0 0 800 440"
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const id = geo.id as string;
                      const isH = id in HIGHLIGHTED;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isH ? "#2563eb" : "#1e293b"}
                          stroke={isH ? "#3b82f6" : "#334155"}
                          strokeWidth={isH ? 1.5 : 0.5}
                          style={{
                            default: { outline: "none" },
                            hover:   { outline: "none", fill: isH ? "#3b82f6" : "#263348" },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                {Object.values(HIGHLIGHTED).map((c) => (
                  <Marker key={c.name} coordinates={c.coords}>
                    <circle r={10} fill="#3b82f6" fillOpacity={0.25} />
                    <circle r={5} fill="#60a5fa" stroke="#fff" strokeWidth={1.5} />
                    <text
                      textAnchor="middle"
                      y={-16}
                      style={{
                        fontFamily: "var(--font-oswald), Oswald, sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        fill: "#e2e8f0",
                        letterSpacing: "0.05em",
                        pointerEvents: "none",
                      }}
                    >
                      {c.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ───────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-blue-700">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-blue-200 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Ready to Collaborate?
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white text-balance leading-tight mb-6">
              Partner With A Trusted<br />Drilling Leader
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Speak directly with our leadership team and discover how KDC can support your next project across the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg font-display text-base tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors font-display text-base tracking-wide"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Contact info row */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-100 text-sm">
              <a href="tel:+965XXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +965 XXXX XXXX
              </a>
              <a href="mailto:info@kdckwt.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@kdckwt.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
