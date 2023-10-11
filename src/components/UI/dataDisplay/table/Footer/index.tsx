import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type ITableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

export function TableFooter({
  children,
  className,
  ...rest
}: PropsWithChildren<ITableFooterProps>) {
  return (
    <tfoot className={twMerge('', className)} {...rest}>
      {children}
    </tfoot>
  );
}
