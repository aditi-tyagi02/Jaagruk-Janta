/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#008080',
        },
        coral: {
          600: '#FF6F61',
        },
        gold: {
          600: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};