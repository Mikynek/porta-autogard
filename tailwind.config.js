/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'red-orange': '#ff4000',
      'red-orange-light': '#ff4f14',
      'red-orange-dark': '#eb3b00',
      'blue': '#0f4c64',
      'white': '#ffffff',
      'gray': '#e0e4e3',
      'gray-white': '#f5f5f5'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')({
      fontFamily: ['HelveticaNowDisplay', 'Helvetica', 'Arial', 'sans-serif'],
    }),
  ],
}

