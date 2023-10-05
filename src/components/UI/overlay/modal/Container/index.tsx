import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IModalContainerProps = HTMLAttributes<HTMLDivElement>;

export function ModalContainer({
  children,
  className,
  ...rest
}: PropsWithChildren<IModalContainerProps>) {
  return (
    <div
      className={twMerge(
        'bg-white flex flex-col relative overflow-y-hidden z-[110]',
        className,
      )}
      role="dialog"
      {...rest}
    >
      {children}
    </div>
  );
}
