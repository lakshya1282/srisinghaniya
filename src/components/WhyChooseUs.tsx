"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

interface TrustItem {
  id: string;
  title: string;
  titleShort: string;
  desc: string;
  image: string;
  ctaText: string;
}

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const imgRef = useParallax(0.08);
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const trustItems: TrustItem[] = [
    {
      id: "01",
      title: "FOR A SUSTAINABLE TOMORROW",
      titleShort: "Trust that never rusts",
      desc: "TRUST THAT NEVER RUSTS - quality-driven fabrication and galvanizing built for structural longevity.",
      image: "/abt-us.webp",
      ctaText: "View Quality Standards →",
    },
    {
      id: "02",
      title: "TIMELY DELIVERY ASSURED",
      titleShort: "Timely delivery",
      desc: "TIMELY DELIVERY - meticulously planned and executed around your specific project timeline and scale.",
      image: "/images/transmissiontowerdesktop.webp",
      ctaText: "View Logistics & Scale →",
    },
    {
      id: "03",
      title: "SEAMLESS PARTNERSHIP",
      titleShort: "Cooperative staff communication",
      desc: "COOPERATIVE STAFF COMMUNICATION - proactive updates and highly responsive support at every stage.",
      image: "/images/substationdesktop.webp",
      ctaText: "Connect With Our Team →",
    },
    {
      id: "04",
      title: "END-TO-END GUIDANCE",
      titleShort: "Guidance for the work",
      desc: "GUIDANCE FOR THE WORK - expert support and engineering consultation from design planning to dispatch.",
      image: "/images/towerdesktop.webp",
      ctaText: "View Process Flow →",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.20 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-zinc-900 pt-4 pb-20 md:pt-6 md:pb-28 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
            Value Proposition
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-semibold tracking-tight text-zinc-950">
            {["Why Choose Sri Singhaniya Infrastructures"].map((line, idx) => (
              <span key={idx} className="block overflow-hidden py-1">
                <span
                  className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* Desktop Layout: 70/30 Accordion Slider */}
        <div className="hidden md:flex flex-row h-[480px] sm:h-[580px] md:h-[650px] w-full gap-0 overflow-hidden rounded-3xl shadow-2xl">
          {trustItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden select-none cursor-pointer ${
                  isActive ? "flex-[7]" : "flex-[1]"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <ParallaxImage
                    src={item.image}
                    alt={item.titleShort}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-6 sm:p-12 flex flex-col justify-between text-white">
                  
                  {/* Top content (Always show code/number for both states) */}
                  <div className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <span className="inline-block px-3.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-bold tracking-widest">
                      {item.id}
                    </span>
                  </div>

                  {/* Active content (only visible on 70% width card) */}
                  <div className={`space-y-4 transition-all duration-700 transform ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                  }`}>
                    <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-xl leading-none">
                      {item.title}
                    </h3>
                    <div className="w-12 h-[3px] bg-white/50" />
                    <p className="text-zinc-200 text-sm sm:text-base font-semibold max-w-lg leading-relaxed uppercase tracking-wide">
                      {item.desc}
                    </p>
                    <div className="pt-2">
                      <a
                        href="#"
                        className="inline-block border-b-2 border-white pb-1 font-bold text-xs uppercase tracking-widest hover:text-zinc-200 hover:border-zinc-200 transition-colors"
                      >
                        {item.ctaText}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Vertical Text Overlay (Only visible on non-active compressed 10% cards) */}
                <div
                  className={`absolute inset-0 z-15 flex items-end justify-center pb-10 transition-opacity duration-500 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div
                    className="text-white font-bold uppercase tracking-wider text-sm sm:text-base lg:text-lg whitespace-nowrap px-4 py-3 bg-black/40 backdrop-blur-xs rounded-xl select-none border border-white/10"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {item.titleShort}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Layout: Stacked Vertical Cards */}
        <div className="flex flex-col gap-6 md:hidden w-full">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-6 text-white"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <ParallaxImage
                  src={item.image}
                  alt={item.titleShort}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
              </div>

              {/* Top content */}
              <div className="relative z-10">
                <span className="inline-block px-3 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest">
                  {item.id}
                </span>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-200 text-xs leading-relaxed uppercase tracking-wide">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-block border-b border-white pb-0.5 font-bold text-[10px] uppercase tracking-widest hover:text-zinc-200 transition-colors"
                  >
                    {item.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
