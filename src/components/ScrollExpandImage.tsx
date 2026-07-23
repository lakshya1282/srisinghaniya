"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollExpandImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [widthPct, setWidthPct] = useState(80); // Starts at 80% width
  const [imgScale, setImgScale] = useState(1.2); // Starts at 1.2 scale (zoomed in)

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

        // Element top enters at viewport bottom (progress = 0)
        // Element top reaches 15% of viewport height (progress = 1)
        const startPoint = viewportHeight;
        const endPoint = viewportHeight * 0.15;

        const progress = Math.max(0, Math.min(1, (startPoint - rect.top) / (startPoint - endPoint)));

        // Map progress to width percentage (80% to 90%)
        const calculatedWidth = 80 + progress * 10;
        setWidthPct(calculatedWidth);

        // Map progress to image scale (1.2 down to 1.0)
        const calculatedScale = 1.2 - progress * 0.2;
        setImgScale(calculatedScale);
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
        className="h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] relative transition-all duration-300 ease-out shadow-2xl overflow-hidden"
        style={{
          width: `${widthPct}%`,
          borderRadius: `${Math.max(16, 24 - (widthPct - 80) * 0.8)}px`, // Transition rounded corners from 24px to 16px
        }}
      >
        <img
          src="/abt-us.webp"
          alt="Sri Singhaniya Infrastructures Facility"
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${imgScale})`,
          }}
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
      </div>
    </div>
  );
}
