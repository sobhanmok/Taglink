"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const cols = [
    { title: "محصول", links: ["Taglink Card", "Digital Profile", "Analytics"] },
    { title: "راه‌حل‌ها", links: ["فروشگاه", "کافه و رستوران", "کلینیک"] },
    { title: "کسب‌وکار", links: ["درباره", "تماس", "همکاری"] },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f0d896] via-[#d9b45f] to-[#8a6b2a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-[1px] rounded-[10px] bg-[#080807]" />
                <span className="relative text-[#d9b45f] font-black text-sm">T</span>
              </div>
              <span className="font-bold tracking-tight">TAGLINK</span>
            </div>
            <p className="text-fg/50 text-[13px] leading-7 max-w-sm">
              پلتفرم رشد کسب‌وکار. NFC، پروفایل دیجیتال و ارتباط هوشمند با مشتری —
              در یک تجربه یکپارچه.
            </p>
            <a
              href="https://taglink.ir"
              className="inline-block mt-6 text-accent/80 hover:text-accent text-[13px] tracking-wider transition-colors"
              dir="ltr"
            >
              taglink.ir
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="text-[11px] tracking-[0.25em] text-accent/70 mb-5">
                {c.title.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-fg/60 hover:text-fg transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-fg/35 tracking-wider">
            © ۱۴۰۴ TAGLINK — تمامی حقوق محفوظ است.
          </span>
          <span className="text-[11px] text-fg/35 tracking-wider">
            Made in Tehran
          </span>
        </div>
      </div>
    </footer>
  );
}