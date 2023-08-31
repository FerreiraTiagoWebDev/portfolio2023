import { tv } from "tailwind-variants";

export const nextLinkStyle = tv({
  base: "flex items-center text-white transition-all",
  variants: {
    buttonDesign: {
      primary:
        "bg-gradient-to-r from-primary-one to-primary-two rounded px-4 py-2",
      secondary: "bg-secondary-one rounded px-4 py-2",
      secondaryDark: "bg-secondary-two rounded px-4 py-2",
      outline:
        "bg-transparent border border-secondary-two text-secondary-two rounded px-4 py-2",
      none: "bg-transparent",
    },
    hover: {
      default: "hover:underline",
      saturate: "hover:saturate-[0.8]",
      brightness: " hover:brightness-75",
      opacity: "hover:opacity-60",
      none: "hover:none",
    },
  },
  defaultVariants: {
    hover: "default",
  },
});
