"use client";

import { Button } from "@ui/Button";
import { Flex } from "@ui/Flex";
import { Link } from "@ui/Link";
import { Text } from "@ui/Text";

const HomeHero = () => {
  return (
    <Flex className="flex-col container py-10 lg:pt-20 md:pt-18 sm:pt-18 xs:pt-20">
      <Flex className={"mb-10"}>
        <Text>Frontend</Text>
        <Text>Developer</Text>
      </Flex>
      <Flex className={"mb-10"}>
        <Text align="center">
          Crafting engaging user experiences through code
        </Text>
      </Flex>
      <Flex className={"mb-10"}>
        <Link href="/about" style={{ marginRight: "10px" }}>
          <Button>About me</Button>
        </Link>
        <Link href="/work">
          <Button color="secondary">Work</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HomeHero;
