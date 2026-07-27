"use client";

import React, { useRef, useEffect, useState } from "react";

interface ValueItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function OurValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const values: ValueItem[] = [
    {
      id: "01",
      category: "Foundation",
      title: "Trust that never rusts",
      desc: "Our commitments are as durable as our galvanized steel. We build long-term trust through transparent operations, honest timelines, and structural solutions designed to withstand the test of time.",
      icon: (
        <svg className="w-24 h-24 sm:w-36 sm:h-36 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#033D83" />
              <stop offset="100%" stopColor="#01234f" />
            </linearGradient>
            <linearGradient id="metalGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#033D83" />
            </linearGradient>
          </defs>
          {/* Outer shield structure */}
          <path
            className="svg-animate-draw"
            d="M100 25 L165 48 V105 C165 148 138 178 100 188 C62 178 35 148 35 105 V48 L100 25 Z"
            stroke="url(#shieldGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(82, 82, 91, 0.02)"
          />
          {/* Interlocking links representing unbreakable bond */}
          <rect className="svg-animate-draw" x="75" y="85" width="22" height="42" rx="11" transform="rotate(-45 75 85)" stroke="url(#metalGrad)" strokeWidth="4" fill="none" />
          <rect className="svg-animate-draw" x="103" y="73" width="22" height="42" rx="11" transform="rotate(-45 103 73)" stroke="url(#shieldGrad)" strokeWidth="4" fill="none" />
          {/* Sparkles of durability */}
          <path className="svg-animate-draw" d="M145 70 L150 75 M150 70 L145 75" stroke="#033D83" strokeWidth="2.5" strokeLinecap="round" />
          <path className="svg-animate-draw" d="M50 120 L55 125 M55 120 L50 125" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "02",
      category: "Standards",
      title: "Quality first, always",
      desc: "We adhere strictly to PSU-approved benchmarks and industry standards. Every single batch undergoes thorough testing, ensuring zero-defect fabrication and impeccable coating thickness.",
      icon: (
        <svg className="w-24 h-24 sm:w-36 sm:h-36 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="qualityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#033D83" />
              <stop offset="100%" stopColor="#01234f" />
            </linearGradient>
          </defs>
          {/* Certified Seal outer starburst path */}
          <path
            className="svg-animate-draw"
            d="M100 25 L113 42 L133 36 L139 56 L159 59 L156 79 L171 91 L160 108 L169 127 L150 134 L150 155 L130 152 L120 169 L100 159 L80 169 L70 152 L50 155 L50 134 L31 127 L40 108 L29 91 L44 79 L41 59 L61 56 L67 36 L87 42 Z"
            stroke="url(#qualityGrad)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="rgba(34, 197, 94, 0.02)"
          />
          {/* Inner concentric ring */}
          <circle className="svg-animate-draw svg-flow-lines" cx="100" cy="97" r="48" stroke="#033D83" strokeWidth="2.5" />
          {/* Glowing Check Mark */}
          <path
            className="svg-animate-draw"
            d="M80 97 L94 111 L124 81"
            stroke="url(#qualityGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "03",
      category: "Execution",
      title: "Timely delivery",
      desc: "Infrastructure projects demand absolute punctuality. Our optimized workflows, smart inventory control, and robust logistics networks guarantee that your materials arrive exactly when needed.",
      icon: (
        <svg className="w-24 h-24 sm:w-36 sm:h-36 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="timeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#033D83" />
              <stop offset="100%" stopColor="#01234f" />
            </linearGradient>
          </defs>
          {/* Clock Outer Rim */}
          <circle className="svg-animate-draw" cx="100" cy="100" r="70" stroke="url(#timeGrad)" strokeWidth="4.5" fill="rgba(245, 158, 11, 0.02)" />
          {/* Speed line accents around the clock */}
          <path className="svg-flow-lines" d="M15 100 H30 M15 85 H25 M20 70 H30" stroke="#033D83" strokeWidth="3" strokeLinecap="round" />
          {/* Clock hands showing fast timing */}
          <path className="svg-animate-draw" d="M100 100 L100 55" stroke="url(#timeGrad)" strokeWidth="5" strokeLinecap="round" />
          <path className="svg-animate-draw" d="M100 100 L135 100" stroke="#033D83" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="100" r="6" fill="#033D83" />
          {/* Motion arrow arc */}
          <path className="svg-flow-lines" d="M150 50 A 70 70 0 0 1 170 100" stroke="#033D83" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "04",
      category: "Collaboration",
      title: "Cooperative staff communication",
      desc: "We stand as an extension of your own engineering team. From design updates to coordination, we keep you informed with zero communication gaps and immediate resolution times.",
      icon: (
        <svg className="w-24 h-24 sm:w-36 sm:h-36 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#033D83" />
              <stop offset="100%" stopColor="#01234f" />
            </linearGradient>
            <linearGradient id="chatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#033D83" />
            </linearGradient>
          </defs>
          {/* Left Chat bubble */}
          <path
            className="svg-animate-draw"
            d="M40 90 C40 65 60 45 85 45 C110 45 130 65 130 90 C130 115 110 135 85 135 C75 135 65 131 57 125 L40 132 L46 114 C42 107 40 98 40 90 Z"
            stroke="url(#chatGrad)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="rgba(82, 82, 91, 0.02)"
          />
          {/* Right Chat bubble */}
          <path
            className="svg-animate-draw"
            d="M160 110 C160 92 146 78 128 78 C110 78 96 92 96 110 C96 128 110 142 128 142 C135 142 142 139 148 135 L160 140 L156 127 C159 122 160 116 160 110 Z"
            stroke="url(#chatGrad2)"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="rgba(82, 82, 91, 0.04)"
          />
          {/* Interaction dots inside */}
          <circle cx="75" cy="90" r="3" fill="#033D83" />
          <circle cx="85" cy="90" r="3" fill="#033D83" />
          <circle cx="95" cy="90" r="3" fill="#033D83" />
        </svg>
      ),
    },
    {
      id: "05",
      category: "Engineering",
      title: "Fabrication & excellence",
      desc: "Our Raipur plant integrates precision cutting, bending, and punching with high-quality hot-dip galvanizing, yielding robust structures immune to atmospheric corrosion.",
      icon: (
        <svg className="w-24 h-24 sm:w-36 sm:h-36 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="galvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#033D83" />
              <stop offset="100%" stopColor="#01234f" />
            </linearGradient>
          </defs>
          {/* Industrial structure grid representation */}
          <path
            className="svg-animate-draw"
            d="M40 160 L75 40 L125 40 L160 160"
            stroke="url(#galvGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(82, 82, 91, 0.02)"
          />
          {/* Cross bracing of the steel tower structure */}
          <path className="svg-animate-draw" d="M40 160 H160 M52 120 H148 M63 80 H137 M75 40 H125" stroke="url(#galvGrad)" strokeWidth="3" />
          <path className="svg-animate-draw" d="M40 160 L148 120 M160 160 L52 120 M52 120 L137 80 M148 120 L63 80 M63 80 L125 40 M137 80 L75 40" stroke="url(#galvGrad)" strokeWidth="2.5" />
          {/* Liquid zinc bath/protecting halo at the base */}
          <path className="svg-animate-draw" d="M25 160 C25 150 175 150 175 160 C175 170 25 170 25 160 Z" fill="rgba(82, 82, 91, 0.08)" stroke="#033D83" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "06",
      category: "Partnership",
      title: "Guidance through every step",
      desc: "We support you from pre-fabrication planning, design validation, custom engineering drawings, to the final dispatch. You gain a dedicated partner committed to seamless execution.",
      icon: (
        <svg className="w-24 h-24 sm:w-36 sm:h-36 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.04)] shrink-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="guideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#033D83" />
              <stop offset="100%" stopColor="#01234f" />
            </linearGradient>
          </defs>
          {/* Compass housing */}
          <circle className="svg-animate-draw" cx="100" cy="100" r="70" stroke="url(#guideGrad)" strokeWidth="4.5" fill="rgba(82, 82, 91, 0.02)" />
          {/* Compass Rose/Ticks */}
          <path className="svg-animate-draw" d="M100 30 V40 M100 160 V170 M30 100 H40 M160 100 H170" stroke="#033D83" strokeWidth="3" strokeLinecap="round" />
          {/* Winding path underneath */}
          <path
            className="svg-flow-lines"
            d="M60 140 Q 80 120 100 125 T 140 100"
            stroke="#033D83"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Compass needle pointing North-East */}
          <path className="svg-animate-draw" d="M100 100 L125 75 L110 110 Z" fill="url(#guideGrad)" />
          <path className="svg-animate-draw" d="M100 100 L75 125 L90 90 Z" fill="#e4e4e7" />
          <circle cx="100" cy="100" r="6" fill="#01234f" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how far the section has scrolled relative to the viewport
      const totalScrollable = scrollHeight - viewportHeight;
      const scrolled = -rect.top;
      
      // Compute percentage scrolled (0 to 1)
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Linear translation across the track (number of items - 1) * 100vw
      const maxTranslatePercent = (values.length - 1) * 100;
      const currentTranslate = progress * maxTranslatePercent;
      
      track.style.transform = `translate3d(-${currentTranslate}vw, 0, 0)`;

      // Identify active index for highlighting
      const index = Math.round(progress * (values.length - 1));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Call once initially to set starting positions
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [values.length]);

  // Smooth scroll navigate trigger for buttons
  const navigateTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const scrollHeight = rect.height;
    const viewportHeight = window.innerHeight;
    const totalScrollable = scrollHeight - viewportHeight;

    const targetScrollY = window.scrollY + rect.top + (index / (values.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[120vh] md:h-[400vh] bg-zinc-50 border-t border-zinc-200/50 select-none"
    >
      {/* Blueprint grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #09090b 1px, transparent 1px),
            linear-gradient(to bottom, #09090b 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
      {/* Radial soft spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.8)_0%,transparent_70%)] pointer-events-none" />

      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 md:py-16">
        
        {/* Title layer */}
        <div className="max-w-[1650px] mx-auto w-full px-6 sm:px-10 lg:pl-18 pr-4 sm:pr-8 lg:pr-10 shrink-0 relative z-10">
          <div className="flex flex-col">
            <div className="space-y-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block">
                Core Principles
              </span>
              <div className="w-12 h-0.5 bg-regal-navy" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-sans font-semibold tracking-tight text-zinc-950 leading-tight">
              Our Values
            </h2>
          </div>
        </div>

        {/* Horizontal Track container */}
        <div className="relative w-full flex-grow flex items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full transition-transform duration-100 ease-out will-change-transform"
            style={{ width: `${values.length * 100}vw` }}
          >
            {values.map((val, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={val.id}
                  className="w-screen h-full flex shrink-0 items-center justify-center px-4 sm:px-12 md:px-20 lg:px-24"
                >
                  <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-12 md:gap-20 lg:gap-24 items-center justify-center">
                    
                    {/* SVG column (concentric technical rings hidden on mobile for simplicity) */}
                    <div className="md:col-span-4 md:col-start-1 relative flex justify-center items-center h-[120px] sm:h-[180px] md:h-[450px] shrink-0">
                      
                      {/* Technical blueprint rings: hidden on mobile */}
                      <div className="hidden md:block absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full border border-dashed border-zinc-200 pointer-events-none animate-[spin_120s_linear_infinite]" />
                      <div className="hidden md:block absolute w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] lg:w-[380px] lg:h-[380px] rounded-full border border-zinc-200/50 pointer-events-none" />
                      <div className="hidden md:block absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[290px] lg:h-[290px] rounded-full border border-dotted border-zinc-300/40 pointer-events-none" />

                      <div
                        className={`relative z-10 transition-all duration-[1200ms] ease-out transform ${
                          isActive 
                            ? "opacity-100 translate-y-0 scale-100 rotate-0" 
                            : "opacity-0 translate-y-6 scale-90 -rotate-3 pointer-events-none"
                        }`}
                      >
                        {val.icon}
                      </div>
                    </div>

                    {/* Text column wrapped in a beautiful card background with left accent bar */}
                    <div
                      className={`w-full md:col-span-7 md:col-start-6 bg-white border-l-[4px] md:border-l-[6px] border-y border-r border-zinc-200/80 border-l-regal-navy rounded-r-2xl md:rounded-r-3xl rounded-l-md p-5 sm:p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col gap-2 sm:gap-5 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                        isActive 
                          ? "opacity-100 scale-100 translate-y-0" 
                          : "opacity-0 scale-75 translate-y-8 pointer-events-none"
                      }`}
                    >
                      {/* Small Category pill */}
                      <div className="px-2 py-0.5 md:px-2.5 md:py-1 bg-secondary-surface text-regal-navy rounded-md text-[9px] md:text-[10px] font-bold tracking-widest uppercase w-fit">
                        {val.category}
                      </div>

                      {/* Big Index Counter with mask reveal */}
                      <div className="overflow-hidden">
                        <span
                          className={`block text-xl sm:text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-400 opacity-80 tracking-wider transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[350ms] ${
                            isActive ? "translate-y-0" : "translate-y-full"
                          }`}
                        >
                          {val.id}
                        </span>
                      </div>
                      
                      {/* Value Title with mask reveal */}
                      <div className="overflow-hidden py-0.5">
                        <h3
                          className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 leading-tight transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[450ms] ${
                            isActive ? "translate-y-0" : "translate-y-full"
                          }`}
                        >
                          {val.title}
                        </h3>
                      </div>
                      
                      {/* Vertical line indicator scaling from left */}
                      <div
                        className={`w-12 md:w-16 h-0.5 md:h-1 bg-regal-navy rounded-full transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[550ms] transform origin-left ${
                          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                        }`}
                      />
                      
                      {/* Description with delayed fade and slide */}
                      <p
                        className={`text-xs sm:text-sm md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed max-w-2xl transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[650ms] ${
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        {val.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel indicators/footer */}
        <div className="max-w-[1650px] mx-auto w-full px-6 sm:px-10 lg:pl-18 pr-4 sm:pr-8 lg:pr-10 flex items-center justify-between shrink-0 relative z-10">
          
          {/* Progress dots & index fraction */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex gap-1.5 sm:gap-3">
              {values.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => navigateTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === activeIndex 
                      ? "w-6 sm:w-10 bg-regal-navy" 
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            {/* Index label indicator */}
            <span className="text-[10px] sm:text-xs font-bold text-zinc-400 font-mono tracking-wider">
              {String(activeIndex + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation Arrows for direct click control */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={() => activeIndex > 0 && navigateTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all bg-white shadow-xs cursor-pointer ${
                  activeIndex === 0 
                    ? "opacity-35 cursor-not-allowed" 
                    : "hover:bg-regal-navy hover:text-white hover:border-regal-navy active:scale-90"
                }`}
                title="Previous Slide"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              
              <button
                onClick={() => activeIndex < values.length - 1 && navigateTo(activeIndex + 1)}
                disabled={activeIndex === values.length - 1}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-200 flex items-center justify-center transition-all bg-white shadow-xs cursor-pointer ${
                  activeIndex === values.length - 1 
                    ? "opacity-35 cursor-not-allowed" 
                    : "hover:bg-regal-navy hover:text-white hover:border-regal-navy active:scale-90"
                }`}
                title="Next Slide"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            
            {/* Tip to scroll: hidden on mobile to avoid layout crowding */}
            <div className="hidden sm:flex text-[10px] sm:text-xs font-semibold text-zinc-500 items-center gap-2">
              <span>SCROLL TO PROGRESS</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke="currentColor" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
