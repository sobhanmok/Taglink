"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "محصول", href: "#product" },
    { label: "چطور کار می‌کند", href: "#how" },
    { label: "کسب‌وکارها", href: "#businesses" },
    { label: "ارتباط", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f0d896] via-[#d9b45f] to-[#8a6b2a] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-[1px] rounded-[10px] bg-[#080807]" />
            <span className="relative text-[#d9b45f] font-black text-sm">T</span>
          </div>
          <span className="font-bold text-[15px] tracking-tight">TAGLINK</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[13px] text-fg/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative hover:text-fg transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-1 right-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="relative text-[13px] font-medium px-4 py-2 rounded-xl border border-border hover:border-accent/50 transition-colors duration-300"
        >
          شروع کنید
        </a>
      </nav>
    </motion.header>
  );
}