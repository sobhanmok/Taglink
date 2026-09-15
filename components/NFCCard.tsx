"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NFCCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 20,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), {
    stiffness: 150,
    damping: 20,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[520px] aspect-[1.6/1] perspective-2000 select-none"
    >
      <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(217,180,95,0.22),transparent_65%)] blur-2xl pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-[280px] h-[280px] rounded-full border border-accent/30"
            style={{
              animation: `nfcPulse 3.5s ease-out ${i * 1.1}s infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        <div
          className="absolute inset-0 rounded-[28px] sheen overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #15130f 0%, #0d0c0a 40%, #1a1712 100%)",
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(217,180,95,0.15), inset 0 1px 0 rgba(244,240,231,0.06)",
            transform: "translateZ(0px)",
          }}
        >
          <div
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(244,240,231,0.14) 0%, transparent 30%, transparent 70%, rgba(244,240,231,0.05) 100%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,240,231,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,231,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="absolute top-6 right-7 left-7 flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0d896] to-[#8a6b2a] flex items-center justify-center">
                <span className="text-[#080807] font-black text-[11px]">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-bold tracking-[0.18em] text-fg/95">
                  TAGLINK
                </span>
                <span className="text-[8px] tracking-[0.3em] text-accent/70 mt-1">
                  SMART BUSINESS
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 mt-0.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 4a12 12 0 0 1 0 16"
                  stroke="#d9b45f"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M10 7a8 8 0 0 1 0 10"
                  stroke="#d9b45f"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M14 10a4 4 0 0 1 0 4"
                  stroke="#d9b45f"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
              <span className="text-[7px] tracking-[0.2em] text-accent/60">NFC</span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-[78px] h-[58px] rounded-lg overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #2a2418 0%, #16130d 50%, #2a2418 100%)",
                boxShadow:
                  "inset 0 0 0 1px rgba(217,180,95,0.35), 0 4px 12px rgba(0,0,0,0.5)",
              }}
            >
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-accent/20"
                    style={{ borderRadius: 2 }}
                  />
                ))}
              </div>
              <div className="absolute inset-2 rounded-md bg-gradient-to-br from-accent/20 to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-6 right-7 w-14 h-14 rounded-md bg-fg/95 p-1.5">
            <div className="grid grid-cols-6 grid-rows-6 w-full h-full gap-[1.5px]">
              {Array.from({ length: 36 }).map((_, i) => {
                const pattern = [
                  1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
                  1, 0, 0, 1, 1, 1, 1, 0, 1,
                ];
                const on = pattern[i % pattern.length] === 1;
                return (
                  <div
                    key={i}
                    className={on ? "bg-[#080807]" : "bg-transparent"}
                  />
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-6 left-7 text-left" dir="ltr">
            <div className="text-[9px] tracking-[0.35em] text-fg/40 mb-1">
              TAG ID
            </div>
            <div className="text-[13px] font-mono tracking-wider text-fg/85">
              A8K29 ·· 2241
            </div>
          </div>

          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        </div>

        <div
          className="absolute left-6 right-6 -bottom-10 h-24 rounded-[28px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(217,180,95,0.08), transparent)",
            filter: "blur(20px)",
            transform: "translateZ(-40px)",
          }}
        />
      </motion.div>

      <HUD top="10%" left="-6%" delay={0.6}>+۲۴٪ تعامل</HUD>
      <HUD top="38%" right="-8%" delay={0.85}>New Customer</HUD>
      <HUD bottom="16%" left="-10%" delay={1.05}>⭐ 4.9 Rating</HUD>
      <HUD bottom="4%" right="-4%" delay={1.25}>۱۲۸ Orders</HUD>
    </div>
  );
}

function HUD({
  children,
  top,
  left,
  right,
  bottom,
  delay = 0,
}: {
  children: React.ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ top, left, right, bottom, animation: `floaty 5s ease-in-out ${delay}s infinite` }}
      className="absolute glass rounded-xl px-3.5 py-2 text-[11px] font-medium text-fg/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] whitespace-nowrap"
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-2 align-middle" />
      {children}
    </motion.div>
  );
}