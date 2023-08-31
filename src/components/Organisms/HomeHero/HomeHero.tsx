'use client'

import { Flex } from '@ui/Flex';
import Button from 'src/components/UI/Button';
import Link from "src/components/UI/Link";
import Text from "src/components/UI/Text";


const HomeHero = () => {
  return (
    <Flex
      className="container py-10 lg:pt-20 md:pt-18 sm:pt-18 xs:pt-20"
    >
      <Flex
        className={"mb-10"}
      >
        <Text variant="h1">Frontend</Text>
        <Text variant="h1">Developer</Text>
      </Flex>
      <Flex
        className={"mb-10"}

      >
        <Text variant="h3" fontSize="20px" align="center">Crafting engaging user experiences through code</Text>
      </Flex>
      <Flex

        className={"mb-10"}
      >
        <Link href="/about" style={{ marginRight: "10px" }}>
          <Button >About me</Button>
        </Link>
        <Link href="/work">
          <Button color="secondary">Work</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeHero;
