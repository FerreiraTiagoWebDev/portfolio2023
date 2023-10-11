import { HTMLAttributes, InputHTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { VariantProps } from 'tailwind-variants';

import { FieldBase, IFieldBaseProps } from '../Base';
import { switchStyles } from './styles';

export interface ISwitchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof switchStyles.input> {
  containerProps?: {
    className?: string;
    rest?: Omit<IFieldBaseProps, 'className'>;
  };
  label?: string;
  labelProps?: {
    className?: string;
    variants?: VariantProps<typeof switchStyles.label>;
  };
  switchContainerProps?: {
    className?: string;
    rest?: HTMLAttributes<HTMLDivElement>;
  };
}

export function SwitchField({
  className,
  containerProps,
  design,
  disabled = false,
  label,
  labelProps,
  name,
  onChange,
  readOnly = false,
  switchContainerProps,
  ...rest
}: ISwitchFieldProps) {
  return (
    <FieldBase
      className={twMerge(
        'px-0 flex items-center justify-center',
        containerProps?.className,
      )}
      iconPosition="right"
      {...containerProps?.rest}
    >
      <div
        className={classNames(
          twMerge(
            'relative flex flex-wrap items-center justify-center',
            switchContainerProps?.className,
          ),
        )}
        {...switchContainerProps?.rest}
      >
        <input
          className={switchStyles.input({
            design,
            errored: !!containerProps?.rest?.error,
            disabled: disabled || readOnly,
            className,
          })}
          disabled={disabled}
          id={name}
          name={name}
          onChange={onChange}
          readOnly={readOnly}
          type="checkbox"
          {...rest}
        />
        <label
          className={switchStyles.label({
            design: labelProps?.variants?.design,
            disabled: disabled || readOnly,
            errored: !!containerProps?.rest?.error,
            className: labelProps?.className,
          })}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
    </FieldBase>
  );
}
