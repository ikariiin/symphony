/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-bitter)", ...fontFamily.serif],
      },
      colors: {
        night: {
          DEFAULT: "#00140E",
          dark: "#000A07",
          light: "#004532",
        },
        blush: {
          DEFAULT: "#DF2A63",
          light: "#E75F8A",
          dark: "#7C1334",
        },
      },
    },
  },
  plugins: [],
};
