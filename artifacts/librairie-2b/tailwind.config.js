/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#F8FAFF',
          100: '#F0F4FF',
          200: '#E4ECFF',
          300: '#CCDAFF',
          400: '#AFBFFF',
          500: '#8FA3F5',
          600: '#6B83E8',
          700: '#4E65CF',
          800: '#3849A8',
          900: '#263480',
        },
        espresso: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#9FB3FB',
          400: '#7091F8',
          500: '#4169E1',
          600: '#2F52C8',
          700: '#233DAF',
          800: '#1A2E8E',
          900: '#122170',
          950: '#0B1550',
        },
        amber: {
          50: '#FEF8F3',
          100: '#FDF0E5',
          200: '#F9DCBE',
          300: '#F4C28D',
          400: '#EEA258',
          500: '#E78128',
          600: '#C96A3C',
          700: '#A9522E',
          800: '#894326',
          900: '#6C3621',
          950: '#3A1B10',
        },
        terracotta: {
          500: '#5B8CDB',
          600: '#3D6EC4',
          700: '#2854A8',
        }
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 4px 12px rgba(18, 33, 112, 0.08), 0 2px 4px rgba(18, 33, 112, 0.04)',
        'book-hover': '0 8px 24px rgba(18, 33, 112, 0.12), 0 4px 8px rgba(18, 33, 112, 0.06)',
      }
    },
  },
  plugins: [],
};
