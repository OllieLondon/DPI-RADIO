import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kasaoli: {
          green: '#2F4132',
          gold: '#D4A574',
          rust: '#D85A2B',
          charcoal: '#2B2B2B',
          cream: '#F5F1E8',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
      },
    },
  },
  plugins: [],
}
export default config
