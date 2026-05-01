import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mor Pankh — Peacock Night palette (logo-derived)
        cream:    "#F0EDE8",   // warm off-white — text on dark, light elements
        navy:     "#100E0C",   // darkest bg — footer, nav strip
        sky:      "#1C1812",   // dark card surface
        charcoal: "#1F1A12",   // slightly lifted dark surface
        fawn:     "#281F15",   // section alt dark bg
        "fawn-light": "#161210", // main page bg
        "fawn-dark":  "#D4920C", // golden accent alias
        secondary:    "#161210", // page bg alias
        orange:   "#D4920C",   // logo golden amber — primary CTAs
        yellow:   "#F0A828",   // bright gold — highlights, badges
        magenta:  "#CC2424",   // logo crimson — hover/specials
        leaf:     "#1A6B30",   // logo forest green
        onyx:     "#F0EDE8",   // body text (warm off-white on dark)
        // compatibility aliases
        vanilla:      "#D4920C",
        rose:         "#D4920C",
        sage:         "#1A6B30",
        crimson:      "#CC2424",
        "spice-red":  "#CC2424",
        "gray-mid":   "#A09080",   // secondary text
        "gray-light": "#4A3C2E",   // muted/borders
      },
      fontFamily: {
        serif:   ["var(--font-bebas)", "Impact", "sans-serif"],
        sans:    ["var(--font-montserrat)", "system-ui", "sans-serif"],
        accent:  ["var(--font-great-vibes)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
