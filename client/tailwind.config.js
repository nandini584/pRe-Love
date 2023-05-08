/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'usm' : '400px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily:{
        'Alkatra':['Alkatra','cursive'],
        'Ubuntu':['Ubuntu','sans-serif'],
        'Fasthand':['Fasthand', 'cursive'],
        'Lobster':['Lobster', 'cursive'],
        'Pacifino':['Pacifico', 'cursive'],
        'Montserrat':['Montserrat', 'sans-serif'],
      },
      colors:
      {
        'default_green': '#A7B99D',
        'text_color': '#464646',
        'premium_up':'#1E211C',
        'premium_down':'#151713',
      },
    },
  },
  plugins: [],
}
