import { HTMLAttributes, PropsWithChildren, useMemo } from "react";

import { IconBaseProps, IconType } from "react-icons";

import { VariantProps } from "tailwind-variants";

import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { fieldBaseStyles } from "./styles";

export interface IFieldBaseProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldBaseStyles.container> {
  error?: string;
  icon?: IconType;
  iconProps?: IconBaseProps;
  label?: string;
  labelProps?: {
    className?: string;
    rest?: HTMLAttributes<HTMLLabelElement>;
    variants?: VariantProps<typeof fieldBaseStyles.label>;
  };
  name?: string;
}

export function FieldBase({
  children,
  className,
  design,
  disabled,
  error,
  icon: Icon,
  iconPosition,
  iconProps,
  label,
  labelProps,
  name,
  size,
  ...rest
}: PropsWithChildren<IFieldBaseProps>): JSX.Element {
  const iconSize = useMemo(() => {
    let iconSizeValue = 20;
    if (size === "lg") {
      iconSizeValue = 22;
    } else if (size === "sm") {
      iconSizeValue = 18;
    }

    return iconSizeValue;
  }, [size]);

  return (
    <div className="max-w-full w-full relative">
      <ComponentIsVisible when={!!label}>
        <label
          className={fieldBaseStyles.label({
            className: labelProps?.className,
            design: labelProps?.variants?.design,
          })}
          htmlFor={name}
          {...labelProps?.rest}
        >
          {label}
        </label>
      </ComponentIsVisible>
      <div
        className={fieldBaseStyles.container({
          design,
          size,
          iconPosition: Icon && iconPosition,
          errored: !!error,
          disabled,
          className,
        })}
        {...rest}
      >
        {Icon && (
          <div className="flex items-center justify-center w-fit">
            <Icon
              className={fieldBaseStyles.icon({
                errored: !!error,
                className: iconProps?.className,
              })}
              size={iconProps?.size || iconSize}
              {...iconProps}
            />
          </div>
        )}
        {children}
      </div>
      <ComponentIsVisible when={!!error}>
        <div className="flex mt-1 ml-auto w-fit">
          <span className="text-primary-two text-xs">{error}</span>
        </div>
      </ComponentIsVisible>
    </div>
  );
}
