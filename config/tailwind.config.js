const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Brush King']
      },
      colors: {
        yellow: {
          gold: '#F9AB58',
          green: '#dc8b39',
        }
      },
      letterSpacing: {
        thickest: '0.25em'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
};
