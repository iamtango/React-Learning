/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"My Font"', "serif"],
    },
  },
  plugins: [],
};
