/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "#FBFBFB",
          100: "#eeeeee",
        },
        dark: "#222",
        accent: "#e15050",
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
