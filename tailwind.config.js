/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge:[]
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
      heading: ["Inter", "sans-serif"],
      body: `Inter, Helvetica, Arial, sans-serif`,
    },
    extend: {
      colors: {
        primary: "#faf5e6",
        primaryLighter: "#fdfcf8",
        primaryDarker: "#E8D9C5",
        secondary: "#122B48",
        secondaryLighter: "#1C486B",
        secondaryDarker: "#0C1F31",
        maroon: "#3D0A20",
        proposedLighter: "#808080",
        secondaryLightest: "#AC9496",
        lightBlue: "#ADD8E6",
        black: "#070606",
        white: "#FFFDFA",
        blueDarkest: "#273e47",
        blueDarker: "#203A43",
        blueTemplate: "#2C5364",
        muisecondary: "#122B48",
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
  // plugins: [require("daisyui")],
  // daisyui: {
  //   styled: true,
  //   themes: true,
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: "",
  //   darkTheme: "dark",
  // },
};
