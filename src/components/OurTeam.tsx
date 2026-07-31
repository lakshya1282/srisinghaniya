"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

interface TeamDept {
  name: string;
  desc: string;
  image: string;
  ref: React.RefObject<HTMLImageElement | null>;
}

export default function OurTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMaskRevealed, setIsMaskRevealed] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax refs for each team image card
  const ref1 = useParallax(0.08);
  const ref2 = useParallax(0.08);
  const ref3 = useParallax(0.08);
  const ref4 = useParallax(0.08);
  const ref5 = useParallax(0.08);
  const ref6 = useParallax(0.08);

  const departments: TeamDept[] = [
    {
      name: "Marketing",
      desc: "Our marketing specialists connect clients across India with our heavy industrial fabrication and galvanizing solutions.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      ref: ref1,
    },
    {
      name: "Planning",
      desc: "Engineers and layout planners align manufacturing targets with client-specified schedules under a unified pipeline.",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
      ref: ref2,
    },
    {
      name: "Fabrication",
      desc: "Skilled operators carry out accurate cutting, punching, and welding of structural components under strict tolerance standards.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      ref: ref3,
    },
    {
      name: "Galvanizing",
      desc: "Our hot-dip galvanizing bath coats our structures with heavy zinc coatings to achieve extreme long-term corrosion resistance.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      ref: ref4,
    },
    {
      name: "Quality",
      desc: "A dedicated quality team performs chemical, physical, and visual inspections for PSU and industrial project clearance.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      ref: ref5,
    },
    {
      name: "Dispatch",
      desc: "Logistics coordinators prepare shipments systematically to deliver structures on-time to power grid sites.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      ref: ref6,
    },
  ];

  // Trigger intersection entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.40 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Automatic cycle departments & trigger mask transition
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger mask slide close
      setIsMaskRevealed(false);

      // After slide closes, change active slide and slide back open
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % departments.length);
        setIsMaskRevealed(true);
      }, 700); // matches transition time
    }, 6000);

    return () => clearInterval(interval);
  }, [departments.length]);

  const changeDept = (idx: number) => {
    if (idx !== activeIndex) {
      setIsMaskRevealed(false);
      setTimeout(() => {
        setActiveIndex(idx);
        setIsMaskRevealed(true);
      }, 700);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-zinc-900 py-12 lg:py-28 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Title in the Top Left */}
        <div className="mb-8 lg:mb-20">
          <div className="space-y-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
              Internal Operations
            </span>
            <div className="w-12 h-0.5 bg-regal-navy" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-zinc-950 leading-tight">
            Our Team
          </h2>
          <p className="text-zinc-600 mt-3 lg:mt-4 text-sm sm:text-lg max-w-xl">
            We are a lean, focused team of <strong className="font-semibold text-zinc-950">20 employees</strong> organized across six departments, backed by a skilled force of <strong className="font-semibold text-zinc-950">200–250 workers</strong> driving day-to-day operations.
          </p>
        </div>

        {/* Contents and Images container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-center">
          
          {/* Left Column: Department Names List & Active Description */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-0 lg:min-h-[400px]">
            
            {/* Navigation buttons for cycling departments */}
            <div className="flex items-center gap-3 mb-4 lg:mb-6 shrink-0">
              <button
                onClick={() => activeIndex > 0 && changeDept(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center bg-white shadow-xs cursor-pointer ${
                  activeIndex === 0 ? "opacity-35 cursor-not-allowed" : "hover:bg-regal-navy hover:text-white hover:border-regal-navy active:scale-95"
                }`}
                title="Previous Department"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => activeIndex < departments.length - 1 && changeDept(activeIndex + 1)}
                disabled={activeIndex === departments.length - 1}
                className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center bg-white shadow-xs cursor-pointer ${
                  activeIndex === departments.length - 1 ? "opacity-35 cursor-not-allowed" : "hover:bg-regal-navy hover:text-white hover:border-regal-navy active:scale-95"
                }`}
                title="Next Department"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <span className="text-xs font-bold text-zinc-400 font-mono ml-2">
                {String(activeIndex + 1).padStart(2, "0")} / {String(departments.length).padStart(2, "0")}
              </span>
            </div>

            {/* Scrollable Horizontal Tabs on mobile, Vertical Buttons on Desktop */}
            <div className="flex flex-row overflow-x-auto gap-4 pb-2 border-b border-zinc-100 scrollbar-none lg:flex-col lg:gap-3 lg:border-b-0 lg:pb-0">
              {departments.map((dept, idx) => (
                <button
                  key={dept.name}
                  onClick={() => changeDept(idx)}
                  className={`text-left text-base sm:text-lg lg:text-2xl font-sans font-semibold py-1.5 lg:py-2 px-3 lg:px-0 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    idx === activeIndex
                      ? "text-zinc-950 border-b-2 border-b-regal-navy lg:border-b-0 lg:border-l-2 lg:border-l-regal-navy lg:pl-4"
                      : "text-zinc-400 border-b-2 border-b-transparent lg:border-b-0 lg:border-l-2 lg:border-l-transparent hover:text-zinc-600 lg:pl-0"
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Description matching active name */}
            <div className="mt-6 lg:mt-10 pt-4 lg:pt-6 border-t border-zinc-200">
              <p className="text-[10px] lg:text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                Department Focus
              </p>
              
              {/* Mobile-only active image card */}
              <div className="block lg:hidden w-full h-[180px] sm:h-[240px] rounded-xl overflow-hidden bg-zinc-100 shadow-md mb-4 transition-all duration-500">
                <img
                  src={departments[activeIndex].image}
                  alt={departments[activeIndex].name}
                  className="w-full h-full object-cover brightness-95 contrast-105"
                />
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed min-h-[60px] lg:min-h-[80px]">
                {departments[activeIndex].desc}
              </p>
            </div>
          </div>

          {/* Right Column: Mask Reveal Image from Right to Left (Desktop/Tablet landscape only) */}
          <div className="hidden lg:block lg:col-span-7">
            <div 
              className="relative w-full h-[550px] rounded-2xl overflow-hidden bg-zinc-100 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                clipPath: isMaskRevealed && isVisible ? "inset(0% 0% 0% 0% round 1rem)" : "inset(0% 0% 0% 100% round 1rem)",
                WebkitClipPath: isMaskRevealed && isVisible ? "inset(0% 0% 0% 0% round 1rem)" : "inset(0% 0% 0% 100% round 1rem)",
              }}
            >
              {departments.map((dept, idx) => (
                <div
                  key={dept.name}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out overflow-hidden ${
                    idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    ref={dept.ref}
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
