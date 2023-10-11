import { tv } from 'tailwind-variants';

const triggerStyle = tv({
  base: 'text-secondary-two data-[placeholder]:text-primary-one group grid grid-cols-[1fr_auto] justify-between items-center px-4 w-full h-full text-sm gap-1 font-medium focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:flex outline-none',
  variants: {
    errored: {
      true: 'text-primary-two data-[placeholder]:text-primary-two',
    },
  },
});

const iconStyle = tv({
  base: 'text-gray-600 group-data-[state=open]:rotate-180 transition-all',
  variants: {
    errored: {
      true: 'text-primary-two',
    },
  },
});

const contentStyle = tv({
  base: 'overflow-auto w-[var(--radix-select-trigger-width)] max-h-[var(--radix-select-content-available-height)] bg-white border border-gray-500 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] z-[120]',
});

const itemStyle = tv({
  base: 'grid gap-x-4 items-center rounded text-sm font-medium text-secondary-two relative py-2 px-3 select-none cursor-pointer data-[highlighted]:outline-none data-[highlighted]:bg-slate-100 data-[highlighted]:text-secondary-two',
  variants: {
    disabled: {
      true: 'data-[disabled]:text-gray-600 data-[disabled]:pointer-events-none',
    },
    showIndicator: {
      true: 'grid-cols-[1fr_auto]',
    },
    noLength: {
      true: 'grid-cols-1fr text-center text-gray-400 data-[disabled]:text-gray-600 data-[disabled]:pointer-events-none',
    },
  },
});

export const selectStyles = {
  trigger: triggerStyle,
  icon: iconStyle,
  content: contentStyle,
  item: itemStyle,
};
