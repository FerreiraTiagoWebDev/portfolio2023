import { HTMLAttributes, InputHTMLAttributes, SVGAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { VariantProps } from 'tailwind-variants';

import { FieldBase, IFieldBaseProps } from '../Base';
import { checkboxStyles } from './styles';

export interface ICheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    VariantProps<typeof checkboxStyles.input> {
  checkboxContainerProps?: {
    className?: string;
    rest?: HTMLAttributes<HTMLDivElement>;
  };
  containerProps?: {
    className?: string;
    rest?: Omit<IFieldBaseProps, 'className'>;
  };
  label?: string;
  labelProps?: {
    className?: string;
    style?: React.CSSProperties;
    variants?: VariantProps<typeof checkboxStyles.label>;
  };
  svgProps?: {
    className?: string;
    rest?: SVGAttributes<SVGElement>;
  };
}

export function CheckboxField({
  checkboxContainerProps,
  className,
  containerProps,
  design,
  disabled = false,
  label,
  labelProps,
  name,
  onChange,
  readOnly = false,
  svgProps,
  ...rest
}: ICheckboxFieldProps) {
  return (
    <FieldBase
      className={twMerge('px-0', containerProps?.className)}
      iconPosition="right"
      {...containerProps?.rest}
    >
      <div
        className={classNames(
          twMerge(
            'flex flex-1 items-center relative',
            checkboxContainerProps?.className,
          ),
        )}
        {...checkboxContainerProps?.rest}
      >
        <input
          className={checkboxStyles.input({
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
          className={checkboxStyles.label({
            design: labelProps?.variants?.design,
            disabled: disabled || readOnly,
            errored: !!containerProps?.rest?.error,
            className: labelProps?.className,
          })}
          htmlFor={name}
          style={labelProps?.style}
        >
          {label}
        </label>

        <svg
          aria-hidden="true"
          aria-labelledby="checkbox mark"
          className={twMerge(
            'absolute left-0 w-5 h-5 transition-all duration-300 -rotate-90 opacity-0 pointer-events-none top-1.5 fill-white stroke-white peer-checked:rotate-0 peer-checked:opacity-100 peer-hover:fill-white peer-hover:stroke-white peer-focus:fill-white peer-focus:stroke-white peer-disabled:cursor-not-allowed',
            svgProps?.className,
          )}
          fill="none"
          role="graphics-symbol"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          {...svgProps?.rest}
        >
          <title id="title-01">Check mark icon</title>
          <desc id="description-01">
            Check mark icon to indicate whether the radio input is checked or
            not.
          </desc>
          <path
            clipRule="evenodd"
            d="M12.8116 5.17568C12.9322 5.2882 13 5.44079 13 5.5999C13 5.759 12.9322 5.91159 12.8116 6.02412L7.66416 10.8243C7.5435 10.9368 7.37987 11 7.20925 11C7.03864 11 6.87501 10.9368 6.75435 10.8243L4.18062 8.42422C4.06341 8.31105 3.99856 8.15948 4.00002 8.00216C4.00149 7.84483 4.06916 7.69434 4.18846 7.58309C4.30775 7.47184 4.46913 7.40874 4.63784 7.40737C4.80655 7.406 4.96908 7.46648 5.09043 7.57578L7.20925 9.55167L11.9018 5.17568C12.0225 5.06319 12.1861 5 12.3567 5C12.5273 5 12.691 5.06319 12.8116 5.17568Z"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </FieldBase>
  );
}
