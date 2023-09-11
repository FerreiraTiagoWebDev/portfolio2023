"use client";

import { Box } from "@ui/Box";
import { Button } from "@ui/Button";
import { Flex } from "@ui/Flex";
import { Heading } from "@ui/Heading";
import { NextLink } from "@ui/NextLink";
import { Text } from "@ui/Text";
import { useEffect, useState } from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import useScreenSize from "src/lib/hooks/useScreenSize";

const HomeHero = () => {
  const [hasVideoPlayed, setHasVideoPlayed] = useState(false);
  const screenSize = useScreenSize();
  useEffect(() => {
    setTimeout(() => {
      setHasVideoPlayed(true);
    }, 5000);

    return () => {};
  }, []);

  return (
    <Flex className="flex-col container pt-12 sm:pt-14 md:pt-16 lg:pt-22 pb-8 sm:pb-10 md:pb-12 lg:pb-14">
      <Flex className={"relative flex-col items-center justify-center mb-12"}>
        <Heading
          gradient="primary"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
        >
          Frontend
        </Heading>
        <Heading
          gradient="primary"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
        >
          Developer
        </Heading>
        <ComponentIsVisible
          when={!hasVideoPlayed && !!screenSize.width && screenSize.width > 769}
        >
          <Box
            className="bg-gray-200 p-1 rounded z-10 animate-move-right"
            style={{
              position: "absolute",
              top: "90%",
              left: "75%",
              transform: "transition(-50%, -50%)",
            }}
          >
            <video
              autoPlay={true}
              loop={true}
              muted
              src={"/assets/videos/hi5man.mp4"}
              height="300"
              width="300"
              style={{ borderRadius: "20px" }}
            />
            <Text>{`Thank you for visiting my website! :)`}</Text>
          </Box>
        </ComponentIsVisible>
      </Flex>
      <Flex className={"mb-12 justify-center"}>
        <Heading variant="h2" gradient="primary" className="relative">
          Crafting engaging user experiences
          <span
            className="absolute inset-0 text-transparent text-shadow"
            style={{
              textShadow: "40px 30px 3px rgba(136, 128, 128, 0.8)",
              textDecoration: "line-through",
              zIndex: -1,
            }}
          >
            Crafting broken user experiences
          </span>
        </Heading>
      </Flex>
      <Flex className={"items-center justify-center gap-4 my-4"}>
        <NextLink hover="opacity" href="/about">
          <Button design="primary" className="text-white">
            About me
          </Button>
        </NextLink>
        <NextLink hover="opacity" href="/tech">
          <Button design="secondary" className="text-white">
            Tech
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default HomeHero;
