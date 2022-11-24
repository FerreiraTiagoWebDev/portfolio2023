import CubeLogo from "../../../assets/icons/logo/CubeLogo";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps}>
      {/* <div className="bg-navbar-main w-full h-24 flex items-center justify-between "> */}
      <div className="bg-gradient-to-r from-darkBlue via-midBlue to-lightBlue w-full h-24 flex items-center justify-between text-white ">
        <div className="m-3">Another Link</div>
        <div className="flex items-center justify-center">
          <div className="bg-background-main   absolute top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl border-4 border-background-heavySecondary">
            <CubeLogo />
          </div>
        </div>
        <div className="flex">
          <div className="m-3">Link One</div>
          <div className="m-3">Link One</div>
          <div className="m-3">Link One</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
