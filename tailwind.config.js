/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      primary: ["Comfortaa", "cursive"],
      secondary: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        navbar: {
          main: "#D8C99B",
        },
        background: {
          main: "#faf5e6",
          secondary: "#AC9496",
          heavySecondary: "#4c102a",
        },
        footer: {
          main: "#273e47",
        },
        darkBlue: "#0F2027",
        midBlue: "#203A43",
        lightBlue: "#2C5364",
        blue: {
          500: "#1a73e8",
        },
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
