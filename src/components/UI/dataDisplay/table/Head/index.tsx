import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type ITableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export function TableHead({
  children,
  className,
  ...rest
}: PropsWithChildren<ITableHeadProps>) {
  return (
    <thead className={twMerge('group thead', className)} {...rest}>
      {children}
    </thead>
  );
}
