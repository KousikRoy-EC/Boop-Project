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
        BlogCardBg: '#f7f6f3',
        textGrey:'#848484',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      boxShadow:{
        BlogCardShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
        BlogImgShandow : "0px 10px 22px 0px rgba(0, 0, 0, 0.10), 0px 40px 40px 0px rgba(0, 0, 0, 0.09), 0px 89px 54px 0px rgba(0, 0, 0, 0.05), 0px 159px 64px 0px rgba(0, 0, 0, 0.01), 0px 249px 70px 0px rgba(0, 0, 0, 0.00)"
      }
    },
  },
  plugins: [],
}