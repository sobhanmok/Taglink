"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import NFCCard from "./NFCCard";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const pxS = useSpring(px, { stiffness: 80, damping: 20 });
  const pyS = useSpring(py, { stiffness: 80, damping: 20 });

  const orbX = useTransform(pxS, [-0.5, 0.5], [40, -40]);
  const orbY = useTransform(pyS, [-0.5, 0.5], [30, -30]);
  const cardX = useTransform(pxS, [-0.5, 0.5], [-20, 20]);
  const cardY = useTransform(pyS, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      px.set(x);
      py.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [px, py]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-24 overflow-hidden"
    >
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute top-1/3 right-0 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(217,180,95,0.18),transparent_65%)] blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ x: useTransform(orbX, (v) => -v), y: useTransform(orbY, (v) => -v) }}
        className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,180,95,0.12),transparent_65%)] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] tracking-wider text-fg/70">
                پلتفرم رشد کسب‌وکار · NFC + Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-[clamp(2.4rem,6.5vw,5.2rem)] font-black leading-[1.02] tracking-tightest grad-text"
            >
              کسب‌وکارت را
              <br />
              <span className="grad-gold">بهتر دیده کن.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-7 text-[15px] md:text-base leading-8 text-fg/55 max-w-md"
            >
              Taglink به کسب‌وکارها کمک می‌کند معرفی، ارتباط با مشتری و فروش خود
              را در یک تجربه مدرن و یکپارچه بهتر کنند.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cta"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-fg text-bg font-bold text-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10">شروع کنید</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="relative z-10 rotate-180 group-hover:-translate-x-1 transition-transform"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#how"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl glass text-fg/90 text-sm font-medium hover:border-accent/40 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>
                Taglink چطور کار می‌کند؟
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-14 flex items-center gap-6 text-[11px] text-fg/40"
            >
              <span>برای فروشگاه، کافه، کلینیک و هر کسب‌وکار</span>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ x: cardX, y: cardY }}
              className="relative flex items-center justify-center"
            >
              <NFCCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="hidden md:block absolute -bottom-28 left-0 lg:left-4 scale-[0.72] lg:scale-[0.85] origin-top-left"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-widest text-fg/30"
      >
        <span>SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-fg/40 to-transparent" />
      </motion.div>
    </section>
  );
}