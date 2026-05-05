'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/images/banner-drilling.jpg',
    badge: 'Kuwait Drilling CO. — K.S.C.C.',
    title: 'Advanced Drilling\nSolutions for Kuwait',
    subtitle: 'Industry-leading drilling and workover operations with over 20 years of expertise across Kuwait and the region.',
    cta: { label: 'Our Services', href: '#' },
    ctaSecondary: { label: 'Request Quote', href: '#' },
  },
  {
    id: 2,
    image: '/images/banner-directional.jpg',
    badge: 'Directional Drilling',
    title: 'Precision Directional\nDrilling Technology',
    subtitle: 'Real-time LWD data transmission, push-the-bit RSS, and advanced measurement-while-drilling for maximum accuracy.',
    cta: { label: 'Explore Technology', href: '#' },
    ctaSecondary: { label: 'Contact Us', href: '#' },
  },
  {
    id: 3,
    image: '/images/banner-offshore.jpg',
    badge: 'Regional Operations',
    title: 'Offshore & Onshore\nOperations in the Gulf',
    subtitle: 'Comprehensive oilfield services across onshore and offshore environments throughout the Arabian Gulf region.',
    cta: { label: 'View Projects', href: '#' },
    ctaSecondary: { label: 'About Us', href: '#' },
  },
  {
    id: 4,
    image: '/images/banner-safety.jpg',
    badge: 'QHSE Excellence',
    title: 'Safety First,\nAlways',
    subtitle: 'ISO 9001 and OHSAS 18001 certified operations with zero-incident drilling programs and certified personnel.',
    cta: { label: 'Our QHSE Policy', href: '#' },
    ctaSecondary: { label: 'Our Team', href: '#' },
  },
];

export function HeroSlider() {
  return (
    <section className="relative w-full" aria-label="Featured banners">
      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #fff;
          width: 32px;
          border-radius: 5px;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white;
          background: rgba(0,0,0,0.3);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: background 0.2s;
        }
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: rgba(29, 78, 216, 0.8);
        }
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 700;
        }
      `}</style>

      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        loop
        speed={900}
        style={{ height: 'clamp(480px, 75vh, 780px)' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.title.replace('\n', ' ')}
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/30" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                  <div className="max-w-2xl">
                    <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-blue-300 bg-blue-900/40 border border-blue-500/40 rounded-full backdrop-blur-sm">
                      {slide.badge}
                    </span>
                    <h1
                      className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight text-balance"
                      style={{ fontFamily: 'var(--font-barlow-condensed, sans-serif)', letterSpacing: '-0.01em' }}
                    >
                      {slide.title.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < slide.title.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </h1>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={slide.cta.href}
                        className="px-7 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm shadow-lg"
                      >
                        {slide.cta.label}
                      </Link>
                      <Link
                        href={slide.ctaSecondary.href}
                        className="px-7 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-colors text-sm"
                      >
                        {slide.ctaSecondary.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
