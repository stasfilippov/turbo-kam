import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin'

const { fontFamily } = require("tailwindcss/defaultTheme")

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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          pink: 'hsl(var(--pink-primary))',
          pinkHover: 'hsl(var(--pink-hover))',
          black: 'hsl(var(--black-primary))',
          white: 'hsl(var(--white-primary))'
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        silver: {
          10: 'hsl(var(--silver-10))',
          15: 'hsl(var(--silver-15))',
          20: 'hsl(var(--silver-20))',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '5xl': '40px'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin (function({addUtilities, addComponents}) {
      addUtilities({
        '.flexCenter': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.flexBetween': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        '.flexStart': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        },
        '.flexEnd': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        },
        '.regular-48': {
          fontSize: '48px',
          fontWeight: '400'
        },
        '.regular-16': {
          fontSize: '16px',
          fontWeight: '300'
        },
        '.regular-14': {
          fontSize: '14px',
          fontWeight: '400'
        },
        '.regular-12': {
          fontSize: '12px',
          fontWeight: '300'
        },
        '.regular-11': {
          fontSize: '11px',
          fontWeight: '300'
        },
        '.medium-70': {
          fontSize: '70px',
          fontWeight: '500'
        },
        '.medium-64': {
          fontSize: '64px',
          fontWeight: '500'
        },
        '.medium-55': {
          fontSize: '55px',
          fontWeight: '500'
        },
        '.medium-48': {
          fontSize: '48px',
          fontWeight: '500'
        },
        '.medium-25': {
          fontSize: '25px',
          fontWeight: '500'
        },
        '.medium-20': {
          fontSize: '20px',
          fontWeight: '500'
        },
        '.medium-16': {
          fontSize: '16px',
          fontWeight: '500'
        },
        '.medium-12': {
          fontSize: '12px',
          fontWeight: '500'
        },
        '.medium-9': {
          fontSize: '9px',
          fontWeight: '500'
        },
        '.bold-12': {
          fontSize: '12px',
          fontWeight: '800'
        },
        '.bold-14': {
          fontSize: '14px',
          fontWeight: '800'
        },
        '.bold-16': {
          fontSize: '16px',
          fontWeight: '800'
        },
        '.bold-20': {
          fontSize: '20px',
          fontWeight: '800'
        },
        '.bold-24': {
          fontSize: '24px',
          fontWeight: '800'
        },
        '.bold-64': {
          fontSize: '64px',
          fontWeight: '800'
        }
      }),
      addComponents({
        '.max-container': {
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: '1180px'
        }
      })
    })
  ],
} satisfies Config

export default config