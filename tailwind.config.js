/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "foreground-dark": "var(--color-foreground-dark)",
        foreground: "var(--color-foreground)",
        "background-dark": "var(--color-background-dark)",
        "background-lite": "var(--color-background-lite)",
        primary: "var(--color-primary)",
        "background-hover": "var(--color-background-hover)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
      },
    },
  },
  plugins: [],
};
