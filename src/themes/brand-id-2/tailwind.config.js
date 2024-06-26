/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          default: '#013220',
          500: '#013220',
        },
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
