/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black: '#000000',
      brown: '#29221D',
      orange: {
        100: '#FF8679',
        200: '#FF5A49',
        500: '#FF6600',
      }
    },
    fontSize: {
      title: '50px',
      subtitle: '30px',
      base: '26px',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
