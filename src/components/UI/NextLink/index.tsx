import Link, { LinkProps } from 'next/link';

import { VariantProps } from 'tailwind-variants';

import { nextLinkStyle } from './styles';

interface INextLinkProps extends LinkProps, VariantProps<typeof nextLinkStyle> {
  children?: React.ReactNode;
  className?: string;
}

export function NextLink({
  buttonDesign,
  children,
  className,
  hover,
  href,
  prefetch,
  ...rest
}: INextLinkProps) {
  return (
    <Link
      className={nextLinkStyle({ buttonDesign, hover, className })}
      href={href}
      prefetch={prefetch}
      {...rest}
    >
      {children}
    </Link>
  );
}
