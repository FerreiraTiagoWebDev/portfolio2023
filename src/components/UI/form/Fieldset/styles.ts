import { tv } from 'tailwind-variants';

const fieldsetStyle = tv({
  base: 'flex flex-col gap-y-2 rounded-lg border w-full border-secondary-two',
  variants: {
    errored: {
      true: 'border-primary-two',
    },
  },
});

const legendStyle = tv({
  base: 'bg-white text-primary-one font-medium ml-3 px-2',
  variants: {
    errored: {
      true: 'text-primary-two',
    },
  },
});

export const fieldsetStyles = {
  fieldset: fieldsetStyle,
  legend: legendStyle,
};
