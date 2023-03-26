interface H1CustomProps {
  children?: React.ReactNode;
  align?: string;
}
const H1 = ({ children, align }: H1CustomProps) => {
  return (
    <div
      className={`text-4xl lg:text-8xl md:text-7xl sm:text-7xl xs:text-6xl font-bold font-secondary break-words text-${
        align || "center"
      }`}
    >
      {children}
    </div>
  );
};

export default H1;
