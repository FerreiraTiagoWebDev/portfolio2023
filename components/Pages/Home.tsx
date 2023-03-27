import H2 from "@ui/Heading/H2";
import HomeHero from "components/Organisms/HomeHero/HomeHero";
import HomeTech from "components/Organisms/HomeTech/HomeTech";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <H2>Tech</H2>
      <HomeTech />
    </>
  );
};

export default HomePage;
