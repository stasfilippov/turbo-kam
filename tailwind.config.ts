import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        '.button-primary': {
          alignItems: 'center',
          backgroundColor: 'hsl(var(--pink-primary))',
          borderRadius: '0.375rem',
          color: 'hsl(var(--white-primary))',
          display: 'flex',
          fontSize: '16px',
          fontWeight: '500',
          height: '2.5rem',
          justifyContent: 'center',
          padding: '0.5rem 1rem',
          transition: 'all 300ms',
          whiteSpace: 'nowrap',
        },
        '.max-container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1180px',
        },
      }),
        addUtilities({
          '.bold-12': {
            fontSize: '12px',
            fontWeight: '800',
          },
          '.bold-14': {
            fontSize: '14px',
            fontWeight: '800',
          },
          '.bold-16': {
            fontSize: '16px',
            fontWeight: '800',
          },
          '.bold-20': {
            fontSize: '20px',
            fontWeight: '800',
          },
          '.bold-24': {
            fontSize: '24px',
            fontWeight: '800',
          },
          '.bold-64': {
            fontSize: '64px',
            fontWeight: '800',
          },
          '.bold-70': {
            fontSize: '70px',
            fontWeight: '800',
          },
          '.flexBetween': {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          },
          '.flexCenter': {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          },
          '.flexEnd': {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
          },
          '.flexStart': {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
          },
          '.medium-9': {
            fontSize: '9px',
            fontWeight: '500',
          },
          '.medium-12': {
            fontSize: '12px',
            fontWeight: '500',
          },
          '.medium-16': {
            fontSize: '16px',
            fontWeight: '500',
          },
          '.medium-20': {
            fontSize: '20px',
            fontWeight: '500',
          },
          '.medium-25': {
            fontSize: '25px',
            fontWeight: '500',
          },
          '.medium-48': {
            fontSize: '48px',
            fontWeight: '500',
          },
          '.medium-55': {
            fontSize: '55px',
            fontWeight: '500',
          },
          '.medium-64': {
            fontSize: '64px',
            fontWeight: '500',
          },
          '.medium-70': {
            fontSize: '70px',
            fontWeight: '500',
          },
          '.regular-11': {
            fontSize: '11px',
            fontWeight: '300',
          },
          '.regular-12': {
            fontSize: '12px',
            fontWeight: '300',
          },
          '.regular-14': {
            fontSize: '14px',
            fontWeight: '400',
          },
          '.regular-16': {
            fontSize: '16px',
            fontWeight: '300',
          },
          '.regular-48': {
            fontSize: '48px',
            fontWeight: '400',
          },
        })
    }),
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        '5xl': '40px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          black: 'hsl(var(--black-primary))',
          foreground: 'hsl(var(--primary-foreground))',
          pink: 'hsl(var(--pink-primary))',
          pinkHover: 'hsl(var(--pink-hover))',
          white: 'hsl(var(--white-primary))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        silver: {
          10: 'hsl(var(--silver-10))',
          15: 'hsl(var(--silver-15))',
          20: 'hsl(var(--silver-20))',
          30: 'hsl(var(--silver-30))',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
} satisfies Config

export default config
