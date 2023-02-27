import FlexCustom from "@ui/FlexBox";
import HomeMain from "../Organisms/HomeMain/HomeMain";
import HomeRightPanel from "../Organisms/HomeRightPanel/HomeRightPanel";

const HomePage = () => {
  return (
    <FlexCustom style={{ height: "80vh", width: "100vw" }}>
      <HomeMain />
      <HomeRightPanel />
    </FlexCustom>
  );
};

export default HomePage;
