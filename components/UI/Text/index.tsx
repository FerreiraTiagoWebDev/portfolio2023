import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface ITextProps extends TypographyProps {
  children: ReactNode;
}

const Text = ({ children, ...restProps }: ITextProps) => {
  return <Typography {...restProps}>{children}</Typography>;
};

export default Text;
