import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F2F2F2",
          dark: "#0D0D0D",
        },
        brand: {
          blue: "#2E31FF",
          purple: "#9C27B0",
          cyan: "#00D4FF",
          green: "#00C853",
          available: "#10B981",
        },
        "folder-back": "var(--folder-back)",
        "folder-front": "var(--folder-front)",
        "folder-tab": "var(--folder-tab)",
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-source-serif)", "Source Serif 4", "serif"],
      },
      fontSize: {
        "hero": "clamp(4rem, 10vw, 8.75rem)",
      },
      lineHeight: {
        "tightest": "0.9",
      },
      minHeight: {
        "hero": "85vh",
      },
      boxShadow: {
        "available": "0 0 8px rgba(16,185,129,0.5)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
      },
      width: {
        "hero-image": "45%",
      },
      rotate: {
        "270": "270deg",
      }
    },
  },
  plugins: [],
};
export default config;
