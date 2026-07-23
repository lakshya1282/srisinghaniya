"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ProductItem {
  id: string;
  title: string;
  desc?: string;
  image: string;
  isLarge: boolean;
  icon?: React.ReactNode;
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

export default function OurProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const products: ProductItem[] = [
    {
      id: "01",
      title: "Transmission Towers",
      desc: "Engineered for high-voltage performance across demanding power networks.",
      image: "/tt.webp",
      isLarge: true,
    },
    {
      id: "02",
      title: "RSJ Poles",
      desc: "Durable, reliable and built for efficient distribution networks.",
      image: "/rsj.webp",
      isLarge: true,
    },
    {
      id: "03",
      title: "Substation Structures",
      image: "/ss.webp",
      isLarge: false,
      icon: (
        <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
          <path d="M12 3v10" />
          <path d="M8 8h8" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "Earthing Solutions",
      image: "/earthing.webp",
      isLarge: false,
      icon: (
        <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="16" />
          <line x1="6" y1="16" x2="18" y2="16" />
          <line x1="8" y1="19" x2="16" y2="19" />
          <line x1="10" y1="22" x2="14" y2="22" />
        </svg>
      ),
    },
    {
      id: "05",
      title: "Electrogratings",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
      isLarge: false,
      icon: (
        <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
    },
    {
      id: "06",
      title: "Solar Infrastructure",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      isLarge: false,
      icon: (
        <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M19.07 4.93l-1.41 1.41" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l-1.41 -1.41" />
        </svg>
      ),
    },
    {
      id: "07",
      title: "Railway Structures",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80",
      isLarge: false,
      icon: (
        <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22V2" />
          <path d="M20 22V2" />
          <path d="M4 6h16" />
          <path d="M4 11h16" />
          <path d="M4 16h16" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.10 } // Trigger slightly faster (10% visibility)
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const largeProducts = products.filter((p) => p.isLarge);
  const smallProducts = products.filter((p) => !p.isLarge);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-zinc-900 py-20 md:py-28 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-semibold tracking-tight text-zinc-950">
            {["Our Products"].map((line, idx) => (
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

        {/* Products Grid */}
        <div className="space-y-6">
          
          {/* Row 1: 2 Large Highlighted Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {largeProducts.map((p) => (
              <div
                key={p.id}
                className="group relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-zinc-150 cursor-pointer flex flex-col justify-between p-6 sm:p-10 text-white"
              >
                {/* Background Image: CSS double-mask reveal top-to-bottom */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className={`mask-reveal-outer ${isVisible ? "active" : ""}`}>
                    <div className="mask-reveal-inner">
                      <ParallaxImage
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 z-10" />
                </div>

                {/* Card Top: Number */}
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-bold tracking-widest">
                    {p.id}
                  </span>
                </div>

                {/* Card Bottom: Content & CTA button */}
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed max-w-md">
                      {p.desc}
                    </p>
                  </div>
                  
                  {/* Circle Action Button */}
                  <div className="w-10 h-10 sm:w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors shadow-lg">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 5 Smaller Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {smallProducts.map((p) => (
              <div
                key={p.id}
                className="group relative h-[380px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-150 cursor-pointer flex flex-col justify-between p-5 text-white"
              >
                {/* Background Image: CSS double-mask reveal top-to-bottom */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className={`mask-reveal-outer ${isVisible ? "active" : ""}`}>
                    <div className="mask-reveal-inner">
                      <ParallaxImage
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                </div>

                {/* Card Top: Number */}
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest">
                    {p.id}
                  </span>
                </div>

                {/* Card Bottom: Icon + Title Overlay */}
                <div className="relative z-10 flex items-end justify-between gap-4 mt-auto">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-xs border border-white/10 text-white">
                    {p.icon && React.cloneElement(p.icon as React.ReactElement<{ className?: string }>, { className: "w-4.5 h-4.5 text-white" })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Global CTA button */}
        <div className="flex justify-center pt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-zinc-900 text-zinc-900 font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300 rounded-md"
          >
            <span>View All Products</span>
            <span className="text-sm">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
