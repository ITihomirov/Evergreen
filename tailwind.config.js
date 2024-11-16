/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '992px',
      xl: '1250px',
      xxl: '1430px',
      xxx: '1650px'
    },
    colors: {
      'grayC': '#F4F4EA',
      'greenC': '#00EC8A',
      'redC': '#FC6F75',
      'blackC': '#2F2F2F',
      'blueC': '#6D8DF9',
      'yellowC': '#FCC300'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      libreF: ['Libre Franklin', 'sans-serif'],
      workS: ['Work Sans', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}
