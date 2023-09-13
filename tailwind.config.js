/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(20, 20, 20)",
        secondary: "linear-gradient(180deg, rgb(0, 255, 170), rgb(0, 157, 255))"
      }
    },
  },
  plugins: [],
}

