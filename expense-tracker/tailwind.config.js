/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#17153B',
        'soft-peach': '#F7E7DC',
        'slate-blue': 'rgb(64, 93, 114)',
        'off-white': 'rgb(255, 248, 243)',
      },
    },
  },
  plugins: [],
}

