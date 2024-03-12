import { tv } from "tailwind-variants";

export const buttonStyle = tv({
  base: "relative flex items-center justify-center gap-x-2 min-w-[120px] px-4 rounded-lg text-sm text-secondary-two font-inter font-medium z-1 transition-all duration-300",
  variants: {
    textTransform: {
      uppercase: "uppercase",
      capitalize: "capitalize",
      lowercase: "lowercase",
    },
    design: {
      primary:
        "bg-gradient-to-r from-secondary to-secondaryLighter text-white hover:brightness-75",
      secondary: "bg-maroon text-white hover:brightness-75",
      "secondary-dark": "bg-secondary text-white hover:brightness-75",
      outline: "bg-transparent border border-secondaryLighter hover:opacity-60",
      "icon-only": "bg-transparent text-[0] hover:opacity-60",
      transparent: "bg-transparent hover:opacity-60",
    },
    hoverVariant: {
      underline: "hover:underline",
      opacity: "hover:opacity-60",
      none: "hover:none",
    },
    size: {
      xs: "h-6 text-xs",
      sm: "h-8 text-xs",
      md: "h-10",
      lg: "h-12",
    },
  },
  defaultVariants: {
    design: "primary",
    textTransform: "uppercase",
    hoverVariant: "none",
    size: "md",
  },
});
