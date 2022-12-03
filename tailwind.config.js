/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      blue: 'hsl(223, 87%, 63%)',
      paleBlue: 'hsl(223, 100%, 88%)',
      lightRed: 'hsl(354, 100%, 66%)',
      gray: 'hsl(0, 0%, 59%)',
      veryDarkBlue: 'hsl(209, 33%, 12%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      300: '300',
      600: '600',
      700: '700',
    },
  },
  plugins: [],
};
