import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush:    '#F5EBE4',
        cream:    '#F9F4F0',
        ivory:    '#FDFAF7',
        golden:   '#C9956A',
        caramel:  '#D4A574',
        honey:    '#E8C9A0',
        chestnut: '#8B5E3C',
        cocoa:    '#6B4226',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
