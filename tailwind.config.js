/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        //12px kaç rem
        '12': '0.75rem',
        '10': '0.625rem',
        '13': '0.8125rem',
        '15': '0.9375rem',
        '18': '1.125rem',
        '20': '1.25rem',
      },
      lineHeight: {
        //32px kaç rem
        '32': '2rem',
      },
      colors: {
        pink: {
          100: '#fffcfe',
        }
      }
    },
  },
  plugins: [],
}
