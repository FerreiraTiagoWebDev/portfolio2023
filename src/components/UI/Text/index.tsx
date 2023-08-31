import { HTMLAttributes, PropsWithChildren } from "react";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type ITextVariants = "p" | "span" | "label" | "b" | "small";
type ITextAlign = "center" | "left" | "right";

interface ITextProps
  extends HTMLAttributes<
    HTMLParagraphElement & HTMLSpanElement & HTMLLabelElement & HTMLElement
  > {
  align?: ITextAlign;
  variant?: ITextVariants;
}

export function Text({
  align = "left",
  children,
  className,
  variant: TextTag = "p",
  ...rest
}: // eslint-disable-next-line no-undef
PropsWithChildren<ITextProps>): JSX.Element {
  return (
    <TextTag
      className={classNames(
        twMerge("text-base font-inter text-secondary-two", className),
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        }
      )}
      {...rest}
    >
      {children}
    </TextTag>
  );
}
