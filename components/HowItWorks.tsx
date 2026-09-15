"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Tap", fa: "مشتری NFC را لمس می‌کند.", icon: "▸" },
  { n: "02", title: "Connect", fa: "صفحه کسب‌وکار باز می‌شود.", icon: "◇" },
  { n: "03", title: "Discover", fa: "مشتری محصولات و خدمات را می‌بیند.", icon: "◇" },
  { n: "04", title: "Grow", fa: "کسب‌وکار مشتری بیشتری جذب می‌کند.", icon: "★" },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section id="how" ref={ref} className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] tracking-[0.3em] text-accent/70">
            HOW IT WORKS
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,4.5vw,3.4rem)] font-black leading-tight tracking-tightest grad-text">
            چهار قدم تا رشد.
          </h2>
          <p className="mt-5 text-fg/50 max-w-xl mx-auto text-[15px] leading-7">
            یک لمس، شروع یک رابطه‌ی کامل بین مشتری و کسب‌وکار.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[68px] left-[8%] right-[8%] h-px bg-border">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-l from-transparent via-accent to-transparent origin-right"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div className="relative glass rounded-3xl p-7 h-full overflow-hidden sheen">
                  <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] text-fg/25">
                    {s.n}
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/25 flex items-center justify-center text-accent text-xl mb-6">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-bold text-fg mb-2.5" dir="ltr">
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-7 text-fg/50">{s.fa}</p>

                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}