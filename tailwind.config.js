/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  'node_modules/preline/dist/*.js',
],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat':["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [require('preline/plugin')],
}

