/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../assets/img/bg.png')",
        'main-dark': "url('../assets/img/bg_dark.png')",
      },
    },    
  },
  plugins: [],
  darkMode: 'class',
}

