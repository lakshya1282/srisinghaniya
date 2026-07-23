"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
const BOUNCE_DURATION = 1400;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [bounceStyle, setBounceStyle] = useState<React.CSSProperties | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const staticImgRef = useParallax(0.1);
  const bouncingImgRef = useParallax(0.1);

  const heroRef = useRef<HTMLElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const isExpandingRef = useRef(false); // Synchronous guard — prevents multi-fire

  // Progress timer: 0 → 100 linearly
  useEffect(() => {
    if (isPaused || isExpandingRef.current) return;

    const step = (TICK / SLIDE_DURATION) * 100;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 99) {
          // Guard synchronously so the next tick can't re-trigger
          if (!isExpandingRef.current) {
            isExpandingRef.current = true;
            // Schedule expand outside the state updater
            requestAnimationFrame(() => startExpand());
          }
          return 100;
        }
        return p + step;
      });
    }, TICK);

    return () => clearInterval(id);
  }, [isPaused, bounceStyle, currentIndex]);

  // Measure leftmost card and trigger bounce expansion
  const startExpand = useCallback(() => {
    const hero = heroRef.current;
    const card = firstCardRef.current;

    if (hero && card) {
      const hr = hero.getBoundingClientRect();
      const cr = card.getBoundingClientRect();
      const top = cr.top - hr.top;
      const left = cr.left - hr.left;

      setBounceStyle({
        "--card-top": `${top}px`,
        "--card-left": `${left}px`,
        "--card-width": `${cr.width}px`,
        "--card-height": `${cr.height}px`,
        position: "absolute",
        zIndex: 25,
        overflow: "hidden",
        top: `${top}px`,
        left: `${left}px`,
        width: `${cr.width}px`,
        height: `${cr.height}px`,
        borderRadius: "6px",
      } as React.CSSProperties);

      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % slides.length);
        setProgress(0);
        setBounceStyle(null);
        isExpandingRef.current = false; // Release guard after transition completes
      }, BOUNCE_DURATION);
    } else {
      // Mobile fallback — no cards visible, just swap
      setCurrentIndex((i) => (i + 1) % slides.length);
      setProgress(0);
      isExpandingRef.current = false;
    }
  }, []);

  const goPrev = () => {
    if (bounceStyle) return;
    setProgress(0);
    setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const goNext = () => {
    if (isExpandingRef.current) return;
    isExpandingRef.current = true;
    startExpand();
  };

  const current = slides[currentIndex];
  const nextSlide = slides[(currentIndex + 1) % slides.length];

  // 3 upcoming preview cards
  const previews = [1, 2, 3].map((offset) => {
    const idx = (currentIndex + offset) % slides.length;
    return slides[idx];
  });

  const showCards = progress >= 60;
  const isBouncing = bounceStyle !== null;

  return (
    <section
      ref={heroRef}
      className={`relative w-full h-screen min-h-[550px] md:min-h-[650px] overflow-hidden bg-black text-white select-none transition-opacity duration-1000 ease-out ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ── Static background (stays until progress bar completes) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet={current.desktopImage} />
          <img ref={staticImgRef} src={current.mobileImage} alt={current.title} className="w-full h-full object-cover object-center transition-transform duration-300 ease-out" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 md:bg-gradient-to-r md:from-black/75 md:via-black/30 md:to-transparent" />
      </div>

      {/* ── Bouncing card overlay (expands from card position to fill hero) ── */}
      {isBouncing && (
        <div className="animate-card-bounce-fill overflow-hidden" style={bounceStyle!}>
          <picture className="block w-full h-full">
            <source media="(min-width: 768px)" srcSet={nextSlide.desktopImage} />
            <img ref={bouncingImgRef} src={nextSlide.mobileImage} alt={nextSlide.title} className="w-full h-full object-cover object-center transition-transform duration-300 ease-out" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 md:bg-gradient-to-r md:from-black/75 md:via-black/30 md:to-transparent" />
        </div>
      )}

      {/* ── Content layer ── */}
      <div className="relative z-30 max-w-[1650px] mx-auto h-full pl-6 sm:pl-10 lg:pl-14 pr-4 sm:pr-8 lg:pr-10 flex flex-col justify-end py-10 md:py-16 gap-8">

        {/* Left text + CTA: Positioned at the bottom-left */}
        <div className={`max-w-2xl space-y-4 md:space-y-6 transition-all duration-400 ${isBouncing ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white drop-shadow-md">
            {current.title}
          </h1>
          <div className="space-y-1">
            {current.subtext.map((t, i) => (
              <p key={i} className="text-base sm:text-lg md:text-xl font-medium text-gray-200 tracking-wide">{t}</p>
            ))}
          </div>
          <div className="pt-2">
            <button className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-white/80 hover:border-white bg-black/20 hover:bg-white hover:text-gray-950 text-white font-semibold rounded-md transition-all duration-300 hover:-translate-y-0.5 shadow-lg backdrop-blur-xs cursor-pointer">
              <span>{current.ctaText}</span>
            </button>
          </div>
        </div>

        {/* ── 3 preview cards (appear at 60%, leftmost expands at 100%) ── */}
        <div className="hidden md:block absolute right-0 bottom-24 lg:bottom-28 z-40 pl-4 pr-0">
          <div className={`flex items-end gap-3 lg:gap-3.5 transition-all duration-700 ease-out ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14 pointer-events-none"}`}>
            {previews.map((slide, i) => (
              <div
                key={`${slide.id}-${i}`}
                ref={i === 0 ? firstCardRef : undefined}
                onClick={() => i === 0 && goNext()}
                className={`group relative w-28 lg:w-36 h-44 lg:h-56 rounded-md overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer shrink-0 ${i === 0 && isBouncing ? "opacity-0 pointer-events-none" : ""}`}
              >
                <img src={slide.desktopImage} alt={slide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 flex items-end">
                  <span className="text-xs font-semibold text-white leading-tight line-clamp-2">{slide.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Progress bar + nav ── */}
        <div className="relative z-40 flex items-center justify-end gap-4 sm:gap-6 pt-6 border-t border-white/10 md:border-t-0">
          <div className="w-36 sm:w-48 md:w-64 lg:w-80 bg-white/25 h-0.5 rounded-full overflow-hidden backdrop-blur-xs">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500 rounded-full shadow-xs"
              style={{ width: `${progress}%`, transition: "width 30ms linear" }}
            />
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button onClick={goPrev} title="Previous" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 hover:border-white bg-black/40 hover:bg-white hover:text-black transition-all flex items-center justify-center backdrop-blur-sm cursor-pointer active:scale-95">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={goNext} title="Next" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 hover:border-white bg-black/40 hover:bg-white hover:text-black transition-all flex items-center justify-center backdrop-blur-sm cursor-pointer active:scale-95">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
