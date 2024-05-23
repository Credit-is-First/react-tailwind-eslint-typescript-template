/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const screens = require('./src/screens')

module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {},
      minHeight: {},
      maxHeight: {},
      colors: {},
      fontSize: {},
      fontFamily: {
        inter: ['Inter'],
      },
      screens,
      boxShadow: {
        dialog: '7px 7px 250px 0px #00c2ff29',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.black'), lineHeight: 1.25 },
        body: {
          backgroundColor: theme('colors.white'),
          fontSize: theme('fontSize.md'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: 'SF Pro Display',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        span: {
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
        },
      })
    }),
  ],
}
