"use client";

import React, { useEffect, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ProductItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
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

const products: ProductItem[] = [
  {
    id: "01",
    title: "Transmission Towers",
    desc: "High-strength lattice towers engineered for power transmission networks, built to withstand demanding load and environmental conditions while ensuring long-term structural reliability.",
    image: "/tt.webp",
    href: "/products#transmission-towers",
  },
  {
    id: "02",
    title: "RSJ Poles",
    desc: "Rolled Steel Joist poles designed to support robust and reliable power distribution networks, suited for both rural and urban distribution requirements.",
    image: "/rsj.webp",
    href: "/products#rsj-poles",
  },
  {
    id: "03",
    title: "Substation Structures",
    desc: "Structural steel solutions engineered to support switchgear, transformers, and other substation equipment with precision-fabricated, galvanized components built for durability.",
    image: "/ss.webp",
    href: "/products#substation-structures",
  },
  {
    id: "04",
    title: "Earthing Solutions",
    desc: "Reliable earthing systems designed to ensure electrical safety and system stability across transmission and distribution installations.",
    image: "/earthing.webp",
    href: "/products#earthing-solutions",
  },
  {
    id: "05",
    title: "Gratings",
    desc: "Fabricated steel gratings for industrial and infrastructure applications, offering strength, durability, and safe walkway/platform solutions.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    href: "/products#gratings",
  },
  {
    id: "06",
    title: "Solar Infrastructure Products",
    desc: "Structural mounting and support systems for solar installations, built to support the growing shift toward renewable energy infrastructure.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    href: "/products#solar-infrastructure-products",
  },
  {
    id: "07",
    title: "Railway Structures",
    desc: "Steel structures fabricated to support railway electrification and allied infrastructure requirements.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    href: "/products#railway-structures",
  },
];

export default function ProductsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      // Wait for the transition to finish before updating current index and turning off transition
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setIsTransitioning(false);
      }, 1000); // match transition duration (1000ms)
    }, 4500); // cycle every 4.5 seconds

    return () => clearInterval(timer);
  }, []);

  // We want to render 5 items:
  // Item 0: Outgoing (collapsing to 0% width)
  // Item 1: Active (expanding to 70% width)
  // Item 2: Inactive 1 (remains 10% width)
  // Item 3: Inactive 2 (remains 10% width)
  // Item 4: Incoming (expanding to 10% width)
  const visibleItems = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
    products[(currentIndex + 3) % products.length],
    products[(currentIndex + 4) % products.length],
  ];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden select-none">
      
      {/* Desktop View: Multi-card Accordion Carousel */}
      <div className="hidden md:flex w-full h-full">
        {visibleItems.map((product, relativeIndex) => {
          let widthClass = "";
          let isExpanded = false;
          let isVisible = true;

          if (isTransitioning) {
            if (relativeIndex === 0) {
              widthClass = "w-0 opacity-0 pointer-events-none";
            } else if (relativeIndex === 1) {
              widthClass = "w-[70%]";
              isExpanded = true;
            } else if (relativeIndex === 2 || relativeIndex === 3) {
              widthClass = "w-[10%]";
            } else if (relativeIndex === 4) {
              widthClass = "w-[10%]";
            }
          } else {
            if (relativeIndex === 0) {
              widthClass = "w-[70%]";
              isExpanded = true;
            } else if (relativeIndex === 1 || relativeIndex === 2 || relativeIndex === 3) {
              widthClass = "w-[10%]";
            } else {
              widthClass = "w-0 opacity-0 pointer-events-none";
              isVisible = false;
            }
          }

          return (
            <div
              key={`${product.id}-${relativeIndex}`}
              className={`relative h-full flex flex-col justify-end overflow-hidden border-r border-white/5 last:border-r-0 ${widthClass} ${
                isTransitioning ? "transition-all duration-1000 ease-in-out" : ""
              }`}
              style={{ minWidth: 0 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <ParallaxImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover scale-105"
                />
                {/* Overlay Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-1000 ${
                    isExpanded ? "opacity-90" : "opacity-70"
                  }`}
                />
              </div>

              {/* Content for EXPANDED card */}
              <div
                className={`relative z-10 p-8 sm:p-16 max-w-2xl text-white flex flex-col items-start gap-4 transition-all duration-700 delay-150 ${
                  isExpanded && isVisible && !isTransitioning
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                }`}
              >
                <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-sm text-xs font-bold tracking-widest text-white/95">
                  {product.id}
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-none mt-2">
                  {product.title}
                </h1>
                <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-lg">
                  {product.desc}
                </p>
                <a
                  href={product.href}
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors rounded-sm text-xs font-bold tracking-wider uppercase"
                >
                  <span>Discover Product</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              {/* Content for COLLAPSED card (vertical title) */}
              <div
                className={`absolute inset-0 z-10 flex flex-col justify-end items-center pb-12 transition-all duration-700 ${
                  !isExpanded && isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-black/40 backdrop-blur-xs border border-white/10 py-5 px-3 rounded-md flex flex-col items-center gap-4 w-12 max-h-[80%] overflow-hidden">
                  <span className="text-[10px] font-extrabold text-white/70 tracking-widest">
                    {product.id}
                  </span>
                  <div className="h-24 w-px bg-white/20" />
                  <div className="text-xs font-bold tracking-[0.2em] text-white uppercase select-none whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
                    {product.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View: Simple Slideshow */}
      <div className="flex md:hidden w-full h-full relative">
        {products.map((product, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={product.id}
              className={`absolute inset-0 w-full h-full flex flex-col justify-end p-8 pb-24 text-white transition-all duration-1000 ease-in-out ${
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none z-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <ParallaxImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-md flex flex-col items-start gap-3">
                <div className="inline-block px-2.5 py-0.5 bg-white/15 backdrop-blur-md rounded-sm text-[10px] font-bold tracking-widest text-white/90">
                  {product.id}
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase leading-none mt-1">
                  {product.title}
                </h1>
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  {product.desc}
                </p>
                <a
                  href={product.href}
                  className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-white text-black hover:bg-zinc-200 transition-colors rounded-sm text-[11px] font-bold tracking-wider uppercase"
                >
                  <span>Discover Product</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
