"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-[#B9BFFF]/30 shadow-[0_2px_8px_rgba(30,46,105,0.06)] py-3 px-4 sm:px-6 md:px-10"
          : "bg-transparent py-5 px-4 sm:px-6 md:px-10"
      }`}
    >
      <a href="#" className="flex items-center gap-3 font-bold text-xl text-[#1E2E69]">
        <img src="/logo.jpeg" alt="MetaMinds" width={42} height={42} className="rounded-xl object-cover" />
        <span>
          <span className="text-[#5860D5]">Meta</span>Minds
        </span>
      </a>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {[
          { label: "Products", href: "#products" },
          { label: "Why Us", href: "#features" },
          { label: "Contact", href: "#contact" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium text-[#4F4F4F] hover:text-[#5860D5] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#5860D5] after:rounded after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://metaminds.firm.in"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center px-7 py-2.5 bg-gradient-to-r from-[#5860D5] to-[#1E2E69] text-white text-sm font-semibold rounded-full hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5860D5]/30 transition-all"
      >
        Visit MetaMinds
      </a>

      {/* Mobile toggle */}
      <button
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-[2.5px] bg-[#1E2E69] rounded" />
        <span className="block w-6 h-[2.5px] bg-[#1E2E69] rounded" />
        <span className="block w-6 h-[2.5px] bg-[#1E2E69] rounded" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/[0.97] backdrop-blur-xl border-b border-[#B9BFFF]/30 shadow-lg p-6 flex flex-col gap-5 md:hidden">
          {[
            { label: "Products", href: "#products" },
            { label: "Why Us", href: "#features" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#4F4F4F] hover:text-[#5860D5] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://metaminds.firm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-2.5 bg-gradient-to-r from-[#5860D5] to-[#1E2E69] text-white text-sm font-semibold rounded-full"
          >
            Visit MetaMinds
          </a>
        </div>
      )}
    </nav>
  );
}
