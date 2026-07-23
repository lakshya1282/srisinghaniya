"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      number: "25,000 MT",
      label: "Annual fabrication & galvanizing capacity",
      icon: (
        <svg
          className="w-full h-full text-teal-600 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Factory outline */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M8 56V24l12 8V24l12 8V24l12 8v24H8z"
          />
          {/* Moving conveyor lines inside factory representing activity */}
          <line
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            x1="12"
            y1="44"
            x2="36"
            y2="44"
          />
          {/* Chimney */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M44 32h6V12h-6v20z"
          />
          {/* Smoke loops */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            d="M47 8a3 3 0 0 1 3-3 3 3 0 0 1 3 3v2h-6V8z"
          />
          {/* Industrial structure base line */}
          <line
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            x1="4"
            y1="56"
            x2="60"
            y2="56"
          />
        </svg>
      ),
    },
    {
      number: "20 Employees",
      label: "Across marketing, planning, fabrication, galvanizing, quality & dispatch",
      icon: (
        <svg
          className="w-full h-full text-sky-600 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Multiple people outline (team representation) */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M32 28a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          />
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M14 52c0-8 10-12 18-12s18 4 18 12"
          />
          {/* Secondary support employees */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            d="M16 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          />
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M4 48c0-6 8-9 12-9"
          />
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            d="M48 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          />
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M48 39c4 0 12 3 12 9"
          />
        </svg>
      ),
    },
    {
      number: "200–250",
      label: "Skilled labour force supporting operations",
      icon: (
        <svg
          className="w-full h-full text-teal-600 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Safety helmet outline / Construction */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M12 34c0-11 9-20 20-20s20 9 20 20v4H12v-4z"
          />
          {/* Helmet shield brim */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M8 38h48v3H8z"
          />
          {/* Wrench representing mechanical skill */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            d="M24 46h16v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-6z"
          />
          <circle
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            cx="32"
            cy="24"
            r="4"
          />
        </svg>
      ),
    },
    {
      number: "PAN India",
      label: "Delivery capability, wherever the project needs us",
      icon: (
        <svg
          className="w-full h-full text-sky-600 shrink-0"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Delivery truck / transport outline */}
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M8 18h32v24H8V18z"
          />
          <path
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw" : "opacity-0"}`}
            d="M40 26h12l6 8v8H40V26z"
          />
          {/* Wheels with rotation dash arrays */}
          <circle
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            cx="20"
            cy="46"
            r="6"
          />
          <circle
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            cx="48"
            cy="46"
            r="6"
          />
          {/* Moving speed / delivery lines behind the truck */}
          <line
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            x1="2"
            y1="24"
            x2="6"
            y2="24"
          />
          <line
            className={`transition-all duration-1000 ${isVisible ? "svg-animate-draw svg-flow-lines" : "opacity-0"}`}
            x1="0"
            y1="32"
            x2="5"
            y2="32"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full bg-white border-y border-zinc-100 pt-6 pb-12 md:pt-8 md:pb-16 transition-colors duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-8 px-4 lg:px-8 py-4 lg:py-2 lg:justify-center transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-0.5 max-w-[200px] sm:max-w-[220px]">
                <span className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  {stat.number}
                </span>
                <p className="text-[12.5px] sm:text-[13px] font-semibold leading-snug text-zinc-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
