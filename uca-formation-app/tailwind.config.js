/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41230',
          black: '#000000',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Or any other font that mimics UCA style
      }
    },
  },
  plugins: [],
}
