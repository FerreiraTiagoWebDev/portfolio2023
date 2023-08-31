import { HTMLAttributes, PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

export type IGridProps = HTMLAttributes<HTMLDivElement>;

export function Grid({
  children,
  className,
  ...rest
}: PropsWithChildren<IGridProps>) {
  return (
    <div className={twMerge("grid", className)} role="grid" {...rest}>
      {children}
    </div>
  );
}
