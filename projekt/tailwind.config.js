/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'library-background': "url('../img/background_index.jpg')",
      },

      fontFamily: {
        'helvetica': ['Arial', 'Helvetica', 'sans-serif'],
        'impact': ['Impact', 'sans-serif'],
      },

      screens: {
        'cs': {'max': '420px'},
      },
    },
  },
  plugins: [],
}
