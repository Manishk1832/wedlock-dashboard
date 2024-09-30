/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'inter': ['Inter']
      },
      fontWeight: {
        'font-light': 300,
        'font-normal': 400,
        'font-medium': 500,
        'font-semibold': 600,
        'font-bold': 700,
      },

    },
  },
  plugins: [],
}

