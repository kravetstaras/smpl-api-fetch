/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      screens: {
        ex: '0',
        sm: '376px',
        'md-sm': '480px',
        'lg-sm': '576px',
        md: '768px',
        l: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '1920px',
      },
      letterSpacing: {
        'tight-light': '-0.005em;',
      },
      extend: {
        fontFamily: {
          manrope: 'Manrope',
          inter: 'Inter',
        },
        colors: {
          green: '#00C508',
          white: '#ffffff',
          black: '#000000',
          'wild-sand': '#F5F5F5',
          'green-80': 'rgba(0, 197, 8, 0.80)',
          'green-20': 'rgba(0, 197, 8, 0.20)',
          'white-15': 'rgba(255, 255, 255, 0.15)',
          'black-50': 'rgba(0, 0, 0, 0.50)',
          'black-80': 'rgba(0, 0, 0, 0.80)',
        },
      },
    },
    plugins: [],
  };