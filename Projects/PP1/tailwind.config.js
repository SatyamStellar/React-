/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'Syne': ["Syne"],
      },
      colors: {
        'bgcol': "#e6ebf4"
      },
      screens: {
        'mid': '1100px',
        'md2': '650px'
      }
    },
  },
  plugins: [],
}

