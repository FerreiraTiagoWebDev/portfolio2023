import { PropsWithChildren, SVGAttributes } from 'react';

export type ISVGContainerProps = SVGAttributes<SVGElement>;

export function SVGContainer({
  children,
  className = '',
  ...rest
}: PropsWithChildren<ISVGContainerProps>) {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox={rest.viewBox ? rest.viewBox : '0 0 32 32'}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      {children}
    </svg>
  );
}
