/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxe: {
          black: '#0B0B0B',
          gold: '#C6A66B',
          ivory: '#FAF8F4',
          gray: '#A8A29E',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 12px 35px rgba(0, 0, 0, 0.22)',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, rgba(198,166,107,0.15), rgba(198,166,107,0.02))',
      },
    },
  },
  plugins: [],
}

