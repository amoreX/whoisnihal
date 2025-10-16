/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent: "var(--color-accent)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        "border-custom": "var(--color-border)",
        "heading-accent": "var(--color-heading-accent)",
        "work-bg-hover": "var(--color-work-bg-hover)",
        "work-arrow-bg": "var(--color-work-arrow-bg)",
        "work-company": "var(--color-work-company)",
        "work-meta": "var(--color-work-meta)",
        "work-description": "var(--color-work-description)",
        "footer-border": "var(--color-footer-border)",
        "footer-text": "var(--color-footer-text)",
        "footer-link": "var(--color-footer-link)",
        "footer-button-bg": "var(--color-footer-button-bg)",
        "footer-button-hover-bg": "var(--color-footer-button-hover-bg)",
        "footer-button-text": "var(--color-footer-button-text)",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
      },
      animation: {
        blur: "var(--animate-blur)",
      },
    },
  },
  plugins: [],
};
