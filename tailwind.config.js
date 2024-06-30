/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  'node_modules/preline/dist/*.js',
],
  theme: {
    extend: {
      fontFamily:{
        'DMsans':["DM Sans", "sans-serif"],
        'Montserrat':["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [require('preline/plugin')],
}

