/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avocado: ["Avocado", "sans-serif"],
        avocadobold: ["AvocadoBold", "sans-serif"],
        veritas: ["Veritas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
