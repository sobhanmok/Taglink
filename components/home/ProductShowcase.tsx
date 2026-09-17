"use client";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const NFCCard3D = lazy(() => import("@/components/three/NFCCard3D"));

const callouts = [
  { label: "NFC", side: "right" as const, top: "12%" },
  { label: "QR Code", side: "left" as const, top: "20%" },
  { label: "Digital Profile", side: "right" as const, top: "48%" },
  { label: "Smart Link", side: "left" as const, top: "56%" },
  { label: "Analytics", side: "right" as const, top: "78%" },
  { label: "Customer Connection", side: "left" as const, top: "86%" },
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
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-[11px] tracking-[0.3em] text-accent/70">
            THE PRODUCT
          </span>
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.6rem)] font-black leading-tight tracking-tightest grad-text font-display">
            دروازه‌ی ورود به دنیای دیجیتال کسب‌وکار.
          </h2>
          <p className="mt-6 text-fg/50 max-w-xl mx-auto text-[15px] leading-8">
            محصول فیزیکی Taglink، دروازه‌ی ورود به یک سیستم دیجیتال کامل است.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full aspect-square max-w-[560px]"
          >
            <Suspense fallback={null}>
              <NFCCard3D />
            </Suspense>
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