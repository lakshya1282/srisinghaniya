"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-zinc-900 border-t border-zinc-200 pt-20 pb-8 transition-colors duration-300">
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 space-y-16">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 pb-12">
          
          {/* Logo & Social Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950">
                YOUR LOGO
              </span>
            </div>
            
            {/* Social Icons row */}
            <div className="flex items-center gap-4 pt-2 border-b border-zinc-200 pb-4 max-w-[200px]">
              {/* Facebook */}
              <a href="#" className="text-zinc-500 hover:text-zinc-950 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-zinc-500 hover:text-zinc-950 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-zinc-500 hover:text-zinc-950 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-zinc-500 hover:text-zinc-950 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="text-zinc-500 hover:text-zinc-950 transition-colors" aria-label="X">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* About Us Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
              About Us
            </h3>
            <ul className="space-y-3.5 text-sm font-semibold text-zinc-500">
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Our Journey</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Manufacturing Capacity</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Raipur Facility</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
              Products
            </h3>
            <ul className="space-y-3.5 text-sm font-semibold text-zinc-500">
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Transmission Towers</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Substation Structures</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">RSJ Poles</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Earthing Solutions</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Gratings & Solar Rails</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm font-semibold text-zinc-500">
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-zinc-950 transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legality */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-500">
          <div>
            © 2026 SriSinghaniya Group. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-zinc-950 transition-colors">Legal Disclaimer</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-950 transition-colors">Privacy Notice</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-950 transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-zinc-950 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
