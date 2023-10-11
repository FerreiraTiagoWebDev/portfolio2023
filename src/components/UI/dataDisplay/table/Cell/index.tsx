import { PropsWithChildren, TdHTMLAttributes } from 'react';

import { VariantProps } from 'tailwind-variants';

import { cellStyle } from './styles';

interface ITableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof cellStyle> {
  canSort?: boolean;
  isSorted?: boolean;
  tableCellType?: 'td' | 'th';
}

export function TableCell({
  canSort = false,
  children,
  className,
  isSorted = false,
  isSortedDirection = 'asc',
  tableCellType: TableCellTag = 'td',
  ...rest
}: PropsWithChildren<ITableCellProps>) {
  return (
    <TableCellTag
      className={cellStyle({
        tag: TableCellTag,
        canSort,
        isSorted,
        isSortedDirection,
        className,
      })}
      scope={TableCellTag === 'th' ? 'col' : ''}
      {...rest}
    >
      {children}
    </TableCellTag>
  );
}
