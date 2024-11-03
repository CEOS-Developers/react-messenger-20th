/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        appleSD: ['AppleSDGothicNeo', 'sans-serif'],
      },
      colors: {
        mainYellow: 'rgba(239, 213, 70, 1)',
        paleYellow: 'rgba(255, 252, 223, 1)',
        grey50: 'rgba(249, 250, 251, 1)',
        grey100: 'rgba(242, 244, 246, 1)',
        grey200: 'rgba(229, 232, 235, 1)',
        grey400: 'rgba(176, 184, 193, 1)',
        grey800: 'rgba(51, 61, 75, 1)',
        mainFont: 'rgba(51, 61, 75, 1)',
      }
    },
  },
  plugins: [],
}
