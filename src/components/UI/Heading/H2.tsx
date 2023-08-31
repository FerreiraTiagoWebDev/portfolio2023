interface H1CustomProps {
  children?: React.ReactNode;
  align?: string;
}
const H2 = ({ children, align }: H1CustomProps) => {
  return (
    <div
      className={`text-${
        align || "center"
      }  xs:text-xl sm:text-md  md:text-2xl `}
    >
      {children}
    </div>
  );
};

export default H2;
