import { PropsWithChildren, TextareaHTMLAttributes, useMemo } from "react";

import { IconBaseProps, IconType } from "react-icons";

import { VariantProps } from "tailwind-variants";

import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { textAreaStyles } from "./styles";

export interface ITextAreaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textAreaStyles.textArea> {
  containerProps?: {
    className?: string;
    variants?: VariantProps<typeof textAreaStyles.container>;
  };
  error?: string;
  icon?: IconType;
  iconProps?: IconBaseProps;
  label?: string;
  labelProps?: {
    className?: string;
    variants?: VariantProps<typeof textAreaStyles.label>;
  };
}

export function TextAreaField({
  className,
  containerProps,
  disabled = false,
  error,
  icon: Icon,
  iconProps,
  label,
  labelProps,
  name,
  readOnly = false,
  rows = 4,
  ...rest
}: PropsWithChildren<ITextAreaFieldProps>): JSX.Element {
  const iconSize = useMemo(() => {
    let iconSizeValue = 20;
    if (containerProps?.variants?.size === "lg") {
      iconSizeValue = 22;
    } else if (containerProps?.variants?.size === "sm") {
      iconSizeValue = 18;
    }

    return iconSizeValue;
  }, [containerProps?.variants?.size]);

  return (
    <div className="flex flex-col w-full">
      <ComponentIsVisible when={!!label}>
        <label
          className={textAreaStyles.label({
            design: labelProps?.variants?.design,
            className: labelProps?.className,
          })}
          htmlFor={name}
        >
          {label}
        </label>
      </ComponentIsVisible>
      <div
        className={textAreaStyles.container({
          design: containerProps?.variants?.design,
          hasIcon: !!Icon,
          errored: !!error,
          size: containerProps?.variants?.size,
          className: containerProps?.className,
        })}
      >
        {Icon && (
          <div className="flex items-center justify-center">
            <Icon
              className={textAreaStyles.icon({
                errored: !!error,
                className: iconProps?.className,
              })}
              size={iconProps?.size || iconSize}
              {...iconProps}
            />
          </div>
        )}
        <textarea
          className={textAreaStyles.textArea({
            disabled: disabled || readOnly,
            className,
          })}
          disabled={disabled}
          name={name}
          readOnly={readOnly}
          rows={rows}
          {...rest}
        />
      </div>
      {error && (
        <div className="flex mt-1">
          <span className="text-primary-two">{error}</span>
        </div>
      )}
    </div>
  );
}
