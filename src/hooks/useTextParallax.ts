"use client";

import { useEffect, useRef } from "react";

export function useTextParallax<T extends HTMLElement = HTMLElement>(speed = 0.05) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let elementTop = 0;
    let elementHeight = 0;

    const updateDimensions = () => {
      const rect = el.getBoundingClientRect();
      elementTop = rect.top + window.scrollY;
      elementHeight = rect.height;
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("load", updateDimensions);

    const delayedTimer = setTimeout(() => {
      updateDimensions();
      handleScroll();
    }, 500);

    let rAfId: number | null = null;
    
    const handleScroll = () => {
      if (rAfId !== null) return;
      
      rAfId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Center of the element
        const elementCenter = elementTop + elementHeight / 2;
        // Center of the viewport
        const viewportCenter = scrollY + viewportHeight / 2;

        // Calculate offset (distance of element center from viewport center)
        const offset = (viewportCenter - elementCenter) * speed * 2.2;

        // Apply translateY (no scale for text) and force hardware acceleration layer
        el.style.transform = `translateY(${offset}px) translateZ(0)`;
        rAfId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(delayedTimer);
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
