"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ProductDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  highlighted: boolean;
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

const productDetails: ProductDetail[] = [
  {
    id: "transmission-towers",
    number: "01",
    title: "Transmission Towers",
    description:
      "High-strength lattice towers engineered for power transmission networks, built to withstand demanding load and environmental conditions while ensuring long-term structural reliability.",
    image: "/tt.webp",
    highlighted: true,
  },
  {
    id: "rsj-poles",
    number: "02",
    title: "RSJ Poles",
    description:
      "Rolled Steel Joist poles designed to support robust and reliable power distribution networks, suited for both rural and urban distribution requirements.",
    image: "/rsj.webp",
    highlighted: true,
  },
  {
    id: "substation-structures",
    number: "03",
    title: "Substation Structures",
    description:
      "Structural steel solutions engineered to support switchgear, transformers, and other substation equipment with precision-fabricated, galvanized components built for durability.",
    image: "/ss.webp",
    highlighted: false,
  },
  {
    id: "earthing-solutions",
    number: "04",
    title: "Earthing Solutions",
    description:
      "Reliable earthing systems designed to ensure electrical safety and system stability across transmission and distribution installations.",
    image: "/earthing.webp",
    highlighted: false,
  },
  {
    id: "gratings",
    number: "05",
    title: "Gratings",
    description:
      "Fabricated steel gratings for industrial and infrastructure applications, offering strength, durability, and safe walkway/platform solutions.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    highlighted: false,
  },
  {
    id: "solar-infrastructure-products",
    number: "06",
    title: "Solar Infrastructure Products",
    description:
      "Structural mounting and support systems for solar installations, built to support the growing shift toward renewable energy infrastructure.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    highlighted: false,
  },
  {
    id: "railway-structures",
    number: "07",
    title: "Railway Structures",
    description:
      "Steel structures fabricated to support railway electrification and allied infrastructure requirements.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
    highlighted: false,
  },
];

export default function ProductsList() {
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
          { threshold: 0.40 }
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
          Full Product Directory
        </span>
        <div className="w-12 h-0.5 bg-regal-navy" />
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-zinc-950 tracking-tight leading-none">
          Our Products
        </h2>
        <div className="w-24 h-1 bg-zinc-950 mt-5" />
      </div>

      {/* Product Split Sections */}
      <div className="space-y-16 md:space-y-24">
        {productDetails.map((product, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleItems[product.id];

          return (
            <div
              key={product.id}
              id={product.id}
              ref={(el) => {
                itemRefs.current[product.id] = el;
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
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover scale-105"
                      />
                    </div>
                  </div>
                  {product.highlighted && (
                    <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-regal-navy text-white text-[11px] font-bold tracking-widest uppercase rounded-sm shadow-md">
                      Featured Range
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
                      {product.number}
                    </span>
                    <div className="w-8 h-px bg-zinc-200" />
                    {product.highlighted && (
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-100 px-2 py-0.5 rounded-sm">
                        Flagship Solution
                      </span>
                    )}
                  </div>

                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-zinc-950 tracking-tight leading-tight">
                    {product.title}
                  </h3>

                  <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-zinc-600 max-w-3xl">
                    {product.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-sm font-semibold">
                      <svg className="w-4 h-4 text-regal-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      In-House Galvanized
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-sm font-semibold">
                      <svg className="w-4 h-4 text-regal-navy" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Lab-Tested Quality
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Quality Statement Banner */}
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 mt-16">
        <div className="bg-zinc-100 text-zinc-950 rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-200">
          <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
              Quality Assurance & Compliance
            </h4>
            <p className="text-sm text-zinc-600">
              All our steel products undergo rigorous testing. They are fully fabricated and hot-dip galvanized in-house, ensuring lab-certified compliance and outstanding weather resistance on every project.
            </p>
          </div>
          <div className="z-10 shrink-0">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-regal-navy hover:bg-regal-navy/90 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm shadow-md"
            >
              <span>Enquire about a product</span>
              <span className="text-sm">→</span>
            </a>
          </div>
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>

    </section>
  );
}
