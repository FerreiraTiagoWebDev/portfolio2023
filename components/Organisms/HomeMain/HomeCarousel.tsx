import Box from "@ui/Box";
import CarouselCustom from "../../Molecules/Carousel";
import { HOME_CAROUSEL_ITEMS } from "./HomeCarouselItems";

const HomeCarousel = () => {
  return (
    <Box
      padding={10}
      bg="gradient-to-r from-background-main via-background-secondary to-background-heavySecondary"
      style={{ height: "60vh", width: "70vw" }}
    >
      <CarouselCustom items={HOME_CAROUSEL_ITEMS} />
    </Box>
  );
};

export default HomeCarousel;
