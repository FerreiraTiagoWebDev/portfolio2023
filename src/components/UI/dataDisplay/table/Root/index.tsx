import { LinearLoader } from "@ui/loader";
import { HTMLAttributes, PropsWithChildren } from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";

import { twMerge } from "tailwind-merge";

interface ITableRootProps extends HTMLAttributes<HTMLTableElement> {
  isLoading?: boolean;
}

export function TableRoot({
  children,
  className,
  isLoading = false,
  ...rest
}: PropsWithChildren<ITableRootProps>) {
  return (
    <table
      className={twMerge("relative bg-white rounded-lg", className)}
      {...rest}
    >
      <ComponentIsVisible when={isLoading}>
        <LinearLoader containerClassName="absolute" />
      </ComponentIsVisible>
      {children}
    </table>
  );
}
