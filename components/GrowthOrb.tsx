"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const nodes = [
  { label: "Business", fa: "کسب‌وکار" },
  { label: "Identity", fa: "هویت" },
  { label: "Customer", fa: "مشتری" },
  { label: "Sales", fa: "فروش" },
  { label: "Growth", fa: "رشد" },
];

export default function GrowthOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
      id="product"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(217,180,95,0.09),transparent_60%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-[11px] tracking-[0.3em] text-accent/70">
            BEYOND A CARD
          </span>
          <h2 className="mt-5 text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[1.08] tracking-tightest">
            <span className="grad-text">فقط معرفی نکن.</span>{" "}
            <span className="grad-gold">رشد کن.</span>
          </h2>
          <p className="mt-7 text-fg/55 max-w-2xl mx-auto text-base leading-8">
            Taglink یک کارت NFC ساده نیست. یک اکوسیستم کامل برای هویت دیجیتال،
            ارتباط با مشتری و رشد پایدار کسب‌وکار شماست.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[520px]">
          <motion.div
            style={{ rotate, scale }}
            className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-accent/15"
                style={{
                  transform: `scale(${1 + i * 0.22})`,
                }}
              />
            ))}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] rounded-full border border-dashed border-accent/20"
            />

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1712] via-[#0e0d0b] to-[#1a1712] border border-accent/30 flex items-center justify-center overflow-hidden shadow-[0_0_80px_-20px_rgba(217,180,95,0.5)]">
              <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(217,180,95,0.35),transparent_65%)] blur-2xl" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(217,180,95,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(217,180,95,0.5) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  borderRadius: "9999px",
                }}
              />
              <div className="relative text-center">
                <div className="text-5xl mb-3">✦</div>
                <div className="text-[10px] tracking-[0.4em] text-accent/80">
                  TAGLINK CORE
                </div>
              </div>
            </div>

            {nodes.map((n, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const r = 240;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.12,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="glass rounded-2xl px-4 py-3 min-w-[120px] text-center hover:border-accent/40 transition-colors">
                    <div className="text-[10px] tracking-[0.2em] text-accent/70 mb-1" dir="ltr">
                      {n.label.toUpperCase()}
                    </div>
                    <div className="text-[13px] font-bold text-fg/90">{n.fa}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}