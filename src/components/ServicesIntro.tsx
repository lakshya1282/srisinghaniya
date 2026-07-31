"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ServicesIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const metrics = [
    { value: "25,000 MT", label: "Annual Galvanizing & Fab" },
    { value: "IS Standards", label: "Strict Code Compliance" },
    { value: "100% Quality", label: "QA Tested Batches" },
    { value: "Pan-India", label: "Logistics & Site Supply" },
  ];

  return (
    <section
      id="services-intro"
      ref={sectionRef}
      className="w-full bg-background text-zinc-900 pt-16 md:pt-24 pb-4 md:pb-6 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Mask Reveal Title */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow">
                Services Overview
              </span>
              <div className="w-12 h-0.5 bg-regal-navy" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-zinc-950 leading-[1.1] flex flex-col">
              {["Industrial-Grade", "Fabrication &", "Custom Design", "Solutions"].map((line, idx) => (
                <span key={idx} className="block overflow-hidden py-1">
                  <span
                    className={`block transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isVisible ? "translate-y-0" : "translate-y-full"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          {/* Right Column: Slide from Right to Left Content & Metrics */}
          <div
            className={`lg:col-span-6 flex flex-col gap-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-600">
                At SriSinghaniya Infrastructures, we deliver more than just products. We offer end-to-end services that support power transmission networks, sub-stations, renewable energy developers, and industrial projects across India. Our facilities are optimized for massive throughput and precision engineering.
              </p>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-600">
                From high-capacity hot-dip galvanizing that protects structures against the harshest environmental conditions, to customized structural design and testing, we ensure that every structure is engineered for maximum performance and a lifetime of durability.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-200">
              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-sans tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
