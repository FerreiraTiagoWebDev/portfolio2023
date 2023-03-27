import classNames from "classnames";
import React from "react";

interface IButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  className,
  variant = "primary",
  size = "medium",
  children,
}) => {
  const primaryColor =
    "bg-blueTemplate hover:bg-blueDarkest focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50";
  const secondaryColor =
    "bg-secondary hover:bg-maroon focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50";

  let padding: string;
  switch (size) {
    case "small":
      padding = "px-3 py-2";
      break;
    case "large":
      padding = "px-8 py-4";
      break;
    default:
      padding = "px-6 py-3";
      break;
  }

  const buttonClass = classNames(
    "inline-block rounded-md text-white font-medium",
    padding,
    {
      [primaryColor]: variant === "primary",
      [secondaryColor]: variant === "secondary",
    },
    className
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
