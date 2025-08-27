/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF5F2',
          100: '#FFF0ED',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBAA8',
          500: '#FF8A6C',
          600: '#FF5733',
          700: '#E63E1C',
          800: '#CC2D0E',
          900: '#A62109',
          950: '#7A1805',
        },
        secondary: {
          50: '#FFF8F0',
          100: '#FFF1E6',
          200: '#FFE4CC',
          300: '#FFD4B3',
          400: '#FFC599',
          500: '#FFB366',
          600: '#FF9933',
          700: '#E67300',
          800: '#CC6600',
          900: '#A65200',
          950: '#7A3D00',
        },
        accent: {
          50: '#FFF5E6',
          100: '#FFEBCC',
          200: '#FFD699',
          300: '#FFC266',
          400: '#FFAD33',
          500: '#FF9900',
          600: '#E68A00',
          700: '#CC7A00',
          800: '#B36B00',
          900: '#995C00',
        },
      },
    },
  },
  plugins: [],
};