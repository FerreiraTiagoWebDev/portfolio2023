import Button from "@mui/material/Button";
import FlexBox from "@ui/FlexBox";
import H2 from "@ui/Heading/H2";
import Link from "@ui/Link";
import Text from "@ui/Text";

const HomeHero = () => {
  return (
    <FlexBox
      className="container py-10 lg:pt-24 md:pt-24 sm:pt-20 xs:pt-20"
      direction="flex-col"
      justifyContent="justify-center"
      alignItems="center"
    >
      <FlexBox
        className={"mb-10"}
        justifyContent="justify-center"
        alignItems="center"
        direction="flex-col"
      >
        <Text variant="h1">Frontend</Text>
        <Text variant="h1">Developer</Text>
      </FlexBox>
      <FlexBox
        className={"mb-10"}
        alignItems="center"
        justifyContent="justify-center"
      >
        <H2 align="center">Crafting engaging user experiences through code</H2>
      </FlexBox>
      <FlexBox
        justifyContent="justify-around"
        alignItems="center"
        className={"mb-10"}
      >
        <Link href="/about">
          <Button>About me</Button>
        </Link>
        <Link href="/work">
          <Button>Work</Button>
        </Link>
      </FlexBox>
      <Button></Button>
    </FlexBox>
  );
};

export default HomeHero;
