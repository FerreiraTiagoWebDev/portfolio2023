"use client";

import { Button } from "@ui/Button";
import { Flex } from "@ui/Flex";
import { Heading } from "@ui/Heading";
import { Link } from "@ui/Link";
import { Text } from "@ui/Text";
import { useEffect, useState } from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";

const HomeHero = () => {
  const [hasVideoPlayed, setHasVideoPlayed] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHasVideoPlayed(true);
    }, 5000);

    return () => {};
  }, []);

  return (
    <Flex className="flex-col container py-10 lg:pt-20 md:pt-18 sm:pt-18 xs:pt-20 ">
      <Flex className={"relative flex-col items-center justify-center mb-12"}>
        <Heading
          gradient="primary"
          className="text-5xl lg:text-9xl md:text-7xl sm:text-6xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
        >
          Frontend
        </Heading>
        <Heading
          gradient="primary"
          className="text-5xl lg:text-9xl md:text-7xl sm:text-6xl text-center border-r-8 rounded-br-2xl rounded-tr-2xl pr-2"
        >
          Developer
        </Heading>
        <ComponentIsVisible when={!hasVideoPlayed}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "transition(0px, -50%)",
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
            <Text>Thank you for visiting my website ! =D</Text>
          </div>
        </ComponentIsVisible>
      </Flex>
      <Flex className={"mb-12 justify-center"}>
        <Heading gradient="primary" className="text-2xl font-semibold relative">
          Crafting engaging user experiences through code
          <span
            className="absolute inset-0 text-transparent text-shadow"
            style={{
              textShadow: "70px 30px 3px rgba(136, 128, 128, 0.8)",
              textDecoration: "line-through",
              zIndex: -1,
            }}
          >
            Crafting broken user experiences through code
          </span>
        </Heading>
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
