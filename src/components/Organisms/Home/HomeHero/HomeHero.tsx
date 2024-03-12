"use client";

import { Heading } from "@ui/Heading";
import { Text } from "@ui/Text";
import { Box, Container, Flex } from "@ui/layout";
import { useEffect, useState } from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import useScreenSize from "src/lib/hooks/useScreenSize";
import HomeHeroActionButtons from "./ActionButtons";
import HomeHeroSubtitle from "./subtitle";
const HomeHero = () => {
  const [hasVideoPlayed, setHasVideoPlayed] = useState<boolean | null>(null);

  const screenSize = useScreenSize();

  useEffect(() => {
    const hasPlayed =
      localStorage.getItem("hasVideoPlayed") === "true" ? true : false;
    if (hasPlayed) {
      setHasVideoPlayed(true);
    } else {
      const timer = setTimeout(() => {
        setHasVideoPlayed(true);
        localStorage.setItem("hasVideoPlayed", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Container className="flex flex-col items-center justify-center h-full">
      <Flex className={"relative flex-col items-center justify-center mb-12"}>
        <Heading
          gradient="primary"
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
        >
          Frontend
        </Heading>
        <Heading
          gradient="primary"
          className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
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

      <HomeHeroSubtitle />

      <HomeHeroActionButtons />
    </Container>
  );
};

export default HomeHero;
