/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_blue:"#030712",
        blue:"#111826",
        white:"#f8fafa",
        gray:"#364051"
      }
    },
  },
  plugins: [],
}

