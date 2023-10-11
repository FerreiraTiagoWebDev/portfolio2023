import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IListItemProps = HTMLAttributes<HTMLLIElement>;

export function ListItem({
  children,
  className,
  ...rest
}: PropsWithChildren<IListItemProps>) {
  return (
    <li className={twMerge('', className)} {...rest}>
      {children}
    </li>
  );
}
