import { tv } from 'tailwind-variants';

const linearLoaderContainer = tv({
  base: 'w-full',
});

const linearLoaderBackgroundBar = tv({
  base: 'h-1 bg-opacity-50 w-full overflow-hidden',
  variants: {
    color: {
      primary: 'bg-gradient-to-r from-primary-one to-primary-two',
      secondary: 'bg-secondary-one',
      'secondary-dark': 'bg-secondary-two',
    },
  },
  defaultVariants: {
    color: 'secondary-dark',
  },
});

const linearLoaderBar = tv({
  base: 'h-1 origin-[0_50%] animate-linear-indeterminate',
  variants: {
    color: {
      primary: 'bg-gradient-to-r from-primary-one to-primary-two',
      secondary: 'bg-secondary-one',
      'secondary-dark': 'bg-secondary-two',
    },
  },
  defaultVariants: {
    color: 'secondary-dark',
  },
});

export const linearLoaderStyle = {
  container: linearLoaderContainer,
  backgroundBar: linearLoaderBackgroundBar,
  bar: linearLoaderBar,
};
