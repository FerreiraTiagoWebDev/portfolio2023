import { ComponentPropsWithoutRef, forwardRef } from "react";

const CircleButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className="relative inline-flex items-center justify-center w-48 h-12 text-white bg-black border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-full border-2 border-white">
        <div className="absolute h-6 w-6 bg-white rounded-full animate-ping"></div>
      </div>
      {props.children}
    </button>
  );
});

export default CircleButton;
