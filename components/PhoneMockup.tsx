"use client";
import { motion } from "framer-motion";

export default function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -18 }}
      whileInView={{ opacity: 1, y: 0, rotateY: -10 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-[260px] h-[540px] perspective-2000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute -inset-12 bg-[radial-gradient(ellipse_at_center,rgba(217,180,95,0.18),transparent_60%)] blur-2xl" />

      <div
        className="relative w-full h-full rounded-[42px] overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1a1815 0%, #0a0908 100%)",
          boxShadow:
            "0 60px 90px -30px rgba(0,0,0,0.9), 0 0 0 1px rgba(244,240,231,0.1), inset 0 1px 0 rgba(244,240,231,0.15)",
        }}
      >
        <div className="absolute inset-[10px] rounded-[34px] overflow-hidden bg-[#0b0a09]">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />

          <div className="relative w-full h-full pt-10 px-5 pb-6 flex flex-col">
            <div className="flex justify-between items-center text-[10px] text-fg/50 mb-4" dir="ltr">
              <span>9:41</span>
              <span className="flex gap-1 items-center">
                <span className="w-3 h-2 border border-fg/50 rounded-sm" />
                <span className="w-1 h-1 bg-fg/50 rounded-full" />
              </span>
            </div>

            <div className="flex flex-col items-center text-center mt-2">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/5 flex items-center justify-center mb-3 border border-accent/30">
                  <span className="text-2xl">☕</span>
                </div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-accent border-2 border-[#0b0a09]" />
              </div>
              <h3 className="text-[15px] font-bold text-fg">کافه کُنج</h3>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-fg/60">
                <span className="text-accent">★</span>
                <span>4.9</span>
                <span className="mx-1 opacity-40">·</span>
                <span>تهران</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="glass rounded-xl py-2.5 text-center text-[10px] text-fg/90 flex flex-col items-center gap-1">
                <span>📞</span> تماس
              </div>
              <div className="glass rounded-xl py-2.5 text-center text-[10px] text-fg/90 flex flex-col items-center gap-1">
                <span>🧭</span> مسیریابی
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-[11px] font-bold text-fg/90">محصولات</span>
                <span className="text-[9px] text-accent/70">مشاهده همه</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { n: "قهوه اسپرسو", p: "۸۵,۰۰۰", e: "☕" },
                  { n: "لاته", p: "۹۵,۰۰۰", e: "🥛" },
                  { n: "چیزکیک", p: "۱۲۰,۰۰۰", e: "🍰" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2.5 glass rounded-xl p-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-sm">
                      {item.e}
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-[10px] text-fg/90">{item.n}</span>
                      <span className="text-[9px] text-fg/50">{item.p} ت</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-auto flex justify-center">
              <div className="w-24 h-1 rounded-full bg-fg/20" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}