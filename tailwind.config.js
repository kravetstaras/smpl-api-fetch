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
    extend: {},
  },
  plugins: [],
};