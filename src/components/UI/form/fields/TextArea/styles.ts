import { tv } from 'tailwind-variants';

const containerStyle = tv({
  base: 'grid gap-x-2 py-2 px-3 group',
  variants: {
    design: {
      bordered: 'border border-gray-400',
      admin: 'bg-zinc-200 rounded',
      trader:
        'bg-white border border-gray-200 rounded-lg hover:border-gray-400',
      unbordered: 'border-none',
    },
    errored: {
      true: 'border-[rgb(230 35 54)]',
    },
    hasIcon: {
      true: 'grid-cols-[auto_1fr]',
    },
    size: {
      sm: 'rounded-md',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    design: 'bordered',
  },
});

const labelStyle = tv({
  base: 'text-sm mb-1',
  variants: {
    design: {
      admin: 'text-secondary-one',
      trader: 'text-primaryFixxer-one font-medium',
    },
    errored: {
      true: 'text-primary-two',
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

const textAreaStyle = tv({
  base: 'bg-transparent flex flex-1 h-full text-sm resize-none outline-none data-[focus-visible]:border-2 data-[focus-visible]:border-secondary-two',
  variants: {
    disabled: {
      true: 'disabled:cursor-not-allowed disabled:text-gray-700',
    },
  },
});

export const textAreaStyles = {
  container: containerStyle,
  label: labelStyle,
  icon: iconStyle,
  textArea: textAreaStyle,
};
