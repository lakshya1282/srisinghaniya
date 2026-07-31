"use client";

import React, { useState } from "react";

export default function Navbar({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "/about", hasDropdown: false },
    { name: "PRODUCTS", href: "/products", hasDropdown: false },
    { name: "SERVICES", href: "/services", hasDropdown: false },
    { name: "CONTACT", href: "/contact", hasDropdown: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent transition-all duration-300">
      
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-6 md:left-8 z-50">
        <a href="/" className="block">
          <img
            src="/logo.jpg"
            alt="SriSinghaniya Logo"
            className="h-[80px] md:h-[100px] w-auto object-contain rounded-md shadow-md"
          />
        </a>
      </div>

      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[92px] md:h-[116px] relative">
          
          {/* Logo Spacer */}
          <div className="w-[100px] md:w-[130px] flex-shrink-0" />

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[12.5px] font-bold tracking-widest transition-colors flex items-center gap-1 py-2 ${
                  theme === "light" 
                    ? "text-zinc-900 hover:text-zinc-600" 
                    : "text-white hover:text-white/85 drop-shadow-md"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className="w-3.5 h-3.5 opacity-80 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className={`hidden lg:flex items-center space-x-5 ${theme === "light" ? "text-zinc-900" : "text-white"}`}>
            {/* Language switch */}
            <button className={`flex items-center gap-1 text-xs font-bold transition-colors py-1 px-2 rounded-md cursor-pointer ${
              theme === "light" ? "hover:bg-zinc-100" : "hover:bg-white/10"
            }`}>
              <span>ENG</span>
              <svg className="w-3 h-3 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className={`flex items-center md:hidden gap-3 ${theme === "light" ? "text-zinc-900" : "text-white"}`}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-hidden ${
                theme === "light" ? "text-zinc-900 hover:text-zinc-600" : "text-white hover:text-white/80"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10 px-4 pt-2 pb-6 space-y-3 shadow-lg text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between px-3">
            <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-200">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Language: ENG</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
