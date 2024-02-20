/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primarybg' : '#0A1D56',
        'secondarybg' : '#492E87',
        'primaryColor' : '#F2F597',
        'secondaryColor' : '#37B5B6',
      },
    },
  },
  plugins: [],
}

