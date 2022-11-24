export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps}>
      <section className={`w-full p-5 bg-footer-main text-white ${className}`}>
        <p>Footer</p>
      </section>
    </footer>
  );
};

export default Footer;
