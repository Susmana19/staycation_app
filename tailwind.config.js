/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D5ED41",
        secondary: "#6B781D",
        tertiary: "#E89040",
        bg_first: "#FFFDF5",
        bg_second: "#EFF7B1"
      },
    },
  },
  plugins: [require("daisyui")],
}

