import { tv } from 'tailwind-variants';

export const tagStyle = tv({
  base: 'relative flex items-center justify-center gap-x-2 px-2 rounded-md font-semibold font-inter',
  variants: {
    size: {
      xs: 'text-xs py-1',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
