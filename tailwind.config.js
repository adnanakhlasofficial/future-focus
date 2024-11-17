/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ["Playfair Display", "serif"],
        'mulish': ["Mulish", "sans-serif"]
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}