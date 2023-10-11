import { ComponentProps, PropsWithChildren } from 'react';

import { VariantProps } from 'tailwind-variants';

import { tagStyle } from './styles';

interface ITagProps extends ComponentProps<'span'> {
  variants?: VariantProps<typeof tagStyle>;
}

export function Tag({
  children,
  className,
  variants,
  ...rest
}: PropsWithChildren<ITagProps>) {
  return (
    <span className={tagStyle({ className, size: variants?.size })} {...rest}>
      {children}
    </span>
  );
}
