import { tv } from "tailwind-variants";

export const linkStyle = tv({
  base: "font-semibold flex items-center gap-x-2",
  variants: {
    textTransform: {
      uppercase: "uppercase",
      capitalize: "capitalize",
      lowercase: "lowercase",
    },
    design: {
      buttonPrimary:
        "bg-primary-one text-white px-8 w-fit justify-center rounded-lg hover:brightness-75",
      buttonSecondary:
        "bg-secondary-one text-white px-8 w-fit justify-center rounded-lg hover:brightness-75",
      buttonSecondaryDark:
        "bg-secondary-two text-white px-8 w-fit justify-center rounded-lg hover:brightness-75",
      outline: "bg-transparent border border-secondary-two hover:opacity-60",
      "icon-only": "bg-transparent text-[0] hover:opacity-60",
      transparent: "bg-transparent rounded-md hover:opacity-60",
      none: "bg-transparent",
    },
    hoverVariant: {
      underline: "hover:underline",
      opacity: "hover:opacity-60",
      none: "hover:none",
    },
    size: {
      sm: "h-8 text-sm rounded-md",
      md: "h-10",
      lg: "h-12",
    },
  },
  defaultVariants: {
    design: "transparent",
    textTransform: "capitalize",
    size: "md",
  },
});
