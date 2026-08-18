import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060608",
        surface1: "#0D0F14",
        surface2: "#13161D",
        blue: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
        },
        muted: "#8B93A7",
        subtle: "#C4CAD8",
        border: "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
