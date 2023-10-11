import { tv } from 'tailwind-variants';

const containerStyle = tv({
  base: 'grid gap-x-2 px-3 relative h-8 transition-all',
  variants: {
    design: {
      bordered: 'border border-gray-400',
      admin: 'bg-zinc-200 rounded',
      trader:
        'bg-white border border-gray-200 rounded-lg hover:border-gray-400',
      unbordered: 'border-none',
    },
    size: {
      sm: 'h-7 rounded-md',
      md: 'h-8',
      lg: 'h-10',
    },
    iconPosition: {
      left: 'grid-cols-[auto_1fr] items-center',
      right: 'grid-cols-[1fr_auto] items-center',
    },
    errored: {
      true: 'border-[rgb(230 35 54)]',
    },
    disabled: {
      true: '',
    },
  },
  defaultVariants: {
    design: 'bordered',
    sizes: 'md',
  },
  compoundVariants: [
    {
      design: 'trader',
      disabled: true,
      className: 'bg-zinc-50 hover:border-gray-200',
    },
  ],
});

const labelStyles = tv({
  base: 'inline-flex text-sm mb-1',
  variants: {
    design: {
      admin: 'text-secondary-one',
      trader: 'text-primaryFixxer-one font-medium font-inter',
    },
  },
  defaultVariants: {
    design: 'admin',
  },
});

const iconStyle = tv({
  base: 'text-secondary-two',
  variants: {
    errored: {
      true: 'text-primary-two',
    },
  },
});

export const fieldBaseStyles = {
  container: containerStyle,
  icon: iconStyle,
  label: labelStyles,
};
