/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#DFF80D",
          text: "#0C4651",
        },
      },
    },
  },
  plugins: [],
};
