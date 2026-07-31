"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  badge?: string;
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

const serviceDetails: ServiceDetail[] = [
  {
    id: "fabrication",
    number: "01",
    title: "Fabrication",
    description:
      "Precision steel fabrication for transmission towers, substation structures, RSJ poles, railway structures, and electrogratings — built to specification and scaled to project size.",
    image: "/images/services/fabrication.png",
    features: ["Built to Specification", "Scaled to Project Size", "CNC Precision Machining"],
    badge: "Core Service",
  },
  {
    id: "galvanizing",
    number: "02",
    title: "Galvanizing",
    description:
      "In-house hot-dip galvanizing to protect structural steel against corrosion, ensuring long service life across varied environmental conditions — the foundation of our \"Trust that never rusts\" promise.",
    image: "/images/services/galvanizing.png",
    features: ["In-House Hot-Dip Bath", "Advanced Corrosion Protection", "Long Service Life"],
    badge: "Flagship Capability",
  },
  {
    id: "quality-testing",
    number: "03",
    title: "Quality Testing & Certification",
    description:
      "A dedicated Quality department oversees lab testing for every batch, with detailed fabrication and galvanizing certifications issued on completion.",
    image: "/images/services/quality.png",
    features: ["Dedicated Quality Department", "Lab Testing for Every Batch", "Certifications Issued on Completion"],
  },
  {
    id: "planning-dispatch",
    number: "04",
    title: "Project Planning & Dispatch",
    description:
      "Our Planning and Dispatch teams coordinate order scheduling and delivery timelines based on project scale, keeping clients informed at every stage.",
    image: "/images/services/planning.png",
    features: ["Coordinated Order Scheduling", "Tailored Delivery Timelines", "Regular Client Updates"],
  },
  {
    id: "guidance-support",
    number: "05",
    title: "Guidance & Client Support",
    description:
      "From initial enquiry through to delivery, our team offers hands-on guidance and cooperative communication — and remains available for after-sales support in case of any quality concerns.",
    image: "/images/services/guidance.png",
    features: ["Hands-on Initial Guidance", "Cooperative Team Communication", "Active After-Sales Support"],
  },
  {
    id: "pan-india-delivery",
    number: "06",
    title: "Pan-India Delivery",
    description:
      "We serve clients across India, wherever the project requires, with future plans to expand into export markets.",
    image: "/images/services/delivery.png",
    features: ["Serving Projects Pan-India", "Robust Supply Chain network", "Future Export Reach"],
  },
];

export default function ServicesList() {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.entries(itemRefs.current).forEach(([id, element]) => {
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          },
          { threshold: 0.25 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section className="w-full bg-background text-zinc-900 pb-20 overflow-hidden">
      
      {/* Section Title Header */}
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 pt-4 pb-8 md:pt-6 md:pb-12 border-t border-zinc-100 space-y-2">
        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow">
          Scope of Work
        </span>
        <div className="w-12 h-0.5 bg-regal-navy" />
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-zinc-950 tracking-tight leading-none">
          Our Specializations
        </h2>
        <div className="w-24 h-1 bg-zinc-950 mt-5" />
      </div>

      {/* Services Split Sections */}
      <div className="space-y-16 md:space-y-24">
        {serviceDetails.map((service, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleItems[service.id];

          return (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {
                itemRefs.current[service.id] = el;
              }}
              className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-b border-zinc-100 pb-16 md:pb-24">
                
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 relative overflow-hidden rounded-xl h-[360px] sm:h-[480px] md:h-[540px] lg:h-[600px] shadow-lg ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className={`mask-reveal-outer ${isVisible ? "active" : ""}`}>
                    <div className="mask-reveal-inner">
                      <ParallaxImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover scale-105"
                      />
                    </div>
                  </div>
                  {service.badge && (
                    <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-regal-navy text-white text-[11px] font-bold tracking-widest uppercase rounded-sm shadow-md">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center gap-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : isEven
                      ? "opacity-0 translate-x-12"
                      : "opacity-0 -translate-x-12"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base font-extrabold text-regal-navy tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-8 h-px bg-zinc-200" />
                  </div>

                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-zinc-950 tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-zinc-600 max-w-3xl font-medium">
                    {service.description}
                  </p>

                  <div className="pt-2 flex flex-col gap-2">
                    {service.features.map((feat, fidx) => (
                      <span key={fidx} className="inline-flex items-center gap-1.5 text-zinc-700 text-sm font-semibold">
                        <svg className="w-4.5 h-4.5 text-regal-navy shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Service Engagement CTA */}
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 mt-16">
        <div className="bg-zinc-100 text-zinc-950 rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-200">
          <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Need a Custom Fabrication or Galvanizing Estimate?
            </h4>
            <p className="text-sm text-zinc-600 font-medium">
              We coordinate closely with your procurement and engineering teams to provide transparent estimates, design reviews, and reliable timelines.
            </p>
          </div>
          <div className="z-10 shrink-0">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-regal-navy hover:bg-regal-navy/90 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm shadow-md"
            >
              <span>Submit RFQ / Enquire</span>
              <span className="text-sm">→</span>
            </a>
          </div>
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>

    </section>
  );
}
