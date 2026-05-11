'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/lib/data/stats';

function useCountUp(target: number, duration = 1800, start = false) {
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
  }, [start, target, duration]);

  return count;
}

function StatCard({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center gap-3 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-blue-400/50 transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Accent top bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-blue-500 rounded-full group-hover:w-20 transition-all duration-500" />

      <div className="text-5xl md:text-6xl font-bold text-white tabular-nums font-display leading-none">
        {count}
        <span className="text-blue-400">{suffix}</span>
      </div>
      <p className="text-slate-300 text-xs md:text-sm font-medium tracking-widest text-center uppercase">
        {label}
      </p>
    </div>
  );
}

export function CredibilitySection() {
  const parsedStats = stats.map((s) => {
    const match = s.value.toString().match(/^(\d+)(.*)$/);
    return {
      ...s,
      numericValue: match ? parseInt(match[1], 10) : 0,
      suffix: match ? match[2] : '',
    };
  });

  return (
    <section className="relative py-12 px-4 overflow-hidden bg-slate-900">
      {/* SVG cross-hatch texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Blue radial glow spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Trusted by Kuwait&apos;s Energy Sector
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance font-display">
            Decades of Proven Performance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {parsedStats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.numericValue}
              label={stat.label}
              suffix={stat.suffix}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
