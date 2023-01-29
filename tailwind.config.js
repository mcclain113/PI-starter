module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'background-pic': "url('/src/bg.png')"
      },
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],

};
