import { tv } from 'tailwind-variants';

const labelStyles = tv({
  base: 'flex flex-1 pr-2 cursor-pointer text-secondary-two w-full',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    disabled: {
      true: 'peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 read-only:cursor-not-allowed read-only:text-slate-400',
    },
    errored: {
      true: 'text-primary-two',
    },
  },
});

const inputStyles = tv({
  base: 'transition-all duration-200 bg-white border-2 rounded-full appearance-none cursor-pointer peer border-secondary-two focus:outline-none focus-visible:outline-none checked:border-2 hover:border-primary-one checked:border-primary-one',
  variants: {
    inputSize: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-7 h-7',
    },
    disabled: {
      true: 'disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50',
    },
    errored: {
      true: 'border-primary-two',
    },
  },
});

const svgStyles = tv({
  base: 'absolute right-0 transition-all duration-300 pointer-events-none fill-primary-one scale-50 opacity-0 peer-checked:scale-100 peer-checked:opacity-100',
  variants: {
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-7 h-7',
    },
    disabled: {
      true: 'peer-disabled:cursor-not-allowed peer-read-only:cursor-not-allowed',
    },
  },
});

export const radioStyles = {
  label: labelStyles,
  input: inputStyles,
  svg: svgStyles,
};
