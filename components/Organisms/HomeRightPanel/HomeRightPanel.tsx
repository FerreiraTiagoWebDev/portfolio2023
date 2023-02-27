import FlexCustom from "@ui/FlexBox";
import Image from "next/image";
import CarouselItemsHomeRightPanelLogos from "./CarouselItemsHomeRightPanelLogos";

const HomeRightPanel = () => {
  return (
    <FlexCustom
      direction="flex-col"
      bg="background-main"
      alignItems="center"
      justifyContent="justify-center"
      style={{ height: "100%", width: "100%", position: "relative" }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          opacity: 0.8,
        }}
      >
        <Image
          src="/images/homeHero1.jpg"
          alt="Example image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          height: "200px",
          width: "200px",
          backgroundColor: "white",
          borderRadius: "100%",
          opacity: 1,
        }}
      >
        <CarouselItemsHomeRightPanelLogos />
      </div>
    </FlexCustom>
  );
};

export default HomeRightPanel;
