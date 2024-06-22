/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-dark':"#222831",
        'text-orange':"#FD7014",
        'text-light' : "#393E46",
        'text-white' : "#EEEEEE",
        "text-light-black" : "#000000",
        'text-light-yellow':"#FFE6BC",
        'text-light-light':'#F7E1EA',
        'text-light-white':'#FFFFFF',
        'color-darkest': "#2A2A38",
        'color-dark':"#352F44",
        'color-light':'#5C5379',
        'color-white':"#DBD8E3"
      }
    },
  },
  plugins: [],
}

