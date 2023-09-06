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
      colors: {
        baseGray: '#141517',
        baseShade: '#060607',
        darkPurple: '#0E001C',
        lightPurple: '#B863FE',
        darkBlue: '#07002B',
        lightBlue: '#300476'
      },
      boxShadow: {
        purpleBoxShadow: '0px 6px 5px -2px rgba(120,120,120,.4)',
        customBoxShadow: '0px 4px 5px -2px rgba(120,120,120,.4)'
      }
    },
  },
  plugins: [],
}
