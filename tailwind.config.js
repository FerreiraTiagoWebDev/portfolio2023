/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge:[]
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
      heading: ["Inter", "sans-serif"],
      body: `Inter, Helvetica, Arial, sans-serif`,
    },
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "move-right": "move-right 6s linear infinite",
        "accordion-slide-down":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-slide-up":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "linear-indeterminate": "linear-indeterminate 1s infinite linear",
        "login-background": "login-background 12s infinite",
      },
      keyframes: {
        "move-right": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
      },
      colors: {
        primary: "#faf5e6",
        primaryLighter: "#fdfcf8",
        primaryDarker: "#E8D9C5",
        secondary: "#122B48",
        secondaryLighter: "#1C486B",
        secondaryDarker: "#0C1F31",
        maroon: "#842c48",
        proposedLighter: "#808080",
        secondaryLightest: "#AC9496",
        lightBlue: "#ADD8E6",
        black: "#070606",
        almostWhite: "#FFFDFA",
        blueDarkest: "#273e47",
        blueDarker: "#203A43",
        blueTemplate: "#2C5364",
        muisecondary: "#122B48",
        muithird: "#3F6BA1",
        jaimy: "#C21426",
      },
      backgroundImage: {
        "h1-gradient":
          "linear-gradient(to right bottom, #122B48, #122B48 45%, #3F6BA1 100%)",
      },
      spacing: {
        128: "32rem",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
  },
};
