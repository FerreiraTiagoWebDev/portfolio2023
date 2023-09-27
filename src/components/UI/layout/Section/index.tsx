import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type ISectionProps = HTMLAttributes<HTMLElement>;

export function Section({
  children,
  className,
  ...rest
}: PropsWithChildren<ISectionProps>) {
  return (
    <section className={twMerge(`relative`, className)} {...rest}>
      {children}
    </section>
  );
}
