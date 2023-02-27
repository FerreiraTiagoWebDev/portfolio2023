import { ITailwindComponent } from "../../../types";

const FlexCustom = ({
  alignItems,
  bg,
  borderRadius,
  boxShadow,
  children,
  className,
  color,
  direction,
  fontSize,
  gap,
  height,
  justifyContent,
  margin,
  mx,
  padding,
  textAlign,
  width,
  ...props
}: ITailwindComponent) => {
  let classes = "flex ";
  if (alignItems) classes += `items-${alignItems} `;
  if (bg) classes += `bg-${bg} `;
  if (borderRadius) classes += `rounded-${borderRadius} `;
  if (boxShadow) classes += `shadow-${boxShadow} `;
  if (className) classes += `${className} `;
  if (color) classes += `text-${color} `;
  if (direction) classes += `${direction} `;
  if (fontSize) classes += `font-size-${fontSize} `;
  if (gap) classes += `gap-${gap} `;
  if (height) classes += `h-${height} `;
  if (justifyContent) classes += `${justifyContent} `;
  if (margin) classes += `m-${margin} `;
  if (mx) classes += `mx-${mx} `;
  if (padding) classes += `p-${padding} `;
  if (textAlign) classes += `text-${textAlign} `;
  if (width) classes += `w-${width} `;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default FlexCustom;
