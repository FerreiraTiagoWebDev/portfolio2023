import { HTMLAttributes } from 'react';

import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../Button';

type IFormActionsAlign = 'left' | 'center' | 'right';

interface IFormActionsProps extends HTMLAttributes<HTMLDivElement> {
  align?: IFormActionsAlign;
  disabled?: boolean;
  isSubmitting?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  submitText?: string;
}

export function FormActions({
  align = 'right',
  className,
  disabled = false,
  isSubmitting = false,
  onClose,
  onSubmit,
  submitText = 'Submit',
  ...rest
}: IFormActionsProps) {
  return (
    <div
      className={classNames(
        twMerge('flex items-center gap-x-2 mt-4', className),
        {
          'justify-end': align === 'right',
          'justify-center': align === 'center',
          'justify-start': align === 'left',
        },
      )}
      {...rest}
    >
      {onClose && (
        <Button
          className="text-secondary-two hover:opacity-60"
          design="transparent"
          disabled={disabled || isSubmitting}
          onClick={onClose}
        >
          Cancel
        </Button>
      )}
      <Button
        className="rounded px-6"
        design="secondary-dark"
        disabled={disabled || isSubmitting}
        isLoading={isSubmitting}
        onClick={onSubmit}
        type="submit"
      >
        {submitText}
      </Button>
    </div>
  );
}
