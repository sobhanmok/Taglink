"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(217,180,95,0.14),transparent_60%)] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] tracking-wider text-fg/70">
              آماده برای رشد
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tightest">
            <span className="grad-text">کسب‌وکارت آماده</span>
            <br />
            <span className="grad-gold">یک قدم جلوتره.</span>
          </h2>

          <p className="mt-8 text-fg/55 max-w-xl mx-auto text-[15px] md:text-base leading-8">
            با Taglink معرفی، ارتباط و فروش کسب‌وکارت را در یک تجربه مدرن شروع کن.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-br from-[#f0d896] via-accent to-[#a8853d] text-bg font-bold text-sm overflow-hidden transition-transform duration-300 hover:scale-[1.03] shadow-[0_20px_60px_-15px_rgba(217,180,95,0.6)]"
            >
              <span className="relative z-10">شروع با Taglink</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="relative z-10 rotate-180 group-hover:-translate-x-1 transition-transform"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl glass text-fg/85 text-sm font-medium hover:border-accent/40 transition-colors"
            >
              اطلاعات بیشتر
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}