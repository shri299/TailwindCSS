/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff6363'
      },
      fontFamily:{
        body:["Nunito"]
      }
    },
  },
  plugins: [],
}

