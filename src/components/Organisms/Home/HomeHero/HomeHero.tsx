"use client";

import { Button } from "@ui/Button";
import { Heading } from "@ui/Heading";
import { NextLink } from "@ui/NextLink";
import { Text } from "@ui/Text";
import { Box, Container, Flex } from "@ui/layout";
import { useEffect, useState } from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import useScreenSize from "src/lib/hooks/useScreenSize";
const HomeHero = () => {
  const [hasVideoPlayed, setHasVideoPlayed] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    const hasPlayed = localStorage.getItem("hasVideoPlayed");
    if (hasPlayed) {
      setHasVideoPlayed(true);
    } else {
      setTimeout(() => {
        setHasVideoPlayed(true);
        localStorage.setItem("hasVideoPlayed", "true");
      }, 5000);
    }

    return () => {};
  }, []);

  return (
    <Container className="flex flex-col items-center justify-center h-full">
      <Flex className={"relative flex-col items-center justify-center mb-12"}>
        <Heading
          gradient="primary"
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
        >
          Frontend
        </Heading>
        <Heading
          gradient="primary"
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
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
        <Heading variant="h2" gradient="primary" className="relative text-md">
          Crafting engaging user experiences
          <span
            className="absolute inset-0 text-transparent text-shadow"
            style={{
              textShadow: "35px 30px 3px rgba(136, 128, 128, 0.8)",
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
    </Container>
  );
};

export default HomeHero;
