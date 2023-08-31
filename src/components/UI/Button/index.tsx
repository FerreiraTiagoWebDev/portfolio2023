import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

// import ClipLoader from 'react-spinners/ClipLoader';

import classnames from 'classnames';
import ComponentIsVisible from 'src/components/Atoms/ComponentIsVisible';
import { twMerge } from 'tailwind-merge';



type IButtonSizes = 'sm' | 'md' | 'lg';
type IButtonVariants =
  | 'primary'
  | 'secondary'
  | 'secondary-dark'
  | 'outline'
  | 'icon-only'
  | 'transparent'
  | 'none';
type IButtonTextTransform = 'uppercase' | 'capitalize' | 'lowercase' | 'none';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  size?: IButtonSizes;
  textTransform?: IButtonTextTransform;
  variant?: IButtonVariants;
}

const Button = ({
  children,
  className = '',
  isLoading = false,
  size = 'md',
  textTransform = 'uppercase',
  type = 'button',
  variant = 'primary',
  ...rest
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={classnames(
        twMerge(
          `relative flex items-center justify-center gap-x-2 px-4 rounded-lg text-sm font-inter font-medium z-1 transition-all duration-300`,
          className,
        ),
        {
          'h-8 text-xs': size === 'sm',
          'h-10': size === 'md',
          'h-12': size === 'lg',
          'bg-gradient-to-r from-primary-one to-primary-two text-white hover:saturate-[0.8]':
            variant === 'primary',
          'bg-secondary-one text-white hover:brightness-75':
            variant === 'secondary',
          'bg-secondary-two text-white hover:brightness-75':
            variant === 'secondary-dark',
          'bg-transparent border border-secondary-two text-secondary-two hover:brightness-75':
            variant === 'outline',
          'bg-transparent hover:opacity-60': variant === 'transparent',
          'bg-transparent text-[0] hover:opacity-60': variant === 'icon-only',
          '': variant === 'none',
          uppercase: textTransform === 'uppercase',
          lowercase: textTransform === 'lowercase',
          capitalize: textTransform === 'capitalize',
        },
      )}
      type={type}
      {...rest}
    >
      <ComponentIsVisible when={!isLoading}>{children}</ComponentIsVisible>
      <ComponentIsVisible when={isLoading}>
        {/* <ClipLoader size={20} /> */}
        Loading...
      </ComponentIsVisible>
    </button>
  );
}
export default Button
