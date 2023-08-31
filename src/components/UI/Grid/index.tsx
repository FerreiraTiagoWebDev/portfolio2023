import { ITailwindComponent } from "types";

const Grid = ({
  children,
  p,
  px,
  py,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
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
  gap,
  cols,
  className,
  ...props
}: ITailwindComponent) => {
  let classes = "grid ";
  if (cols) classes += `grid-cols-${cols} `;
  if (gap) classes += `gap-${gap} `;
  if (p) classes += `p-${p} `;
  if (px) classes += `px-${px} `;
  if (py) classes += `py-${py} `;
  if (m) classes += `m-${m} `;
  if (mx) classes += `mx-${mx} `;
  if (my) classes += `my-${my} `;
  if (mt) classes += `mt-${mt} `;
  if (mb) classes += `mb-${mb} `;
  if (ml) classes += `ml-${ml} `;
  if (mr) classes += `mr-${mr} `;
  if (maxW) classes += `max-w-${maxW} `;
  if (w) classes += `w-${w} `;
  if (h) classes += `h-${h} `;
  if (alignItems) classes += `items-${alignItems} `;
  if (justifyContent) classes += `justify-${justifyContent} `;
  if (fontSize) classes += `text-${fontSize} `;
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

export default Grid;
