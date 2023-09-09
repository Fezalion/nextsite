/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fcf5fe',
          '100': '#f9eafd',
          '200': '#f4d4fa',
          '300': '#ecb2f5',
          '400': '#e283ef',
          '500': '#d254e1',
          '600': '#b834c5',
          '700': '#9b28a3',
          '800': '#802385',
          '900': '#6b216e',
          '950': '#230524',
      },
    } 
    }
  },
  plugins: [],
};
