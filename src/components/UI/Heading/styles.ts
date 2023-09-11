import { tv } from "tailwind-variants";

export const headingStyle = tv({
  base: "font-inter font-extrabold text-2xl",
  variants: {
    gradient: {
      primary:
        "bg-clip-text text-transparent bg-gradient-to-br from-muisecondary via-muisecondary to-muithird",
      none: "",
    },
    size: {
      h1: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
      h2: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
      h3: "text-base sm:text-lg md:text-xl lg:text-2xl",
      h4: "text-base sm:text-base md:text-lg lg:text-xl",
      h5: "text-base sm:text-base md:text-base lg:text-lg",
      h6: "text-base",
    },
  },
  defaultVariants: {
    design: "primary",
    gradient: "none",
    variant: "h1",
  },
});
