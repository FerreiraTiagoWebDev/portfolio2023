// Text.tsx
import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";
import { textStyle } from "./styles"; // Import your text styles

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
      className={classNames(textStyle({ size: TextTag }), className, {
        "text-center": align === "center",
        "text-left": align === "left",
        "text-right": align === "right",
      })}
      {...rest}
    >
      {children}
    </TextTag>
  );
}
