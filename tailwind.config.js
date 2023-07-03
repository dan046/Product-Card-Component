/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cream": "#f2ebe3",
        "primary-dark-cyan": "#3c8067",
        "neutral-very-dark-blue": "#1c232b",
        "neutral-dark-grayish-blue": "#6c7289",
      },
    },
  },
  plugins: [],
}
