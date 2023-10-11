"use client";

import { useMemo } from "react";

import { IconBaseProps } from "react-icons";
import { FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";

import * as Select from "@radix-ui/react-select";
import { twMerge } from "tailwind-merge";
import { VariantProps } from "tailwind-variants";
import { v4 as uuid } from "uuid";

import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { FieldBase, IFieldBaseProps } from "../Base";
import { selectStyles } from "./styles";

type ISelectFieldSizes = "sm" | "md" | "lg";

export interface ISelectFieldOption {
  disabled?: boolean;
  isVisible?: boolean;
  label: string | number;
  value: string | number | boolean;
}

export interface ISelectFieldGroup {
  label?: string;
  options: ISelectFieldOption[];
}

export interface ISelectFieldProps
  extends Pick<
    Select.SelectProps,
    "defaultValue" | "disabled" | "required" | "name" | "value"
  > {
  containerProps?: {
    className?: string;
    rest?: Omit<IFieldBaseProps, "className">;
  };
  contentProps?: {
    className?: string;
    rest?: Omit<Select.SelectContentProps, "className">;
    variants: VariantProps<typeof selectStyles.content>;
  };
  error?: string;
  groupLabelProps?: {
    className?: string;
    rest?: Omit<Select.SelectLabelProps, "className">;
  };
  groups: ISelectFieldGroup[];
  iconProps?: IconBaseProps;
  itemProps?: {
    className?: string;
    rest?: Omit<Select.SelectItemProps, "className">;
    showIndicator?: boolean;
    variants?: VariantProps<typeof selectStyles.item>;
  };
  label?: string;
  onValueChange?: (value: any) => void;
  placeholder?: string;
  separatorProps?: {
    className?: string;
    rest?: Omit<Select.SelectSeparatorProps, "className">;
  };
  size?: ISelectFieldSizes;
  triggerProps?: {
    className?: string;
    rest?: Omit<Select.SelectTriggerProps, "className">;
    variants?: VariantProps<typeof selectStyles.trigger>;
  };
  viewportProps?: {
    className?: string;
    rest?: Omit<Select.SelectViewportProps, "className">;
  };
}

export function SelectField({
  containerProps,
  contentProps,
  defaultValue,
  disabled = false,
  error,
  groupLabelProps,
  groups,
  iconProps,
  itemProps,
  name,
  onValueChange,
  placeholder = "",
  required = false,
  separatorProps,
  size = "md",
  triggerProps,
  value,
  viewportProps,
}: ISelectFieldProps): JSX.Element {
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
    <FieldBase
      className={twMerge("px-0", containerProps?.className)}
      error={containerProps?.rest?.error || error}
      iconProps={iconProps}
      size={size}
      {...containerProps?.rest}
    >
      <Select.Root
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <Select.Trigger
          className={selectStyles.trigger({
            className: triggerProps?.className,
            errored: !!error,
          })}
          {...triggerProps?.rest}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon
            className={selectStyles.icon({
              errored: !!error,
            })}
          >
            <FiChevronDown size={iconProps?.size || iconSize} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className={selectStyles.content({
              className: contentProps?.className,
            })}
            position="popper"
            sideOffset={5}
            {...contentProps?.rest}
          >
            <Select.ScrollUpButton className="flex items-center justify-center h-8 bg-white text-secondary-two cursor-default">
              <FiChevronUp size={iconProps?.size || iconSize} />
            </Select.ScrollUpButton>
            <Select.Viewport
              className={twMerge("p-4", viewportProps?.className)}
              {...viewportProps?.rest}
            >
              <ComponentIsVisible when={groups.length > 0}>
                {groups.map((group, index) => (
                  <div key={uuid()}>
                    <Select.Group>
                      <ComponentIsVisible when={!!group.label}>
                        <Select.Label
                          className={twMerge(
                            "text-center text-sm text-secondary-one mb-1",
                            groupLabelProps?.className
                          )}
                          {...groupLabelProps?.rest}
                        >
                          {group.label}
                        </Select.Label>
                      </ComponentIsVisible>
                      <ComponentIsVisible when={group.options.length > 0}>
                        {group.options.map(
                          ({ isVisible = true, ...option }) => (
                            <ComponentIsVisible key={uuid()} when={isVisible}>
                              <Select.Item
                                className={selectStyles.item({
                                  className: itemProps?.className,
                                  disabled: option.disabled,
                                  showIndicator: itemProps?.showIndicator,
                                })}
                                disabled={option.disabled}
                                value={option.value.toString()}
                                {...itemProps?.rest}
                              >
                                <Select.ItemText className="flex flex-1">
                                  {option.label}
                                </Select.ItemText>
                                {itemProps?.showIndicator && (
                                  <Select.ItemIndicator>
                                    <FiCheck
                                      size={iconProps?.size || iconSize}
                                    />
                                  </Select.ItemIndicator>
                                )}
                              </Select.Item>
                            </ComponentIsVisible>
                          )
                        )}
                      </ComponentIsVisible>
                      <ComponentIsVisible when={!group.options.length}>
                        <Select.Item
                          className={selectStyles.item({
                            className: itemProps?.className,
                            noLength: !group.options.length,
                          })}
                          disabled
                          value="none"
                          {...itemProps?.rest}
                        >
                          <Select.ItemText className="flex flex-1">
                            No options available
                          </Select.ItemText>
                        </Select.Item>
                      </ComponentIsVisible>
                    </Select.Group>

                    <ComponentIsVisible
                      key={uuid()}
                      when={groups.length - 1 > index}
                    >
                      <Select.Separator
                        className={twMerge(
                          "h-[1px] bg-slate-400 my-4",
                          separatorProps?.className
                        )}
                        {...separatorProps?.rest}
                      />
                    </ComponentIsVisible>
                  </div>
                ))}
              </ComponentIsVisible>

              <ComponentIsVisible when={!groups.length}>
                <Select.Group>
                  <Select.Item
                    className={selectStyles.item({
                      className: itemProps?.className,
                      noLength: !groups.length,
                    })}
                    disabled
                    value="none"
                    {...itemProps?.rest}
                  >
                    <Select.ItemText className="flex">
                      No options available
                    </Select.ItemText>
                  </Select.Item>
                </Select.Group>
              </ComponentIsVisible>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-8 bg-white text-secondary-two cursor-default">
              <FiChevronDown size={iconProps?.size || iconSize} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </FieldBase>
  );
}
