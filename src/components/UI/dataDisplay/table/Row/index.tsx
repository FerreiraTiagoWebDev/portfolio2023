import { ComponentProps, PropsWithChildren } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface ITableRowProps extends ComponentProps<'tr'> {
  borderColor?: string;
  canBeHovered?: boolean;
}

export function TableRow({
  borderColor,
  canBeHovered = false,
  children,
  className,
  onClick,
  ...rest
}: PropsWithChildren<ITableRowProps>) {
  return (
    <tr
      className={classNames(
        twMerge(
          `h-12 group-[.thead]:h-10 transition-colors duration-300`,
          className,
        ),
        {
          'cursor-pointer hover:bg-black hover:bg-opacity-5':
            !!onClick || canBeHovered,
        },
        {
          'border-l-4': borderColor,
        },
      )}
      onClick={onClick}
      style={borderColor ? { borderLeftColor: borderColor } : {}}
      {...rest}
    >
      {children}
    </tr>
  );
}
