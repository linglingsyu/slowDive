/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    extend: {
      colors: {
        'black-100': '#121212',
        'black-80': '#525252',
        'black-60': '#919191',
        'black-40': '#D1D1D1',
        'black-20': '#F2F2F2',
        'blue-100': '#052B4E',
        'blue-80': '#00698A',
        'blue-60': '#4BBDCC',
        'blue-40': '#62D5EE',
        'blue-20': '#DAF3F9',
        danger: '#E4007B',
      },
      spacing: {
        15: '60px',
      },
      boxShadow: {
        btn: '0 0 30px rgba(87, 197, 221, 0.2)',
      },
      fontFamily: {
        Roboto: ['Roboto'],
        noto: ['Noto Sans TC'],
      },
    },
  },
  plugins: [],
}
