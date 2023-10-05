import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IModalActionsProps = HTMLAttributes<HTMLDivElement>;

export function ModalActions({
  children,
  className,
  ...rest
}: PropsWithChildren<IModalActionsProps>) {
  return (
    <div
      className={twMerge('grid items-center justify-center gap-x-3', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
