/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../assets/img/register_bg_2.png')",
      },
    },    
  },
  plugins: [],
  darkMode: 'class',
}

