import { Flex } from "@ui/Flex";
import HomeHero from "src/components/Organisms/HomeHero/HomeHero";

const HomePage = () => {
  return (
    <Flex className="flex-col  h-screen w-full ">
      <HomeHero />
      {/* <HomeCarousel /> */}
    </Flex>
  );
};

export default HomePage;
