/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pgreen: '#01706B',
        pred: '#C9322A',
        pgray: '#5A5A5A'
      }
    },
  },
  plugins: [],
}

