import { Container } from "@ui/layout";
import HomeHero from "../Organisms/Home/HomeHero/HomeHero";

const HomePage = () => {
  return (
    // 100vh - (header 10vh-30px + footer 10vh-30px + carousel 5vh) = 75vh
    <Container className="h-[65vh] md:h-[75vh] w-full my-auto">
      <HomeHero />
    </Container>
  );
};

export default HomePage;
