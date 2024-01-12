/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        growth: ["growth", " sans-serif"],
        inter: ["inter", " sans-serif"],
        orbitron: ["orbitron", " sans-serif"],
        Poppins: ["Poppins", " sans-serif"],
        youth: ["youth", "cursive"],
      },
      colors :{
        'primary' : '#DDFF00',
        'secondary' : '#7A7A7A',
        'tertary' : '#CCCCCC',
        'background' : '#161616',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

