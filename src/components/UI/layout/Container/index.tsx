import { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

type IContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({
  children,
  className,
  ...rest
}: PropsWithChildren<IContainerProps>) {
  return (
    <div
      className={twMerge(
        `grid mx-auto relative w-full xl:max-w-5xl 2xl:max-w-5xl 3xl:max-w-7xl`,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
