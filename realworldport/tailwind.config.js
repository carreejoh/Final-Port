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
        'rightAnimatedGradient': 'linear-gradient(-125deg,transparent 30%, #141517 30%, #141517 50%, transparent 50%)',
        'leftAnimatedGradient': 'linear-gradient(55deg,transparent 30%, #141517 30%, #141517 50%, transparent 50%)',
      },
      backgroundBlendMode: {
        'multiply': 'multiply',
      },
      colors: {
        baseGray: '#141517',
        baseShade: '#060607',
        mainBlue: '#1D4ED8',
        neonGreen: '#82D907'
      },
      boxShadow: {
        purpleBoxShadow: '0px 6px 5px -2px rgba(120,120,120,.4)',
        customBoxShadow: '0px 4px 5px -2px rgba(120,120,120,.4)'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}
