
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8ECF3',
          100: '#C4CCDA',
          200: '#9DAAC1',
          300: '#728196',
          400: '#4D5C76',
          500: '#324561',
          600: '#28395A',
          700: '#1D2C4F',
          800: '#16223D',
          900: '#101930',
          950: '#0A1020',
        },

        cream: {
          50: '#FBFBFA',
          100: '#F3F3F1',
          200: '#EAEAE6',
          300: '#DBDBD4',
          400: '#C5C5BB',
          500: '#A8A89B',
          600: '#88887C',
          700: '#6A6A60',
          800: '#4D4D45',
          900: '#33332E',
        },

        turquoise: {
          50: '#F0F5F6',
          100: '#DCEAEE',
          200: '#BDD3DA',
          300: '#9ABAC4',
          400: '#84A4B1',
          500: '#6A8A98',
          600: '#54707D',
          700: '#425A66',
          800: '#344752',
          900: '#283740',
        },
      },

      fontFamily: {
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },

      fontSize: {
        'display-1': [
          'clamp(3rem, 5.5vw, 6rem)',
          {
            lineHeight: '1.35',
            letterSpacing: '-0.02em',
          },
        ],

        'display-2': [
          'clamp(2.5rem, 4vw, 4.5rem)',
          {
            lineHeight: '1.4',
            letterSpacing: '-0.015em',
          },
        ],

        'display-3': [
          'clamp(2rem, 3vw, 3rem)',
          {
            lineHeight: '1.4',
            letterSpacing: '-0.01em',
          },
        ],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
      },

      maxWidth: {
        'fnar': '1440px',
        'fnar-content': '1200px',
        'fnar-reading': '760px',
      },

      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
        smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },

  plugins: [],
};
