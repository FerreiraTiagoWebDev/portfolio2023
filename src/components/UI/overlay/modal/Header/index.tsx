import { Heading } from "@ui/Heading";
import { HTMLAttributes } from "react";

import { FiX } from "react-icons/fi";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";

import { twMerge } from "tailwind-merge";

interface IModalHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  handleClose?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

export function ModalHeader({
  className,
  handleClose,
  title,
  ...rest
}: IModalHeaderProps) {
  return (
    <div
      className={twMerge(
        "bg-secondaryLighter grid grid-cols-[1fr_auto] p-4",
        className
      )}
      {...rest}
    >
      <Heading className=" text-white" variant="h6">
        {title}
      </Heading>
      <ComponentIsVisible when={!!handleClose}>
        <button
          className="bg-transparent text-white hover:opacity-60"
          onClick={handleClose}
          type="button"
        >
          <FiX size={24} />
        </button>
      </ComponentIsVisible>
    </div>
  );
}
