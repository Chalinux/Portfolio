import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./data/**/*.{ts,tsx,mdx,json}",
    "./lib/**/*.{ts,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#020617",
        foreground: "#f8fafc",
        accent: {
          DEFAULT: "#6366f1",
          soft: "#a855f7",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.45)",
      },
      backgroundImage: {
        "noise-light": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
