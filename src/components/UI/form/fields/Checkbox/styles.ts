import { tv } from 'tailwind-variants';

const inputStyle = tv({
  base: 'w-5 h-5 transition-all duration-200 bg-white border-2 rounded appearance-none cursor-pointer peer border-secondary-three focus:outline-none focus-visible:outline-none',
  variants: {
    design: {
      primary:
        'hover:border-primary-one checked:border-primary-one checked:bg-primary-one',
      admin:
        'hover:border-secondary-two checked:border-secondary-two checked:bg-secondary-two',
    },
    errored: {
      true: 'border-primary-two',
    },
    disabled: {
      true: 'disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50',
    },
  },
  defaultVariants: {
    design: 'primary',
  },
});

const labelStyle = tv({
  base: 'flex flex-1 pl-2 cursor-pointer text-sm w-full',
  variants: {
    design: {
      primary: 'text-secondary-two',
      admin: 'text-secondary-one',
    },
    errored: {
      true: 'text-primary-two',
    },
    disabled: {
      true: 'peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 read-only:cursor-not-allowed read-only:text-slate-400',
    },
  },
  defaultVariants: {
    design: 'primary',
  },
});

export const checkboxStyles = {
  input: inputStyle,
  label: labelStyle,
};
