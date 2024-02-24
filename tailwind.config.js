/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        borderColor: '#DA9145',
        btnColor:'#FFB163',
        cardTextColor: '#6B6B6B',
        cardBg:'#F7EFE4',
      }
    },
  },
  plugins: [],
}