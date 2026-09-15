"use client";
import { motion } from "framer-motion";

const callouts = [
  { label: "NFC", side: "right", top: "15%" },
  { label: "QR Code", side: "left", top: "22%" },
  { label: "Digital Profile", side: "right", top: "55%" },
  { label: "Smart Link", side: "left", top: "62%" },
  { label: "Analytics", side: "right", top: "82%" },
  { label: "Customer Connection", side: "left", top: "88%" },
];

export default function ProductShowcase() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="text-[11px] tracking-[0.3em] text-accent/70">
            THE PRODUCT
          </span>
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-tight tracking-tightest grad-text">
            دروازه‌ی ورود به دنیای دیجیتال کسب‌وکار.
          </h2>
        </motion.div>

        <div className="relative flex justify-center min-h-[560px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-[300px] md:w-[380px] h-[220px] md:h-[260px] rounded-[26px] preserve-3d"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-16 bg-[radial-gradient(circle,rgba(217,180,95,0.22),transparent_60%)] blur-2xl" />

            <div
              className="absolute inset-0 rounded-[26px] overflow-hidden sheen"
              style={{
                background:
                  "linear-gradient(135deg, #15130f 0%, #0d0c0a 50%, #1a1712 100%)",
                boxShadow:
                  "0 40px 80px -25px rgba(0,0,0,0.9), 0 0 0 1px rgba(217,180,95,0.2), inset 0 1px 0 rgba(244,240,231,0.08)",
              }}
            >
              <div
                className="absolute inset-0 rounded-[26px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(244,240,231,0.12) 0%, transparent 35%, transparent 65%, rgba(244,240,231,0.04) 100%)",
                }}
              />
              <div className="absolute top-6 right-6 left-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f0d896] to-[#8a6b2a] flex items-center justify-center">
                    <span className="text-[#080807] font-black text-[10px]">T</span>
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.15em] text-fg/90">
                    TAGLINK
                  </span>
                </div>
                <span className="text-[8px] tracking-[0.3em] text-accent/60">
                  NFC · QR
                </span>
              </div>

              <div className="absolute bottom-6 right-6 text-[8px] tracking-[0.35em] text-fg/30" dir="ltr">
                A8K29 ·· 2241
              </div>
            </div>
          </motion.div>

          {callouts.map((c, i) => (
            <Callout key={c.label} {...c} delay={0.3 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Callout({
  label,
  side,
  top,
  delay,
}: {
  label: string;
  side: "left" | "right";
  top: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ top, [side]: "0%" } as React.CSSProperties}
      className="absolute hidden lg:flex items-center gap-3"
    >
      {side === "left" ? (
        <>
          <div className="glass rounded-xl px-4 py-2.5 text-[12px] font-medium text-fg/85 whitespace-nowrap">
            {label}
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-accent/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </>
      ) : (
        <>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="w-24 h-px bg-gradient-to-l from-accent/50 to-transparent" />
          <div className="glass rounded-xl px-4 py-2.5 text-[12px] font-medium text-fg/85 whitespace-nowrap">
            {label}
          </div>
        </>
      )}
    </motion.div>
  );
}