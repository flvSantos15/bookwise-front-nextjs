import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)']
      },
      space: {
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem'
      },

      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem'
      },
      fontWeights: {
        regular: '400',
        medium: '500',
        bold: '700'
      },

      lineHeights: {
        shorter: '125%',
        short: '140%',
        base: '160%',
        tall: '180%'
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116'
        },
        purple: {
          100: '#8381D9',
          200: '#2A2879'
        },
        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C'
        },
        vertical: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        horizontal: 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-vertical':
          'linear-gradient(to bottom, #7FD1CC 0%, #9694F5 100%)'
      },
      backgroundImage: {
        'forecast-gradient':
          'linear-gradient(to bottom, #15b79f 0%, #0e9382 100%)',
        'gradient-vertical':
          'linear-gradient(to bottom, #7FD1CC 0%, #9694F5 100%)',
        'gradient-horizontal':
          'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)'
      },
      radii: {
        xs: '2.5px',
        sm: '5px',
        md: '10px',
        lg: '20px',
        full: '99999px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
export default config
