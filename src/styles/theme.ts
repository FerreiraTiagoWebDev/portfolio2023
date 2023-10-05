import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
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
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
