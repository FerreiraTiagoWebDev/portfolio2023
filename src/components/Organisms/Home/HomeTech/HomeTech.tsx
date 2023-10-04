"use client";

import { Button } from "@ui/Button";
import { Flex } from "@ui/layout";
import { useState } from "react";
// import { Card } from "src/components/UI/Card";

interface HomeTechProps {}

const HomeTech: React.FC<HomeTechProps> = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <Flex className="container my-10 flex-col justify-around">
      <Flex className="flex-col justify-around gap-4">
        <ul className="steps steps-vertical">
          <li
            data-content="★"
            className={`step ${activeCategory >= 0 && "step-accent"}`}
          >
            <Flex className="items-center" style={{ height: "300px" }}>
              <Button
                className={`bg-${
                  activeCategory === 0 ? "blueTemplate" : "secondary"
                }`}
                onClick={() => setActiveCategory(0)}
              >
                Javascript Frameworks
              </Button>
            </Flex>
          </li>
          <li
            data-content="★"
            className={`step ${activeCategory >= 1 && "step-accent"}`}
          >
            <Button
              className={`bg-${
                activeCategory === 1 ? "blueTemplate" : "secondary"
              }`}
              onClick={() => setActiveCategory(1)}
            >
              Css Libraries
            </Button>
          </li>
          <li
            data-content="★"
            className={`step ${activeCategory >= 2 && "step-accent"}`}
          >
            <Button
              className={`bg-${
                activeCategory === 2 ? "blueTemplate" : "secondary"
              }`}
              onClick={() => setActiveCategory(2)}
            >
              Utility Libraries
            </Button>
          </li>
        </ul>
      </Flex>
      {/* <Flex className="flex-col justify-around items-center">
        <ComponentIsVisible when={activeCategory === 0}>
          <Flex className="flex-col justify-around items-center">
            <Card
              title="React.js"
              subTitle="Versions: 16/17/18"
              image={<GrReactjs size={80} color="#61DAFB" />}
            />
            <Card
              title="Next.js"
              subTitle="Versions: 10/11/12/13"
              image={<TbBrandNextjs size={80} color="#000000" />}
            />
            <Card
              title="React Native"
              subTitle="Versions: 0.66"
              image={<TbBrandReactNative size={80} color="#61DAFB" />}
            />
          </Flex>
        </ComponentIsVisible>
        <ComponentIsVisible when={activeCategory === 1}>
          <Flex className="flex-col justify-around items-center">
            <Card
              title="TailwindCss"
              subTitle="Versions: 2/3"
              image={<SiTailwindcss size={80} color="#61dafb" />}
            />
            <Card
              title="MaterialUI/MUI"
              subTitle="Versions: 3/4/5"
              image={<SiMui size={80} color="#1976d2" />}
            />
            <Card
              title="Styled Components"
              subTitle="Versions: 5.6-5.12"
              image={<SiStyledcomponents size={80} color="#DB7093" />}
            />
            <Card
              title="ChakraUI"
              subTitle="Versions: 1/2"
              image={<SiChakraui size={80} color="#319795" />}
            />
            <Card
              title="Daisy UI"
              subTitle="Versions: 2.4"
              image={<SiDaisyui size={80} color="#7C3AED" />}
            />
          </Flex>
        </ComponentIsVisible>
        <ComponentIsVisible when={activeCategory === 2}>
          <Flex className="flex-col justify-around items-center">
            <Card
              title="Redux"
              subTitle="Redux/Redux Toolkit/Redux Saga"
              image={<SiRedux size={80} color="#61dafb" />}
            />
            <Card
              title="MaterialUI/MUI"
              subTitle="Versions: 3/4/5"
              image={<SiMui size={80} color="#1976d2" />}
            />
            <Card
              title="Styled Components"
              subTitle="Versions: 5.6-5.12"
              image={<SiStyledcomponents size={80} color="#DB7093" />}
            />
            <Card
              title="ChakraUI"
              subTitle="Versions: 1/2"
              image={<SiChakraui size={80} color="#319795" />}
            />
            <Card
              title="Daisy UI"
              subTitle="Versions: 2.4"
              image={<SiDaisyui size={80} color="#7C3AED" />}
            />
          </Flex> */}
      {/* </ComponentIsVisible>
      </Flex> */}
    </Flex>
  );
};

export default HomeTech;
