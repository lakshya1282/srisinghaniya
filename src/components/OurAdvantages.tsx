"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

interface AdvantageItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const imgRef = useParallax(0.1);
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default function OurAdvantages() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const advantages: AdvantageItem[] = [
    {
      id: "01",
      title: "End-to-End Fabrication & Galvanizing",
      desc: "Comprehensive in-house manufacturing pipeline ensuring structural integrity, corrosion resistance, and complete quality control from raw materials to the final product.",
      image: "/images/transmissiontowerdesktop.webp",
    },
    {
      id: "02",
      title: "Large-Scale Manufacturing Capacity",
      desc: "Backed by a massive 25,000-tonne annual capacity to support and scale with India's largest power grids, solar infrastructures, and railway projects.",
      image: "/images/towerdesktop.webp",
    },
    {
      id: "03",
      title: "Dedicated Quality & Certifications",
      desc: "Rigorous audits by a dedicated QA department with lab-tested certifications provided for every single batch leaving our Raipur facility.",
      image: "/images/substationdesktop.webp",
    },
    {
      id: "04",
      title: "Lifecycle Support & On-Time Delivery",
      desc: "Cooperative, responsive staff providing continuous guidance and updates throughout the order lifecycle, backed by an unmatched on-time project delivery rate.",
      image: "/abt-us.webp",
    },
  ];

  // Intersection Observer to trigger entrance animation at 20% scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.30 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Auto slide the images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % advantages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [advantages.length]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-zinc-50 text-zinc-900 py-20 md:py-28 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Advantage Blocks & Header */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                Why Partner With Us
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight text-zinc-950 leading-tight">
                {["What sets", "SriSinghaniya apart."].map((line, idx) => (
                  <span key={idx} className="block overflow-hidden py-1">
                    <span
                      className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
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

            {/* Blocks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {advantages.map((item) => (
                <div
                  key={item.id}
                  className="p-8 rounded-2xl border border-zinc-200/60 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 text-xs font-bold text-zinc-600">
                      {item.id}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-zinc-600 mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-zinc-900 text-zinc-900 font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                <span>Discover More About Us</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sliding Image Stack Container */}
          <div 
            className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-auto min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: isVisible ? "inset(0% 0% 0% 0% round 1rem)" : "inset(0% 0% 100% 0% round 1rem)",
              WebkitClipPath: isVisible ? "inset(0% 0% 0% 0% round 1rem)" : "inset(0% 0% 100% 0% round 1rem)",
            }}
          >
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: `${advantages.length * 100}%`,
                transform: `translateX(-${(activeImageIndex * 100) / advantages.length}%)`,
              }}
            >
              {advantages.map((item, idx) => (
                <div
                  key={idx}
                  className="h-full relative overflow-hidden"
                  style={{ width: `${100 / advantages.length}%` }}
                >
                  <ParallaxImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ))}
            </div>
            

          </div>

        </div>
      </div>
    </section>
  );
}
