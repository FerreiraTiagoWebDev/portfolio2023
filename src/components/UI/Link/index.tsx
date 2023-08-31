import classNames from 'classnames';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';


type ILinkHoverVariants = 'underline' | 'opacity' | 'none';
type ILinkSizes = 'sm' | 'md' | 'lg';
type ILinkVariants =
  | 'button-primary'
  | 'button-secondary'
  | 'button-secondary-dark';

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hoverVariant?: ILinkHoverVariants;
  size?: ILinkSizes;
  variant?: ILinkVariants;
}

export default function LinkCustom({
  children,
  className,
  hoverVariant = 'underline',
  href,
  size = 'md',
  target,
  variant,
  ...rest
  // eslint-disable-next-line no-undef
}: PropsWithChildren<ILinkProps>): JSX.Element {
  return (
    <a
      className={classNames(
        twMerge(
          `text-white font-semibold flex items-center gap-x-2`,
          className,
        ),
        {
          'h-8 text-sm rounded-md': size === 'sm',
          'h-10': size === 'md',
          'h-12': size === 'lg',
          'bg-primary-one text-white px-8 w-fit justify-center rounded-lg hover:brightness-75':
            variant === 'button-primary',
          'bg-secondary-one text-white px-8 w-fit justify-center rounded-lg hover:brightness-75':
            variant === 'button-secondary',
          'bg-secondary-two text-white px-8 w-fit justify-center rounded-lg hover:brightness-75':
            variant === 'button-secondary-dark',
          'hover:underline': hoverVariant === 'underline',
          'hover:opacity-60': hoverVariant === 'opacity',
          'hover:none': hoverVariant === 'none',
        },
      )}
      href={href}
      target={target}
      {...rest}
    >
      {children}
    </a>
  );
}
