// textStyles.ts
import { tv } from "tailwind-variants";

export const textStyle = tv({
  base: "font-inter text-base text-secondary-two",
  variants: {
    size: {
      p: "text-base sm:text-sm md:text-md lg:text-lg",
      span: "text-base sm:text-sm md:text-md lg:text-lg",
      label: "text-base sm:text-sm md:text-md lg:text-lg",
      b: "text-base sm:text-sm md:text-md lg:text-lg",
      small: "text-xs sm:text-sm md:text-sm lg:text-sm",
    },
  },
  defaultVariants: {
    size: "p",
  },
});
