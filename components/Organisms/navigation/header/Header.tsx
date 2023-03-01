import FlexBox from "@ui/FlexBox";
import { CubeLogo } from "public/assets/icons";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

//implement sticky, navlinks, hamburger menu, filter blur

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps}>
      <FlexBox
        justifyContent="justify-between"
        className="w-full p-4 bg-primary"
      >
        <FlexBox className="rounded-md px-1 bg-primary">
          <CubeLogo />
        </FlexBox>

        <FlexBox
          direction="flex-col"
          alignItems="center"
          justifyContent="justify-center"
        >
          <button className="btn bg-secondary">MENU</button>
        </FlexBox>
      </FlexBox>
    </header>
  );
};

export default Header;
