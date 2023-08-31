import FlexBox from "@ui/Flex";
import { useState } from "react";
import { GrReactjs } from "react-icons/gr";
import {
  SiChakraui,
  SiDaisyui,
  SiMui,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import Button from "src/components/UI/Button";
import { Card } from "src/components/UI/Card";

interface HomeTechProps { }

const HomeTech: React.FC<HomeTechProps> = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <FlexBox
      className="container my-10"
      direction="flex-row"
      justifyContent="justify-around"
    >
      <FlexBox
        direction="flex-col"
        justifyContent="justify-around"
        className="gap-4"
      >
        <ul className="steps steps-vertical">
          <li
            data-content="★"
            className={`step ${activeCategory >= 0 && "step-accent"}`}
          >
            <FlexBox alignItems="center" style={{ height: "300px" }}>
              <Button
                className={`bg-${activeCategory === 0 ? "blueTemplate" : "secondary"
                  }`}
                onClick={() => setActiveCategory(0)}
              >
                Javascript Frameworks
              </Button>
            </FlexBox>
          </li>
          <li
            data-content="★"
            className={`step ${activeCategory >= 1 && "step-accent"}`}
          >
            <Button
              className={`bg-${activeCategory === 1 ? "blueTemplate" : "secondary"
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
              className={`bg-${activeCategory === 2 ? "blueTemplate" : "secondary"
                }`}
              onClick={() => setActiveCategory(2)}
            >
              Utility Libraries
            </Button>
          </li>
        </ul>
      </FlexBox>
      <FlexBox direction="flex-col" className="justify-around items-center">
        <ComponentIsVisible when={activeCategory === 0}>
          <FlexBox direction="flex-col" className="justify-around items-center">
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
          </FlexBox>
        </ComponentIsVisible>
        <ComponentIsVisible when={activeCategory === 1}>
          <FlexBox direction="flex-col" className="justify-around items-center">
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
          </FlexBox>
        </ComponentIsVisible>
        <ComponentIsVisible when={activeCategory === 2}>
          <FlexBox direction="flex-col" className="justify-around items-center">
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
          </FlexBox>
        </ComponentIsVisible>
      </FlexBox>
    </FlexBox>
  );
};

export default HomeTech;
