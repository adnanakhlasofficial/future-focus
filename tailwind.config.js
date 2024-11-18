/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#6C63FF",
        'blue-gray': "#161617",
        'gray': "#6E7072",
        'deep-black': "#111111"
      },
      backgroundImage: {
        'interview': "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('/img/interview.webp')",
        'resume': "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('/img/resume.webp')",
        'recruitment': "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url('/img/recruitment.webp')",
      },
      fontFamily: {
        'playfair': ["Playfair Display", "serif"],
        'mulish': ["Mulish", "sans-serif"]
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}