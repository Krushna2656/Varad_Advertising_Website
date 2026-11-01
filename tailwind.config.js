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
          dark: '#0B0D10',
          charcoal: '#14171E',
          orange: '#FF641F',
          gold: '#FFB800'
        }
      }
    },
  },
  plugins: [],
}