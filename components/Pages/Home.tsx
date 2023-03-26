import Box from "@ui/Box";
import Button from "@ui/Button";
import FlexBox from "@ui/FlexBox";
import H1 from "@ui/Heading";
import H2 from "@ui/Heading/H2";
import Link from "next/link";

const HomePage = () => {
  return (
    <FlexBox
      className="container py-20 lg:pt-40 md:pt-24 sm:pt-20 xs:pt-20"
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
        <H1>Frontend</H1>
        <H1>Developer</H1>
      </FlexBox>
      <Box className={"mb-10"}>
        <H2 align="center">Crafting engaging user experiences through code</H2>
      </Box>
      <FlexBox justifyContent="justify-around" className={"mb-10"}>
        <Link href="/about" passHref>
          <Button className="m-2">About me</Button>
        </Link>
        <Link href="/work" passHref>
          <Button className="bg-secondary m-2">Work</Button>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default HomePage;
