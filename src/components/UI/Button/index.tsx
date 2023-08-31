import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import { VariantProps } from "tailwind-variants";

import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { buttonStyle } from "./styles";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  isLoading?: boolean;
  loaderColor?: string;
}

export function Button({
  children,
  className,
  design,
  isLoading = false,
  loaderColor = "#FFF",
  size,
  textTransform,
  type = "button",
  ...rest
}: // eslint-disable-next-line no-undef
PropsWithChildren<IButtonProps>): JSX.Element {
  return (
    <button
      className={buttonStyle({
        size,
        design,
        textTransform,
        className,
      })}
      type={type}
      {...rest}
    >
      <ComponentIsVisible when={!isLoading}>{children}</ComponentIsVisible>
      <ComponentIsVisible when={isLoading}>
        <ClipLoader color={loaderColor} size={20} />
      </ComponentIsVisible>
    </button>
  );
}
