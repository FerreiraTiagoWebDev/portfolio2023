'use client';

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { FieldBase, IFieldBaseProps } from '../Base';

export interface INumberFieldProps
  extends DetailedHTMLProps<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    HTMLInputElement
  > {
  containerProps?: IFieldBaseProps;
}

export function NumberField({
  className,
  containerProps,
  disabled = false,
  name,
  readOnly = false,
  ...rest
}: INumberFieldProps): JSX.Element {
  return (
    <FieldBase {...containerProps}>
      <input
        className={classNames(
          twMerge(
            'bg-transparent flex flex-1 h-full min-w-fit w-full max-w-full text-sm text-gray-800 data-[placeholder]:text-sm focus-visible:outline-0',
            className,
          ),
          {
            'disabled:cursor-not-allowed disabled:text-gray-700 read-only:cursor-not-allowed read-only:text-gray-700':
              disabled || readOnly,
          },
        )}
        disabled={disabled}
        name={name}
        readOnly={readOnly}
        type="text"
        {...rest}
      />
    </FieldBase>
  );
}
