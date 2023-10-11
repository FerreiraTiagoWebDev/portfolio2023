import { HTMLAttributes, InputHTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { VariantProps } from 'tailwind-variants';

import { FieldBase, IFieldBaseProps } from '../Base';
import { radioStyles } from './styles';

interface IRadioFieldGroupOption {
  label: string;
  value: string | number;
}

export interface IRadioFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof radioStyles.input> {
  containerProps?: IFieldBaseProps;
  labelProps?: {
    className?: string;
    rest?: HTMLAttributes<HTMLLabelElement>;
  };
  radioContainerProps?: {
    className?: string;
    rest?: HTMLAttributes<HTMLDivElement>;
  };
  radioGroupOptions: IRadioFieldGroupOption[];
}

export function RadioField({
  className,
  containerProps,
  disabled = false,
  labelProps,
  name,
  onChange,
  radioContainerProps,
  radioGroupOptions,
  readOnly = false,
  ...rest
}: IRadioFieldProps): JSX.Element {
  return (
    <FieldBase {...containerProps}>
      {radioGroupOptions.map(option => (
        <div
          className={classNames(
            twMerge(
              `flex flex-1 items-center relative`,
              radioContainerProps?.className,
            ),
          )}
          key={option.value}
          {...radioContainerProps?.rest}
        >
          <label
            className={radioStyles.label({
              className: labelProps?.className,
              disabled: disabled || readOnly,
              errored: !!containerProps?.error,
              size: containerProps?.size,
            })}
            htmlFor={`${name}-${option.value}`}
          >
            {option.label}
          </label>

          <input
            className={radioStyles.input({
              className,
              disabled: disabled || readOnly,
              errored: !!containerProps?.error,
              inputSize: containerProps?.size,
            })}
            disabled={disabled}
            id={`${name}-${option.value}`}
            name={name}
            onChange={onChange}
            readOnly={readOnly}
            type="radio"
            value={option.value}
            {...rest}
          />

          <svg
            aria-labelledby="radio check"
            className={radioStyles.svg({
              disabled: disabled || readOnly,
              size: containerProps?.size,
            })}
            fill="none"
            role="graphics-symbol"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="title-1">Circle Shape</title>
            <desc id="description-1">
              Circle shape to indicate whether the radio input is checked or
              not.
            </desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>
      ))}
    </FieldBase>
  );
}
