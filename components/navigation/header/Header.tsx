export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header {...headerProps}>
      <div className="bg-navbar-main w-full h-24 flex items-center justify-between ">
        <div className="m-3">Logo</div>
        <div className="flex items-center justify-center">
          <div className="m-3">Link One</div>
          <div className="m-3">Link One</div>
          <div className="m-3">Link One</div>
        </div>
        <div className="m-3">Another Link</div>
      </div>
    </header>
  );
};

export default Header;
