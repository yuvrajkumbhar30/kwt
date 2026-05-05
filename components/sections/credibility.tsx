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
      className="relative flex flex-col items-center gap-2 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-blue-400/40 transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full group-hover:w-20 transition-all duration-500" />

      <div
        className="text-5xl md:text-6xl font-bold text-white tabular-nums"
        style={{ fontFamily: 'var(--font-barlow-condensed, sans-serif)' }}
      >
        {count}
        <span className="text-blue-400">{suffix}</span>
      </div>
      <p className="text-slate-300 text-sm md:text-base font-medium tracking-wide text-center uppercase">
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
    <section className="relative py-20 px-4 overflow-hidden bg-slate-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 50%, #3b82f6 0%, transparent 50%),
                          radial-gradient(circle at 75% 50%, #1e40af 0%, transparent 50%)`
      }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Trusted by Kuwait&apos;s Energy Sector
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance"
            style={{ fontFamily: 'var(--font-barlow-condensed, sans-serif)' }}>
            Decades of Proven Performance
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {parsedStats.map((stat, i) => (
            <StatCard
              key={stat.value}
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
