interface H1CustomProps {
  children?: React.ReactNode;
}
const H1 = ({ children }: H1CustomProps) => {
  return <div className="text-6xl font-bold font-harmond">{children}</div>;
};

export default H1;
