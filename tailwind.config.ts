import type { Config } from "tailwindcss"

import plugin from 'tailwindcss/plugin'

const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        pink: {
          primary: '#FF5B5B',
          hover: '#f94c4c'
        },
        gray: {
          10: '#F4F4F4',
          15: '#D9D9D9',
          20: '#E7E7E7',
        },
        black: {
          0: 'rgba(0, 0, 0, 0.4)',
          10: '#1E1E1E',
        },
        white: {
          10: '#ffffff'
        }
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  // plugins: [
  //   require("tailwindcss-animate"),
  //   plugin(function({ addUtilities }) {
  //     addUtilities({
  //       '.regular-11': {
  //         'font-family': '11px',
  //         'font-weight': '300'
  //     }
  //     })
  //   }),
  // ],
} satisfies Config

export default config