/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "color-text": "#fff",
        "color-primary": "#576cbc",
        "color-secondary": "#19376d",
        "color-dark": "#0b2447",
        "color-back": "#04152d",
        "color-menu": "#19376D",
      },
      fontFamily: {
        sans: "Outfit", // Define Roboto as the default sans-serif r
        robot: "Roboto",
      },
    },
  },
  plugins: [],
};
