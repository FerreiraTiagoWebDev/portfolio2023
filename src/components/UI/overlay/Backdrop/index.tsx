'use client';

import { HTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface IBackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

export function Backdrop({
  className = '',
  onClick,
  open,
  ...rest
}: IBackdropProps) {
  return (
    <div
      className={classNames(
        twMerge(
          'fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200',
          className,
        ),
        {
          'visible opacity-100': open,
          'invisible opacity-0': !open,
        },
      )}
      onClick={onClick}
      role="presentation"
      {...rest}
    />
  );
}
