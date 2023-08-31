interface H1CustomProps {
  children?: React.ReactNode;
  align?: string;
}
const H1 = ({ children, align }: H1CustomProps) => {
  return (
    <div
      className={`text-4xl font-bold font-secondary break-words text-${
        align || "center"
      } lg:text-8xl md:text-7xl sm:text-7xl xs:text-5xl `}
      style={{ color: "#122B48" }}
    >
      {children}
    </div>
  );
};

export default H1;
