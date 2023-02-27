import FlexCustom from "@ui/FlexBox";
import HomeCarousel from "./HomeCarousel";
import HomeTitle from "./HomeTitle";

const HomeMain = () => {
  return (
    <FlexCustom
      direction="flex-col"
      bg={"background-mainLighter"}
      style={{ height: "80vh", width: "80vw" }}
    >
      <HomeTitle />
      <HomeCarousel />
    </FlexCustom>
  );
};

export default HomeMain;
