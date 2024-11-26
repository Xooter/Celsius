/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FBFBFB",
        dark: "#222",
        accent: "#C96868",
      },
      fontFamily: {
        avocado: ["Avocado", "sans-serif"],
        avocadobold: ["AvocadoBold", "sans-serif"],
        veritas: ["Veritas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
