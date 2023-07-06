/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'red-orange': '#ff4000',
      'red-orange-light': '#ff4f14',
      'red-orange-dark': '#eb3b00',
      'white': '#ffffff',
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

