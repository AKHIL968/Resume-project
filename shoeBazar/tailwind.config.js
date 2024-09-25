/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#405D72",
        gray:"#758694",
        cream:"#F7E7DC",
        white:'#FFF8F3'
      }
    },
  },
  plugins: [],
}

