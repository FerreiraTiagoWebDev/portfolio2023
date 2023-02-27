import TTailwindMeasure from "./TTailwindMeasure";

export interface ITailwindComponent {
  children?: React.ReactNode;
  direction?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
  alignItems?: "stretch" | "start" | "center" | "end" | "baseline";
  padding?: TTailwindMeasure;
  margin?: TTailwindMeasure;
  width?: TTailwindMeasure;
  height?: TTailwindMeasure | string;
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  fontSize?: string | number;
  textAlign?: "text-left" | "text-center" | "text-right";
  color?: string;
  bg?: string;
  gap?: TTailwindMeasure;
  borderRadius?: string | number;
  boxShadow?: string;
  border?: string;
  mx?: TTailwindMeasure;
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
  fontFamily?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  letterSpacing?: string | number;
  lineHeight?: string | number;
  display?: "block" | "inline-block" | "inline" | "flex" | "inline-flex";
  position?: "static" | "relative" | "fixed" | "absolute";
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  overflow?: "auto" | "hidden" | "scroll" | "visible";
  className?: string;
  style?: React.CSSProperties;
}
