import { ITailwindComponent } from "types";

const FlexBox = ({
  children,
  direction,
  p,
  px,
  py,
  m,
  mx,
  my,
  mt,
  maxW,
  w,
  h,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  bg,
  borderRadius,
  boxShadow,
  className,
  ...props
}: ITailwindComponent) => {
  let classes = "flex ";
  if (direction) classes += `${direction} `;
  if (p) classes += `p-${p} `;
  if (px) classes += `px-${px} `;
  if (py) classes += `py-${py} `;
  if (m) classes += `m-${m} `;
  if (mx) classes += `mx-${mx} `;
  if (mt) classes += `mt-${mt} `;
  if (my) classes += `my-${my} `;
  if (maxW) classes += `max-w-${maxW} `;
  if (w) classes += `w-${w} `;
  if (h) classes += `h-${h} `;
  if (alignItems) classes += `items-${alignItems} `;
  if (justifyContent) classes += `${justifyContent} `;
  if (fontSize) classes += `font-size-${fontSize} `;
  if (textAlign) classes += `text-${textAlign} `;
  if (color) classes += `text-${color} `;
  if (bg) classes += `bg-${bg} `;
  if (borderRadius) classes += `rounded-${borderRadius} `;
  if (boxShadow) classes += `shadow-${boxShadow} `;
  if (className) classes += `${className} `;

  return (
    <div className={` ${classes} `} {...props}>
      {children}
    </div>
  );
};

export default FlexBox;
