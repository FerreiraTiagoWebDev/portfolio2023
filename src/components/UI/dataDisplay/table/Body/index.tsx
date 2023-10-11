import { SkeletonLoader } from "@ui/loader";
import { HTMLAttributes, PropsWithChildren, useMemo } from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";

import { twMerge } from "tailwind-merge";

interface ITableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  isLoading?: boolean;
  linesForLoading?: number;
}

export function TableBody({
  children,
  className,
  isLoading = false,
  linesForLoading = 5,
  ...rest
}: PropsWithChildren<ITableBodyProps>) {
  const loadingRowHeight = useMemo(() => {
    const loadingRowHeightValue = 40 * linesForLoading;

    return `h-[${loadingRowHeightValue}px]`;
  }, [linesForLoading]);

  return (
    <tbody className={twMerge("", className)} {...rest}>
      <ComponentIsVisible when={isLoading}>
        <tr className={loadingRowHeight}>
          <td className="p-0 text-center" colSpan={100}>
            <SkeletonLoader
              borderRadius={0}
              count={linesForLoading}
              height={38}
            />
          </td>
        </tr>
      </ComponentIsVisible>
      <ComponentIsVisible when={!isLoading}>{children}</ComponentIsVisible>
    </tbody>
  );
}
