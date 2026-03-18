import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gs-teal': {
          DEFAULT: '#3ab4a0',
          dark: '#2a8a7a',
          light: '#d0f0ec',
        },
        'gs-navy': {
          DEFAULT: '#191933',
          light: '#2d2d5e',
        },
        green: {
          50: "#f0faf4",
          100: "#dcf3e5",
          200: "#bce8cd",
          300: "#8dd5ac",
          400: "#57bc83",
          500: "#3ab4a0",
          600: "#3ab4a0",
          700: "#2a8a7a",
          800: "#1e6b5e",
          900: "#14473f",
          950: "#0a2621",
          DEFAULT: "#3ab4a0",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
