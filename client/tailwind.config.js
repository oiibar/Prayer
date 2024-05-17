/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
    },
    backgroundImage: {
      day: "url('/src/assets/kaaba_day.jpg')",
      night: "url('/src/assets/kaaba_night.jpeg')",
    },
  },
  plugins: [],
};
