import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | SriSinghaniya Group",
  description: "Get in touch with SriSinghaniya Group directly via phone or email for your heavy structural fabrication and engineering requirements.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground flex flex-col justify-between">
      <Navbar theme="light" />

      {/* Header Spacer to ensure absolute absolute navbar is legible and content starts below it */}
      <div className="h-[90px] md:h-[110px] bg-white" />

      {/* Main Single Contact Section */}
      <section className="flex-1 w-full relative overflow-hidden py-16 md:py-24 bg-background text-zinc-900 flex items-center">
        {/* Subtle decorative grid/dots or glow to keep it premium */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-regal-navy/5 blur-[100px]" />
          <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[90px]" />
        </div>

        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column: Heading and Visitor's Note */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow">
                    Get in Touch
                  </span>
                  <div className="w-12 h-0.5 bg-regal-navy" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-zinc-950 leading-tight">
                  Get in Touch
                </h1>
                <p className="text-zinc-600 font-medium text-lg leading-relaxed max-w-lg">
                  We'd love to hear about your project. Reach out to our team directly — no lengthy forms, just a conversation.
                </p>
              </div>

              {/* Visitor's Note Card (Rich premium contrast card) */}
              <div className="p-8 rounded-2xl bg-regal-navy text-white shadow-xl space-y-4 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-lg font-semibold text-blue-300 tracking-wide">
                  A Note for Our Visitors
                </h3>
                <p className="text-white/95 text-sm md:text-base leading-relaxed font-sans font-light">
                  Whether you're a government body, EPC company, infrastructure firm, power sector client, or international buyer — we welcome the conversation. Call or email us directly, and our team will guide you through the rest.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              
              {/* Phone Card */}
              <a 
                href="tel:+918458890568"
                className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-regal-navy/40 hover:bg-zinc-50/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-regal-navy/5 flex items-center justify-center border border-regal-navy/10 group-hover:bg-regal-navy/10 transition-all">
                    <svg className="w-6 h-6 text-regal-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.145-.44.02-.927.396-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow mb-1">Phone Number</h3>
                    <p className="text-xl font-bold text-zinc-950 group-hover:text-regal-navy transition-colors tracking-wide">+91 8458890568</p>
                  </div>
                </div>
                <div className="pt-6 flex items-center text-xs font-bold text-regal-navy group-hover:text-regal-navy/85 transition-all">
                  <span>Call directly</span>
                  <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:srisinghaniya.structures@gmail.com"
                className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-regal-navy/40 hover:bg-zinc-50/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-regal-navy/5 flex items-center justify-center border border-regal-navy/10 group-hover:bg-regal-navy/10 transition-all">
                    <svg className="w-6 h-6 text-regal-navy" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow mb-1">Email Address</h3>
                    <p className="text-base sm:text-md lg:text-base xl:text-[15px] font-bold text-zinc-950 group-hover:text-regal-navy transition-colors break-all">srisinghaniya.structures@gmail.com</p>
                  </div>
                </div>
                <div className="pt-6 flex items-center text-xs font-bold text-regal-navy group-hover:text-regal-navy/85 transition-all">
                  <span>Send an email</span>
                  <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>

              {/* Office Address Card */}
              <div className="p-8 rounded-2xl bg-secondary-surface border border-zinc-200/70 shadow-xs flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-200/50 flex items-center justify-center border border-zinc-300/30">
                    <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow mb-2">Office Address</h3>
                    <p className="text-sm md:text-base text-zinc-800 font-medium leading-relaxed">
                      Shop 23, 24, Shivaji Park, Vidhan Sabha Road, Raipur, Chhattisgarh
                    </p>
                  </div>
                </div>
              </div>

              {/* Factory / Works Card */}
              <div className="p-8 rounded-2xl bg-secondary-surface border border-zinc-200/70 shadow-xs flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-200/50 flex items-center justify-center border border-zinc-300/30">
                    <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M21 21h-3.75m-6-13.5h.75m-.75 3h.75m-.75 3h.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-eyebrow mb-2">Factory / Works</h3>
                    <p className="text-sm md:text-base text-zinc-800 font-medium leading-relaxed">
                      Opposite Gauri Rice Industries, Donde Pacheda Road, Near Donde Kalan, Raipur, Chhattisgarh
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
