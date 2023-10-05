import { HTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { twMerge } from "tailwind-merge";

interface IModalRootProps extends HTMLAttributes<HTMLDivElement> {
  backdrop?: React.ReactNode;
  open: boolean;
}

export function ModalRoot({
  backdrop,
  children,
  className = "",
  open,
  ...rest
}: PropsWithChildren<IModalRootProps>) {
  return (
    <div
      className={classNames("fixed z-[100] inset-0", {
        block: open,
        hidden: !open,
      })}
      role="presentation"
      {...rest}
    >
      <ComponentIsVisible when={!!backdrop}>{backdrop}</ComponentIsVisible>
      <div
        className={classNames(
          twMerge(
            "flex items-center h-full transition-opacity duration-300 -z-1",
            className
          ),
          {
            "visible opacity-100": open,
            "invisible opacity-0": !open,
          }
        )}
        role="presentation"
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
}
