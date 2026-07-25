"use client";

import React, { useEffect, useRef, useState } from "react";

export default function OurFacility() {
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

  const capabilities = [
    {
      title: "In-House Fabrication",
      desc: "Precision shearing, cutting, punching, and structural assembly.",
      icon: (
        <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 12.78a3 3 0 01-3.4 2.9M9.2 12.78a3 3 0 003.4 2.9m4.1-12.7a9 9 0 010 13.6M4.5 9a9 9 0 000 6M12 3v18" />
        </svg>
      ),
    },
    {
      title: "Hot-Dip Galvanizing",
      desc: "Modern bath offering heavy zinc coating for structural longevity.",
      icon: (
        <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      title: "Quality Testing Lab",
      desc: "Detailed physical and chemical checking with lab certifications.",
      icon: (
        <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Dispatch Yard",
      desc: "Systematic packing and quick logistics coordination for PAN India delivery.",
      icon: (
        <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-zinc-900 py-20 md:py-28 overflow-hidden border-t border-zinc-100"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Details with Title Mask Reveal */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-3">
                Manufacturing Unit
              </span>
              
              {/* Mask reveal title */}
              <div className="overflow-hidden py-1">
                <h2
                  className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-zinc-950 leading-tight transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  Our Facility
                </h2>
              </div>
            </div>

            <div
              className={`flex flex-col gap-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-base sm:text-lg font-medium text-zinc-500">
                Our manufacturing unit is located at:
              </p>

              {/* Styled Address Card */}
              <div className="bg-zinc-50 border-l-[6px] border-y border-r border-zinc-200/80 border-l-zinc-800 rounded-r-2xl rounded-l-md p-6 shadow-xs">
                <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-950 leading-relaxed font-sans">
                  Opposite Gauri Rice Industries, Donde Pacheda Road, Near Donde Kalan, Raipur, Chhattisgarh
                </p>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-medium">
                The facility is equipped to handle fabrication, galvanizing, quality testing, and dispatch
                operations under one roof, supporting our <strong className="font-semibold text-zinc-950">25,000 MT</strong> annual capacity.
              </p>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200/80 shadow-xs shrink-0">
                      {cap.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-zinc-900">{cap.title}</span>
                      <p className="text-xs text-zinc-500 font-medium leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div
              className={`relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <iframe
                title="SriSinghaniya Infrastructures Manufacturing Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.064560731671!2d81.7441113!3d21.2887654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c312cb84af5b%3A0xc36768a8ff4a0a4c!2sDonde%20Kalan%2C%20Raipur%2C%20Chhattisgarh%20492101!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[10%] contrast-[105%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Location Tag */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-zinc-200/50 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 animate-pulse" />
                <span className="text-xs font-bold text-zinc-800 tracking-wider">RAIPUR, CG</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
