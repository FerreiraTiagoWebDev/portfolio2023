import { VariantProps } from 'tailwind-variants';

import { linearLoaderStyle } from './styles';

interface ILinearLoaderProps
  extends VariantProps<typeof linearLoaderStyle.bar> {
  backgroundBarClassName?: string;
  barClassName?: string;
  containerClassName?: string;
}

export function LinearLoader({
  backgroundBarClassName,
  barClassName,
  color,
  containerClassName,
}: ILinearLoaderProps) {
  return (
    <div
      className={linearLoaderStyle.container({ className: containerClassName })}
    >
      <div
        className={linearLoaderStyle.backgroundBar({
          className: backgroundBarClassName,
          color,
        })}
      >
        <div
          className={linearLoaderStyle.bar({
            className: barClassName,
            color,
          })}
        />
      </div>
    </div>
  );
}
