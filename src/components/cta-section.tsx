"use client";

import { useRef, useState, useEffect } from "react";

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-white">
      <div
        ref={ref}
        className="transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <div className="max-w-[1000px] mx-auto py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-16 rounded-[28px] bg-gradient-to-br from-[#5860D5] to-[#1E2E69] text-center relative overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute -top-[40%] -right-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(185,191,255,0.15),transparent_70%)] rounded-full pointer-events-none" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] rounded-full pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight relative">
            Ready to Build with AI?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-md mx-auto mb-7 sm:mb-9 leading-relaxed relative">
            Get started with MetaMinds products today. Custom solutions available for enterprise teams.
          </p>
          <a
            href="https://metaminds.firm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 bg-white text-[#1E2E69] font-bold text-sm sm:text-base rounded-full hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all relative"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
