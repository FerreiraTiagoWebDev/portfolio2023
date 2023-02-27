import Box from "@ui/Box";
import FlexCustom from "@ui/FlexBox";
import { CubeLogo } from "assets/icons";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps}>
      <FlexCustom
        alignItems="center"
        color="white"
        justifyContent="justify-around"
        style={{
          height: "10vh",
          backgroundImage:
            "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
        }}
        className="w-full"
        bg="gradient-to-r from-darkBlue via-midBlue to-lightBlue"
      >
        <Box className={"m-8"}>Home</Box>
        <FlexCustom>
          <div className="bg-background-main absolute top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-2xl border-4 border-background-heavySecondary">
            <CubeLogo />
          </div>
        </FlexCustom>
        <FlexCustom>
          <div className="m-4">About</div>
          <div className="m-4">Skills</div>
          <div className="m-4">Contact</div>
        </FlexCustom>
      </FlexCustom>
    </header>
  );
};

export default Header;
