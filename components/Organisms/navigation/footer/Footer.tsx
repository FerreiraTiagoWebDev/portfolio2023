export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps}>
      <section
        className={`w-full bg-footer-main text-white ${className}`}
        style={{ height: "10vh" }}
      >
        <p>Footer</p>
      </section>
    </footer>
  );
};

export default Footer;
