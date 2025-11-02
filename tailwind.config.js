/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#079789",
        secondary: "#C2D553",
        white: "#FFFFFF",
        black: "#000000",
        accent: "#FF7A00",
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
        highlight: ["Sen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
