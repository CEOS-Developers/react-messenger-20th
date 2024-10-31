/** @type {import('tailwindcss').Config} */


module.exports =  {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rounded: {
        '4xl': '30px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray100: '#F2F5F7',
        gray200: '#E0E1E3',
        gray300: '#DBDCDD',
        gray400: '#CACACB',
        gray500: '#6F7680',
        gray600: '#0B0F13',
        main: '#564FFE', // Figma에서 정의된 Main Color
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'], // Pretendard 폰트 추가
        sf: ['SF Pro Text', 'sans-serif'], // SF Pro Display 폰트 추가
      },
      fontSize: {
        'title-1': ['26px', '39px'], // Title 1: 26px size, 39px line-height
        'title-2': ['16px', '24px'], // Title 2: 16px size, 24px line-height
        'body-1': ['15px', '22px'],  // Body 1: 15px size, 22px line-height
        'body-2': ['14px', '21px'],  // Body 2: 14px size, 21px line-height
        'body-3': ['11px', '16px'],  // Body 3: 11px size, 16px line-height
        'caption': ['12px', '18px'], // Caption: 12px size, 18px line-height
      },
      keyframes: {
        'fadeIn': {
          from: { opacity: '0' , transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-title-1': {
          fontSize: '26px',
          lineHeight: '39px',
          fontWeight: '800', // ExtraBold
        },
        '.text-title-2': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '700', // Bold
        },
        '.text-body-1-b': {
          fontSize: '15px',
          lineHeight: '22px',
          fontWeight: '600', // SemiBold
        },
        '.text-body-1-m': {
          fontSize: '15px',
          lineHeight: '22px',
          fontWeight: '500', // Medium
        },
        '.text-body-2-b': {
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: '700', // Bold
        },
        '.text-body-2-m': {
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: '500', // Medium
        },
        '.text-body-3': {
          fontSize: '11px',
          lineHeight: '16px',
          fontWeight: '700', // Bold
        },
        '.text-caption': {
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: '600', // SemiBold
        },
        '.text-keyboard': {
          fontSize: '23px',
          lineHeight: 'normal',
          fontWeight: '400', // ExtraBold
        },
        '.text-keyboard-2': {
          fontSize: '16px',
          lineHeight: 'normal',
          fontWeight: '400', // ExtraBold
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('tailwind-scrollbar-hide'),
  ],
}