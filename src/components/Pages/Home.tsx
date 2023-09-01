import { Flex } from "@ui/Flex";
import HomeHero from "src/components/Organisms/HomeHero/HomeHero";
import HomeCarousel from "../Organisms/HomeCarousel/HomeCarousel";

const HomePage = () => {
  return (
    <Flex className="flex-col  w-full ">
      <HomeHero />
      <HomeCarousel />
    </Flex>
  );
};

export default HomePage;
