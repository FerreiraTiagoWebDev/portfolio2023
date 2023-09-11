import { HTMLAttributes, PropsWithChildren } from "react";
import { headingStyle } from "./styles";

type IHeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: IHeadingVariants;
  gradient?: "primary" | "none";
}

export function Heading({
  children,
  className,
  gradient,
  variant: HeadingTag = "h1",
  ...rest
}: // eslint-disable-next-line no-undef
PropsWithChildren<IHeadingProps>): JSX.Element {
  const size = HeadingTag;
  return (
    <HeadingTag
      className={headingStyle({
        gradient,
        size,
        className,
      })}
      {...rest}
    >
      {children}
    </HeadingTag>
  );
}
