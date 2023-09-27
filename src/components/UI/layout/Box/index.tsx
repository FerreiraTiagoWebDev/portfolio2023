import { HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

type IBoxProps = HTMLAttributes<HTMLDivElement>;

export function Box({
  children,
  className,
  ...rest
}: PropsWithChildren<IBoxProps>) {
  return (
    <div className={classNames(twMerge(`relative w-fit`, className))} {...rest}>
      {children}
    </div>
  );
}
