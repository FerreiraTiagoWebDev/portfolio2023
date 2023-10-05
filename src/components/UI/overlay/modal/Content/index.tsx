import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IModalContentProps = HTMLAttributes<HTMLDivElement>;

export function ModalContent({
  children,
  className,
  ...rest
}: PropsWithChildren<IModalContentProps>) {
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
