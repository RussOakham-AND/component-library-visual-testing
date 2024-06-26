/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          default: '#43464f',
          hover: '#72bf6f',
        },
        slate: '#43464f',
        disabled: '#f5f5f5',
        teal: '#bee4e0',
        gray: {
          light: '#eeeeee',
          default: '#9e9e9e',
          dark: '#616161',
          border: '#d0d0d0',
          background: '#fcfcfc',
          ui: '#e0e0e0',
        },
        red: {
          ui: '#f84952',
        },
        form: {
          blue: '#2169f3',
          grey: '#495057',
        },
        'original-cottages': {
          grey: '#495057',
        },
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};

// https://medium.com/koodoo/how-do-we-approach-theming-for-white-label-applications-672163019731