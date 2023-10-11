import { Container } from "@ui/layout";
import HomeHero from "../Organisms/Home/HomeHero/HomeHero";

const HomePage = () => {
  return (
    <Container className="h-[65vh] md:h-[calc(75vh-25px)] w-full my-auto">
      <HomeHero />
    </Container>
  );
};

export default HomePage;
