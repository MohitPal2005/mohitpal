/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#9D4EDD', // Sleek tech purple
        textMain: '#ffffff',
        textMuted: '#a3a3a3',
      }
    },
  },
  plugins: [],
}