"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollExpandImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let rAfId: number | null = null;

    const handleScroll = () => {
      if (rAfId !== null) return;

      rAfId = requestAnimationFrame(() => {
        if (!containerRef.current) {
          rAfId = null;
          return;
        }
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate what percentage of the image container height has entered the viewport
        const visibleHeight = viewportHeight - rect.top;
        const visibilityRatio = visibleHeight / rect.height;

        // If 30% or more of the image is visible inside the viewport, expand it
        if (visibilityRatio >= 0.30 && rect.top < viewportHeight) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
        rAfId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rAfId !== null) cancelAnimationFrame(rAfId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white flex justify-center pt-0 pb-10 md:pt-0 md:pb-16 overflow-hidden"
    >
      <div
        className={`h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] relative transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl overflow-hidden ${
          isExpanded ? "w-[90%] rounded-2xl" : "w-[80%] rounded-[24px]"
        }`}
      >
        <img
          src="/abt-us.webp"
          alt="SriSinghaniya Infrastructures Facility"
          className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
          style={{
            transform: isExpanded ? "scale(1.0)" : "scale(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
      </div>
    </div>
  );
}
