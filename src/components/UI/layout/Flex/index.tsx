import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IFlexProps = HTMLAttributes<HTMLDivElement>;

export function Flex({
  children,
  className,
  ...rest
}: PropsWithChildren<IFlexProps>) {
  return (
    <div
      className={twMerge('flex w-full max-w-full relative', className)}
      role="row"
      {...rest}
    >
      {children}
    </div>
  );
}
