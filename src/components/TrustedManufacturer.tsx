"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TrustedManufacturer() {
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-zinc-900 pt-8 pb-6 md:pt-12 md:pb-10 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Mask Reveal Title */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-zinc-950 leading-[1.1] flex flex-col">
              {["Trusted", "Manufacturer of", "Power &", "Infrastructure", "Solutions"].map((line, idx) => (
                <span key={idx} className="block overflow-hidden py-1">
                  <span
                    className={`block transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isVisible ? "translate-y-0" : "translate-y-full"
                    }`}
                    style={{ transitionDelay: `${idx * 200}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          {/* Right Column: Slide from Right to Left Content */}
          <div
            className={`lg:col-span-6 flex flex-col gap-6 lg:gap-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-600">
              SriSinghaniya Infrastructures Pvt. Ltd. is a Raipur, Chhattisgarh-based manufacturer
              specializing in the fabrication and galvanizing of transmission towers, substation structures,
              RSJ poles, earthing solutions, electrogratings, solar infrastructure products, and railway structures.
            </p>
            
            <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-600">
              Backed by a 25,000-tonne annual fabrication and galvanizing capacity, we serve the power
              transmission, infrastructure, energy, and solar sectors across India - with a clear roadmap
              toward expanding our reach further in the years ahead.
            </p>
            
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-zinc-950 italic border-l-4 border-zinc-900 pl-4 my-2">
              Every product that leaves our facility is built on one principle: “Long term durability”
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="inline-block px-8 py-3.5 border border-zinc-900 text-zinc-900 font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                About Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
