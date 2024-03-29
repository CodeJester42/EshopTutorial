/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F42c37',
        secondary: '#F42c37',
        brandYellow: '#Fdc62e',
        brandGreen: '#2dcc6f',
        brandBlue: '#1376f4',
        brandRed: '#eeeeee',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sn: '3rem',
        },
      },
    },
  },
  plugins: [],
};



