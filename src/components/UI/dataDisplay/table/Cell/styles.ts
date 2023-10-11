import { tv } from 'tailwind-variants';

export const cellStyle = tv({
  base: 'text-sm text-left font-inter relative py-1 px-4 border-b border-gray-200',
  variants: {
    tag: {
      th: 'font-medium text-gray-700',
      td: 'text-gray-800',
    },
    canSort: {
      true: '',
    },
    isSorted: {
      true: '',
    },
    isSortedDirection: {
      desc: 'hover:after:rotate-180',
      asc: '',
    },
  },
  compoundVariants: [
    {
      tag: 'th',
      canSort: true,
      isSorted: false,
      className:
        'cursor-pointer hover:after:content-["↑"] hover:after:opacity-75 hover:after:absolute hover:after:ml-1',
    },
    {
      tag: 'th',
      canSort: true,
      isSorted: true,
      className: 'cursor-pointer hover:after:opacity-100',
    },
  ],
  defaultVariants: {
    tag: 'td',
  },
});
