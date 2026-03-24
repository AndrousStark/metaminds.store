"use client";

import { useRef, useState, useEffect } from "react";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5860D5" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    iconBg: "bg-[#5860D5]/8",
    title: "Lightning Fast",
    desc: "All our products are optimized for speed. Sub-second response times across the board.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2E69" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    iconBg: "bg-[#5860D5]/6",
    title: "Enterprise Security",
    desc: "SOC 2 compliant infrastructure with end-to-end encryption and zero-trust architecture.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    iconBg: "bg-emerald-500/6",
    title: "Global Support",
    desc: "Dedicated teams across 70+ countries with 24/7 support and local expertise.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA6020" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    iconBg: "bg-[#EA6020]/6",
    title: "API-First Design",
    desc: "Every product ships with comprehensive APIs. Integrate with your stack in minutes.",
  },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-white">
      <Reveal>
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5860D5] mb-3 block">
            Why MetaMinds
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2E69] tracking-tight mb-4">
            Built Different, Built Better
          </h2>
          <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
            We combine cutting-edge AI research with production-grade engineering to deliver solutions that actually work.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1200px] mx-auto">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <div className="p-6 sm:p-8 bg-white border border-[#B9BFFF]/30 shadow-[0_2px_8px_rgba(30,46,105,0.04)] rounded-3xl transition-all duration-300 hover:border-[#5860D5]/25 hover:shadow-[0_8px_30px_rgba(88,96,213,0.08)] hover:-translate-y-1">
              <div className={`w-13 h-13 rounded-[14px] flex items-center justify-center mb-5 ${f.iconBg}`} style={{ width: 52, height: 52 }}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#1E2E69] mb-2.5">{f.title}</h3>
              <p className="text-sm text-[#4F4F4F] leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
