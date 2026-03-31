"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "Unjynx",
    tagline: "Break the satisfactory. Unjynx your productivity.",
    image: "/unjynx-preview.png",
    href: "https://unjynx.me",
    tag: "Early Access",
    tagColor: "bg-[#5860D5]/10 text-[#5860D5]",
  },
  {
    name: "Outbrew",
    tagline: "Brew outreach that actually converts.",
    image: "/outbrew-preview.png",
    href: "/outbrew",
    tag: "Live",
    tagColor: "bg-[#EA6020]/10 text-[#EA6020]",
  },
  {
    name: "CourtNetra",
    tagline: "AI-powered legal case management that auto-fetches hearing dates, orders, and cause lists from 19,630+ Indian courts — so no deadline slips through.",
    image: "/courtnetra-preview.png",
    href: "/courtnetra",
    tag: "Live",
    tagColor: "bg-[#10B981]/10 text-[#10B981]",
  },
  {
    name: "Badhiya AI",
    tagline: "Something exciting is brewing. Stay tuned.",
    image: "/badhiya-preview.png",
    href: "#",
    tag: "Coming Soon",
    tagColor: "bg-[#F59E0B]/10 text-[#F59E0B]",
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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

export function ProductsSection() {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#F0F4FF] via-[#F0F4FF] to-white">
      <Reveal>
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5860D5] mb-3 block">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E2E69] tracking-tight mb-4">
            Tools That Work For You
          </h2>
          <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
            Powerful products built to transform how you work, reach customers, and manage what matters.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-[1000px] mx-auto">
        {products.map((product, i) => (
          <Reveal key={product.name} delay={i * 150}>
            <a
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block"
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-[#B9BFFF]/30 shadow-[0_4px_20px_rgba(88,96,213,0.06)] transition-all duration-500 group-hover:shadow-[0_16px_50px_rgba(88,96,213,0.15)] group-hover:border-[#5860D5]/30 group-hover:-translate-y-2">
                {/* Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-wide backdrop-blur-sm ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="aspect-[16/10] overflow-hidden bg-[#F0F4FF]">
                  <img
                    src={product.image}
                    alt={`${product.name} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
              </div>

              {/* Product info */}
              <div className="mt-5 px-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E2E69] tracking-tight group-hover:text-[#5860D5] transition-colors">
                    {product.name}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-[#F0F4FF] border border-[#B9BFFF]/30 flex items-center justify-center text-[#5860D5] group-hover:bg-gradient-to-r group-hover:from-[#5860D5] group-hover:to-[#1E2E69] group-hover:text-white group-hover:translate-x-1 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
                <p className="text-sm text-[#4F4F4F] mt-1.5">{product.tagline}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
