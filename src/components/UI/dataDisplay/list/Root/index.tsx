import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IListRootProps = HTMLAttributes<HTMLUListElement>;

export function ListRoot({
  children,
  className,
  ...rest
}: PropsWithChildren<IListRootProps>) {
  return (
    <ul className={twMerge('', className)} {...rest}>
      {children}
    </ul>
  );
}
