"use client";

import { InputHTMLAttributes, useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { FieldBase, IFieldBaseProps } from "../Base";

export interface IPasswordFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  containerProps?: {
    className?: string;
    rest?: Omit<IFieldBaseProps, "className">;
  };
  showPasswordButton?: boolean;
}

export function PasswordField({
  className,
  containerProps,
  disabled = false,
  name,
  readOnly = false,
  showPasswordButton = true,
  ...rest
}: IPasswordFieldProps): JSX.Element {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );

  const handleChangePasswordType = (type: string) => {
    if (type === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <FieldBase
      className={twMerge("grid-cols-[1fr_auto]", containerProps?.className)}
      {...containerProps?.rest}
    >
      <input
        className={classNames(
          twMerge(
            "bg-transparent flex flex-1 h-full min-w-fit text-sm text-gray-800 data-[placeholder]:text-sm focus-visible:outline-0",
            className
          ),
          {
            "disabled:cursor-not-allowed disabled:text-gray-700 read-only:cursor-not-allowed read-only:text-gray-700":
              disabled || readOnly,
          }
        )}
        disabled={disabled}
        name={name}
        readOnly={readOnly}
        type={passwordType}
        {...rest}
      />
      <ComponentIsVisible when={showPasswordButton}>
        <button
          className="bg-transparent text-[0] text-gray-600 hover:opacity-70"
          onClick={() => handleChangePasswordType(passwordType)}
          type="button"
        >
          <ComponentIsVisible when={passwordType === "text"}>
            <FiEyeOff size={18} />
          </ComponentIsVisible>
          <ComponentIsVisible when={passwordType === "password"}>
            <FiEye size={18} />
          </ComponentIsVisible>
        </button>
      </ComponentIsVisible>
    </FieldBase>
  );
}
