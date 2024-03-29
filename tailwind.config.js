/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#001D3E',
        primary: '#032973',
        secondary: '#ffffff',
        light: '#E0E0E0',
        lighter: '#F2F2F2',
        semilight: '#9B9B9B',
        dark: '#000000',
        custom: '#F8F8F8',

      },
      spacing: {
        calc: 'max((100vw - 1368px) / 2, 2.5rem)'
      },
      screens: {
        'xs': '475px',
      },
      boxShadow: {
        custom: '0px 0px 8px 0px #001D3EC5',
        customInner: '0px 0px 8px 0px #001D3EC5 inset'
      }
    },
  },
  plugins: [],
}

