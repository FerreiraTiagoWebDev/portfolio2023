interface TextCustomProps {
  children?: React.ReactNode;
  fontSize?: string | number;
  fontFamily?: string;
  color?: string;
  textAlign?: "text-left" | "text-center" | "text-right";
  margin?: string | number;
  padding?: string | number;
  className?: string;
}

const TextCustom = ({
  children,
  fontSize,
  fontFamily = "harmond",
  color = "black",
  textAlign,
  margin,
  padding,
  className,
}: TextCustomProps) => {
  return (
    <div
      className={`text-${fontSize} font-${fontFamily} text-${color} text-${textAlign} m-${margin} p-${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default TextCustom;
