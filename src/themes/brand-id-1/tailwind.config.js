/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          default: '#4dd411',
          500: '#4dd411',
        },
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
