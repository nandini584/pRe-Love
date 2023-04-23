/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Alkatra':['Alkatra','cursive'],
        'Ubuntu':['Ubuntu','sans-serif'],
        'Fasthand':['Fasthand', 'cursive'],
        'Lobster':['Lobster', 'cursive'],
        'Pacifino':['Pacifico', 'cursive'],
        'Montserrat':['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
