interface H1CustomProps {
  children?: React.ReactNode;
  align?: string;
}
const H2 = ({ children, align }: H1CustomProps) => {
  return <div className={`text-2xl text-${align || "center"}`}>{children}</div>;
};

export default H2;
