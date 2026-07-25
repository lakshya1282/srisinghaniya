"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/about/substation.png",
  "/images/about/transmission-tower.jpg",
  "/images/about/steel-grating.jpeg",
  "/images/about/rsj.png",
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[550px] md:min-h-[650px] overflow-hidden bg-black text-white select-none">
      {/* Inline styles for self-contained Ken Burns zoom animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.12) translate(0, 0);
          }
        }
        .animate-kenburns {
          animation: kenburns 6.5s ease-out forwards;
        }
      `}} />

      {/* ── Background Slideshow ── */}
      <div 
        className="absolute -top-[15%] -bottom-[15%] left-0 right-0 z-0 overflow-hidden"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
          willChange: "transform",
        }}
      >
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
          return (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={img}
                alt="About Us Slideshow"
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center ${
                  isActive || isPrevious ? "animate-kenburns" : "scale-100"
                }`}
              />
            </div>
          );
        })}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-black/35 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
      </div>

      {/* ── Content layer (aligns perfectly to bottom-left using same styles as home Hero) ── */}
      <div className="relative z-30 max-w-[1650px] mx-auto h-full pl-6 sm:pl-10 lg:pl-18 pr-4 sm:pr-8 lg:pr-10 flex flex-col justify-end pt-10 pb-16 md:pt-16 md:pb-24 gap-8">
        <div className={`max-w-2xl space-y-4 md:space-y-6 transition-all duration-1000 ease-out transform ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase">
            Get to Know Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
            About us
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 tracking-wide max-w-xl leading-relaxed">
            Delivering robust power infrastructure and quality engineering solutions across transmission networks, substations, and industrial structures.
          </p>
          <div className="pt-2">
            <button
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-white/80 hover:border-white bg-black/20 hover:bg-white hover:text-gray-950 text-white font-semibold rounded-md transition-all duration-300 hover:-translate-y-0.5 shadow-lg backdrop-blur-xs cursor-pointer"
            >
              <span>Explore Our Journey →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
