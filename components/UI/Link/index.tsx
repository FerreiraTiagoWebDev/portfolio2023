import Link, { LinkProps } from "next/link";
import { CSSProperties, ReactNode } from "react";

interface LinkCustomProps extends LinkProps {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}

const LinkCustom = ({
  href,
  children,
  style,
  ...restProps
}: LinkCustomProps) => {
  return (
    <Link href={href} style={style} {...restProps}>
      {children}
    </Link>
  );
};

export default LinkCustom;
