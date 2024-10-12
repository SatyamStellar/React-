/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "back-1": "#182028",
        "back-2": "#212C34",
        "back-3": "#3A4C5B",
        "border-g": "#6F6F6F",
        "text-1": "#ACACAC",
        "text-2": "#59B5BC"
      },
      fontFamily: {
        "Varien": ["Varien"],
        "NewType": ["NewType"]
      },
    },
  },
  plugins: [],
}

