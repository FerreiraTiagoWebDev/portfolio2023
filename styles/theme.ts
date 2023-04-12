import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Inter_Tight } from "next/font/google";

export const interTight = Inter_Tight({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#faf5e6",
    },
    secondary: {
      main: "#122B48",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFF",
    },

    // spring: {
    //   mountainSpring: "#7A92A5",
    //   pageantBlue: "#1F2C43",
    //   goldFusion: "#FFB000",
    //   anemone: "#842C48",
    //   deepDepths: "#46483D"
    // }
  },
  breakpoints: {
    values: {
      xs: 0, // extra small devices (portrait phones, less than 576px)
      sm: 600, // small devices (landscape phones, 576px and up)
      md: 960, // medium devices (tablets, 768px and up)
      lg: 1280, // large devices (desktops, 992px and up)
      xl: 1920, // extra large devices (large desktops, 1200px and up)
    },
  },
  typography: {
    fontFamily: interTight.style.fontFamily,
    h1: {
      fontSize: "3.5rem", // default font size for h1
      backgroundImage:
        "linear-gradient(to right bottom, #122B48, #122B48 45%, #3F6BA1 100%)",
      backgroundClip: "text",
      color: "transparent", // default color for h1
      fontWeight: "bold",
      "@media (min-width:600px)": {
        // font size for h1 on small devices (sm)
        fontSize: "5rem",
      },
      "@media (min-width:960px)": {
        // font size for h1 on medium devices (md)
        fontSize: "6rem",
      },
      "@media (min-width:1280px)": {
        // font size for h1 on large devices (lg)
        fontSize: "7rem",
      },
      "@media (min-width:1920px)": {
        // font size for h1 on extra large devices (xl)
        fontSize: "8rem",
      },
    },
    h2: {
      fontSize: "2.75rem", // default font size for h2
      color: "#122B48", // default color for h2
      "@media (min-width:600px)": {
        // font size for h2 on small devices (sm)
        fontSize: "3.5rem",
      },
      "@media (min-width:960px)": {
        // font size for h2 on medium devices (md)
        fontSize: "4rem",
      },
      "@media (min-width:1280px)": {
        // font size for h2 on large devices (lg)
        fontSize: "4.5rem",
      },
      "@media (min-width:1920px)": {
        // font size for h2 on extra large devices (xl)
        fontSize: "5rem",
      },
    },
    body1: {
      fontSize: "1rem", // default font size for body1
      color: "#122B48", // default color for body1
      "@media (min-width:600px)": {
        // font size for body1 on small devices (sm)
        fontSize: "1.2rem",
      },
      "@media (min-width:960px)": {
        // font size for body1 on medium devices (md)
        fontSize: "1.4rem",
      },
      "@media (min-width:1280px)": {
        // font size for body1 on large devices (lg)
        fontSize: "1.6rem",
      },
      "@media (min-width:1920px)": {
        // font size for body1 on extra large devices (xl)
        fontSize: "1.8rem",
      },
    },
    body2: {
      fontSize: "0.5rem", // default font size for body1
      color: "#122B48", // default color for body1
      "@media (min-width:600px)": {
        // font size for body1 on small devices (sm)
        fontSize: "0.75rem",
      },
      "@media (min-width:960px)": {
        // font size for body1 on medium devices (md)
        fontSize: "0.85rem",
      },
      "@media (min-width:1280px)": {
        // font size for body1 on large devices (lg)
        fontSize: "0.95rem",
      },
      "@media (min-width:1920px)": {
        // font size for body1 on extra large devices (xl)
        fontSize: "1.2rem",
      },
    },
  },
});

export default theme;
