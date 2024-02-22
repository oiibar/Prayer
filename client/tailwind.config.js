/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
    },
    colors: {
      green: "#22c55e",
      black: "#000",
      white: "#fff",
    },
    backgroundImage: {
      day: "url('/src/assets/kaaba_day.jpg')",
      night: "url('/src/assets/kaaba_night.jpeg')",
    },
  },
  plugins: [],
};
