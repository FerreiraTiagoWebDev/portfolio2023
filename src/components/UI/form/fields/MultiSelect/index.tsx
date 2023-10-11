"use client";

import { AiFillCloseCircle, AiOutlineArrowDown } from "react-icons/ai";
import Select, {
  ActionMeta,
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
  Props,
} from "react-select";

import classNames from "classnames";
import { twMerge } from "tailwind-merge";

import { Flex } from "../../../layout";

import { Text } from "@ui/Text";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import {
  clearIndicatorStyles,
  controlStyles,
  dropdownIndicatorStyles,
  groupHeadingStyles,
  indicatorsContainerStyles,
  indicatorSeparatorStyles,
  menuStyles,
  multiValueLabelStyles,
  multiValueRemoveStyles,
  multiValueStyles,
  noOptionsMessageStyles,
  optionStyles,
  placeholderStyles,
  selectInputStyles,
  singleValueStyles,
  valueContainerStyles,
} from "./styles";

export type NeededParamFromReactSelect = ActionMeta<unknown>;

interface IMultiSelectFieldProps extends Props {
  disabled?: boolean;
  error: string | undefined;
  label?: string;
}

function DropdownIndicator(props: DropdownIndicatorProps) {
  return (
    <components.DropdownIndicator {...props}>
      <AiOutlineArrowDown />
    </components.DropdownIndicator>
  );
}

function ClearIndicator(props: ClearIndicatorProps) {
  return (
    <components.ClearIndicator {...props}>
      <AiFillCloseCircle />
    </components.ClearIndicator>
  );
}

function MultiValueRemove(props: MultiValueRemoveProps) {
  return (
    <components.MultiValueRemove {...props}>
      <AiFillCloseCircle />
    </components.MultiValueRemove>
  );
}

export function MultiSelect({
  disabled,
  error,
  label,
  options,
  value,
  ...props
}: IMultiSelectFieldProps) {
  return (
    <Flex
      className={classNames("w-full flex flex-col z-10", {
        "cursor-not-allowed": disabled,
      })}
    >
      <Text className="text-primaryFixxer-one">{label}</Text>
      <Select
        classNames={{
          control: ({ isFocused }) =>
            twMerge(
              isFocused ? controlStyles.focus : controlStyles.nonFocus,
              controlStyles.base
            ),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            twMerge(
              isFocused && optionStyles.focus,
              isSelected && optionStyles.selected,
              optionStyles.base
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        closeMenuOnSelect={false}
        components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
        hideSelectedOptions={false}
        isDisabled={disabled}
        isMulti
        options={options}
        placeholder="Selecteer een optie"
        styles={{
          input: (base) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
            },
          }),
          // On mobile, the label will truncate automatically, so we want to
          // override that behaviour.
          multiValueLabel: (base) => ({
            ...base,
            whiteSpace: "normal",
            overflow: "visible",
          }),
          control: (base) => ({
            ...base,
            transition: "none",
          }),
        }}
        unstyled
        value={value}
        {...props}
      />
      <ComponentIsVisible when={!!error}>
        <div className="flex mt-1 ml-auto w-fit">
          <span className="text-primary-two text-xs">{error}</span>
        </div>
      </ComponentIsVisible>
    </Flex>
  );
}
