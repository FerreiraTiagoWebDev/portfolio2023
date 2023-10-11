import { tv } from 'tailwind-variants';

const inputStyle = tv({
  base: 'peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-rose-400 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-rose-800 after:transition-all checked:bg-emerald-200 checked:after:left-4 checked:after:bg-emerald-500 hover:bg-rose-500 after:hover:bg-rose-900 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300',
  variants: {
    design: {
      primary: '',
    },
    errored: {
      true: 'border-primary-two',
    },
    disabled: {
      true: 'disabled:cursor-not-allowed disabled:border-slate-100',
    },
  },
  defaultVariants: {
    design: 'primary',
  },
});

const labelStyle = tv({
  base: 'cursor-pointer pl-2 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400',
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

export const switchStyles = {
  input: inputStyle,
  label: labelStyle,
};
