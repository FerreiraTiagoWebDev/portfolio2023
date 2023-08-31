import { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { VariantProps } from "tailwind-variants";

import { linkStyle } from "./styles";

interface ILinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkStyle> {
  hoverVariant?: "underline" | "opacity" | "none";
}

export function Link({
  children,
  className,
  design,
  hoverVariant = "underline",
  href,
  size = "md",
  target,
  textTransform,
  ...rest
}: // eslint-disable-next-line no-undef
PropsWithChildren<ILinkProps>): JSX.Element {
  return (
    <a
      className={linkStyle({
        textTransform,
        design,
        hoverVariant,
        size,
        className,
      })}
      href={href}
      target={target}
      {...rest}
    >
      {children}
    </a>
  );
}
