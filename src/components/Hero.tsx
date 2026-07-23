"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

interface Slide {
  id: number;
  title: string;
  subtext: string[];
  ctaText: string;
  mobileImage: string;
  desktopImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Transmission Towers",
    subtext: ["Engineered for high-voltage performance across demanding power networks."],
    ctaText: "Explore More →",
    mobileImage: "/images/transimissontowermobile.webp",
    desktopImage: "/images/transmissiontowerdesktop.webp",
  },
  {
    id: 2,
    title: "Substation Structures",
    subtext: ["Built to support electrical components with strength, stability, and long-term performance."],
    ctaText: "Explore More →",
    mobileImage: "/images/towermobile.webp",
    desktopImage: "/images/towerdesktop.webp",
  },
  {
    id: 3,
    title: "RSJ Poles",
    subtext: ["Engineered to support stronger and more reliable distribution networks."],
    ctaText: "Explore More →",
    mobileImage: "/images/substationmobile.webp",
    desktopImage: "/images/substationdesktop.webp",
  },
];

const SLIDE_DURATION = 6000;
const TICK = 30;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const staticImgRef = useParallax(0.1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Progress timer: 0 → 100 linearly
  useEffect(() => {
    if (isPaused) return;

    const step = (TICK / SLIDE_DURATION) * 100;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 99) {
          setCurrentIndex((i) => (i + 1) % slides.length);
          return 0;
        }
        return p + step;
      });
    }, TICK);

    return () => clearInterval(id);
  }, [isPaused, currentIndex]);

  const goPrev = () => {
    setProgress(0);
    setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const goNext = () => {
    setProgress(0);
    setCurrentIndex((i) => (i + 1) % slides.length);
  };

  return (
    <section
      ref={heroRef}
      className={`relative w-full h-screen min-h-[550px] md:min-h-[650px] overflow-hidden bg-black text-white select-none transition-opacity duration-1000 ease-out ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ── Slide Backgrounds (Cross-fade opacity only) ── */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <picture className="block w-full h-full overflow-hidden">
              <source media="(min-width: 768px)" srcSet={slide.desktopImage} />
              <img
                ref={isActive ? staticImgRef : null}
                src={slide.mobileImage}
                alt={slide.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 ease-out"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 md:bg-gradient-to-r md:from-black/75 md:via-black/30 md:to-transparent" />
          </div>
        );
      })}

      {/* ── Content layer ── */}
      <div className="relative z-30 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-between py-10 md:py-16">
        <div className="hidden md:block" />

        {/* Left text + CTA: Cross-fading absolute stack */}
        <div className="relative w-full flex-grow flex items-center md:items-start md:justify-center md:flex-col">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute left-0 right-0 md:right-auto max-w-2xl flex flex-col space-y-4 md:space-y-6 transition-all duration-700 ease-in-out ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white drop-shadow-md">
                  {slide.title}
                </h1>
                <div className="space-y-1">
                  {slide.subtext.map((t, i) => (
                    <p key={i} className="text-base sm:text-lg md:text-xl font-medium text-gray-200 tracking-wide">{t}</p>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-md shadow-lg"
                  >
                    <span>{slide.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom controls row */}
        <div className="relative w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mt-16 md:mt-0">
          
          {/* Slide Progress / Thumbnails Indicators */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(idx);
                  }}
                  className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 min-w-[200px] sm:min-w-[220px] cursor-pointer select-none ${
                    isActive ? "bg-white/10 border-white/20" : "bg-black/20 border-white/5 hover:bg-white/5"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                    <img src={slide.mobileImage} alt={slide.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-grow">
                    <span className="text-xs text-white/50 font-bold uppercase tracking-wider">
                      0{slide.id}
                    </span>
                    <span className="text-[12.5px] font-bold text-white tracking-tight">
                      {slide.title}
                    </span>
                    
                    {/* Linear Progress bar */}
                    <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden mt-1.5">
                      <div
                        className="h-full bg-blue-500 transition-all duration-30"
                        style={{ width: `${isActive ? progress : 0}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/35 flex items-center justify-center bg-black/25 backdrop-blur-xs text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/35 flex items-center justify-center bg-black/25 backdrop-blur-xs text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
