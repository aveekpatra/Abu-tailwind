/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        productsans: "'Lexend Deca', sans-serif",
        eaglelake: "'Eagle Lake', serif",
        sinzel: "'Cinzel', serif",
      },
    },
  },
  plugins: [],
};
