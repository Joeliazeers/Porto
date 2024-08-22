/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#b91c1c",
        background: "#0d1b2a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
