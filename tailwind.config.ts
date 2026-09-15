import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080807",
        fg: "#F4F0E7",
        accent: "#D9B45F",
        "accent-soft": "rgba(217,180,95,0.15)",
        glass: "rgba(244,240,231,0.04)",
        border: "rgba(244,240,231,0.08)",
      },
      fontFamily: {
        sans: ["Vazirmatn", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;