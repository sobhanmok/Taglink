"use client";
import { motion } from "framer-motion";

const types = [
  { emoji: "🛍️", fa: "فروشگاه", en: "Retail" },
  { emoji: "☕", fa: "کافه", en: "Cafe" },
  { emoji: "🍽️", fa: "رستوران", en: "Restaurant" },
  { emoji: "💫", fa: "سالن زیبایی", en: "Beauty" },
  { emoji: "🩺", fa: "کلینیک", en: "Clinic" },
  { emoji: "🛠️", fa: "خدمات", en: "Services" },
  { emoji: "🏢", fa: "املاک", en: "Real Estate" },
  { emoji: "💪", fa: "باشگاه", en: "Fitness" },
  { emoji: "💼", fa: "شرکتی", en: "Professional" },
];

export default function BusinessTypes() {
  return (
    <section id="businesses" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-[11px] tracking-[0.3em] text-accent/70">
              FOR EVERY BUSINESS
            </span>
            <h2 className="mt-5 text-[clamp(2rem,5vw,3.8rem)] font-black leading-[1.08] tracking-tightest grad-text">
              برای هر کسب‌وکاری.
            </h2>
          </div>
          <p className="text-fg/50 max-w-sm text-[14px] leading-7">
            Taglink محدود به یک صنعت نیست. از فروشگاه محلی تا شرکت‌های حرفه‌ای —
            یک زیرساخت مشترک برای رشد.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-5">
          {types.map((t, i) => (
            <motion.div
              key={t.en}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={{ y: -8, rotateX: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative glass rounded-3xl p-6 lg:p-7 overflow-hidden sheen cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-3xl">{t.emoji}</div>
                <span className="text-[9px] tracking-[0.25em] text-fg/30" dir="ltr">
                  {t.en.toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg lg:text-xl font-bold text-fg/95 group-hover:text-accent transition-colors duration-500">
                {t.fa}
              </h3>

              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-accent/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-5 left-5 w-7 h-7 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <svg width="10" height="10" viewBox="0 0 24 24" className="rotate-180">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#D9B45F"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}