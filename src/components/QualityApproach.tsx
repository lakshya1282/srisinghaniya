"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export default function QualityApproach() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax hook refs for each image to enable individual parallax scrolling
  const imgRef1 = useParallax(0.08);
  const imgRef2 = useParallax(0.08);
  const imgRef3 = useParallax(0.08);

  const images = [
    { src: "/images/quality/sunset.jpg", ref: imgRef1 },
    { src: "/images/quality/substation.png", ref: imgRef2 },
    { src: "/images/quality/rsj.png", ref: imgRef3 },
  ];

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

  // Slide/crossfade interval every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-zinc-50 text-zinc-900 py-16 md:py-24 overflow-hidden border-t border-zinc-200/50 border-b border-zinc-200/50"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Normal Card Image Stack (Increased Size with delay) */}
          <div
            className="lg:col-span-6 relative w-full h-[250px] sm:h-[450px] lg:h-[750px] flex items-center justify-center transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300"
            style={{
              clipPath: isVisible ? "inset(0% 0% 0% 0% round 1.5rem)" : "inset(0% 100% 0% 0% round 1.5rem)",
              WebkitClipPath: isVisible ? "inset(0% 0% 0% 0% round 1.5rem)" : "inset(0% 100% 0% 0% round 1.5rem)",
            }}
          >
            <div className="w-full h-full relative overflow-hidden rounded-3xl bg-white border border-zinc-200/80 shadow-2xl">
              {images.map((item, idx) => (
                <div
                  key={item.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out overflow-hidden ${
                    idx === activeImageIdx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    ref={item.ref as any}
                    src={item.src}
                    alt={`SriSinghaniya Quality Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover contrast-105 brightness-100"
                  />
                  {/* Subtle vignette/bottom shadow for card aesthetics */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Information Content stacked vertically */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-10 pl-0 lg:pl-6">
            
            {/* Block 1: Our Approach to Quality */}
            <div
              className={`flex flex-col gap-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200/80 shadow-sm text-zinc-900">
                  {/* Shield Check Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-zinc-950">
                  Our Approach to Quality
                </h3>
              </div>
              
              <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-600 max-w-3xl">
                Every product undergoes lab testing, with detailed certifications provided for fabrication and
                galvanizing once testing is complete. We follow industry-standard quality processes and align
                with PSU-approved standards as we grow our certification portfolio.
              </p>
            </div>

            {/* Vertical Divider Line with reduced vertical margin */}
            <div className="w-full h-px bg-zinc-200/60 my-2" />

            {/* Block 2: Where We're Headed */}
            <div
              className={`flex flex-col gap-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200/80 shadow-sm text-zinc-900">
                  {/* Flag/Mountain Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.205.654l2.296.918a9 9 0 006.467-.182L21 16.5V3l-1.428.357a9 9 0 01-6.196-.653l-2.296-.918a9 9 0 00-6.47.182L3 4.5M3 15V4.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-zinc-950">
                  Where We're Headed
                </h3>
              </div>

              <p className="text-base sm:text-lg font-medium leading-relaxed text-zinc-600 max-w-3xl">
                As a company still in its early chapters, our roadmap is focused on:
              </p>

              {/* Milestones list with icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-.1-7.843-.218m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.086-8.716-.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
                        />
                      </svg>
                    ),
                    text: "Expanding our footprint across the infrastructure and energy sectors",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ),
                    text: "Growing our presence beyond current markets, with an eye on future export opportunities",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                        />
                      </svg>
                    ),
                    text: "Strengthening after-sales support so clients have a dependable partner even after delivery",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    ),
                    text: "Building long-term relationships with EPC companies, government bodies, and power sector clients",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200/80 shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold leading-relaxed text-zinc-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
