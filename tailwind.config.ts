import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)']
      },
      colors: {
        gray: {
          100: '#f8f9fc',
          200: '#e6e8f2',
          300: '#d1d6e4',
          400: '#8d95af',
          700: '#1b1c2a',
          800: '#0e1116'
        },
        purple: {
          100: '#83b1d9',
          200: '#2a2879',
          300: '#303f73',
          400: '#252d4a'
        },
        green: {
          50: '#50b2c0',
          100: '#255d6a',
          200: '#0a313c'
        },
        gradient: {
          horizontal: 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
          vertical: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)'
        },
        yellow: {
          50: '#fff9ec',
          100: '#ffebc4',
          200: '#ffe2a7',
          300: '#ffd47f',
          400: '#ffcc66',
          500: '#ffbf40',
          600: '#e8ae3a',
          700: '#b5882d',
          800: '#8c6923',
          900: '#6b501b'
        }
      }
    }
  },
  plugins: []
}
export default config
