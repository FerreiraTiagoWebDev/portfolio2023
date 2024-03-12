import { Flex } from "@ui/layout";
import HomeCarousel from "../Organisms/Home/HomeCarousel/HomeCarousel";
import HomeHero from "../Organisms/Home/HomeHero/HomeHero";

const HomePage = () => {
  return (
    <Flex className="flex-col items-center justify-center">
      <HomeHero />
      <HomeCarousel />
    </Flex>
  );
};

export default HomePage;
