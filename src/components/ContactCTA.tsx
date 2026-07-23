"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

export default function ContactCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useParallax(0.08);

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
      className="w-full bg-zinc-50 text-zinc-900 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] sm:min-h-[550px]">
        
        {/* Left Column: Image */}
        <div className="relative w-full h-[300px] lg:h-auto overflow-hidden">
          <img
            ref={imgRef}
            src="/images/transmissiontowerdesktop.webp"
            alt="Transmission Towers Sunset"
            className="w-full h-full object-cover transition-transform duration-300 ease-out"
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20 bg-zinc-50 space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-semibold tracking-tight leading-tight text-zinc-950">
              {["Have a project in mind?"].map((line, idx) => (
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
            <p className="text-zinc-600 font-medium text-base sm:text-lg max-w-md leading-relaxed">
              Get in touch with our team to discuss your fabrication and galvanizing requirements.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            <a
              href="mailto:srisinghaniya.structures@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-md shadow-lg"
            >
              <span>Contact Us</span>
              <span className="text-sm">→</span>
            </a>
            
            <div className="flex flex-col gap-3 text-sm text-zinc-700 font-semibold">
              {/* Phone */}
              <a
                href="tel:+918458890568"
                className="flex items-center gap-3 hover:text-zinc-950 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:border-zinc-400 transition-colors shadow-xs">
                  <svg className="w-4 h-4 text-zinc-500 group-hover:text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>+91 8458890568</span>
              </a>

              {/* Email */}
              <a
                href="mailto:srisinghaniya.structures@gmail.com"
                className="flex items-center gap-3 hover:text-zinc-950 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:border-zinc-400 transition-colors shadow-xs">
                  <svg className="w-4 h-4 text-zinc-500 group-hover:text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span>srisinghaniya.structures@gmail.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
