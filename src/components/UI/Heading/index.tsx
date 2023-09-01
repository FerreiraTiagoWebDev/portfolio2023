import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type IHeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: IHeadingVariants;
  gradientText?: boolean;
}

export function Heading({
  children,
  className,
  variant: HeadingTag = "h1",
  gradientText = false,
  ...rest
}: // eslint-disable-next-line no-undef
PropsWithChildren<IHeadingProps>): JSX.Element {
  return (
    <HeadingTag
      className={classNames(
        twMerge(
          `font-inter font-bold text-2xl ${
            gradientText
              ? "bg-clip-text text-transparent bg-gradient-to-br from-muisecondary via-muisecondary to-muithird"
              : "font-extrabold text-secondary-two text-2xl"
          }`,
          className
        )
      )}
      {...rest}
    >
      {children}
    </HeadingTag>
  );
}
