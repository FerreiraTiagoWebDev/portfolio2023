import { HTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { Flex } from '../../layout';

type IDividerVariant = 'solid' | 'dashed';
type IDividerOrientation = 'horizontal' | 'vertical';

interface IDividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: IDividerOrientation;
  text: string;
  variant?: IDividerVariant;
}

export function DividerWithText({
  className = '',
  orientation = 'horizontal',
  text = 'Divider',
  variant = 'solid',
  ...rest
}: IDividerProps) {
  return (
    <Flex className="items-center">
      <hr
        className={classNames(
          twMerge(`w-1/5 border-t border-gray-300 h-[2px] my-3 ${className}`),
          {
            'border-solid': variant === 'solid',
            'border-dashed': variant === 'dashed',
            'rotate-90': orientation === 'vertical',
          },
        )}
        {...rest}
      />
      <span className="mx-4 text-lg font-semibold text-secondaryFixxer-one whitespace-nowrap">
        {text}
      </span>
      <hr
        className={classNames(
          twMerge(`w-4/5 border-t border-gray-300 h-[2px] my-3 ${className}`),
          {
            'border-solid': variant === 'solid',
            'border-dashed': variant === 'dashed',
            'rotate-90': orientation === 'vertical',
          },
        )}
        {...rest}
      />
    </Flex>
  );
}
