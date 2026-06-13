import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0A",
          elevated: "#111111",
          secondary: "#F5F5F2",
        },
        text: {
          ondark: "#FFFFFF",
          muted: "#999999",
          onlight: "#111111",
        },
        divider: "rgba(255,255,255,0.15)",
        "divider-dark": "rgba(17,17,17,0.15)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter-tight)",
          "Söhne",
          "Neue Haas Grotesk",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
        label: "0.15em",
        wider: "0.25em",
      },
      maxWidth: {
        container: "1320px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1.2s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
