import { ITailwindComponent } from "../../../types";

const Box = ({
  children,
  direction,
  padding,
  margin,
  width,
  height,
  fontSize,
  textAlign,
  color,
  bg,
  borderRadius,
  boxShadow,
  className,
  ...props
}: ITailwindComponent) => {
  let classes = " ";
  if (direction) classes += `${direction} `;
  if (padding) classes += `p-${padding} `;
  if (margin) classes += `m-${margin} `;
  if (width) classes += `w-${width} `;
  if (height) classes += `h-${height} `;
  if (fontSize) classes += `font-size-${fontSize} `;
  if (textAlign) classes += `text-${textAlign} `;
  if (color) classes += `text-${color} `;
  if (bg) classes += `bg-${bg} `;
  if (borderRadius) classes += `rounded-${borderRadius} `;
  if (boxShadow) classes += `shadow-${boxShadow} `;
  if (className) classes += `${className} `;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Box;
