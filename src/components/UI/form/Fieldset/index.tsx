import {
  FieldsetHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

import { IconType } from "react-icons";

import { VariantProps } from "tailwind-variants";

import { Divider } from "@ui/Utils/Divider";
import { Icon } from "@ui/Utils/Icon";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { fieldsetStyles } from "./styles";

interface IFieldsetProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement>,
    VariantProps<typeof fieldsetStyles.fieldset> {
  error?: string;
  icon?: IconType;
  legend?: string;
  legendProps?: {
    className?: string;
    rest?: HTMLAttributes<HTMLLegendElement>;
    variants?: VariantProps<typeof fieldsetStyles.legend>;
  };
}

export function Fieldset({
  children,
  className,
  error,
  icon,
  legend,
  legendProps,
  ...rest
}: PropsWithChildren<IFieldsetProps>): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <fieldset
        className={fieldsetStyles.fieldset({
          className,
          errored: !!error,
        })}
        {...rest}
      >
        <ComponentIsVisible when={!!legend}>
          <legend
            className={fieldsetStyles.legend({
              className: legendProps?.className,
              errored: !!error,
            })}
            {...legendProps?.rest}
          >
            {legend}
          </legend>
        </ComponentIsVisible>
        <div className="flex items-center px-2 pb-1">
          <ComponentIsVisible when={!!icon}>
            <Icon
              className="mb-[2px] min-w-16 mx-2"
              iconName={icon as IconType}
            />
            <Divider
              className="bg-secondaryFixxer-one w-4"
              orientation="vertical"
            />
          </ComponentIsVisible>
          {children}
        </div>
      </fieldset>
      <ComponentIsVisible when={!!error}>
        <div className="flex mt-1">
          <span className="text-primary-two">{error}</span>
        </div>
      </ComponentIsVisible>
    </div>
  );
}
