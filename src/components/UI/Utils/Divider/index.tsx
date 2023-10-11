import { HTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

type IDividerVariant = 'solid' | 'dashed';
type IDividerOrientation = 'horizontal' | 'vertical';

interface IDividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: IDividerOrientation;
  variant?: IDividerVariant;
}

export function Divider({
  className = '',
  orientation = 'horizontal',
  variant = 'solid',
  ...rest
}: IDividerProps) {
  return (
    <hr
      className={classNames(
        twMerge(`border-0 bg-white h-[1px] my-3 ${className}`),
        {
          'border-solid': variant === 'solid',
          'border-dashed': variant === 'dashed',
          'rotate-90': orientation === 'vertical',
        },
      )}
      {...rest}
    />
  );
}
