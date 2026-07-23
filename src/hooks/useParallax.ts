"use client";

import { useEffect, useRef } from "react";

export function useParallax(speed = 0.12) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Cache structural dimensions to avoid calling getBoundingClientRect in scroll loop (prevents layout thrashing)
    let elementTop = 0;
    let elementHeight = 0;

    const updateDimensions = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
    };

    // Initialize dimensions
    updateDimensions();

    // Re-calculate on resize or load to keep values accurate
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);

    // Throttle rendering using requestAnimationFrame to sync with screen refresh rate
    let rAfId: number | null = null;
    
    const handleScroll = () => {
      if (rAfId !== null) return;
      
      rAfId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Center of the parent element
        const elementCenter = elementTop + elementHeight / 2;
        // Center of the viewport
        const viewportCenter = scrollY + viewportHeight / 2;

        // Translation offset
        const offset = (viewportCenter - elementCenter) * speed;

        // Apply scale, translate, and force GPU hardware acceleration layer using translateZ(0)
        el.style.transform = `scale(1.15) translateY(${offset}px) translateZ(0)`;
        rAfId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("load", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
      if (rAfId !== null) {
        cancelAnimationFrame(rAfId);
      }
    };
  }, [speed]);

  return ref;
}
