/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          default: '#6db84b',
          500: '#6db84b',
        },
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
